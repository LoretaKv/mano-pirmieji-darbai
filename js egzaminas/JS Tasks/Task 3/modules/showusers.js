const showUsers = (users) => {
  users.forEach((user) => {
    const usersContainerElement = document.querySelector("#output");
    const usersContainer = document.createElement("div");
    const loginElement = document.createElement("h4");
    const imgElement = document.createElement("img");

    loginElement.innerText = user.login;
    imgElement.src = user.avatar_url;

    usersContainer.append(loginElement, imgElement);
    usersContainerElement.append(usersContainer);
  });
};
export { showUsers };
