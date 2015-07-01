(function(){

    define(['src/Historian'], function(Historian){

        describe('Historian', function(){

            var mockHashEvent, mockLogger
            beforeEach(function(){

                mockHashEvent = (function(){
                    var exports = function(e){
                        exports.arg = e
                        return 'mockHashEventResult'
                    }
                    return exports
                })()
                    
                mockLogger = (function(){
                    var exports = function(){ return}
                    exports.args = {}
                    exports.log = function(a){
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

            describe('when initialized with Logger and HashEvent function', function(){

                var instance
                beforeEach(function(){
                    instance = Historian(mockLogger, mockHashEvent)
                })
                describe('when called with event, cb, and error function', function(){

                    var mockEvent, mockCb, mockError
                    beforeEach(function(){
                        mockEvent = 'mockEvent' 
                        mockCb = 'mockCb'
                        mockError = 'mockError'
                        instance.save(mockEvent, mockCb, mockError)
                    })
                    it('should apply HashEvent to event', function(){
                        expect(mockHashEvent.arg).toBe('mockEvent')
                    })
                    it('should log HashEvent result', function(){
                        expect(mockLogger.args.save).toBe('mockHashEventResult')
                    })
                    it("should register cb in Loggers's then function", function(){
                        expect(mockLogger.args.then).toBe('mockCb')

                    })
                    it("should register error in Loggers's then function", function(){
                        expect(mockLogger.args.error).toBe('mockError')
                    })
                })
            })

        })
    })
})()
