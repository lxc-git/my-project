// JavaScript Document
$(function(){
 
 $("#cont4 .ppbox  p").click(function(){
	 var i = $(this).index();
	 $(this).addClass("active").siblings().removeClass("active"),
	
	//console.log(i)
	 //console.log($(this))
	 
	$("#cont4 .ppbox span").eq(i).addClass("activecon").siblings().removeClass("activecon")
	
	})
})