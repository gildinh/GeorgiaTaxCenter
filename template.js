//CUSTOM GA JavaScript Functionalities//
/*The following code handles how the site renders background images on certain occasions on the homepage
   as well as altering the navigation bar 
*/
$(document).ready(function () {
	rndBgImage();
	console.log("Dom is finished");
	
	
});

$(document).on('load', function() {
		console.log("Page refreshed.");
	});
$(window).on("load", function() {
	$("body").css("background", "#EEE9E9");
	console.log("window onloiad.");
});
    //Removes Background Image On HashChange//
    //Background3 Removal and CSS change AFTER Login//
    $(window).on('hashchange', function(){
		console.log("This determines if there is a change in hash");
		///////////////SOLUTION FOR LOGIN/////////////////////////
		if($("#caption_c-7").length > 0){
            refreshKeep();
            console.log("Added new format to login page.");
			console.log("Solution for login found.");
        ////////////REMOVE BACKGROUND OUTSIDE LINKS//////////////
        }else if(window.location.hash && $('#l_n-1-2').length == 0){
            $("body").css("background", "#EEE9E9");
			console.log("This will keep background grey");
		}else{
			console.log("Else was hit");
			rndBgImage();
			console.log("If the hash doesnt change and page is refreshed.");
        }
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
        
        //Adds the new format to the LOGIN page
        function refreshKeep() {
                 $(".NavigationLinks").remove();
                 $("body").css("background", "#EEE9E9");
                 $(".PageHeaderWrapper").css({'padding-bottom' : '180px' });
                 $(".PageWrapper").css({'margin-top' : '-130px'});
        }
        
        function removeBGImage(){
            setTimeout(function(){
                //////////////LONG DELAY FOR INSIDE LOG-IN REFRESH///////////////////
                if($('.ManagerLogonOptionCaption.ManagerLogonOptionCaptionLogOff.ManagerLogonOptionLinkLogOff.FastEvtLogOff').length > 0){
                        refreshKeep();
                       }
            }, 500);  
        }
