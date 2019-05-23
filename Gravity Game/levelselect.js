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
    localStorage.setItem("level", i);             //local storage is convenient way to transfer short bits of data across
    console.log(localStorage.getItem("level"));   //web pages. It's kinda like short-term memory.  Like JSON, its entries
  };                                              //consist of a key name and a value, to which you can change or access
  link.appendChild(button);                       //amongst web pages. NOTE: these are relatively unprotected and simple
  buttonContainer.appendChild(link);              //it's useful for sending level numbers, not so much with Soc Sec numbers
  buttonArray.push(button);
}
