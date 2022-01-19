var photosource;
var previewpage;

function showPreview(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.querySelector("img");
    previewpage = preview;
    preview.src = src;
    preview.style.display = "block";
    photosource = src;
  }
}

/*function showAR() {
  var i = document.querySelector("img");
  i.classList.remove("def");
  i.classList.toggle("sub-cat1");
}

*/
const buttonShow = document.querySelector(".btn1");

buttonShow.addEventListener("click", () => {
  let selectAll = document.querySelectorAll("input[type = checkbox]");

  for (var i = 0; i < selectAll.length; i++) {
    selectAll[i].checked = true;
  }
});

const buttonHide = document.querySelector(".btn2");

buttonHide.addEventListener("click", () => {
  let deselectAll = document.querySelectorAll("input[type = checkbox]");

  for (var i = 0; i < deselectAll.length; i++) {
    deselectAll[i].checked = false;
  }
});

function catEn1() {
  let ctg = document.querySelectorAll(".cat1");
  console.log(ctg);
  let checkState = ctg[0].checked;
  if (checkState == true) {
    ctg[1].checked = true;
    ctg[2].checked = true;
  } else if (checkState == false) {
    ctg[1].checked = false;
    ctg[2].checked = false;
  }
}

function catEn2() {
  let ctg = document.querySelectorAll(".cat2");
  console.log(ctg);
  let checkState = ctg[0].checked;
  if (checkState == true) {
    ctg[1].checked = true;
    ctg[2].checked = true;
  } else if (checkState == false) {
    ctg[1].checked = false;
    ctg[2].checked = false;
  }
}
