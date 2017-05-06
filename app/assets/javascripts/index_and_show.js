$(function(){
	usersIndex();
	foodsIndex();
	groupsIndex();
	mealsIndex();
	mealnamesIndex();
	dietsIndex();
	userShow();

})

function usersIndex(){
	$("span#users_index").on('click', '.user_show', function(e){
		$("#users").html("");
		$("#foods").html("");
		$("#meals").html("");
		$("#mealnames").html("");
		$("#groups").html("");
		$("#diets").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
	$.ajax({
		type: 'get',
		url: '/api_users.json',
		dataType: 'json',
		success: function(response){
		for (var i = response.length - 1; i >= 0; i--) {
			var id = response[i].id;
			var username = response[i].username;
			var email = response[i].email;
			var weight = response[i].weight;
			var diet = response[i].diet.name;
			var user = username + "  "+ email+ "  "+ weight + "lbs " + "   " + diet + "  <br>";			
			$("#users").append(user);
				}
		userShow();
			}
		});
	});
}

function userShow(){
	$(".user_show").on("click", function(e){
debugger;
		
		e.preventDefault();
		$.ajax({
			type: 'get',
			url: '/users/' + id, 
			dataType: 'json',
			success: function(response){

	console.log(response);

				$("#user_show").append(response);
			}
		})
	})
}

function foodsIndex(){
	$("span#foods_index").on("click", function(e){
		$("#users").html("");
		$("#foods").html("");
		$("#meals").html("");
		$("#mealnames").html("");
		$("#groups").html("");
		$("#diets").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
	$.ajax({
		type: 'get',
		url: '/api_foods.json',
		dataType: 'json',
		success: function(response){
		for (var i = response.length - 1; i >= 0; i--) {
			var name = response[i].name;
			var group = response[i].group.name;
			var food = name + "  "+ group + "<br>";
			$("#foods").append(food);
				}
			}
		});
	});
}

function mealsIndex(){
	$("span#meals_index").on("click", function(e){
		$("#users").html("");
		$("#foods").html("");
		$("#meals").html("");
		$("#mealnames").html("");
		$("#groups").html("");
		$("#diets").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
	$.ajax({
		type: 'get',
		url: '/api_meals.json',
		dataType: 'json',
		success: function(response){
		for (var i = response.length - 1; i >= 0; i--) {
			var mealname = response[i].mealname.name;
			var food = response[i].food.name;
			var meal = mealname + ": " + food + "<br>";
			$("#meals").append(meal);
				}
			}
		});
	});
}

function mealnamesIndex(){
	$("span#mealnames_index").on("click", function(e){
		$("#users").html("");
		$("#foods").html("");
		$("#meals").html("");
		$("#mealnames").html("");
		$("#groups").html("");
		$("#diets").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
	$.ajax({
		type: 'get',
		url: '/api_mealnames',
		dataType: 'json',
		success: function(response){
		for (var i = response.length - 1; i >= 0; i--) {
			$("#mealnames").append(response[i].name + "<br>");
				}
			}
		});
	});
}

function groupsIndex(){
	$("span#groups_index").on("click", function(e){
		$("#users").html("");
		$("#foods").html("");
		$("#meals").html("");
		$("#mealnames").html("");
		$("#groups").html("");
		$("#diets").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
	$.ajax({
		type: 'get',
		url: '/api_groups',
		dataType: 'json',
		success: function(response){
		for (var i = response.length - 1; i >= 0; i--) {
			$("#groups").append(response[i].name + "<br>");
				}
			}
		});
	});
}

function dietsIndex(){
	$("span#diets_index").on("click", function(e){
		$("#users").html("");
		$("#foods").html("");
		$("#meals").html("");
		$("#mealnames").html("");
		$("#groups").html("");
		$("#diets").html("");
		e.stopImmediatePropagation();
		e.preventDefault();
	$.ajax({
		type: 'get',
		url: '/api_diets',
		dataType: 'json',
		success: function(response){
		for (var i = response.length - 1; i >= 0; i--) {
			$("#diets").append(response[i].name + "<br>");
				}
			}
		});
	});
}