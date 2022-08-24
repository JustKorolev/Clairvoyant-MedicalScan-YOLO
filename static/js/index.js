function makeInput(id){
	var image = document.getElementById(id);
    var source = image.src;
    $.ajax({
  	type: "POST",
 	url: "~/app.py",
  	data: { param: image}
	}).done(function() {
     upload_file(source)
	});
}