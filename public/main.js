const quarters = ["1","2","3","4","OT"]

function nextQuarter(el){
  const currentQuarter = el.querySelector("p")
  const quarterIndex = quarters.indexOf(currentQuarter.innerText)
  if(quarterIndex === quarters.length - 1) { return }
  currentQuarter.innerText = quarters[quarterIndex+1] 
}

function bindScoreboard(el){
  console.log("scoreboard")
  const score = el.querySelector(".top p"),
        name = el.querySelector(".top h3")
                  
  el.querySelector(".middle button").addEventListener("click", function(){
    console.log("clicked")
    const newName = el.querySelector(".myUpdate").value
    name.innerText = newName
  })

  el.querySelector(".plusone").addEventListener("click", function(){
    console.log("plusone clicked")
    const oldScore = Number(score.innerText)
    score.innerText = oldScore + 1
  })

  el.querySelector(".minusone").addEventListener("click", function(){
    console.log("minusone clicked")
    const oldScore = Number(score.innerText)
    if(oldScore === 0) { return }
    score.innerText = oldScore - 1
  })
}

function bindQuarters(el){
  console.log("quarters")
  const currentQuarter = el.querySelector("p")
  
  el.querySelector(".reset").addEventListener("click", function(){
    console.log("clicked")
    currentQuarter.innerText = quarters[0]
  })
   
  el.querySelector(".next").addEventListener("click", function(){
    nextQuarter(el)
  })

}


function runTimer(){
  console.log("comic")
  const minutes = document.querySelector(".minutes"),
        seconds = document.querySelector(".seconds")
  let currentSecond = Number(seconds.innerText) + 1
  let currentMinute 
  if(currentSecond === 60){
    currentMinute = Number(minutes.innerText) + 1
    if(currentMinute<10){
      currentMinute = "0" + currentMinute
    }
    minutes.innerText = currentMinute
    currentSecond = 0
  }
  if(currentSecond<10){
    currentSecond = "0" + currentSecond
  }
  seconds.innerText = currentSecond 
  if(currentMinute === "02"){
    seconds.innerText = "00"
    minutes.innerText = "00"
    const quarters = document.querySelector(".quarters")
    nextQuarter(quarters)
  }
}
document.addEventListener('DOMContentLoaded', function(){
  const els = document.querySelectorAll(".scoreboard")
  for(var i=0; i<els.length; i++){
    bindScoreboard(els[i])
  }

  const quarters = document.querySelector(".quarters")
  bindQuarters(quarters)

  setInterval(runTimer, 1000)
})
