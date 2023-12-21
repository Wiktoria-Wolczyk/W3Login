const element = document.querySelector("form");
element.addEventListener("submit", (event) => {
  event.preventDefault();
});

function asd() {
  let mailValue = document.getElementById("mail").value;
  console.log("my mail value", mailValue);
  // e.preventDefault();
  // console.log("dupa");
  let passwordValue = document.getElementById("password").value;
  console.log("my password value", passwordValue);

  if (mailValue === "supermail@taki.pl" && passwordValue === "dupa123") {
    return (window.location.href = "https://www.google.com");
  } else {
    let errorElement = document.getElementById("error");
    errorElement.classList.add("error-visible");
    setTimeout(() => errorElement.classList.remove("error-visible"), 500);
  }
}
function togglePassword() {
  let showElement = document.getElementById("show");
  let passwordElement = document.getElementById("password");

  if (passwordElement.type === "password") {
    passwordElement.type = "text";
  } else {
    passwordElement.type = "password";
  }
}
