$(function(){
	quotesJSON();
	quotesHTML();
	quotesClear();
	listenForNewQuote();
});

function quotesJSON(){
	$("#random_json_quotes").on("click", function(e) {
	$.ajax({
		type: 'get',
		url: '/random_quotes',
		dataType: 'json',
		success: function(response){
		for (var i = response.length - 1; i >= 0; i--) {
			$("#response_area").append(response[i] + "<br>");
			}
		}
	});
	e.stopImmediatePropagation();
	e.preventDefault();
	});
}

function quotesHTML(){
	$("#random_html_quotes").on("click", function(e) {
	$.ajax({
		type: 'get',
		url: '/random_quotes',
		dataType: 'html',
		success: function(response){
		$("#response_area").text("")
				$("#response_area").append(response);
			}
		});
	e.stopImmediatePropagation();
	e.preventDefault();
	});
};

function quotesClear(){
	$("#quotes_clear").on("click", function(e) {
		$.ajax({
			type: 'get',
			url: '/clear_quotes',
		}).success(function(){
			$("#response_area").html("");
		});	
	e.preventDefault();
	});
}

function listenForNewQuote(){
	$("#new_quote_button").on("click", function(e) {
 		e.stopImmediatePropagation();
		e.preventDefault();
		$.ajax({
			type: 'get',
			url: '/quotes/new',
			}).success(function(response){
			$("#response_area").html(response)
		newQuote();
		 })
	});
}

function newQuote(){
	$("#response_area form").on("submit", function(e){
	 	e.stopImmediatePropagation();
		e.preventDefault();	
		$.ajax({
			type: 'post',
			url: '/quotes',
			data: {
				authenticity_token:	$("input[name='authenticity_token']").val(),
				quote: {
					celeb: $("#quote_celeb").val(),
					verb: $("#quote_verb").val(),
					adj: $("#quote_adj").val(),
					food: $("#quote_food").val(),
					diet_id: $("#quote_diet_id").val(),
					phrase: $("#quote_phrase").val()
		  		}
		  	}
			}).success(function(response){
			$("#response_area").html(response);
		});
	});
};