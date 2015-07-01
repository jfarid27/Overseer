(function(){

    define(['src/Logger'], function(Historian){

        describe('Logger', function(){

            var mockApi
            beforeEach(function(){
                    
                mockApi = (function(){
                    var exports = function(){ return}
                    exports.args = {}
                    exports.save = function(a){
                        exports.args.save = a
                        return exports
                    }
                    exports.then = function(a){
                        exports.args.then = a
                        return exports
                    }
                    exports.error = function(a){
                        exports.args.error = a
                        return exports
                    }
                    return exports
                })()
            })

            describe('when initialized with an Api and Registry', function(){

                it('should initialize registry with Api') 


                describe('after an event is logged', function(){

                    describe('if api call is successful', function(){
                        it('should save event to api')
                        it('should save event to registry')
                        it('should call given callback')
                    })

                    describe('if api call fails', function(){
                        it('should call error callback')
                    })

                })
            })

        })
    })
})()
