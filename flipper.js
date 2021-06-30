let nappi = document.getElementById("nappi");
let sivunväri = document.querySelector(".sivunväri");
let RGBarr = [];
let RGB = 0;
nappi.addEventListener("click", function() {
    for (var i = 0; i < 3; i++) {
        RGB = Math.floor((Math.random() * 255) + 1);
        RGBarr[i] = RGB;
    }
    let väri = 'rgb('+ RGBarr.join(", ") + ')';
    let tyylittely = RGBarr.join(", ");
    document.body.style.backgroundColor = väri;
    // console.log(väri);
    sivunväri.textContent = tyylittely;
});