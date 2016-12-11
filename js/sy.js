onload=function(){
				var banner=document.getElementById("banner");
				var oul= document.getElementById("banneroul");
				var list = oul.children[0];
				//var navlist = nav.children;
				var index = 1;
				var timer = setInterval(abc, 500)
				banner.onmouseover=function(){
					pre.style.display="block";
					next.style.display="block";
					clearInterval(timer);
				}
				banner.onmouseout=function(){
					timer = setInterval(abc, 500);
					pre.style.display="none";
					next.style.display="none";
				}
				pre.onclick=function(){
					index -= 2;
					if(index<0){
						oul.style.left="-6706px";
						index=4;
					}
					abc();
				}
				next.onclick=function(){
					if(index==6){
						oul.style.left="6706px";
						index=1;
					}
					abc();
				}
				function abc() {
					animate(oul, {
						left: index * -list.offsetWidth
					}, {
						callback: function() {
							index++;
							if(index == 8) {
								oul.style.left = 0;
								index = 1;
							}
						}
					});
					/*for(var i = 0; i < navlist.length; i++) {
						navlist[i].className = "";
					}
					navlist[index == 8 ? 0 : index].className = "active";*/
				}
/*-----navshow展示-------------*/
$("#nav ul li").mouseenter(function(){
	 i = $(this).index();
	 //alert(i)
	 	
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
/*sousuo*/
var docscrolltop=$("#top").height()+$("#logo").height()+$("#nav").height();//距离顶部的距离
$(window).scroll(function(){
var scrollheight=$(document).scrollTop();//获取滚动距离

if(scrollheight>=docscrolltop){
	
$("#sousuo").css({
							"position":"fixed",
							"top":0,
							"display":"block",
						}).fadeIn(1000)
					
					}else{
						$("#sousuo").css({
							"position":"static",
							"display":"none",
						}).fadeOut(1000)
					} 


});
/*top	*/	
	

	
	

}