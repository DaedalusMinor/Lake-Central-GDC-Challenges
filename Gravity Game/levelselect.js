let buttonContainer = document.getElementById("buttonContainer");
let buttonArray = [];

for(let i = 0; i <= MAX_LEVEL; i++){  //creates buttons and corresponding links for each level
  let link = document.createElement("a");
  link.setAttribute("href", "gravity.html");
  link.target = "_blank";
  let button = document.createElement("button");
  button.innerHTML = i + 1;
  button.className = "btn"
  button.onclick = () => {
    localStorage.clear();
    localStorage.setItem("level", i);
    console.log(localStorage.getItem("level"));
  };
  link.appendChild(button);
  buttonContainer.appendChild(link);
  buttonArray.push(button);
}
