import {useEffect, useState } from 'react'
import {API_BASE_URL} from '../../constants/apiConstants'

import './canvas.css'
// import {io} from 'socket.io-client'


// const socket = io(api, {
//   transports: ['websocket']
// })

export default function Canvas({color, projectId, save, setSaved, setSaving}) {
  const [pixels, setPixels] = useState([])
  const [newPixels, setNewPixels] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {  
    drawGrid()
    setLoading(true)
    fetchPixels()
    setSaved(true)
    // set websocket to update every pixel drawn by user
    // socket.on('update', val => {
      // May start to be a performance issue as more pixels are added!!!!!!
    //   setValues([...pixels, val])
    // })
    // eslint-disable-next-line
  },[projectId])

  useEffect( () => {
    if(save) {
      setSaving(true)
      savePixels()
    }
  }, [save])

  useEffect( () => {
    // draw each pixel to canvas
    pixels.forEach( (pixel) => {
      draw(pixel)
    })
  }, [pixels])
  
  function capturePixel(e) {    
    // captures position of mouse within canvas

    // multiple of 11
    let x = e.offsetX % 11 === 0 ? e.offsetX : e.offsetX - e.offsetX % 11
    let y = e.offsetXY % 11 === 0 ? e.offsetY : e.offsetY - e.offsetY % 11 

    let pixel = {
      x,y,color
    }

    // draw single pixel from user click
    draw(pixel)
    setNewPixels([...newPixels, pixel])
    setSaved(false)
    // broadcast new pixel
    // socket.emit('update', {x,y,color: color})
  }

  function savePixels() {
    fetch(API_BASE_URL + '/pixels', {
      method: 'POST',
      headers: {
        'Authorization': `${localStorage.getItem('token')}`,
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        _id: projectId,
        pixels: newPixels
      })
    })
    .then( res => res.json())
    .then( json => {
      setSaved(true)
      setSaving(false)
    })
    // let index = pixelExists(pixel)

    // if(index === -1) {
    //   // adds new value if one doesnt exist yet
    //   newValues.push({x : pixel.x, y: pixel.y, color : pixel.color})
    // } else {
    //   newValues[index].color = color
    // }
  }

  function pixelExists(pixel) {
    return pixels.findIndex( val => val.x === pixel.x && val.y === pixel.y)
  }

  function draw(pixel) {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')

    // ctx.clearRect(0,0, canvas.width, canvas.height)
    // draw each pixel to canvas

      ctx.fillStyle = pixel.color 
      ctx.fillRect(pixel.x, pixel.y, 10, 10)

    // set fillstyle back to default, black
    ctx.fillStyle = 'black'
  }

  function drawGrid() {
    let canvas = document.getElementById('canvas')

    let x = 0
    let y = 0
    for(let i = 0; i < 10000; i++){
      draw({x,y,color: '#eee'})
      x += 11
      if(x >= canvas.width){
        y += 11
        x = 0
      }
    }
  }
  function fetchPixels() {
   
    fetch(API_BASE_URL + `/pixels?id=${projectId}`, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(pixels => {
        if(pixels.error){
          console.log('not available')
        }else {
          setNewPixels([])
          setPixels(pixels)
          setLoading(false)
        }
      })
      .catch(err => console.log('Errors:', err))

  }

  return (
    <div>
      <canvas onClick={(e) => capturePixel(e.nativeEvent) } id="canvas" width="1000" height="1000"></canvas>
      { loading && <div className="saving-pixels-container"> 
        <div className="saving"> Fetching... </div>
        <div className="loader"></div> 
        </div>}
      { save && <div className="saving-pixels-container"> 
        <div className="saving"> Saving... </div>
        <div className="loader"></div> 
        </div>}
    </div>
  );
}
