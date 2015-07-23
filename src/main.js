(function(){

    var deps = [
        "./src/Historian",   
        "./src/Logger",
        "./src/HashEvent",
        "./src/",   

    define(function(Historian, Logger, HashEvent){

        return function(initialParams){

            var params = initialParams

            var exports = function(Api){

                var logger = Logger(Api, exports.registry)

                var historian = Historian(logger, HashEvent)  
                return historian
            }

            exports.registry = function(){
                //TODO: Mock registry save for now
                return exports
            }

            exports.registry.save = function(){
                //TODO: Mock registry save for now
                return
            }
    
            exports.params = function(){
                if (arguments){
                    params = arguments[0]
                    return exports
                }

                return params
            }

        }

    })

})()
