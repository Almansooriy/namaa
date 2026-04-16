// Live preview for image URL
const input = document.getElementById("imageInput");
const preview = document.getElementById("preview");

if (input && preview) {
  input.addEventListener("input", function() {
    preview.src = input.value;
  });
}