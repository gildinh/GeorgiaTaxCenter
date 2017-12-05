// CUSTOM GA JavaScript Functionalities //
/* The following code handles how the site renders background images on 
   certain occasions on the homepageas well as altering the navigation bar */

$(window).on("load", function(){
	setTimeout(function(){
		// Solution for View on Tap
		if(window.location.hash == '' && $("#caption_c-7").length > 0){
			refreshKeep();
			return false;
		// Loads Background Initially and upon refresh
		}if(($('#d-8.DocFieldButton.FastEvtLinkClick').length > 0 && window.location.hash == '') || ($('#d-8.DocFieldButton.FastEvtLinkClick').length > 0 && window.location.hash !== '') || (window.location.hash == '' && $("#caption_c-7").length == 0)){
			rndBgImage();
			return false;
		}
	},200);
});

$(document).ready(function () {
	if(window.location.hash !== '' && ('onhashchange' in document) == false && $("#caption_c-7").length > 0){
		refreshKeep();
		console.log("removed links");
	}return false;
	
	setTimeout(function(){
		if($("#caption_c-7").length > 0 && ('onhashchange' in document) == false){
			refreshKeep();
			console.log("Refresh Inside");
			return false;
		}
	},500);
});


// Event Listener for when hashchanges.
$(window).on('hashchange', function(){
	// New Login Format.
	if($("#caption_c-7").length > 0 && window.location.hash !== ''){ remove();refreshKeep();return false;}
	// Removes Background Outside Web Request
	else if($('#d-8.DocFieldButton.FastEvtLinkClick').length == 0 && window.location.hash !== ''){removeBGI();return false;}
	// Loads Background When go back to home page
	else if($('#d-8.DocFieldButton.FastEvtLinkClick').length > 0 && window.location.hash !== ''){rndBgImage();return false;}
	else{return true;}
});

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

// Function for No Background Image
function removeBGI() {$("body").css("background", "#EEE9E9");}
  
//Adds the new format to the LOGIN page
function refreshKeep() {$(".NavigationLinks").remove();$("body").css("background", "#EEE9E9"); $('.PageHeaderWrapper').addClass('Login'); $('.PageWrapper').addClass('Login'); $('.NavigationLinks').addClass('Login');}
