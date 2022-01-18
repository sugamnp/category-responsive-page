var photosource;
var previewpage;


function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("image-preview__image");
    previewpage = preview;
    preview.src = src;
    preview.style.display = "block";
    photosource = src;
  }
}
