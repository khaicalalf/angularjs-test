app.controller(
  "EmployeeForm",
  function ($scope, $routeParams, $location, EmployeeService) {
    $scope.employee = {};
    $scope.isEdit = false;

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
