/**
 * Created by Toxni on 10/30/15.
 */


var input = document.getElementById('inputBox');
var footer = document.getElementById('footBar');

function hideFooter() {
    footer.style.visibility = "hidden";

}

function seekFooter() {
    footer.style.visibility = 'visible'
}


function cancelFocus(length) {

    var val = input.value;

    footer.style.visibility = "hidden";


    if((val.length) === length) {

        input.blur();

        setTimeout(seekFooter, 200);
    }

}