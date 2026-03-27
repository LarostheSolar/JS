
function updateMainImage(previewPic){
    document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
    document.getElementById("image-text").innerHTML = previewPic.alt;
}

function resetMainImage(){
    document.getElementById("image").style.backgroundImage = "url(img/EnterTheGungeon.jpg)";
    document.getElementById("image-text").innerHTML = "Get ready to Enter The Gungeon!";
}

function initGalleryKeyboardFocus() {
    const previews = document.querySelectorAll("img.preview");

    previews.forEach((preview) => {
        preview.setAttribute("tabindex", "0");

        preview.addEventListener("focus", () => {
            updateMainImage(preview);
        });

        preview.addEventListener("blur", () => {
            resetMainImage();
        });

        preview.addEventListener("mouseover", () => {
            updateMainImage(preview);
        });

        preview.addEventListener("mouseout", () => {
            resetMainImage();
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGalleryKeyboardFocus);
} else {
    initGalleryKeyboardFocus();
}
