/**
 * Created by Demon on 15/9/21.
 */


function crossColor(){
    var a = document.getElementsByTagName('ul');
    for (var i = 0; i < a.length; i++){
        var b = document.getElementsByTagName('li');
        var c = 1;
        for (var j = 0; j < b.length; j++){
            if (b[j].parentNode == a[i]) {
                if (c++ % 2 == 0){
                    b[j].className = "s2";
                }
                else {
                    b[j].className = "s1";
                }
            }
        }
    }
}