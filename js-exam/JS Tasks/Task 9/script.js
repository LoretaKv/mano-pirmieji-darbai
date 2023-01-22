function Movie(title, director, budget) {
  this.title = title;
  this.director = director;
  this.budget = +budget;
  this.wasExpensive = function () {
    if (this.budget > 1_00_000_000) {
      return true;
    } else {
      return false;
    }
  };
}

const favoriteMovie = new Movie("James Bond", "John Glen", 100_000_000);

console.log(favoriteMovie.title, favoriteMovie.director);
alert(favoriteMovie.wasExpensive());
