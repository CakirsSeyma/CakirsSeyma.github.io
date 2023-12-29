//* SAAT VE GÜN BİLGİSİNİ ALIP DOM İLE HTML ELEMANLARINA YAZIYORUM

function getCurrentTime() {
    const date = new Date();
    const time = document.getElementById('currentTime');
    const currentDate = document.getElementById('currentDate');
    time.textContent = `TIME: ${date.toLocaleTimeString()}`;
    currentDate.textContent = `DATE: ${date.toLocaleDateString()}`;
}

setInterval(getCurrentTime, 1000);


