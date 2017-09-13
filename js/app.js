$(document).ready(function(){
	console.log("page is loaded");

	var countDownDate = new Date("Sep 25, 2017 11:46:00").getTime();
	var x = setInterval(function() {

	    // Get todays date and time
	    var now = new Date().getTime();
	    
	    // Find the distance between now an the count down date
	    var distance = countDownDate - now;
	    
	    // Time calculations for days, hours, minutes and seconds
	    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	    
	    // Output the result in an element with id="demo"
	    document.getElementById("tiles").innerHTML = "<div>" + days + "</div><div>" + hours + "</div><div>" + minutes + "</div><div>" + seconds + "</div>"; 
	    
	    // If the count down is over, write some text 
	    if (distance < 0) {
	        clearInterval(x);
	        document.getElementById("tiles").innerHTML = "EXPIRED";
	    }
	}, 1000);


	// for closing nav-bar link after click
	$('.nav-link').on('click',function(e) {
 		$('.navbar-collapse').collapse('hide');
 		
	});

	// for smooth scrolling
	$("a").on('click', function(event) {
    
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      	// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;
			var position = ($(hash).offset().top - 80) + 'px';
			console.log("position",position);

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: position
				}, 1000, function(){
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
    	} // End if
	});


	//color change based on user input for contact us form 
	

	$('#contactName').keyup(function(){
        var data = $(this).val();
        console.log(data);
        if(data.length > 2){
            $(this).parent('div').removeClass('has-warning').addClass('has-success');
        }
        else{
            $(this).parent('div').removeClass('has-success').addClass('has-warning');
        }    
    });
    var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    $('#contactEmail').keyup(function(e){
        var data = $('#contactEmail').val().trim();
        console.log(data);
        if(data.match(pattern)){
            $(this).parent('div').removeClass('has-warning').addClass('has-success');
        }
        else{
            $(this).parent('div').removeClass('has-success').addClass('has-warning');
        }    
    });
    $('#contactPhone').keyup(function(e){
        var data = $('#contactPhone').val().trim();
        console.log(data);
        if(data.length > 9){
            $(this).parent('div').removeClass('has-warning').addClass('has-success');
        }
        else{
            $(this).parent('div').removeClass('has-success').addClass('has-warning');
        }    
    });


    // changing of absolute to fixed nav bar
    $(window).scroll(function() {
	    var height = $(window).scrollTop();

	    if(height  > 90) {
	        console.log("condition true");
	        $('.navbar').removeClass('transparent-navbar').addClass('fixed-navbar fixed-navbar-shadow');
	    }
	    else{
	    	console.log("condition false");
	    	$('.navbar').removeClass('fixed-navbar fixed-navbar-shadow').addClass('transparent-navbar');
	    }
	});

	// window.addEventListener("hashchange", function() { scrollBy(10, -50) })
})

