$(function() {
	generateImages('images/covers/list.txt', '#covers-gallery');
	//lightGallery(document.getElementById('lightgallery'), {
    //    plugins: [lgZoom, lgThumbnail],
    //    speed: 500,
    //    ... other settings
   // });
});

function generateImages(listUrl, idtag) {
	console.log($(idtag));
	$.ajax({
		url: listUrl,
		success: function(data) {
			console.log(data);
		}
	});
}
    