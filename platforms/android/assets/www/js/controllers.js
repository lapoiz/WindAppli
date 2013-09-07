'use strict';

/* Controllers */
function HomeCtrl($scope,navSvc,$rootScope,$http,serverURL,webSiteURL) {
    //console.log("dans HomeCtrl");
    $scope.loading = true;
    $scope.webSiteURL=webSiteURL;
    $scope.serverURL=serverURL;
    
    $scope.init = function(){
        document.addEventListener("deviceready", getListSpot, false);
    }
    
    $scope.getAllSpot = function(){ 
        $http({
            //url: 'http://www.lapoiz.com/Wind/web/app.php/json/spot/list',
            url: serverURL+'json/spot/list',
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
           }
        }).success(function(data) {
            $scope.spots = data;
            window.localStorage.setItem("list_spots", data);
            $scope.loading = false;
        });
    }
    
    function getListSpot(){
    	var value = window.localStorage.getItem("list_spots");
    	$scope.spots = value;
    	//console.log("In localStorage:"+value);
    	
        if (navigator.connection.type!=Connection.NONE){
            $scope.getAllSpot();
        }
        $scope.$apply();
        //if (!$scope.$$phase) { $scope.$apply(); }
    }
    
    $scope.slidePage = function (path,type) {
        navSvc.slidePage(path,type);
    };
    $scope.back = function () {
        navSvc.back();
    };
    $scope.changeSettings = function () {
        $rootScope.showSettings = true;
    };
    $scope.closeOverlay = function () {
        $rootScope.showSettings = false;
    };
    
    $scope.init();
}

function GraphCtrl($scope,$http,$routeParams,$rootScope,serverURL) {
	$scope.loading = true;
    $scope.spotId = $routeParams.spotId;
    
    $scope.init = function(){
        document.addEventListener("deviceready", getDataSpot, false);
    }
    
    $scope.getDataSpotFromServer = function(){ 
        $http({
            //url: 'http://www.lapoiz.com/Wind/web/app.php/json/spot/data/'+$scope.spotId,
        	url: serverURL+'json/spot/data/'+$scope.spotId,
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
           }
        }).success(function(data) {
            $scope.basicAreaChart = data;
            window.localStorage.setItem("basicAreaChart_spot_"+$scope.spotId, data);
            $scope.loading = false;
        });
    }
    
    function getDataSpot(){
    	var value = window.localStorage.getItem("basicAreaChart_spot_"+$scope.spotId);
    	$scope.basicAreaChart = value;
    	
        if (navigator.connection.type!=Connection.NONE){
            $scope.getDataSpotFromServer();
        }
        $scope.$apply();
        //if (!$scope.$$phase) { $scope.$apply(); }
    }

    $scope.init();
}
