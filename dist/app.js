"use strict";
const clock = document.getElementById('clock');
for (let i = 1; i <= 12; i++) {
    const span = document.createElement('span');
    const spanInnerHtml = document.createElement('b');
    spanInnerHtml.textContent = i.toString();
    span.appendChild(spanInnerHtml);
    span.style.setProperty('--i', i.toString());
    clock === null || clock === void 0 ? void 0 : clock.appendChild(span);
}
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const secondes = document.querySelector('#secondes');
setInterval(() => {
    const date = new Date();
    let hh = date.getHours() * 30;
    let min = date.getMinutes() * 6;
    let sec = date.getSeconds() * 6;
    hours.style.transform = `rotate(${hh + (min / 12)}deg)`;
    minutes.style.transform = `rotate(${min}deg)`;
    secondes.style.transform = `rotate(${sec}deg)`;
}, 1000);
