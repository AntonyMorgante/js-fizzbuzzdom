const msCont = document.getElementById("container");

for (i = 1; i <= 100; i++){
    if ((i % 3 == 0) && (i % 5 == 0)) {
        var msCommon = document.createElement("msCommon")
        msCommon.innerHTML= "FizzBuzz";
        msCommon.classList.add("square");
        msCommon.classList.add("blue");
        msCont.appendChild(msCommon);     }
    else if (((i % 3) == 0) && ((i % 5) != 0)){
        var msCommon = document.createElement("msCommon")
        msCommon.innerHTML= "Fizz";
        msCommon.classList.add("square");
        msCommon.classList.add("orange");
        msCont.appendChild(msCommon);    }
    else if (((i % 3) != 0) && ((i % 5) == 0)){
        var msCommon = document.createElement("msCommon")
        msCommon.innerHTML= "Buzz";
        msCommon.classList.add("square");
        msCommon.classList.add("green");
        msCont.appendChild(msCommon);
    }
    else {
        var msCommon = document.createElement("msCommon")
        msCommon.innerHTML= i;
        msCommon.classList.add("square");
        msCommon.classList.add("gray");
        msCont.appendChild(msCommon);
    }
}       
