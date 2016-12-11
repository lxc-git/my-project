
	
	onload=function(){
				var timer=null;
				var fx=document.getElementById("fx");
				var box=document.getElementById("box");
				box.onmouseenter=fx.onmouseenter=function(){	//鼠标移入的时候触发定时器
					clearInterval(timer);//先把定时器关掉
				timer=setInterval(function(){
						if(box.offsetLeft>=-5){//先进行判断
							clearInterval(timer);
							return ;
						}
						box.style.left=box.offsetLeft+9+'px';
					},30);
				}
			box.onmouseleave=function(){
				clearInterval(timer);
				timer=setInterval(function(){
					if(box.offsetLeft<=-146){
							clearInterval(timer);
							return ;
						}
						box.style.left=box.offsetLeft-8+'px';
					},30)
				}
			}
