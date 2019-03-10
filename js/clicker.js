const images = [
    "sticker-1.png", "sticker-2.png", "sticker-3.png"
]

let i = 0

function placeImage(x, y) {
  const nextSrc = images[i]
  
  const img = document.createElement("img")
  img.setAttribute("src", nextSrc)
  img.setAttribute("draggable", "false")
  
  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.width = "25vw"
  img.style.transform = "translate(-50%, -50%) rotate(" + (Math.random() * 120 - 70) + "deg)"
  
  document.body.appendChild(img)
  
  i = i + 1
  if (i >= images.length) {
    i = 0
  }
}

document.addEventListener("click", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})

document.addEventListener("touchend", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})

function removeImages() {
  var images = [].slice.call(document.getElementsByTagName('img'), 0); // get the images as array like object, and turn it into an array using slice

  images.forEach(function(img) { // iterate the images array
    img.parentNode.removeChild(img); // remove the child node via the parent node
  });
}