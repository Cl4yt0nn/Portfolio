let S = document.getElementById("selected").style;
function tooltip(e) {
    S.top = "81vh";
    if (e != 'tooltip') {
        document.getElementById("selectedSubText").innerHTML = e;
    }
    console.log(S.top)
}
function tooltipLeave() {
    S.top = "100vh";
    console.log(S.top)
}