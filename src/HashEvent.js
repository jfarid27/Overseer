(function(){

    define([], function(){
        return function(Event){

            return {
                event: Event,
                id: Math.random() 
            }

        }
    })

})()
