
(function(exports) {
    exports.MovieObserver = function(){};
    exports.MovieObserver.prototype = {
        constructor: exports.MovieObserver,
        update: function(){
            console.log("MovieObserver called");
        }
    };
    exports.MovieObserver.prototype = {
        constructor: exports.MovieObserver,
        update: function(){
            console.log("MovieObserver called");
        }
    };
    
    exports.Movie = function(){
        this.attributes = {};
        this.handlers = [];  // <- los observers
    };
    exports.Movie.prototype = {
        constructor:exports.Movie,
        play:function(){
            console.log("Playing "+this.attributes["title"]);
        },
        stop:function(){
            console.log("stopped");
        },
        set:function(string, value){
            this.attributes[string]=value;
        },
        get:function(string){

        },
        subscribe: function(observer) {
            this.handlers.push(observer);
        },
        unsubscribe: function(observer) {
            this.handlers = this.handlers.filter(
                function(item) {
                    if (item !== observer) {
                        return item;
                    }
                }
            );
        },

        notify: function() {
            for( i = 0; i < this.handlers.length; i++) { 
                handlers[i].update(); 
            }
        }
    };
    exports.DownloadableMovie = function(){};
    exports.DownloadableMovie.prototype = new exports.Movie();
    exports.DownloadableMovie.prototype.constructor=exports.DownloadableMovie,
    exports.DownloadableMovie.prototype.download = function(){
           console.log("Downloaded");
    };
    exports.Social = function(){
         this.share = function(friendName){
             console.log("Sharing "+this.attributes["title"]+" with "+friendName);
         };
         this.like = function(){
             console.log("Liked");
         };
    };
    exports.Social.call(exports.Movie.prototype);
    function Actor(actName){
        this.name = actName;
    };
    exports.Actor = function(){};
    exports.Actor.prototype = {
        constructor:Actor,
        getName:function(){
            console.log("His name is "+this.name);
        }
    };
})(this.ejercicio2 = {});
var downlTerminator = new ejercicio2.DownloadableMovie();
downlTerminator.set('title', 'Terminator downloadable');
downlTerminator.play();
downlTerminator.download();

var terminator = new ejercicio2.Movie();
terminator.set('title', 'Terminator');
// ...
terminator.play();
terminator.stop();
terminator.share("Rodrigo");
actors = [];
actors[0] = new ejercicio2.Actor("Kevin Spacey");
actors[1] = new ejercicio2.Actor("Bryan Cranston");
terminator.set('actors', actors);
            
