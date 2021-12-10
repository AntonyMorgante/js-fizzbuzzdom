const msCont = document.getElementById("container");

for (i = 1; i <= 100; i++){
    var msCommon = document.createElement("msCommon")
    msCommon.classList.add("square");
    if ((i % 3 == 0) && (i % 5 == 0)) {
        msCommon.innerHTML= "FizzBuzz";
        msCommon.classList.add("blue");
    }
    else if (((i % 3) == 0) && ((i % 5) != 0)){
        msCommon.innerHTML= "Fizz";
        msCommon.classList.add("orange");
    }
    else if (((i % 3) != 0) && ((i % 5) == 0)){
        msCommon.innerHTML= "Buzz";
        msCommon.classList.add("green");
    }
    else {
        msCommon.innerHTML= i;
        msCommon.classList.add("gray");
    }
    msCont.appendChild(msCommon); 
}       
