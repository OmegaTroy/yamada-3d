const $poster = document.getElementById('pos')
const height = $poster.clientHeight;
const width = $poster.clientWidth;

$poster.addEventListener('mousemove',(event)=>{
  const {layerX,layerY} = event;
  const yRotation = ((layerX - width / 2) / width) * 20
  
  const xRotation = ((layerY - height / 2) / height) * 20

  const string = `
  perspective(500px)
  scale(1.1)
  rotateX(${xRotation}deg)
  rotateY(${yRotation}deg)
  `
  $poster.style.transform = string
})

$poster.addEventListener('mouseout',()=>{
  const string = `
  perspective(500px)
  scale(1)
  rotateX(0)
  rotateY(0)
  `
  $poster.style.transform = string
})
