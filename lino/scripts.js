$(function() {
	generateImages('images/covers/list.txt', '#covers-gallery');
	//lightGallery(document.getElementById('lightgallery'), {
    //    plugins: [lgZoom, lgThumbnail],
    //    speed: 500,
    //    ... other settings
   // });
});

function generateImages(url, idtag) {
	$.ajax(url, function(data) {
		console.log(data);
	});
	console.log($(idtag));
}
    