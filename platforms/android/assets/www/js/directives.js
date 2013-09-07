'use strict';

/* Directives */
angular.module('myApp.directives', [])
    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
          elm.text(version);
	}}])
	.directive('loading', function () {
      return {
        restrict: 'E',
        replace:true,
        template: '<img class="loading" src="img/loading.gif" />',
        link: function (scope, element, attr) {
              scope.$watch('loading', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
    })
	.directive('chart', function () {
		  return {
		    restrict: 'E',
		    template: '<div></div>',
		    scope: {
		        chartData: "=value"
		    },
		    transclude:true,
		    replace: true,

		    link: function (scope, element, attrs) {
		      var chartsDefaults = {
		        chart: {
		          renderTo: element[0],
		          type: attrs.type || null,
		          height: attrs.height || null,
		          width: attrs.width || null
		        }
		      };
		      
		        //Update when charts data changes
		        scope.$watch(function() { return scope.chartData; }, function(value) {
		          if(!value) return;
		            // We need deep copy in order to NOT override original chart object.
		            // This allows us to override chart data member and still the keep
		            // our original renderTo will be the same
		            var deepCopy = true;
		            var newSettings = {};
		      		$.extend(deepCopy, newSettings, chartsDefaults, scope.chartData);
		            var chart = new Highcharts.Chart(newSettings);
		        });
		      }
		    };
	});
