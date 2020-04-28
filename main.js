/**
 * Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
 * Servendoci di handlebars stampiamo tutto a schermo.
 * Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
 */

$(document).ready(function() {
	//Refs
	var apiCds = 'https://flynn.boolean.careers/exercises/api/array/music';
	var cdsContainer = $('.cds-container');

	//Init Handlebars
	var source = $('#cd-template').html();
	var template = Handlebars.compile(source);
	
	//Ciclo aggiunta cd alla lista
	$.ajax({
		url: apiCds,
		method: 'GET',
		success: function(data) {
			for(var i = 0; i < data.response.length; i++) {
				var cd = data.response[i];
				var newCd = template(cd);
				cdsContainer.append(newCd);
			};
		},
		error: function() {
			console.log('ERRORE');
		}
	});
});