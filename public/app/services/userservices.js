angular.module('userservices',[])
.factory('user',function ($http) {
    userfactory={};

    userfactory.create=function(regdata){
        return $http.post('/api/users',regdata);
    }
    return userfactory;

});