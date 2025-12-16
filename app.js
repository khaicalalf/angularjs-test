const app = angular.module("employeeApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/employees", {
      templateUrl: "views/list.html",
      controller: "EmployeeList",
    })
    .when("/employees/new", {
      templateUrl: "views/form.html",
      controller: "EmployeeForm",
    })
    .when("/employees/edit/:id", {
      templateUrl: "views/form.html",
      controller: "EmployeeForm",
    })
    .otherwise({
      redirectTo: "/employees",
    });
});
