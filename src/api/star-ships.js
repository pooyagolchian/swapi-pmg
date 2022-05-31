export default (http) => ({
  getAllStarShip() {
    return http.get("/starships");
  },
  getAllStarShipById(id) {
    return http.get(`/starships/${id}`);
  },
});
