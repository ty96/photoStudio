/**
 * Created by Demon on 15/10/18.
 */



function confirmNum() {
    var mobile = document.getElementById('inputBox').value;
    var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
    if (reg.test(mobile)) {
        window.location.href = "order_confirm.html";
    }
    else{
        document.getElementById('deleteAlert').style.display = "block";
        document.getElementById('mask').style.display = "block";
    }
}

function hideAlert() {
    document.getElementById('deleteAlert').style.display = "none";
    document.getElementById('mask').style.display = "none";
}
