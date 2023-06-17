function animateProgressBar(progress){
  let progressBar = document.querySelector('.progress-fill')
  let progressText = document.querySelector('.progress-text')

  progressBar.style.width = progress + '%'
  progressText.textContent = progress + '%'
}

let currentProgress = 0 
let interval = setInterval(function(){
  animateProgressBar(currentProgress)
  currentProgress++

  if(currentProgress > 100){
    clearInterval(interval)
  }
},50)