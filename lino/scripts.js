$(function() {
	generateImages('images/covers/', '#covers-gallery');
	generateImages('images/articles/', '#articles-gallery');
    
    lightGallery(document.getElementById('covers-gallery'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
		licenseKey: 'lino',
		thumbnails: true
    });
    
    lightGallery(document.getElementById('articles-gallery'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
		licenseKey: 'lino',
		thumbnails: true
    });
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
    