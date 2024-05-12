"use strict";

function project(a) {
    if(a == 0) {
        document.getElementById("p1").innerHTML = `
        <div class ="rounded img_prj1">
            <h2>Sharix Django Sharix project:</h2>
            <img src="img/sharix.png" width="720px" heigth="480px"> </img>
        </div>
        `;
    } else if(a == 1) {
        document.getElementById("p1").innerHTML = `
        <div class ="rounded img_prj1">
            <h2>Yandex main page:</h2>
            <img src="img/yandex.png" width="720px" heigth="480px"> </img>
        </div>
        `;
    } else if(a == 2) {
        document.getElementById("p1").innerHTML = `
        <div class ="rounded img_prj1">
            <h2>Google main page:</h2>
            <img src="img/google.png" width="720px" heigth="480px"> </img>
        </div>
        `;
    }
}

document.getElementById("range1").addEventListener("change", function() {
    if (this.value == 1) {
        project(0);
    } else if(this.value == 2) {
        project(1);
    } else if(this.value == 3) {
        project(2);
    }
  });