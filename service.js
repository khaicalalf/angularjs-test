app.service("EmployeeService", function ($http) {
  const BASE_URL = "http://localhost:3000/api/employees";
  const API_KEY = "secret123";

  const config = {
    headers: {
      "x-api-key": API_KEY,
    },
  };

  this.getAll = () => $http.get(BASE_URL);

  this.getById = (id) => $http.get(`${BASE_URL}/${id}`);

  this.create = (data) => $http.post(BASE_URL, data, config);

  this.update = (id, data) => $http.put(`${BASE_URL}/${id}`, data, config);

  this.delete = (id) => $http.delete(`${BASE_URL}/${id}`, config);
});

app.service("DepartmentService", function ($http) {
  const BASE_URL = "http://localhost:3000/api/departments";

  this.getAll = () => $http.get(BASE_URL);
});
