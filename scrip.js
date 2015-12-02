scripNum = 5;
window.onload = res;
window.onresize = res;
function res()
{
    for(var i = 1; i <= scripNum; i++)
    {
        document.getElementById(("sec" + i.toString())).style.height = ((window.innerHeight).toString() + "px");
    }
    document.getElementById("pan1").style.left = (((window.innerWidth / 2)  - (parseInt(document.getElementById("pan1").style.width) / 2)).toString() + "px");
    alert(document.getElementById("sec2"),height().toString());
}
