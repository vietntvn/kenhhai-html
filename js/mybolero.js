var screenWidth = $(window).width();
var screenHeight = $(window).height();
var anchorCarousel;
var heightItem = $(".mdl-list .image").height();

var screenWidthInit = $(window).width();

$(function() {	
	//----------------------Banner
	  var owlOne = $("#owl-one");
	  //var owlMulti = $("#owl-multi");
	  var owlMulti = $("#owl-demo");
	  var owlMulti2 = $("#owl-demo-2");
	  var owlMulti3 = $("#owl-demo-3");
	  var owlMulti4 = $("#owl-demo-4");
	  var owlMulti5 = $("#owl-demo-5");
	  var owlMulti6 = $(".tab-carousel");
	  var owlMulti7 = $("#owl-demo-6");
	  var owlBanner = $("#owl-one-banner");	  
	  var owlCat = $("#owl-cat");	  
	  
	  
	  
	 owlOne.owlCarousel({
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem:true,
		  items:1,
		  responsive:{
				0:{
					dots:true,
					nav:false
				},
				981:{
					dots:true,
					nav:true,
					navText: ["<img src='images/k-arrow-left.svg' class='reset-img'/>","<img src='images/k-arrow-right.svg' class='reset-img'/>"]
				}
			}		  
  		});
		
	 owlBanner.owlCarousel({
			slideSpeed : 300,
		  	paginationSpeed : 400,
			responsive:{
				0:{
					items:1,
				},
				980:{
					items:1,
					dots:true,
					stagePadding: 60,
					loop:true,
					margin:10,
					nav:true,
					navText: ["<img src='images/k-arrow-left.svg' class='reset-img'/>","<img src='images/k-arrow-right.svg' class='reset-img'/>"]
				}
			}	  
  		});

	owlCat.owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		responsive: {
			0: {
				items: 4,
				margin: 10,
				stagePadding: 30,
			},
			980: {
				items: 6,
				dots: false,
				// stagePadding: 30,
				loop: false,
				margin: 10,
				nav: false
			}
		}
	});
			
	
	 carouselAll(owlMulti);
	 
	 carouselAll(owlMulti2);
	 
	 carouselAll(owlMulti3);
		
 	 carouselAll(owlMulti4);
	
	 carouselAll(owlMulti7);
	 
 	 owlMulti5.owlCarousel({
		  navigation : false, // Show next and prev buttons
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  items:5,
		  responsive:{
				0:{
					dots:false
				},
				980:{
					dots:false
				}
			}		  
  		});	   	
	 
	 owlMulti6.owlCarousel({
			loop:false,
			autoWidth:true,
			nav:false,
			margin:10
  	 });	
	 //----------------------Set height for button
	forNextAndPrev();
	
	//----------------------Show hide content
	dropDownContent();
	
	//Showpass
	showPass();
	
	//Clearinput
	clearInput();
	
	//----------------------Check class 
	//checkAndSetHeight();
	
	//----------------------Search my clip
	searchMyclip();
	
	//----------------------Set height player and resolve scroll
	//scrollAndCrop();
	
	//----------------------Show popup
    triggerPopup();
	
	//---------------------- View full view more
	viewShortFullDes();
	
	$("#tabs").tabs();
	
	//---------------------- Effect for menu top
	// scrollTopMenu();
	
	//---------------------- Padding top when fix menu top; add padding bottom for header
	smartHeader();
	
	//---------------------- Toggle item menu
	toggleMoreMenu();	
	
	//---------------------- Slider for chapters
    $('.chapterSlider').owlCarousel({
        nav:true,
        dots:false,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		margin:0,
		stagePadding:8,
		responsive:{
			0:{
				items:5
			},
			980:{
				items:9
			}
		}
    });
	
	//Showmenu
	showMenu();
	
	
	
	//----------------------Resize screen window
	$(window).resize(function() {
  			screenWidth = $(window).width();
			screenHeight = $(window).height();
		
   	    	forNextAndPrev();	
		
			if (screenWidth >= 980) {
				$("div[off-canvas$='reveal']").attr("off-canvas","slidebar-1 top reveal");
			} else {
				$("div[off-canvas$='reveal']").attr("off-canvas","slidebar-1 left reveal");
			}	
	});
		
	//Disable zoom in ios 10
	document.addEventListener('gesturestart', function (e) {
		e.preventDefault();
	});
	
	//Fix image
	fixImages();
	
	//CropItem
	//cosllapeItem();

    window.addEventListener("orientationchange", function () {
        rtimeResizeend = new Date();
        if (timeoutResizeend === false) {
            timeoutResizeend = true;
            setTimeout(resizeend, deltaResizeend);
        }
    }, false);

    window.addEventListener("resize", function () {
        rtimeResizeend = new Date();
        if (timeoutResizeend === false) {
            timeoutResizeend = true;
            setTimeout(resizeend, deltaResizeend);
        }
    }, false);
	
});	
	

//6.----------------------Selectpicker for schedule
	function searchMyclip(){
		$(".btn-search").click(function() {
			
			$(".popup-search").toggle(0, function(){
				$(".container").css({"height": 0, "overflow": "hidden"});
			});
			
			if(screenWidth < 768){/*reset in mobile*/	
				$(".mdl-body").css("margin-top","0");
			}
			
			//$(".box-search-suggess").css("height", heightBody - 40);
			$(".mdl-body").css({"height":"0", "overflow": "hidden"});
			$(".mdl-footer").css({"height":"0", "overflow": "hidden"});
			$(".mdl-header").css({"height":"0", "overflow": "hidden"});			
		});
		
		$("#closeBox").click(function() {
			$(".popup-search").hide(20);
			$(".container").css({"height":"inherit", "overflow": "inherit"});
			$(".mdl-body").css({"height":"auto", "overflow": "inherit"});
			$(".mdl-footer").css({"height":"auto", "overflow": "inherit"});
			$(".mdl-header").css({"height":"auto", "overflow": "inherit"});
			
			if(screenWidth < 768){/*add in mobile*/	
				$(".mdl-body").css("margin-top","50px");
			}
		});
		
		$(".ipt-search").focus(function() {
			$(".box-search-suggess").toggle(50);
		});		
		
		$("#clearSuggess").click(function() {
			$(".box-search-suggess").hide();
		});	
	
	}
	
//7.----------------------Thiết lập height cho khung live cam
	function setHeightLiveCam(){
		var screenHeight = $(window).height();
		var height01 = $(".mdl-live-cam .item-typing").outerHeight();
		var height02 = $(".mdl-live-cam .top-control").outerHeight();
		var height03 = $(".mdl-live-cam .title").outerHeight();
		var heightObject = $(".mdl-live-cam .scroll-content").outerHeight();		
		var chatHeight = screenHeight - (height01 + height02 + height03 + 10);
		
		$(".mdl-live-cam").css({"height":screenHeight});
		
		//Kiểm tra điều kiện trước khi thiết lập chiều cao cho khung chat
		if(heightObject > chatHeight){
			$(".mdl-live-cam .chat-control .scroll-content").css({"height":chatHeight});
		}
	}	
	
//8.----------------------Thiết lập height cho banner theo tỉ lệ 16/9
	function setHeightBanner(){
		var screenWidth = $(window).width();
		var heightBanner = ((screenWidth*9) / 16) + 2;
		$("#carousel-banner").css("height",heightBanner);
		$("#carousel-banner .owl-item").css("width",screenWidth);
		
		//$("#carousel-banner .owl-item ").css("width","100%");		
		//$("#carousel-banner .owl-item img").css("width",screenWidth);				
		$("#carousel-banner").css("overflow","hidden");
	}
	
//9.----------------------Thiết lập height cho images theo tỉ lệ 16/9
	function setHeightImage16x9(item){
		item.css("height","auto");
		var imageWidth = item.width();
		var imageHeight = ((imageWidth*9) / 16);
		item.css("height",imageHeight);
	}
	
//10.----------------------Thiết lập height cho images theo tỉ lệ 2/3
	function setHeightImage2x3(item){
		item.css("height","auto");
		var imageWidth = item.width();
		var imageHeight = ((imageWidth*3) / 2);
		item.css("height",imageHeight);
	}
	
//11.----------------------Thiết lập height cho images theo tỉ lệ 4/4
	function setHeightImage4x4(item){
		item.css("height","auto");
		var imageWidth = item.width();
		item.css("height",imageWidth);
	}
	
//12.----------------------Thiết lập height cho images theo tỉ lệ 4/3
	function setHeightImage4x3(item){
		item.css("height","auto");
		var imageWidth = item.width();
		var imageHeight = ((imageWidth*3) / 4);
		item.css("height",imageHeight);
	}
		
//13.----------------------Thiết lập height cho images theo tỉ lệ 4/4
	function paddingModule(){
		var sw = $(window).width();
		var marginLeft = (sw - $(".list-dramas .content").width()) / 2;
	}
	
//14.---------------------	Thiết lập fix menu khi scroll menu
	function fixToTop(class1,class2,topPosition) {
		$(window).scroll(function(e){

			$(class1).css("height","auto");
			$(class2).removeClass("scroll-content-fixed");
				
			var heightScreen = $(window).height();
			var heightEmbed  = $(class2).height();
			var heightBody   = $('body').height();
			
			if((heightScreen > (heightEmbed * 2)) && (heightBody > heightScreen)){
				if ($(window).scrollTop() > topPosition) { 	
						$(class1).css("height",heightEmbed);
						$(class2).addClass("scroll-content-fixed");
				} else {					
						$(class2).removeClass("scroll-content-fixed");
				}
			}
		  });
	}
	
//15.--------------------------Menu config--------------
	function menuConfig(){	
		//Cấu hình menu, đầu tiên cho phép chạy menu ở trên web
		if (screenWidth >= 980) {
			$("div[off-canvas$='reveal']").attr("off-canvas","slidebar-1 top reveal");
		} else {
			$("div[off-canvas$='reveal']").attr("off-canvas","slidebar-1 left reveal");
		}
		
		// Create a new instance of Slidebars
		var controller = new slidebars();
	
		// Events
		$( controller.events ).on( 'opening', function ( event, id ) {
			$(".close-menu").css("display","block");
			$("html").css("overflow", "hidden");
			$("body").css("overflow", "hidden");
			$(".container").css("min-height", $(window).height());
		} );
	
		$( controller.events ).on( 'closed', function ( event, id ) {
			$(".close-menu").css("display","none");
			$("html").css("overflow", "auto");
			$("body").css("overflow", "auto");			
			$(".container").css("min-height", "auto");
		} );
	
		// Initialize Slidebars
		controller.init();
	
		// Left Slidebar controls	
		$( '.js-toggle-left-slidebar' ).on( 'click', function ( event ) {
			event.stopPropagation();
			controller.toggle( 'slidebar-1' );
		} );
		
		// Close any
		$( controller.events ).on( 'opened', function () {
			$( '[canvas="container"]' ).addClass( 'js-close-any-slidebar' );
		} );
	
		$( controller.events ).on( 'closed', function () {
			$( '[canvas="container"]' ).removeClass( 'js-close-any-slidebar' );
			$(".left-menu .content").css("display","block");
		} );
	
		$( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
			event.stopPropagation();
			controller.close();
		} );
		
		$( 'body' ).on( 'click', '.close-menu-small', function ( event ) {
			event.stopPropagation();
			controller.close();
		} );
		
		$(".close-menu").on("mousedown mouseup click touchend", function ( event ) {
			event.stopPropagation();
			controller.close();	
		});
	}
	
//16.--------------------------Thiết lập hieght cho tab	
	function setHeightTab(){
		var heightTab = $(window).height() - 180;
		$(".left-menu .tab").css("height",heightTab);
		$(".left-menu .tab-container").css("height",heightTab);
		//alert("Height: " + heightTab);
	}
	
//17.----------------------Popup 
	function openPopup(){
		
		//popup piracy
		$("#piracy").click(function (e) {
			$(".overlay-popup").fadeIn();
		});
		
		$("#piracy-ok").click(function (e) {
			$(".overlay-popup").css("display","none");
		});
		
		$("#piracy-cancel").click(function (e) {		
			$(".overlay-popup").css("display","none");
		});
		
		//popup share
		$("#share").click(function (e) {
			$(".overlay-popup-2").fadeIn();
		});
		
		$(".close-popup-share").click(function (e) {
			$(".overlay-popup-2").css("display","none");
		});
		
		//popup share
		$("#episode").click(function (e) {
			$(".overlay-popup-3").fadeIn();
		});
		
		//popup default
		$("#popup").click(function (e) {
			$(".overlay-popup-4").fadeIn();
		});
		
		$(".popup-close").click(function (e) {
			$(".overlay-popup-4").css("display","none");
		});
		
		$(document).bind( "mouseup touchend", function(e){
		  	var container = $(".overlay-popup .wrap");
			var containerShare = $(".overlay-popup-2 .wrap");
			var containerEpisode = $(".overlay-popup-3 .wrap");
			var containerDefault = $(".overlay-popup-4 .wrap");
				if (!container.is(e.target) // if the target of the click isn't the container...
					&& container.has(e.target).length === 0) { // ... nor a descendant of the container 
					$(".overlay-popup").fadeOut();
				}
				
				if (!containerShare.is(e.target) // if the target of the click isn't the container...
					&& containerShare.has(e.target).length === 0) { // ... nor a descendant of the container 
					$(".overlay-popup-2").fadeOut();
				}
				
				if (!containerEpisode.is(e.target) // if the target of the click isn't the container...
					&& containerEpisode.has(e.target).length === 0) { // ... nor a descendant of the container 
					$(".overlay-popup-3").fadeOut();
				}
				
				if (!containerDefault.is(e.target) // if the target of the click isn't the container...
					&& containerDefault.has(e.target).length === 0) { // ... nor a descendant of the container 
					$(".overlay-popup-4").fadeOut();
				}
		});
	}

//18.-----------------------Crop description
	function cropDescription(){
		$(".crop-fire").click(function(e) {
           $(".crop-description").toggleClass("crop-open"); 
        });	
	}
	
//19.-----------------------setWidthTitle
	function setWidthTitle(){
		var widthTitle = $(".container").width() - $(".owl-dots").width();
		$("#carousel-banner .title-banner").css("width",widthTitle);
		//alert("Hello!" + widthTitle);
	}	
	
//20.-----------------------setWithSinger	
	function setWithSinger(){
		var widthSinger = $(".mdl-list-videos .place-holder-video").width() - $(".mdl-list-videos .place-holder-video .viewer").outerWidth() - 40;
		$(".mdl-list-videos .place-holder-video .text-singer").css("max-width",widthSinger);
	}
	
//21.-----------------------Close open support
	function openSupport(){
		//$(".mdl-support .title").click(function(e) {
			//$(".mdl-support-content").css("display","none");
			//$(this).siblings(".mdl-support-content").toggle();
			//$(".fa-angle-down").removeClass("fa-angle-up");
			//$(this).siblings(".fa-angle-down").toggleClass(".fa-angle-up");
       // });	
	}

//22.-----------------------Accordion
	function myAccordion(){
		$( "#accordion" ).accordion({
		  collapsible: true,
		  heightStyle: "content",
		  animate: {
				duration: 200
			}
		});		
	}
	
//23.-----------------------scrollDisplay
	function scrollDisplay(){
		
	var lastScrollTop = 20;
	// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
	window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
	   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
	   if (st > lastScrollTop){
		  // downscroll code
		  $(".scroll-display").fadeOut();
	   } else {
		  // upscroll code
		  $(".scroll-display").fadeIn();
	   }
	   lastScrollTop = st;
	}, false);
	
	}

//24.-----------------------changeColor	
	function changeColor() {
		$(window).scroll(function(){
			$('.navbar-fixed-top').removeClass("change-color");
			if($(window).scrollTop() > 0){
				$('.navbar-fixed-top').addClass("change-color");
			}else {
				$('.navbar-fixed-top').removeClass("change-color");	
			}
		  });
	}	

//25.-----------------------Crop body for scroll left menu
	function cropBody(){
		var screenW = $(window).width();
		var screenH = $(window).height();
		if(screenW >= 980){
			$(".js-toggle-left-slidebar").bind("click", function(){
				$("body").css("height",screenH);
				$("body").css("overflow","hidden");
			});
			
			$(".close-menu-small").bind("click", function(){
				$("body").css("height","auto");
			});
		}
	}
	
//26.-----------------------Set height player	
	function scrollAndCrop(){
		//var heightContent = $(".mdl-player .player-left").height();	
		var widthContent = $(".mdl-player .player-right").width() + 17;//17px is think of scroll
		
		//$(".mdl-player .player-right").css("height", heightContent);
		//$(".mdl-player .overscroll").css("height", heightContent);
		//$(".mdl-player .overscroll").css("width", widthContent);
	}
	
//27.-----------------------Show submenu-accuont	
	function dropDownContent(){
		var flag = false;
		var flagTwo = false;
		var triggerAccount = $(".link-account");
		var triggerMenu = $("#hamburger");
		var closeMenu = $(".close-menu");
		
		//Dropdown account
		triggerAccount.click(function(){
			if(flag === false){
				//Do something
				$(".link-account").addClass("select-sub-account");
				flag = true;				
			}else {
				//Do something
				$(".link-account").removeClass("select-sub-account");
				flag = false;
			}
			$(".link-account .sub-account").toggle(200);
		});
		
		//Dropdown menu
		$(".menu-top").css("height",screenHeight + 7);
		
		triggerMenu.click(function(){
			if(flagTwo === false){
				//Do something
				$(".icon-menu-bar").addClass("js-close");
				$("body").addClass("lm-open");
				
				/*$(".mdl-body").css("visibility","hidden");hidden content when opens menu*/
				/*$(".mdl-footer").css("visibility","hidden");hidden content when opens menu*/
				flagTwo = true;
			}else {
				//Do something
				$(".icon-menu-bar").removeClass("js-close");
				$("body").removeClass("lm-open");
				
				/*$(".mdl-body").css("visibility","visible");visible content when closes popup*/			
				/*$(".mdl-footer").css("visibility","visible");visible content when closes popup*/								
				flagTwo = false;
			}
			
			$(".mdl-header .menu-top").toggle();
		});
		
		
		$(closeMenu).bind( "mouseup touchend click", function(e){
			$("body").removeClass("lm-open");
			$(".icon-menu-bar").removeClass("js-close");
			$(".mdl-header .menu-top").css("display","none");
			
			
			flagTwo = false;
		});

	}	
	
//28.-----------------------Check class	
	function checkAndSetHeight(){
		if($("body").hasClass("bg-login")){
			$("body").css("min-height",screenHeight);
		}
	}		
	
	
//29.-----------------------Set position for button	
	function forNextAndPrev(){
		var nextButton = $(".mdl-list .owl-primary .owl-next");
		var prevButton = $(".mdl-list .owl-primary .owl-prev");
		var heightItem = $(".mdl-list .owl-primary .image").height();
		var topItem = heightItem + 35;
		 
		 nextButton.css("height",heightItem);
		 
		 nextButton.css("line-height",heightItem +"px");
		 prevButton.css("line-height",heightItem +"px");
		 
		 nextButton.css("top","-"+ (topItem - 4) +"px");
		 prevButton.css("top","-"+ (topItem - 4) +"px");
		 
		 
		 
		var nextButton2 = $(".mdl-list .owl-playing .owl-next");
		var prevButton2 = $(".mdl-list .owl-playing .owl-prev");
		var heightItem2 = $(".mdl-list .owl-playing .image").height();
		var topItem2 = heightItem2 + 58;
		 
		 nextButton2.css("height",heightItem2);
		 
		 nextButton2.css("line-height",heightItem2 +"px");
		 prevButton2.css("line-height",heightItem2 +"px");
		 
		 nextButton2.css("top","-"+ (topItem2 - 5) +"px");
		 prevButton2.css("top","-"+ (topItem2 - 5) +"px");		 
		 		 
		 //alert("Height is " + heightItemA);
			
		 //owlMulti.on('changed.owl.carousel', function(event) {
			//	  var index = event.item.index;
				  //alert("Index is " + index);
			//	  if (index == 1) {
					//$(".owl-prev").css("display","none"); 
			//	  } else {
					//$(".owl-prev").css("display","block"); 	  
			//	  }
			//});	
	}	
	
//30.-----------------------Close popup
	function triggerPopup() {
		var trigger = $(".modal-link");
		var popupFrame = $(".mdl-popup");
		var popupClose = $(".mdl-popup .close-popup");
		
		trigger.click(function(e){
			popupFrame.fadeIn(300);
			/*$(".mdl-body").css("visibility","hidden");hidden content when opens popup*/
			/*$(".mdl-footer").css("visibility","hidden");hidden content when opens popup*/
		});		
		
		$(document).bind( "mouseup touchend touchstart", function(e){
		  	var container = $(".mdl-popup .popup");
			if(!container.is(e.target) // if the target of the click isn't the container...
				&& container.has(e.target).length === 0) { // ... nor a descendant of the container 
				popupFrame.fadeOut(300);
				/*$(".mdl-body").css("visibility","visible");visible content when closes popup*/
				/*$(".mdl-footer").css("visibility","visible");visible content when closes popup*/
			}
		});		
		
		popupClose.click(function(e){
			popupFrame.fadeOut(300);
			/*$(".mdl-body").css("visibility","visible");visible content when closes popup*/
			/*$(".mdl-footer").css("visibility","visible");visible content when closes popup*/
		});
		
	}

//31.---------------------- View full view more
	function viewShortFullDes(){
		var flag = false;
		$(".btn-view").click(function(){
			if(flag === false){
				//Do something
				$(".short-des").addClass("full-des");
				flag = true;
			}else {
				//Do something
				$(".short-des").removeClass("full-des");
				flag = false;
			}
		});
	}
	
//32.---------------------- View full view more	
	function carouselAll(anchorCarousel){
		var heightItem = $(".mdl-list .image").height();
		
		anchorCarousel.owlCarousel({
			loop:false,
			margin:5,
			lazyLoad:true,
			callbacks:true,
			pagination: false,
			navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
				0:{
					nav:false,
					items:2,
					margin:5,
					stagePadding: 10
				},
				769:{
					nav:false,
					stagePadding: 10,
					margin:5,
					items:5
				},
				981:{
					stagePadding: 40,
					nav:true,
					items:5,
					slideBy:6,
					smartSpeed:100
				}
			}
		});
		
		var prevButton = $(".owl-prev",anchorCarousel);
		var nextButton = $(".owl-next",anchorCarousel);
		var widthContent = $(".owl-stage",anchorCarousel).innerWidth();
		
		anchorCarousel.on('changed.owl.carousel,drag.owl.carousel',function(event){
			var items     = event.item.count; // Number of items
			var itemx     = event.item.index; // Position of the current item
			var itemy	  = items - (1 + 5);// 5 là chỉ số phần tử đầu tiên của chuỗi hiển thị khi slide show 5 item

			
			if(itemx > 0){
				prevButton.css("height",heightItem);
			}else{
				prevButton.css("height",0);
			}
			
			if(itemx > itemy){
				nextButton.css("height",0);
			}else {
				nextButton.css("height",heightItem);	
			}			
		});	
		
		
		
		if(widthContent < 930 || widthContent < 1390){
			nextButton.css("display","none");
		}
		//alert(widthContent);
	}
	
//33.----------------------
	function scrollTopMenu() {
			//if(screenWidth > 979){
//				$(window).scroll(function(e){
//					if ($(window).scrollTop() > 50) {
//						$(".mdl-header").removeClass("effect-header");
//						$(".mdl-header").addClass("effect-header");
//					} 
//					else{	
//						$(".mdl-header").removeClass("effect-header");
//					}
//		  		});	
//			}

		$(window).scroll(function(e){
					if ($(window).scrollTop() > 50) {
						$(".mdl-header").removeClass("effect-header");
						$(".mdl-header").addClass("effect-header");
					} 
					else{	
						$(".mdl-header").removeClass("effect-header");
					}
		  		});
			

		}
		
//34.----------------------
	function toggleMoreMenu() {
			$(".btn-link-more").click(function(e){
				$(".mdl-header").toggleClass("header-add-item");				
				if(screenWidth > 980){
					$(".right-header").toggle();
					$(".anchor-event").toggle();
				}
			});
			
			$("#hamburger").click(function(e){
				$(".mdl-header").toggleClass("bg-effect-header");
			});
		}	
		
//35.----------------------
	function smartHeader(){
		if(screenWidth > 768){
			if($(".mdl-header").hasClass("navbar-fixed-top")){
				$(".mdl-body").css("margin-top","65px");
			}
		}else{
			$(".mdl-body").css("margin-top","50px");// add in mobile
		}	
	}

//36. Showmenu
	function showMenu(){
		//alert( "hello" );
		var anchorLink = ".has-menu a";
		var classTaget = "open-menu-sub";
		
		$(anchorLink).bind( "click", function() {
			if($(this).parent().hasClass(classTaget)){
				$(this).parent().removeClass(classTaget);
			}else{
				$(anchorLink).parent().removeClass(classTaget);
				$(this).parent().addClass(classTaget);
			}
		});
	}


//====== 2. FIX IMAGES ======
function fixImages(){
	
	var objectTaget = ".frame-16x9 .frame-image"; 
	var objectTaget1 = ".frame-2x3 .frame-image";
	var objectTaget2 = ".frame-4x3 .frame-image";
	
	var objectTaget3 = ".frame-16x9-sub .frame-image";
	var objectTaget4 = ".frame-2x3-sub .frame-image";
	var objectTaget5 = ".frame-4x3-sub .frame-image";
	
	var objectTaget6 = ".frame-4x4 .frame-image";
	
	//Get width parents
	var widthParent = $(objectTaget).parent().innerWidth();
	var widthParent1 = $(objectTaget1).parent().innerWidth();
	var widthParent2 = $(objectTaget2).parent().innerWidth();
	
	var widthParent3 = $(objectTaget3).parent().innerWidth();
	var widthParent4 = $(objectTaget4).parent().innerWidth();
	var widthParent5 = $(objectTaget5).parent().innerWidth();
	
	var widthParent6 = $(objectTaget6).parent().innerWidth();
	
	//Get height
	var heightObjectTaget = (widthParent * 9)/16;//16x9
	var heightObjectTaget1 = (widthParent1 * 3)/2;//2x3
	var heightObjectTaget2 = (widthParent2 * 3)/4;//4x3
	
	var heightObjectTaget3 = (widthParent3 * 9)/16;//16x9
	var heightObjectTaget4 = (widthParent4 * 3)/2;//2x3
	var heightObjectTaget5 = (widthParent5 * 3)/4;//4x3
	
	var heightObjectTaget6 = widthParent6 ;//4x4
	
	//Set height follow ratio
	$(objectTaget).css({"width":widthParent,"height":heightObjectTaget});
	$(objectTaget1).css({"width":widthParent1,"height":heightObjectTaget1});
	$(objectTaget2).css({"width":widthParent2,"height":heightObjectTaget2});
	
	$(objectTaget3).css({"width":widthParent3,"height":heightObjectTaget3});
	$(objectTaget4).css({"width":widthParent4,"height":heightObjectTaget4});
	$(objectTaget5).css({"width":widthParent5,"height":heightObjectTaget5});
	
	$(objectTaget6).css({"width":widthParent6,"height":heightObjectTaget6});
	
}


var rtimeResizeend;
var timeoutResizeend = false;
var deltaResizeend = 200;

function resizeend() {
    if (new Date() - rtimeResizeend < deltaResizeend) {
        setTimeout(resizeend, deltaResizeend);
    } else {
        timeoutResizeend = false;

        screenWindow = $(window).width();
        screenWindowH = $(window).height();

        // Call function
		fixImages();
		
		//
		if(screenWindow != screenWidthInit){
			// cosllapeItem();	
		}	
		
		$(".menu-top").css("height",screenHeight + 7);
		
    }
}

function cosllapeItem(){	
	screenWindow = $(window).width();
	var heightItem = $('.cropItem .owl-primary .item').outerHeight(true);//
	var heightItem2 = $('.cropItem .content .item').outerHeight(true);//

	
	if(screenWindow < 980)
	{
		var heightWrap = heightItem * 2;//3 number of row;
		var heightWrapLimit = heightItem * 12;//5 number of row;
		$('.cropItem .owl-primary').css('max-height', '' + heightWrap + 'px');

		var heightWrap2 = heightItem2 * 2;//3 number of row;
		var heightWrapLimit2 = heightItem2 * 12;//5 number of row;
		$('.cropItem .content').css('max-height', '' + heightWrap2 + 'px');


		$('.cropItem .view-more .icon').click(function () {
		    //console.log("xxx 1 = " + heightWrapLimit);
		    //console.log("xxx 2 = " + heightWrapLimit2);
		    $(this).parent().prev().css('max-height', '' + heightWrapLimit + 'px');
		    $(this).parent().prev().css('max-height', '' + heightWrapLimit2 + 'px');
			$(this).parent().css('display','none');			
		});	
		
		//Kiêm tra chăn hay lẻ
	} else {
		var heightWrap = heightItem * 2;//3 number of row;
		$('.cropItem .owl-primary').css('max-height', '' + heightWrap + 'px');
		//console.log("heightWrap = " + heightWrap);

		var heightWrap2 = heightItem2 * 2;//3 number of row;
		$('.cropItem .content').css('max-height', '' + heightWrap2 + 'px');
		//console.log("heightWrap2 = " + heightWrap2);
	}
}

//-------------- Show pass
function showPass(){
	$('.icon-show-pass').click(function(event){	
		var thisInput = $(this).parent().prev();
		var inputType = thisInput.attr('type');
		//console.log(inputType);
		
		if (inputType == 'text') {
			thisInput.attr('type', 'password'); 
		} else if (inputType == 'password') {
			thisInput.attr('type', 'text'); 
		}
		
		$(this).toggleClass('off-pass');
		thisInput.focus();
	});
}

//-------------- Clear input
function clearInput(){
	//1. Handler show button clear
	$('.txt-has-clear').on("keyup change", function(){
		var clearBtn = $('.icon-clear-input', $(this).parent());
		if($(this).val()){
			clearBtn.show();	
		}else{
			clearBtn.hide();
		}			
	});
	
	//2.Handler button clear
	$('.icon-clear-input').on("click", function(event){	
		var thisInput = $('.txt-has-clear', $(this).parent().parent());
		
		thisInput.val('');
		$(this).hide();
		thisInput.focus();
		$('.box-search-suggess').hide();
	});
}