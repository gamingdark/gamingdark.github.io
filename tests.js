window.onload = function() {
	var html = "<h1>Device tests</h1>";
	
	html += "<h2>Generic:</h2><ul>";
	html += "<li>isMobile.any - <span " + (isMobile.any ? "class='y'>YES" : "class='n'>NO") + "</span></li>";
	html += "<li>isMobile.phone - <span " + (isMobile.phone ? "class='y'>YES" : "class='n'>NO") + "</span></li>";
	html += "<li>isMobile.tablet - <span " + (isMobile.tablet ? "class='y'>YES" : "class='n'>NO") + "</span></li>";
	html += "</ul>";
	
	html += "<h2>Apple devices:</h2><ul>";
	for (var key in isMobile.apple) {
		html += "<li>" + key + " - <span " + (isMobile.apple[key] ? "class='y'>YES" : "class='n'>NO") + "</span></li>";
	}
	html += "</ul>";
	
	html += "<h2>Android devices:</h2><ul>";
	for (var key in isMobile.android) {
		html += "<li>" + key + " - <span " + (isMobile.android[key] ? "class='y'>YES" : "class='n'>NO") + "</span></li>";
	}
	html += "</ul>";
	
	html += "<h2>Amazon Silk devices:</h2><ul>";
	for (var key in isMobile.amazon) {
		html += "<li>" + key + " - <span " + (isMobile.amazon[key] ? "class='y'>YES" : "class='n'>NO") + "</span></li>";
	}
	html += "</ul>";
	
	html += "<h2>Windows devices:</h2><ul>";
	for (var key in isMobile.windows) {
		html += "<li>" + key + " - <span " + (isMobile.windows[key] ? "class='y'>YES" : "class='n'>NO") + "</span></li>";
	}
	html += "</ul>";
	
	html += "<h2>Specific seven inch devices:</h2><ul>";
	for (var key in isMobile.seven_inch) {
		html += "<li>" + key + " - <span " + (isMobile.seven_inch[key] ? "class='y'>YES" : "class='n'>NO") + "</span></li>";
	}
	html += "</ul>";
	
	html += "<h2>'Other' devices</h2><ul>";
	for (var key in isMobile.other) {
		html += "<li>" + key + " - <span " + (isMobile.other[key] ? "class='y'>YES" : "class='n'>NO") + "</span></li>";
	}
	html += "</ul>";
	
	$("body").html(html);
}