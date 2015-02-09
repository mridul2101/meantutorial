angular.module('app').controller('mvMainCtrl', function($scope) {
	$scope.products = [{name:'Moto G II Gen', category: 'Mobile', featured: true, price:'13999 INR', color:'black'},
                {name: 'HTC 200', category: 'Mobile',featured: true, price:'15600 INR', color:'silver'},
                {name: 'Spice Mi100', category: 'Mobile', featured:false, price:'6200 INR', color:'black'},
                {name: 'HP Notebook rt0022x', category: 'Laptop', featured:true,  price:'42300 INR', color:'black'},
                {name: 'JBL ear-phone 100X', category: 'Earphone', featured:false,  price:'989 INR', color:'white'}
	]
});
