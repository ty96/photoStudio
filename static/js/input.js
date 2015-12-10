/**
 * Created by Toxni on 10/30/15.
 */



function hideFooter() {
    var input = document.getElementById('inputBox');
    var footer = document.getElementById('footBar');
    footer.style.visibility = "hidden";

    //input.value = "";
}

function seekFooter() {
    var footer = document.getElementById('footBar');
    footer.style.visibility = 'visible'
}


function cancelFocus() {

    var input = document.getElementById('inputBox');
    var footer = document.getElementById('footBar');

    var val = input.value;

    footer.style.visibility = "hidden";


    if((val.length) === 1) {

        confirmed();

        input.blur();

        setTimeout(seekFooter, 200);
    }

}

function cancelTelFocus() {

    var input = document.getElementById('inputBox');
    var footer = document.getElementById('footBar');

    var val = input.value;

    footer.style.visibility = "hidden";

    if ((val.length) === 11) {

        input.blur();

        setTimeout(seekFooter, 200);
    }
}