


// Code for h1 color change
function greet(){
        document.querySelector("body").style.backgroundColor = "red";
}

function out(){
    document.querySelector("body").style.backgroundColor = "White";
};

// Code for add text to paragrah
document.addEventListener("keydown", addtext);
            function addtext(keyPressed){
            var newP= document.createElement("p");
            newP.innerHTML = keyPressed.key;
            document.body.appendChild(newP)
            }

