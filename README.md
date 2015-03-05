# AngularJS Templates #

### [angular-declarative-only-template.html] [adot] ###

A Sortable filterable dynamic table grid using only declarative syntax.

Example that uses only standard built-in AngularJS directives and filters (no custom directives and filters).:

### [click for demo] [demo] ###

#### HTML [angular-declarative-only-template.html] [adot]: ####

    <!DOCTYPE HTML>
    <html>
    <head>
    <meta charset="utf-8">
    <title>angular-query-demo</title>
    <link rel="stylesheet" href="css/bootstrap-3.0.0.min.css" type="text/css" />
    </head>
    <body ng-controller="myController">
    <div class="container row span12">
    <pre ng-bind="'items_order = ' + items_order + ', items_filter = ' + items_filter + ', descending = ' + descending + ', ' + !descending"></pre>
    <input class="filter span2" type="text" name="filter" placeholder="filter displayed" ng-model="items_filter" />
    <select class="sort span1" ng-model="items_order">
     <option ng-repeat="field in items.result.fields">{{field}}</option>
    </select>
    <table class="span6 items">
    <thead class="header">
    <tr>
    <th class="span2" ng-repeat="field in items.result.fields"><div class="btn btn-primary" ng-click="changeOrder($event,field)" ng-bind-html-unsafe="field + getOrder(field)"></div></th>
    </tr>
    </thead>
    <tr class="item" ng-repeat="item in items.result.values | filter:items_filter | orderBy:items_order:descending">
    <td class="span2" ng-repeat="field2 in items.result.fields" ng-bind="item[field2]"></td>
    </tr>
    </table>
    </div>
    <script src="js/jquery-1.10.2.min.js" type="text/javascript"></script>
    <script src="js/angular-1.0.8.min.js" type="text/javascript"></script>
    <script type="text/javascript">
    <!--
    angular.element(document).ready(function() {
     angular.module('myApp', []);
     angular.bootstrap(document, ['myApp']);
    });
    //-->
    </script>
    <script src="js/app.js" type="text/javascript"></script>
    </body>
    </html>

#### Javascript [js/app.js] [adotjs]: ####

    function myController($scope) {
     var scope = $scope;
     $scope.items = {
      result:{
       values:[
	{
	 item_id:0,
	 item_name:"item2",
	 item_detail:"second item"
	},
	{
	 item_id:1,
	 item_name:"item0",
	 item_detail:"third item"
	},
	{
	 item_id:2,
	 item_name:"item1",
	 item_detail:"first item"
	}
       ],
       fields:["item_id","item_name","item_detail"]
      }
     };
     $scope.descending=false;
     $scope.getOrder = function (column_name) {
      var extra = '';
      if (column_name == scope.items_order)
       if (scope.descending)
	extra = '&nbsp;&darr;';
       else
	extra = '&nbsp;&uarr;';
      return extra;
     };
     $scope.changeOrder = function (ev,column_name) {
      if (column_name == scope.items_order) {
       scope.descending = !scope.descending;
      }
      else {
       scope.items_order = column_name;
       scope.descending = false;
      }
     };
    }


Next steps:

*   Add dynamic field specific filters.

*   Change source to ajax.

*   Allow for more results data structures (no fields and/or property names).

*   Allow for image references or other html snippets in results.

[adot]:angular-declarative-only-template.html "Sortable and filterable dynamic grid using only declarative syntax"
[adotjs]:js/app.js "Support functions executed in scope and init of data sources and state variables in scope"
[demo]:http://dplenterprises.com/angular-templates/angular-declarative-only-template.html "live demo"
