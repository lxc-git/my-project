// JavaScript Document
$(function(){
	//console.log($("#top .li1"))
	$(".topCon .span1").hover(function(){
		
	$(".pRhide").show();
	
},function(){
	$(".pRhide").hide();
	})
	
	
	
	
	$(".topCon .shop").hover(function(){
	$(".topCon .shop ul").show(50),
	$(this).css({
		"background":"#fff",
		//"border":"1px solid #ccc"
		
		
		})
},function(){
	$(".topCon .shop ul").hide(50),
	$(this).css({
		"background":"#f4f4f4",
		//"border":0
		})
	
})
	
	
	
	
	
	
	
	
	
	})
	
	
