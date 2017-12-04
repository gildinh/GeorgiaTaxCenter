// CUSTOM GA JavaScript Functionalities //
/* The following code handles how the site renders background images on 
   certain occasions on the homepageas well as altering the navigation bar */

$(window).on("load", function(){
	setTimeout(function(){
	if(window.location.hash == ''){
		rndBgImage();
		console.log("Backgroung to load when there is no hash.");
		return false;
	}if($("#caption_c-7").length > 0 && window.location.hash !== ''){
		refreshKeep();
		return false;
	}	
	},200);
	
});

$(window).on('hashchange', function(){
	if($("#caption_c-7").length > 0 && window.location.hash !== ''){
		refreshKeep();
		return false;
	}else if($('#d-8.DocFieldButton.FastEvtLinkClick').length == 0 && window.location.hash !== ''){
		removeBGI();
		console.log("Outside request will remove image.");
		return false;
	}else if($('#d-8.DocFieldButton.FastEvtLinkClick').length > 0 && window.location.hash !== ''){
		rndBgImage();
		console.log("Checks for the Login Div and re-adds background");
		return false;
	}else{return true;}
});

$(window).ready(function(){	
});

$(document).ready(function(){
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
function refreshKeep() {$("body").css("background", "#EEE9E9"); $('.PageHeaderWrapper').addClass('Login'); $('.PageWrapper').addClass('Login'); $('.NavigationLinks').addClass('Login');}
        
