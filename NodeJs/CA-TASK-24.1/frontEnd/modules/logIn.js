const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInputValue = document.querySelector("#emailInput").value.trim();
  const passwordInputValue = document
    .querySelector("#passwordInput")
    .value.trim();

  fetch("http://localhost:5001/sign-in", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email: emailInputValue,
      password: passwordInputValue,
    }),
  })
    .then(async (res) => {
      const userData = await res.json();

      if (!res.ok || res.status >= 400) {
        return alert(userData?.error || res.statusText);
      }

      localStorage.setItem("token", userData.token);

      window.location.assign(`./index.html`);
    })

    .catch((error) => console.log(error));
});
