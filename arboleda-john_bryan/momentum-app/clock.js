function startTime() {
    var today = new Date();
    var h = today.getHours();
    let ampm = h >= 12 ? "PM" : "AM";
    var m = today.getMinutes();
    const datestr = today.toDateString();
    h = checkTime(h);
    h = h % 12;
    h = h ? h : 12;
    m = checkTime(m);
    document.querySelector('h1').innerHTML = 
    h + ":" + m + " " + ampm;
    document.querySelector('h3').innerHTML = datestr;
    var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}
startTime();

