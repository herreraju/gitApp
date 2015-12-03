scripNum = 5;
window.onload = res;
window.onresize = res;
function res()
{
    for(var i = 0; i < document.getElementsByClassName("sec").length; i++)
    {
        document.getElementsByClassName("sec")[i].style.height = ((window.innerHeight).toString() + "px");
    }
    //document.getElementById("pan1").style.left = (((window.innerWidth / 2)  - (parseInt(document.getElementById("pan1").style.width) / 2)).toString() + "px");
}
