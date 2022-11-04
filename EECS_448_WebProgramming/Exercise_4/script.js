var button = document.getElementById("button");
var paragraph = document.getElementById("text");
var inputs = document.getElementsByTagName("input");
var bordercurr = document.getElementById("current-border");
var bgcurr = document.getElementById("current-bg");

var borderRGB = "rgb(0,0,0)";
var borderWidth = "1px";
var bgRGB = "rgb(255,255,255)";


function checkRGB(inputVal){
    if(inputVal < 0 || inputVal > 255){
        return false;
    }
    else{
        return true;
    }
}

function getInput(){
    var temp = [];
    temp.push(parseInt(document.getElementById("red-border").value));
    temp.push(parseInt(document.getElementById("green-border").value));
    temp.push(parseInt(document.getElementById("blue-border").value));
    temp.push(parseInt(document.getElementById("width-border").value));
    
    temp.push(parseInt(document.getElementById("red-bg").value));
    temp.push(parseInt(document.getElementById("green-bg").value));
    temp.push(parseInt(document.getElementById("blue-bg").value));

    // Check for valid inputs
    for(const i in temp){
        console.log(temp[i]);
        if(isNaN(temp[i])){
            temp[i] = 0;
        }
        if(i != 3){
            if(checkRGB(temp[i])){
                alert("Input values cannot be empty!")
                return;
            }
            else{
                alert("RGB value must be between 0-255!");
                return;
            }
        }
    }

    borderRGB = "rgb(" + temp[0] + "," + temp[1] + "," + temp[2] + ")";
    borderWidth = temp[3] + "px";
    bgRGB = "rgb(" + temp[4] + "," + temp[5] + "," + temp[6] + ")";

    paragraph.style.borderColor = borderRGB;
    paragraph.style.borderWidth = borderWidth;
    paragraph.style.backgroundColor = bgRGB;

    for(const i in inputs){
        inputs[i].value = "";
    }

    bordercurr.innerHTML = "border: " + borderRGB + ", " + borderWidth;
    bgcurr.innerHTML = "backgroud: " + bgRGB;
}

function reset(){
    borderRGB = "rgb(0,0,0)";
    borderWidth = "1px";
    bgRGB = "rgb(255,255,255)";

    paragraph.style.borderColor = borderRGB;
    paragraph.style.borderWidth = borderWidth;
    paragraph.style.backgroundColor = bgRGB;

    for(const i in inputs){
        inputs[i].value = "";
    }
}