function makeStory() {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let value3 = document.getElementById("value3").value;
    let value4 = document.getElementById("value4").value;
    let value5 = document.getElementById("value5").value;
    let value6 = document.getElementById("value6").value;
    let value7 = document.getElementById("value7").value;

    document.getElementById("text-value1").innerText = value1;
    document.getElementById("text-value2").innerText = value2;
    document.getElementById("text-value3").innerText = value3;
    document.getElementById("text-value4").innerText = value4;
    document.getElementById("text-value5").innerText = value5;
    document.getElementById("text-value6").innerText = value6;
    document.getElementById("text-value7").innerText = value7;

   
    if(value1 == ""  || value2 == "" || value3 == "" || value4 == "" || value5 == "" || value6 == "" || value7 == ""){
        alert("All information is required! Please check again.")
        document.getElementById("text").style.display = "none"
        
    } else {
        document.getElementById("text").style.display = "block"
    }
}
