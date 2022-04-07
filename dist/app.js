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
// analog clock
const analogHours = document.querySelector('#analogHours');
const analogMinutes = document.querySelector('#analogMinutes');
const analogSeconds = document.querySelector('#analogSeconds');
// digital clock
const digitalHours = document.querySelector("#digitalHours");
const digitalMinutes = document.querySelector("#digitalMinutes");
const digitalSeconds = document.querySelector("#digitalSeconds");
const ampm = document.querySelector("#ampm");
var HoursDisplay;
(function (HoursDisplay) {
    HoursDisplay[HoursDisplay["twelve"] = 0] = "twelve";
    HoursDisplay[HoursDisplay["twentyFour"] = 1] = "twentyFour";
})(HoursDisplay || (HoursDisplay = {}));
let hoursDisplay = HoursDisplay.twentyFour;
ampm.addEventListener('click', () => {
    hoursDisplay = hoursDisplay === HoursDisplay.twelve ? HoursDisplay.twentyFour : HoursDisplay.twelve;
    ampm.innerText = ampm.innerText === '/12h' ? '/24h' : '/12h';
});
setInterval(() => {
    const date = new Date();
    let hh = date.getHours() * 30;
    let min = date.getMinutes() * 6;
    let sec = date.getSeconds() * 6;
    analogHours.style.transform = `rotate(${hh + (min / 12)}deg)`;
    analogMinutes.style.transform = `rotate(${min}deg)`;
    analogSeconds.style.transform = `rotate(${sec}deg)`;
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if (hoursDisplay === HoursDisplay.twelve && h > 12) {
        h = h - 12;
    }
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    digitalHours.innerText = h.toString();
    digitalMinutes.innerText = m.toString();
    digitalSeconds.innerText = s.toString();
}, 1000);
