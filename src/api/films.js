export default (http) => ({
  getAllFilms() {
    return http.get("/films");
  },
  getAllFilmById(id) {
    return http.get(`/films/${id}`);
  },
});
