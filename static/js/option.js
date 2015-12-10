/**
 * Created by Demon on 15/9/26.
 */


function closeMask() {
    document.getElementById('closeMask').style.display = "none";
    document.getElementById('detail').style.display = "none";
    document.getElementById('selfBox').style.display = "none";
    document.getElementById('selfBtn').style.display = "none";
}

function openMask() {
    document.getElementById('closeMask').style.display = "block";
    document.getElementById('detail').style.display = "block";
}

function openSelf() {
    document.getElementById('closeMask').style.display = "block";
    document.getElementById('selfBox').style.display = "block";
    document.getElementById('selfBtn').style.display = "block";
}