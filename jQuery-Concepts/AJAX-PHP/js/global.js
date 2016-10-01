$('input#name-submit').on('click', function(){
	//alert("2");
	var name = $('input#name').val();
	//alert(name);
	if ($.trim(name) != '') {
		$.post('ajax/names.php', {name: name}, function(data){
			//alert(data);
			//$('div#name-data').html(data);
			$('div#name-data').html(data);
		});
	}
});