var orig_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxys `1234567890-=~!@#$%^&*()_+[]{}\\|\":;'<>?,./"
var key = "-tuxq2^$p}J!,cM4>DG78faAsU Ed\'.ZC`1Xn5ySNeRi]K~BbT|\\IF_/[@+j?k3<\"g9)=*mPrO#l:(0hwL%&o;VHv6{YQWs"

function decode() {
    var input = $("#cipher").val();
    var res = "";
    for (i = 0; i < input.length; i++) {
        var char = ""
        char_loc = key.indexOf(input.charAt(i));
        console.log(char_loc);
        if (char_loc == -1) {
            char = input.charAt(i);
        } else {
            char = orig_chars.charAt(char_loc);
        }
        res = res + char;
    }
    console.log(res);
    $("#cleartext").val(res);
}

function encode() {
    var input = $("#cleartext").val();
    var res = "";
    for (i = 0; i < input.length; i++) {
        var char = ""
        char_loc = orig_chars.indexOf(input.charAt(i));
        console.log(char_loc);
        if (char_loc == -1) {
            char = input.charAt(i);
        } else {
            char = key.charAt(char_loc);
        }
        res = res + char;
    }
    console.log(res);
    $("#cipher").val(res);
}

$(document).ready(function() {

});