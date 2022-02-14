getName();
function getName() {
    let person = prompt("lütfen Adınızı Giriniz", "Ada");
    if (person != null) {
        document.getElementById("myName").innerHTML = person ;
    }
}

function getDayString(dayNumber) {
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    return days[dayNumber];
}

function writeTime() {
    var today = new Date();
    let currentTimeAndDate;

    const options = {
        hour12: false
    }
    currentTimeAndDate = `${today.toLocaleTimeString('tr-TR', options)} ${getDayString(today.getDay())}`;

    return currentTimeAndDate

}

function showTime() {
    document.getElementById('myClock').innerHTML = writeTime();
}

setInterval(showTime);