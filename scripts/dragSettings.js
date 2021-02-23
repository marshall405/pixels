const settings = document.getElementById('settings')
const heading = document.querySelector('#settings h2')


settings.addEventListener('mouseenter', () => settings.classList.add('show'))
settings.addEventListener('mouseleave', () => {
    settings.classList.remove('show')
})

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;



heading.addEventListener("touchstart", dragStart, false);
heading.addEventListener("touchend", dragEnd, false);
heading.addEventListener("touchmove", drag, false);

heading.addEventListener('mousedown', dragStart, false)
heading.addEventListener('mouseup', dragEnd, false)
heading.addEventListener('mousemove', drag, false)

function dragStart(e) {
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    active = true;

  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(e) {
    if (active) {
    
      e.preventDefault();
    
      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, settings);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
