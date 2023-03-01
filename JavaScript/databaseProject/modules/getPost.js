const getPost = async (postNumber) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postNumber}`,
      {
        method: "GET", //Nebutina su GET, dazniausia naudojama su POST ir PATCH.
      }
    );
    const post = await response.json();

    return post;
  } catch (error) {
    console.error(error);
  }
};
console.log(getPost);

export { getPost };
