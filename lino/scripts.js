$(function() {
	generateImages('images/covers/', 'covers-gallery');
	generateImages('images/articles/', 'articles-gallery');
});

function generateImages(folderUrl, idtag) {
    $.get(folderUrl+'list.txt', function(data) {
		var list = data.replaceAll('\r','').split('\n');
		for (i in list) {
			var imgTag = '<a href="'+folderUrl+'/'+list[i]+'"><img src="'+folderUrl+'/thumbnails/'+list[i]+'" /></a>';
			$('#'+idtag).append(imgTag);
		}
		
		initGallery(idTag);
    }); 
}

function initGalery(idTag) {
    lightGallery(document.getElementById(idTag), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
		licenseKey: 'lino',
		thumbnails: true
    });
}
    