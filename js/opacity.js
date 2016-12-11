$(function(){
	/*$("#men1 ul li").hover(function(){
		$(this).stop().animate({
			"opacity":0.7
			},1000)
		},function(){
			$(this).stop().animate({
			"opacity":1
			},1000)
			})*/
	$("#men1 ul li").mouseenter(function(){
		$(this).stop().animate({
			"opacity":0.7,
		},500,function(){
			$(this).animate({
			"opacity":1	
			},200)
		})
	})
	
	
	
	
	$("#men ul").hover(function(){
		var i=$(this).index();
				$("#men ul li").eq(i).animate({
					"left":"-10%",
					"right":"-10%",
					"top":"-10%",
					"bottom":"-10%",
				})
			},function(){
				
				$("#men ul li").animate({
					"left":"0",
					"right":"0",
					"top":"0",
					"bottom":"0",
				})
			})
	
	})
	
	$(function(){
		$("#recom p").fadeTo(0,0.7);
       		$("#recom p").each(function(index,ele){
       			$(ele).css("background-position","5px -"+(index*25)+"px");
       		})
       		$("#recom li").hover(
       			function(){
       			$(this).find("p").stop().animate({"bottom":0},500)
       		},
       		function(){
       			$(this).find("p").stop().animate({"bottom":"-40px"},500)
       		})	
	})
	