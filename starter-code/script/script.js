const btn = document.querySelector(".access");
const input = document.querySelector(".email");
const description = document.querySelector(".document");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!input.value.includes("@")) {
    const z = document.createElement("p");
    z.innerHTML = "Please type a correct email";
    document.body.appendChild(z);
    console.log("add");
  }
});
