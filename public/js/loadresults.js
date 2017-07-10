$(document).ready(function(){
var this_js_script = $('script[src*=loadresults]');
var my_var_1 = this_js_script.attr('data-my_var_1');
var contentsection=document.getElementById("contentsection");
$.get("/event/"+my_var_1, function(data){
  	for(var i=0; i<data.length; i++)
  	{
  		var j=data[i];
  		console.log(j);
  		var abc='<h6>'+j.title+'</h6><p>'+j.description+'</p>';
  		abc+='<div class="event-wrap-row" id="imagewrap">';
  		var imgarray=j.images;
  		for(var x=0; x<imgarray.length; x++)
  		{
  			abc+='<img src="'+imgarray[x]+'">';
  		}
  		abc+='</div>'
  		contentsection.innerHTML+=abc;

  	}
 var temp= 	$('section.event .event-wrap-row img');
 temp.click(function(){

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
});
	