//CUSTOM GA JavaScript Functionalities//
/*The following code handles how the site renders background images on certain occasions on the homepage
   as well as altering the navigation bar 
*/
/*
$(window).on("load", function(){
	
});*/

$(document).ready(function () {	
	// LOADS BACKGROUND IMAGE FOR DIFFERENT ENVIRONMENTS
	if(window.location.hash){
		console.log("There is a hash");
	}else{
		console.log("The first was not true.");
		if(window.location.href.indexOf("GXD") > -1){
			rndBgImage();
			console.log("Adds the Background for GXD");
		}else if(window.location.href.indexOf("TXT") > -1){
			rndBgImage();
			console.log("Adds the Background for GXT");		
		}else if(window.location.href.indexOf("testgtc") > -1){
			rndBgImage();  
			console.log("Adds the Background for GXS");		
		}else if(window.location.href.indexOf("gtc.dor") > -1){
			rndBgImage();    
			console.log("Adds the Background for GXP");		
		}
	}
	
	setTimeout(function(){
	if($('#d-8.DocFieldButton.FastEvtLinkClick').length > 0){
		rndBgImage();
		console.log("Added if returns to home.");
		}
	}, 1000)
	
	// Re-ADD BACKGROUND
	if($('#l_n-1-2').length > 0 && window.location.hash){
		rndBgImage();
		console.log("Background readded");
	}else if(window.location.hash && $('#l_n-1-2').length == 0){
			$("body").css("background", "#EEE9E9");
			console.log("Makes it grey again!");
	}
	
	
	console.log("Document ready is finished.");
});

$(window).on('hashchange', function(){
		// CHANGES THE THEME WHEN A USER LOGS IN 
		if($("#caption_c-7").length > 0){
        refreshKeep();
		console.log("Added new format to login page.");
		}
		// REMOVES THE BACKGROUND OUTSIDE A LOGIN
		if(window.location.hash && $('#l_n-1-2').length == 0){
			$("body").css("background", "#EEE9E9");
			console.log("This will keep background grey");
		}else{
			rndBgImage();
			console.log("readd bg");
		}
		console.log("HashChange Finished");
});
/*
$(window).on('hashchange', function(){
		if(window.location.hash && $('#l_n-1-2').length == 0){
			$("body").css("background", "#EEE9E9");
			console.log("Outside Webrequest is Detected");
			return true;
		// Initially Loads the background images.
		if(window.location.href.indexOf("GXD") > -1){
			rndBgImage();
			console.log("Initial Load of Background");
		}
		
		if(window.location.hash && $("#l_n-1-2").length > 0){
			rndBgImage();
		console.log("Dom is finished");
		}	
		}
});*/

/*
 //Removes Background Image On HashChange//
//Background3 Removal and CSS change AFTER Login//
$(window).on('hashchange', function(){
	
	
        
    // REMOVES THE BACKGROUND IMAGE
    }else if(window.location.hash && $('#l_n-1-2').length == 0){
      
});*/


        //Function that store image in array and randomly choses images.
        function rndBgImage () {
            if((window.location.href.indexOf("GXD") > -1) || (window.location.href.indexOf("TXT") > -1)){
            //GXT Environment Images
            var GXTIMAGES = [
            'https://itstest.dor.ga.gov/Images/gtcimg1.jpg',
            'https://itstest.dor.ga.gov/Images/gtcimg2.jpg',
            'https://itstest.dor.ga.gov/Images/gtcimg3.jpg',
            'https://itstest.dor.ga.gov/Images/gtcimg4.jpg'
            ];
            $('body').css({
                'background' : 'url('+ GXTIMAGES[Math.floor(Math.random() * GXTIMAGES.length)] + ') no-repeat fixed',
                'background-size' : 'cover',
                'background-position' : 'top',
                'background-attachment' : 'fixed'
                });
            }else if(window.location.href.indexOf("testgtc") > -1){
            //GXS Environment Images
            var GXSIMAGES = [
            'https://itstest.dor.ga.gov/Images/gtcimg1.jpg',
            'https://itstest.dor.ga.gov/Images/gtcimg2.jpg',
            'https://itstest.dor.ga.gov/Images/gtcimg3.jpg',
            'https://itstest.dor.ga.gov/Images/gtcimg4.jpg'
            ];
            $('body').css({
                'background' : 'url('+ GXSIMAGES[Math.floor(Math.random() * GXSIMAGES.length)] + ') no-repeat fixed',
                'background-size' : 'cover',
                'background-position' : 'top',
                'background-attachment' : 'fixed'
                });
            
            }else if(window.location.href.indexOf("gtc.dor") > -1){
            //Production Link Images
            var PRODGTCIMAGES = [
            'https://gtc.dor.ga.gov/images/GTCimg1.jpg', //Cherry Blossom Farm Ã¢â‚¬â€œ Margie
            'https://gtc.dor.ga.gov/images/GTCimg2.jpg', //River Ã¢â‚¬â€œ Henry Rutherford III
            'https://gtc.dor.ga.gov/images/GTCimg3.jpg', //Piedmont Park Ã¢â‚¬â€œ Rachel Poe
            'https://gtc.dor.ga.gov/images/GTCimg4.jpg' //Atlanta Botanical Garden Ã¢â‚¬â€œ Katherine Obarowski
            ];
            $('body').css({
                'background' : 'url('+ PRODGTCIMAGES[Math.floor(Math.random() * PRODGTCIMAGES.length)] + ') no-repeat fixed',
                'background-size' : 'cover',
                'background-position' : 'top',
                'background-attachment' : 'fixed'
                });
			}
        }
        
        //Adds the new format to the LOGIN page
        function refreshKeep() {
			$('body').addClass('Login');
			$('.PageHeaderWrapper').addClass('Login');
			$('.PageWrapper').addClass('Login');
			$('.NavigationLinks').addClass('Login');
        }
        
