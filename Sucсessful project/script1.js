'use strict';


let rs = document.getElementById('btt2'),
    bt1=document.getElementById('bt0'),
    bt2=document.getElementById('bt2'),
    bt3=document.getElementById('bt5');

let inp1 = document.getElementsByClassName('inp1');

inp1.oninput = function () {
    if (inp1.value.length>2) {
        document.getElementsByClassName("h2").innerHTML = inp1.value;
    }
}

rs.onclick = function () {
    bt1.style.display = 'block';
    bt2.style.display = 'block';
    bt3.style.display = 'none';
}