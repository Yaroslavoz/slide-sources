const upBtn = document.querySelector('.up-button')

const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const container = document.querySelector('.container')

const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCount -1) *100}vh`

let activeSlide = 0

upBtn.addEventListener('click', ()=> {
  changeSlide('up')
  
})

downBtn.addEventListener('click', ()=> {
  changeSlide('down')
})

function changeSlide(dir){
  if (dir === 'up'){
    activeSlide++
    if(activeSlide === slidesCount){
      activeSlide = 0
    }
  } else if (dir === 'down'){
    activeSlide--
    if(activeSlide < 0){
      activeSlide = slidesCount - 1
    }
  }

  const height = container.clientHeight
  mainSlide.style.transform = `translateY(-${activeSlide * height}px)` 

  sidebar.style.transform = `translateY(${activeSlide * height}px)`
}