const startbutton = document.getElementById("starter");
const divstart = document.getElementById("divFundo")
const fundobranco = document.getElementById("brancoooous")
function start(){
    startbutton.style.display = "none";
    divstart.style.backgroundColor = "gray";
    fundobranco.style.visibility = "hidden  "
    const sortear = document.createElement("button");
  
    sortear.textContent = "sortei suas cartas";
    sortear.classList("starter")

 
    divstart.appendChild(sortear);
}


