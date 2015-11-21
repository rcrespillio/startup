$().ready(function(){
	$("section:hidden").fadeIn();
	$("input.alias").focus();
});
function getWelcome(){
	nombre = "Rodrigo";
	$.get( "http://bootcamp.aws.af.cm/welcome/"+nombre)
	  .done(function( data ) {
		  data.response = data.response.replace(nombre, "<span class='highlighted'>"+nombre+"</span>");
		  $("section:first").html(data.response);
	  })
	  .fail(function( data ) {
		  $("section:first").css("background-color","red");
	  });
}
function getAlbums(){
	album = $("#album").val();
	$("#response").html("Por favor espere...");
	$.get( "https://api.spotify.com/v1/search?q="+album+"&type=album")
	  .done(function( data ) {
		  responseHTML = "";
		  albums = data.albums.items;
		  for (index = 0; index < albums.length; index++) {
			  responseHTML+="<article>";
			  responseHTML+=albums[index].name+"<br>";
			  responseHTML+=albums[index].type+"<br>";
			  responseHTML+="<a href='"+albums[index].external_urls.spotify+"'>Ver en spotify</a><br>";
			  if (albums[index].images[0].url!=undefined) {
				  responseHTML+="<img src='"+albums[index].images[0].url+"' width='200px'>";
			  }
			  
			  
			  responseHTML+="</article>";
	      }
		  $("#response").html(responseHTML);
	  })
	  .fail(function( data ) {
		  $("#response").html("No se pudo descargar la información");
	  });
}