app.controller("EmployeeList", function ($scope, EmployeeService) {
  const loadEmployees = () => {
    EmployeeService.getAll().then((res) => {
      $scope.employees = res.data.data || res.data;
    });
  };

  loadEmployees();

  $scope.delete = (id) => {
    if (confirm("Yakin hapus data?")) {
      EmployeeService.delete(id).then(loadEmployees);
    }
  };
});
