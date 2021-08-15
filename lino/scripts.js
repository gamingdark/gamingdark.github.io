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
		var list = data.replaceAll('\r','').split('\n');
		console.log(list);
		for (i in list) {
			var imgTag = '<a href="'+folderUrl+'/'+list[i]+'"><img src="'+folderUrl+'/thumbnails/'+list[i]+'" /></a>';
			$(idtag).append(imgTag);
		}
    }); 
}
    
