import {useEffect, useState, useRef} from 'react'

import {io} from 'socket.io-client'
import './App.css';


const api = "http://192.168.1.16:3001"
const socket = io(api, {
  transports: ['websocket']
})

function App() {
  let [values, setValues] = useState([])
  let [color, setColor] = useState('black')
  let canvas = useRef(null);
  let ctx = useRef(null); 

  useEffect(() => {   

    // store current canvas
    canvas.current = document.getElementById('canvas')
    ctx.current = canvas.current.getContext('2d')

    // fetch current state of canvas
    fetchValues()

    // set websocket to update every pixel drawn by user
    socket.on('update', val => {
      setValues([...values, val])
    })

  },[])

  useEffect( () => {
    // draw values to canvas
    draw()



    canvas.current.addEventListener('click', capturePixel)
    return () => {
      canvas.current.removeEventListener('click',capturePixel)
    }
  })
  
  function capturePixel(e) {    
    // captures position of mouse within canvas

    // multiple of 10, no pixel overlap, 10 is also the width of a single pixel (should move up)
    let x = e.offsetX % 10 === 0 ? e.offsetX : e.offsetX - e.offsetX % 10
    let y = e.offsetXY % 10 === 0 ? e.offsetY : e.offsetY - e.offsetY % 10 

    // draw single pixel from user click
    ctx.current.fillStyle = color
    ctx.current.fillRect(x, y, 10, 10)

    // broadcast new pixel
    socket.emit('update', {x,y,color: color})
  }

  function draw() {
    // draw each pixel to canvas
    values.forEach( ({x,y,color}) => {
      ctx.current.fillStyle = color 
      ctx.current.fillRect(x, y, 10, 10)
    })
    // set fillstyle back to default, black
    ctx.current.fillStyle = 'black'
  }
  
  async function fetchValues() {
    await fetch(api + '/pixels')
      .then(res => res.json())
      .then(pixels => setValues(pixels))
      .catch(err => console.log('Errors:', err))
  }

  function handleKeyEvent(e) {
    setColor(e.target.value)
  }
  return (
    <div className="App">
      <div id="settings">
        <h2> Settings </h2>
        <label htmlFor="color"> Color: </label>
        <input name="color" type="text" value={color} onChange={handleKeyEvent}></input>
        
       </div>
      <canvas id="canvas" width="1000" height="1000"></canvas>
    </div>
  );
}

export default App;
