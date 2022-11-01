function validate(){
    var input1 = document.getElementById("password1").value;
    var input2 = document.getElementById("password2").value;
    if(input1 != input2){
        alert("Password entered don't match!");
        return;
    }
    if(input1.length < 8){
        alert("Password must be at least 8 characters long!");
        return;
    }
}