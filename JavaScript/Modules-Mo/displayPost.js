const displayPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const randomNumber = Math.round(Math.random() * 100);
  const post = posts[randomNumber];

  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = JSON.stringify(posts);

  console.log(post);
  document.body.append(paragraphElement);
};

export { displayPost };
