$(document).ready(function(){

	//Header Change
 	$(window).scroll(function(){
			i=$(window).scrollTop();

			if(i!=0)
			{
				$('header').css('top','-100px');
				$('nav').css('top','0px');
			}

			else
			{
				$('header').css('top','0px');
				$('nav').css('top','100px');
			}
	});

	//Paralax
	$(window).scroll(function(){
		i=$(window).scrollTop();
		backgroundpos=(i/2);
		$('.first').css("background-position","0px " + backgroundpos +"px");
	});
	
	//Responsive Nav
	var menu=0;
	$('.menu-button').click(function(){
		if(menu==0)
		{
			$('.responsive-menu').animate({'right': '0px'}, 500);
			$('body').animate({'right': '270px'}, 500);
			menu=1;
		}

		else
		{
			$('.responsive-menu').animate({'right': '-270px'}, 500);
			$('body').animate({'right': '0px'}, 500);
			menu=0;
		}
	});

	//Zoom image
	var val;
	var zoom=0;

	$('section.event .event-wrap-row img').click(function(){

		val=$(this).attr('src');
		console.log(val);
		zoom=1;
		$('.zoomed img.picture').attr('src',val);
		$('.black').css('display','block');
		$('.zoomed').css('display','block');
	});

	$('.zoomed .cross').click(function(){
		$('.black').css('display','none');
		$('.zoomed').css('display','none');
		zoom=0;
	});

	$('.black').click(function(){
		$('.black').css('display','none');
		$('.zoomed').css('display','none');
		zoom=0;
	});

});