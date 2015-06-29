(function(){

    define([], function(){
        return function(Api, HashEvent){

            var exports = function(){ return }

            exports.save = function(event, cb, error){

                Api
                    .save(HashEvent(event))
                    .then(cb)
                    .error(error)
            }

            return exports
        }
    })
})()
