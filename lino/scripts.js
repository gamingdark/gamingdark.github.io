$(function() {
	generateImages('images/covers/', '#covers-gallery');
	//lightGallery(document.getElementById('lightgallery'), {
    //    plugins: [lgZoom, lgThumbnail],
    //    speed: 500,
    //    ... other settings
   // });
});

function generateImages(folderUrl, idtag) {
	console.log($(idtag));
    $.get(folderUrl+'list.txt', function(data) {
		var list = data.replace('\r','').split('\n');
	    console.log(list);
		for (img in list) {
			var imgTag = '<a href="'+folderUrl+'/'+img+'"><img src="'+folderUrl+'/'+img+'" /></a>';
			$(idtag).append(imgTag);
		}
    }); 
}
    
