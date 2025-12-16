app.controller(
  "EmployeeForm",
  function (
    $scope,
    $routeParams,
    $location,
    EmployeeService,
    DepartmentService
  ) {
    $scope.employee = {};
    $scope.departments = [];
    $scope.isEdit = false;

    DepartmentService.getAll().then((res) => {
      $scope.departments = res.data;
    });

    if ($routeParams.id) {
      $scope.isEdit = true;
      EmployeeService.getById($routeParams.id).then((res) => {
        $scope.employee = res.data;
      });
    }

    $scope.save = () => {
      if ($scope.isEdit) {
        EmployeeService.update($routeParams.id, $scope.employee).then(() =>
          $location.path("/employees")
        );
      } else {
        EmployeeService.create($scope.employee).then(() =>
          $location.path("/employees")
        );
      }
    };
  }
);
