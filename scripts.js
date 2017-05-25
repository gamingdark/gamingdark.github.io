$(document).ready(function() {
	$('.menu-link, .text-link').click(function() {
		var href = this.href.split('#');	// skeliam nuorodos atributa ties '#'
		var id = href[1];					// kad gauti sekcijos id
		
		$('section').removeClass();			// visoms sekcijoms nuimam klases (jos pasidarys nematomos)
		$('#'+id).addClass('active');		// reikiamai sekcijai pridedam klase 'active' (ji pasidarys matoma)
	});
});