// JavaScript Document

		$(function(){
			
			/*-----navshow展示-------------*/
$("#nav ul li").mouseenter(function(){
	 i = $(this).index();
	
	 	
		$(".navshow").eq(i).show();
		$(".navshow1").css({
			"border":"0px",
			"opacity":0
			});
		$("#nav ul li .acon").eq(i).css({
			"color":"#fff",
			"background":"#a00",
			})
})
$("#nav ul li").mouseleave(function(){
	
		$(".navshow").eq(i).hide();
		$("#nav ul li .acon").css({
			"background":"#fff",
			"color":"#000",
			
			})
		
})
			})		

$(function(){
	var randomImg=["images/random1.jpg","images/random1.jpg","images/random2.jpg","images/random3.jpg","images/random4.jpg","images/random5.jpg"]
	
	
	$(".p3 img").click(function(){
		var rannumber=Math.ceil(Math.random()*4)
		
		$(this).attr("src","images/random"+rannumber+".jpg")
		
		})
	
	})
