app.service("EmployeeService", function ($http) {
  const BASE_URL = "http://localhost:3000/api/employees";

  this.getAll = () => $http.get(BASE_URL);
  this.getById = (id) => $http.get(`${BASE_URL}/${id}`);
  this.create = (data) => $http.post(BASE_URL, data);
  this.update = (id, data) => $http.put(`${BASE_URL}/${id}`, data);
  this.delete = (id) => $http.delete(`${BASE_URL}/${id}`);
});
