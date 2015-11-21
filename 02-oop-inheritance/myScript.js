

MovieObserver.prototype = {
    constructor: MovieObserver,
    update: function(){
        console.log("MovieObserver called");
    }
};
function MovieObserver(){}
MovieObserver.prototype = {
    constructor: MovieObserver,
    update: function(){
        console.log("MovieObserver called");
    }
};
function Movie(){
    this.attributes = {};
    this.handlers = [];  // <- los observers
};
Movie.prototype = {
    constructor:Movie,
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
function DownloadableMovie(){}
DownloadableMovie.prototype = new Movie();
DownloadableMovie.prototype.constructor=DownloadableMovie,
DownloadableMovie.prototype.download = function(){
       console.log("Downloaded");
}
var Social = function(){
     this.share = function(friendName){
         console.log("Sharing "+this.attributes["title"]+" with "+friendName);
     };
     this.like = function(){
         console.log("Liked");
     };
}
Social.call(Movie.prototype);
function Actor(actName){
    this.name = actName;
}
Actor.prototype = {
    constructor:Actor,
    getName:function(){
        console.log("His name is "+this.name);
    }
}
var downlTerminator = new DownloadableMovie();
downlTerminator.set('title', 'Terminator downloadable');
downlTerminator.play();
downlTerminator.download();

var terminator = new Movie();
terminator.set('title', 'Terminator');
// ...
terminator.play();
terminator.stop();
terminator.share("Rodrigo");
actors = [];
actors[0] = new Actor("Kevin Spacey");
actors[1] = new Actor("Bryan Cranston");
terminator.set('actors', actors);
            
