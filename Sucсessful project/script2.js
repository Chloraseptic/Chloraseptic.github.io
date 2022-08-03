"use strict"

let rs = document.getElementById('hy');

let ip1 = document.getElementById('ip1'),
    sp1 = document.getElementById('sp1'),
    i1 = document.getElementById('i1'),
    i2 = document.getElementById('i2');

ip1.oninput = function () {
    if (ip1.value.length > 1 && ip1.value.length < 31) {
        ip1.style.border = '2px solid green';
        sp1.style.color = 'green';
        document.getElementById("sp1").innerHTML = "Düzgündür";
        i1.style.display = 'block';
        i2.style.display = 'none';
        rs.style.display = 'block';
    } else {
        ip1.style.border = '1px solid red';
        sp1.style.color = 'red';
        document.getElementById("sp1").innerHTML = "Boş qoymayın. Minimum2, maksimum 30 simvol ola bilər";
        i1.style.display = 'none';
        i2.style.display = 'block';
        rs.style.display = 'none';
    }
}

let ip2 = document.getElementById('ip2'),
    sp2 = document.getElementById('sp2'),
    i3 = document.getElementById('i3'),
    i4 = document.getElementById('i4');

ip2.oninput = function () {
    if (ip2.value.length == 12) {
        ip2.style.border = '2px solid green';
        sp2.style.color = 'green';
        document.getElementById("sp2").innerHTML = "Düzgündür";
        i3.style.display = 'block';
        i4.style.display = 'none';
        rs.style.display = 'block';
    } else {
        ip2.style.border = '2px solid red';
        sp2.style.color = 'red';
        document.getElementById("sp2").innerHTML = "Telefon düzgün formada yazılmayıb. Bu (000-000-0000) formada yazılmalıdır";
        i3.style.display = 'none';
        i4.style.display = 'block';
        rs.style.display = 'none';
    }
}

let ip3 = document.getElementById('ip3'),
    sp3 = document.getElementById('sp3'),
    i5 = document.getElementById('i5'),
    i6 = document.getElementById('i6');

    ip3.oninput = function () {
        if (ip3.value.length > 1 && ip3.value.length < 31) {
            ip3.style.border = '2px solid green';
            sp3.style.color = 'green';
            document.getElementById("sp3").innerHTML = "Düzgündür";
            i5.style.display = 'block';
            i6.style.display = 'none';
            rs.style.display = 'block';
        } else {
            ip3.style.border = '2px solid red';
            sp3.style.color = 'red';
            document.getElementById("sp3").innerHTML = "Boş qoymayın. Minimum2, maksimum 30 simvol ola bilər";
            i5.style.display = 'none';
            i6.style.display = 'block';
            rs.style.display = 'none';
        }
    }

let ip4 = document.getElementById('ip4'),
    sp4 = document.getElementById('sp4'),
    i7 = document.getElementById('i7'),
    i8 = document.getElementById('i8');

ip4.oninput = function () {
    if (ip4.value.length > 1 && ip4.value.length < 31) {
        ip4.style.border = '2px solid green';
        sp4.style.color = 'green';
        document.getElementById("sp4").innerHTML = "Düzgündür";
        sp4.style.value = 'Düzgündür';
        i7.style.display = 'block';
        i8.style.display = 'none';
        rs.style.display = 'block';
    } else {
        ip4.style.border = '2px solid red';
        sp4.style.color = 'red';
        document.getElementById("sp4").innerHTML = "Boş qoymayın. Minimum 2, Maksimum 30 simvol ola bilər";
        i7.style.display = 'none';
        i8.style.display = 'block';
        rs.style.display = 'none';
    }
}

rs.onclick = function () {
    alert('İstifadəçi uğurla yaradıldı')
    localStorage.setItem('username', ip3.value);
    localStorage.setItem('password', ip4.value);
}