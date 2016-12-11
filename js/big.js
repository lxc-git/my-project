
			function abc(){
				//console.log($("#showL img"))
				var $main = $(".main");
				// offset 是通过元素与父元素的一个距离，父元素与父元素的距离 全部相加得到的和
				var offset = $main.offset();
				var $hover = $(".hover",$main);
				var $big = $(".big-img",$main);
				$(".wrap",$main).mousemove(function(e){
					//获取鼠标在页面中的坐标
//					var x = e.pageX;
//					var y = e.pageY;
//					console.log(x,y);
					
					//获取元素在页面中的坐标
					
					
					var x = e.pageX - offset.left;
					var y = e.pageY - offset.top;
					
					x -=  $hover.width() / 2;
					y -= $hover.height() / 2;
					
					// 判断是否出边界位置 （左，上）
					if(x < 0){
						x = 0;
					}
					if(y < 0){
						y = 0;
					}
					// 判断是否出边界位置 （右，下）
					if(x + $hover.width()> $main.width()){
						x = $main.width() - $hover.width();
					}
					if(y + $hover.height()> $main.height()){
						y = $main.height() - $hover.height();
					}
					$(".hover",this).css({
						"left" : x + "px",
						"top" : y + "px"
					});
					
					//计算大图与小图的比例
					var widthSize = $big.width() / $main.width();
					var heightSize = $big.height() / $main.height(); 
					//移动大图的位置
					$("img",$big).css({
						"left" : (x * widthSize * -1) + "px",
						"top" : (y * heightSize * -1) + "px",
						"width" : (widthSize * $big.width()) + "px",
						"height" : (heightSize * $big.height()) + "px"
					});
				});
			};

