/**
 * Created by Demon on 15/10/19.
 */


function checkBoxConfirm() {

    if (document.getElementById('checkBox').checked) {
        window.location.href = "付款页面";
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