$(function() {
	generateImages('images/covers/', 'covers-gallery');
	generateImages('images/articles/', 'articles-gallery');
});

function generateImages(folderUrl, idTag) {
    $.get(folderUrl+'list.txt', function(data) {
		var list = data.replaceAll('\r','').split('\n');
		for (i in list) {
			var imgTag = '<a href="'+folderUrl+'/'+list[i]+'"><img src="'+folderUrl+'/thumbnails/'+list[i]+'" /></a>';
			$('#'+idTag).append(imgTag);
		}
		
		initGallery(idTag);
    }); 
}

function initGallery(idTag) {
    lightGallery(document.getElementById(idTag), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
		licenseKey: 'lino',
		thumbnails: true
    });
}
