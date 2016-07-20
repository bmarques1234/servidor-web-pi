function hideButton(){
	$('.switch').hide();
}

function showButton(){
	$('.switch').fadeIn(1000);
}

function unlock(){
	$.ajax({
		url: "http://192.168.2.3:3000/unlock?key=DD2016TRNEE&device=web",
		/*
		success: function(result){
        	alert(result);
    	}
    	*/
    });
}

function clickButton(){
	$('#button').click(function(){
    	var state = $('#button').is(":checked");
    	$(this).prop('disabled', true);
    	unlock();
    	if(state===true){
    		setTimeout(function(){
    			$('#button').attr('checked', false);
    			$('#button').prop('disabled', false);
    		},3500);
    	}
	});
}

$(document).ready(function(){
    hideButton();
    showButton();
    clickButton();
});