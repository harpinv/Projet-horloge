let second = document.getElementById('second');
let minute = document.getElementById('minute');
let heure = document.getElementById('heure');

let compte = new Date();
for(let i = 0; i < compte.getSeconds(); i++) {
    second.style.transformOrigin += "center bottom";
    second.style.transform += "rotate(6deg)";
}

for(let i = 0; i < compte.getMinutes(); i++) {
    minute.style.transformOrigin += "center bottom";
    minute.style.transform += "rotate(6deg)";
}

for(let i = 0; i < compte.getHours(); i++) {
    heure.style.transformOrigin += "center bottom";
    heure.style.transform += "rotate(30deg)";
}

let compte1 = 0;
let compte2 = 0;
let compte3 = 0;

setInterval(function () {
    second.style.transformOrigin += "center bottom";
    second.style.transform += "rotate(6deg)";
    compte1++;
}, 1000);

setInterval(function () {
    minute.style.transformOrigin += "center bottom";
    minute.style.transform += "rotate(6deg)";
    compte2++;
}, 60000);

setInterval(function () {
    heure.style.transformOrigin += "center bottom";
    heure.style.transform += "rotate(30deg)";
    compte3++;
}, 3600000);

