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
