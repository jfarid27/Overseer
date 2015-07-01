(function(){

    define([], function(){
        return function(Logger, HashEvent){
        /* HistorianConst :: Logger, HashEvent -> Historian

           Used to hash events, then log them with the logger.
        */

            var exports = function(){ return }

            exports.save = function(event, cb, error){

                Logger
                    .log(HashEvent(event))
                    .then(cb)
                    .error(error)
            }

            return exports
        }
    })
})()
