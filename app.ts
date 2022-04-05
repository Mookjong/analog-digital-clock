const clock = document.getElementById('clock')

for(let i=1; i<=12; i++){
    const span = document.createElement('span')
    const spanInnerHtml = document.createElement('b')
    spanInnerHtml.textContent = i.toString()
    span.appendChild(spanInnerHtml)
    span.style.setProperty('--i', i.toString())
    clock?.appendChild(span)
}