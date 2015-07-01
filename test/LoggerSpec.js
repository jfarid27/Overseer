(function(){

    define(['src/Logger'], function(Logger){

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

                mockRegistry = (function(){

                    var exports = function(){ return}

                    exports.save = function(event){
                        exports.save.arg = event
                        return 'registrySaveResult'
                    }

                    return exports
                })()
            })

            describe('when initialized with an Api and Registry', function(){

                var instance
                beforeEach(function(){
                    instance = Logger(mockApi, mockRegistry)
                })
                describe('after an event is logged', function(){

                    var mockEvent
                    beforeEach(function(){
                        mockEvent = 'mockEvent'
                        instance.log(mockEvent, 'mockCallback', 'mockError')
                    })
                    it('should save event to registry', function(){
                        expect(mockRegistry.save.arg).toBe('mockEvent')
                    })

                    it('should save event to api', function(){
                        expect(mockApi.args.save).toBe('mockEvent')
                    })
                    it('should register callback on api', function(){
                        expect(mockApi.args.then).toBe('mockCallback')
                    })
                    it('should register error on api', function(){
                        expect(mockApi.args.error).toBe('mockError')
                    })

                })
            })

        })
    })
})()
