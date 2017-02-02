function startTime(m,s) {
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
