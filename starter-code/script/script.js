const inputField = document.querySelector("#user-email");
const validate = () => {
  if (!inputField.value.contains("@")) {
    inputField.appendChild("Please input a valid email.");
  }
};
