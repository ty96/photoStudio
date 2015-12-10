/**
 * Created by Demon on 15/9/21.
 */


//  aa bb cc is some hidden counter in self-select menu


function plusOne(e) {
    var a = e.previousElementSibling.innerText;
    var b = a.replace(/[^0-9]/ig,"");
    var c = parseInt(b) + 1;
    e.previousElementSibling.innerText = '×' + c;
}

function minusOne(e) {

    var a = e.nextElementSibling.innerText;
    var b = a.replace(/[^0-9]/ig,"");

    if (b <= 1) {


        document.getElementById('deleteAlert').style.display = "block";
        document.getElementById('mask').style.display = "block";
        document.getElementById('deleteBtnRight').onclick = function confirmIt() {
            e.parentNode.parentNode.removeChild(e.parentNode);
            crossColor();
            document.getElementById('deleteAlert').style.display = "none";
            document.getElementById('mask').style.display = "none";
        };

        document.getElementById('deleteBtnLeft').onclick = function cancelIt() {
            document.getElementById('deleteAlert').style.display = "none";
            document.getElementById('mask').style.display = "none";
        };


    }
    else {
        var c = parseInt(b) - 1;
        e.nextElementSibling.innerText = '×' + c;
    }
}
