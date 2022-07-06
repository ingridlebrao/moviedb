class MovieService {
  public async getTopMovies() {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=f7f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8',
    );

    const data = await response.json();
    return data.results;
  }

  public async getTopRatedMovies() {}
}

export default MovieService;
