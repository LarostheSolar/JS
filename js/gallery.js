
function upDate(previewPic){
        document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
        document.getElementById("image-text").innerHTML = previewPic.alt;
	}

function unDo(){
        document.getElementById("image").style.backgroundImage = "url(img/EnterTheGungeon.jpg)";
        document.getElementById("image-text").innerHTML = "Get ready to Enter The Gungeon!";
	}