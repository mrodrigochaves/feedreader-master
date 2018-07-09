    $(function() {

        // RSS Feeds test suite    
        describe('RSS Feeds', function() {

            // Tests if 'allFeeds' is defined and not empty
            it('are defined', function() {
                expect(allFeeds).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            });

            // Tests if each feed has a URL defined and not empty
             it('should have a URL defined and it should not be empty', function(){
                allFeeds.forEach(function(feed){
                    expect(feed.url).toBeDefined();
                    expect(feed.url.length).not.toBe(0);
                });
             });

            // Tests if each feed has a name defined and is not empty
             it('should have a name defined and it should not be empty', function(){
                allFeeds.forEach(function(feed){
                    expect(feed.name).toBeDefined();
                    expect(feed.name.length).not.toBe(0);
                });
             });
        });

            // Menu test suite
            describe('The menu', function(){
                let theBody = $('body'),
                      theMenuLink = $('.menu-icon-link');
            
            // Tests if the menu is hidden by default
             it('should be hidden by default', function(){
                expect(theBody.hasClass('menu-hidden')).toBe(true);
             });

             // Tests if menu is toggled when clicked
              it('should be displayed when clicked and hidden when clicked again', function(){
                theMenuLink.click();
                expect(theBody.hasClass('menu-hidden')).not.toBe(true);
                theMenuLink.click();
                expect(theBody.hasClass('menu-hidden')).toBe(true);
              });
          });

        // Initial Entries test suite
        describe('initialEntries', function(){

             // A loadFeed function is called and complete its work.
             // Tests if there is at least one entry displayed on the feed.
             // Callback function to be called when asynchronous request is finished.
             beforeEach(function(done){
                loadFeed(0, done);
             });


             it('should have at least one entry displayed on the feed', function(){
                const theEntries = $('.feed .entry').length;
                expect(theEntries).not.toBe(0);
             });
    });
            // New Feed Selection test suite
            describe('New Feed Selection', function(){


            // Tests if the content changes when a new feed is selected.
            // Reloads default feed after the test is done.
            // Callback function to be called when asynchronous request is finished.
             beforeEach(function(done) {
                loadFeed(0, function(){
                    initialFeed = $('.entry').text();
                    loadFeed(1, function(){
                        done();
                    });
                });
            });

             it("should change the content when a new feed is loaded", function(){
                const nextFeed = $('.entry').text();
                expect(initialFeed).not.toEqual(nextFeed);
            });
        });

    }());
