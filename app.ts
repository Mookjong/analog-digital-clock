const clock = document.getElementById('clock')

type TimeDigit = number | string

for(let i=1; i<=12; i++){
    const span = document.createElement('span')
    const spanInnerHtml = document.createElement('b')
    spanInnerHtml.textContent = i.toString()
    span.appendChild(spanInnerHtml)
    span.style.setProperty('--i', i.toString())
    clock?.appendChild(span)
}

// analog clock
const analogHours = document.querySelector('#analogHours') as HTMLDivElement
const analogMinutes = document.querySelector('#analogMinutes') as HTMLDivElement
const analogSeconds = document.querySelector('#analogSeconds') as HTMLDivElement

// digital clock
const digitalHours = document.querySelector("#digitalHours") as HTMLDivElement
const digitalMinutes = document.querySelector("#digitalMinutes") as HTMLDivElement
const digitalSeconds = document.querySelector("#digitalSeconds") as HTMLDivElement
const ampm = document.querySelector("#ampm") as HTMLDivElement

enum HoursDisplay{
    twelve,
    twentyFour
}

let hoursDisplay = HoursDisplay.twentyFour

ampm.addEventListener('click', ()=>{
    hoursDisplay = hoursDisplay === HoursDisplay.twelve ? HoursDisplay.twentyFour : HoursDisplay.twelve
    ampm.innerText = ampm.innerText === '/12h' ? '/24h' : '/12h'
})

setInterval(()=>{
    const date  = new Date()
    let hh = date.getHours() * 30
    let min = date.getMinutes() * 6
    let sec = date.getSeconds() * 6

    analogHours.style.transform = `rotate(${hh+(min/12)}deg)`
    analogMinutes.style.transform = `rotate(${min}deg)`
    analogSeconds.style.transform = `rotate(${sec}deg)`

    let h: TimeDigit = date.getHours()
    let m: TimeDigit = date.getMinutes()
    let s: TimeDigit = date.getSeconds()

    if(hoursDisplay === HoursDisplay.twelve && h > 12){
        h = h - 12
    }

    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s

    digitalHours.innerText = h.toString()
    digitalMinutes.innerText = m.toString()
    digitalSeconds.innerText = s.toString()

    
}, 1000)