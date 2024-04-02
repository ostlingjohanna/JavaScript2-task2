function addinput(){
const todoContainer = document.querySelector("#todo");

const inputEl = document.createElement("input");
inputEl.type = "text";
inputEl.classList.add("input")
todoContainer.appendChild(inputEl);

const btnEl = document.createElement("button")
btnEl.classList.add("input")
btnEl.innerText =">>>"
todoContainer.appendChild(btnEl)
  
const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.placeholder = "enter name"
  inputEl.classList.add("input");

}

export {addinput}