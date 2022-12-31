const christmasDay = new Date('Jan 01, 2023 00:00:00');
const elment = document.getElementById('textVoeux');
let idTimer = setInterval(() => setCountDown(christmasDay), 1000);
const setCountDown = (countingDownTime) => {
    let now = new Date();
    var distance = countingDownTime - now;
    if (distance < 0) {
        clearInterval(idTimer)
        document.querySelector('#days').innerHTML = "0";
        document.querySelector('#hours').innerHTML = "0";
        document.querySelector('#minutes').innerHTML = "0";
        document.querySelector('#secondes').innerHTML = "0";
        document.querySelector('.left-menu h1').innerHTML = "Heureuse année 2023 !"
        document.querySelector('#textVoeux').innerHTML = "Tous mes vœux de santé et de bonheur pour cette nouvelle année 2023. Je vous souhaite le meilleur, ainsi qu'à vos proches et une pleine réussite professionnelle. Que tous vos projets se réalisent."
    } else {
        let timeRemainling = countingDownTime - now;
        let secondeAbsolute = Math.floor(timeRemainling / 1000);
        let minuteAbsolute = Math.floor(timeRemainling / (1000 * 60));
        let hoursAbsolute = Math.floor(timeRemainling / (1000 * 60 * 60));
        let daysAbsolute = Math.floor(timeRemainling / (1000 * 60 * 60 * 24));

        let days = daysAbsolute;
        let hours = hoursAbsolute - (daysAbsolute * 24);
        let minute = minuteAbsolute - (hoursAbsolute * 60);
        let seconde = secondeAbsolute - (minuteAbsolute * 60);
        document.querySelector('#days').innerHTML = days;
        document.querySelector('#hours').innerHTML = hours;
        document.querySelector('#minutes').innerHTML = minute;
        document.querySelector('#secondes').innerHTML = seconde;

    }

}

window.addEventListener('load', () => {
    setCountDown(christmasDay)
    document.querySelector('.animation-welcome').classList.add('animation-welcome-hide')
})
