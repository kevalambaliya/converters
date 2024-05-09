function metof(){
    let meter = parseInt(document.getElementById("inp-meter").value);
    let mtof = meter * 3.28;
    document.getElementById("op-foot").innerHTML = `foot : ${mtof}`;
}
function ftom(){
    let foot = parseFloat(document.getElementById("inp-foot").value);
    let ftom = foot / 3.28;
    document.getElementById("op-meter").innerHTML = `meter : ${ftom}`;
}
function metokm(){
    let meter = parseFloat(document.getElementById("inp-meter-km").value);
    let mtok = meter / 1000;
    document.getElementById("op-km").innerHTML = `km : ${mtok}`;
}
function ktofe(){
    let km = parseFloat(document.getElementById("inp-km-meter").value);
    let ktom = km * 3281;
    document.getElementById("op-meter-km").innerHTML = `meter : ${ktom}`;
}
// currency//
function itoj(){
    let inr = parseInt(document.getElementById("inp-ind").value);
    let intoj = inr * 1.859;
    document.getElementById("op-jpy").innerHTML = `rupees : ${intoj}`;
}
function ftome(){
    let np = parseFloat(document.getElementById("inp-ind-npl").value);
    let iton = np * 1.6012;
    document.getElementById("op-npl").innerHTML = `rupees : ${iton}`;
}
function srltous(){
    let rp = parseFloat(document.getElementById("inp-srl-us").value);
    let srltou = rp * 0.0033;
    document.getElementById("op-us").innerHTML = `rupees : ${srltou}`;
}
function astocns(){
    let as = parseFloat(document.getElementById("inp-aus-chns").value);
    let austoch = as * 4.7523;
    document.getElementById("op-chns").innerHTML = `rupees : ${austoch}`;
}
// currency//
// celsius
function ctof(){
    let cel = parseInt(document.getElementById("inp-celsius").value);
    let cetof = cel * 1.8 + 32;
    document.getElementById("op-frn").innerHTML = `feranhiet : ${cetof}`;
}
function ftoc(){
    let fal = parseInt(document.getElementById("inp-fal").value); 
    let ftoc = (fal - 32) / 1.8;
    document.getElementById("op-cal").innerHTML = `Celsius : ${ftoc}`;
}
function ktof() {
    let kel = parseFloat(document.getElementById("inp-kel").value);
    let ktof =kel * 9/5 - 459.67;

    document.getElementById("op-fe").innerHTML = `Fahrenheit : ${ktof}`;
}
function ctok() {
    let cal = parseFloat(document.getElementById("inp-ce").value);
    let ctok = cal + 274.15;

    document.getElementById("op-ke").innerHTML = `kelvin : ${ctok}`;
}
// data//
function ktom(){
    let kb = parseInt(document.getElementById("inp-kb").value); 
    let ktom = kb / 1024;
    document.getElementById("op-mb").innerHTML = `MB : ${ktom}`;
}
function mtog(){
    let mb = parseInt(document.getElementById("inp-mb").value); 
    let mtog = mb / 1024 ;
    document.getElementById("op-gb").innerHTML = `GB : ${mtog}`;
}