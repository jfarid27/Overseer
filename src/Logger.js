(function(){

    define([], function(){
        return function(Api, Registry){ 
            var exports = function(){
                return
            }

            exports.log = function(HashedEvent, cb, err){

                Registry.save(HashedEvent)

                Api.save(HashedEvent).then(cb).error(err)
                
            }

            
            return exports 
        }
    })

})()
