/**
 * Created by Demon on 15/9/22.
 */

function getWeek(y, m, d) {
    var _int = parseInt,
        c = _int(y/100);
    y = y.toString().substring(2, 4);
    y = _int(y, 10);
    if(m === 1) {
        m = 13;
        y--;
    } else if(m === 2) {
        m = 14;
        y--;
    };

    var w = y + _int(y/4) + _int(c/4) - 2*c + _int(26*(m+1)/10) + d - 1;
    w = w%7;

    return w >= 0 ? w : w+7;
}


function drop(e) {
    document.getElementById('mask').style.display = "block";
    document.getElementById(e).style.display = "block";
}

function hide() {
    document.getElementById('mask').style.display = "none";
    document.getElementById('yearSelector').style.display = "none";
    document.getElementById('timeSelector').style.display = "none";
}


function changeValue(e, ele) {
    var a = e.innerText;


    document.getElementById(ele).innerText = a;
    document.getElementById(ele).style.backgroundColor = "#79cdcd";
    document.getElementById(ele).style.borderColor = "#79cdcd";

    document.getElementById('finalTimeText').innerText = document.getElementById('finalTimeText').innerText.substr(0, 16);


    if (ele === 'year') {
        var b = document.getElementById('finalTimeText').innerText.substr(10);
        document.getElementById('finalTimeText').innerText = a + b;
    }

    else {
        var g = document.getElementById('finalTimeText').innerText.substr(0, 11);
        document.getElementById('finalTimeText').innerText = g + a;
    }

    var yy = parseInt(document.getElementById('finalTimeText').innerText.substr(0, 4));
    var mm = parseInt(document.getElementById('finalTimeText').innerText.substr(5, 2));
    var dd = parseInt(document.getElementById('finalTimeText').innerText.substr(8, 2));
    var week = "星期" + "日一二三四五六".charAt(getWeek(yy, mm, dd));

    document.getElementById('finalTimeText').innerText = document.getElementById('finalTimeText').innerText + week;

}


//ues it in order_01

function changeValueOnly(e, ele) {
    var b = e.innerText;
    document.getElementById(ele).innerText = b;
}