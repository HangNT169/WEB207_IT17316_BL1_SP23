var myApp = angular.module("myApp", ["ngRoute"]);
// Chuyen trang
myApp.config(function ($routeProvider, $locationProvider) {
  // Xoa khoang trang => Duong dan dep
  $locationProvider.hashPrefix("");
  //chuyen trang

  $routeProvider
    .when("/home", {
      templateUrl: "./pages/trang-chu.html",
      //   template: `<h1>Trang Home</h1>
      //   <h1>Trang Home1</h1>`,
    })
    .when("/gioi-thieu", {
      template: "<h1>Gioi thieu</h1>",
    })
    .when("/chung-toi", {
      template: "<h1>Ve chung toi </h1>",
    })
    .otherwise({
      // muon duong dan nao chay dau tien thi de o phan otherwise (active)
      redirectTo: "/home",
    });
});
