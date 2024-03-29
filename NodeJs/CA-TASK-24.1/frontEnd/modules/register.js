const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInputValue = document.querySelector("#email-input").value.trim();
  const pswInputValue = document.querySelector("#password-input").value.trim();

  const user = JSON.stringify({
    email: emailInputValue,
    password: pswInputValue,
  });

  try {
    const response = await fetch("http://localhost:5001/register", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: user,
    });

    if (response.ok) {
      registerForm.reset();

      alert("Registered successfuly");

      return window.location.assign(`./login.html`);
    }

    if (!response.ok || response.status >= 400) {
      const data = await response.json();
      alert(data.error);
    }
  } catch (error) {
    console.log(error);
  }
});
