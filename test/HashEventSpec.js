(function(){

    define(['src/HashEvent'], function(HashEvent) {

        describe('default HashEvent method', function() {
            describe('when given an event', function(){

                var mockEvent, result
                beforeEach(function(){
                    mockEvent = {
                        'message': 'foo',
                        'class': 1,
                        'sessionId': 1
                    }
                    result = HashEvent(mockEvent)
                })
                describe('return object', function(){
                    describe('event property', function(){
                        it('should be original event', function(){
                            expect(result.event.message).toBe('foo')
                            expect(result.event.class).toBe(1)
                            expect(result.event.sessionId).toBe(1)
                        })
                    })
                    describe('id property', function(){
                        it('should be populated', function(){
                            expect(result.id).not.toBeUndefined()
                        })
                    })
                })

            })
        });

    });

})();
