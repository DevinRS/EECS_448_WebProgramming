var currentImage = 1;
var img = document.getElementById('img');

function previous(){
    currentImage = currentImage-1;

    if(currentImage == 0){
        currentImage = 5;
    }

    imgSrc = 'resources/image' + currentImage + '.jpg';
    img.src = imgSrc;
    img.alt = 'image' + currentImage;
}

function next(){
    currentImage = currentImage+1;

    if(currentImage == 6){
        currentImage = 1;
    }

    imgSrc = 'resources/image' + currentImage + '.jpg';
    img.src = imgSrc;
    img.alt = 'image' + currentImage;
}