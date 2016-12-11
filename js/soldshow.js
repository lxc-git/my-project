$(function(){
	var $soldshow = $("#soldshow"); //获取轮播图容器
	
	var $ul = $("ul",$soldshow); //获取 ul 对象
	
	//last
	//获取选择器选择后的结果中的最后一个元素
	var $last = $("li",$ul).last().clone(); 
	//first
	//获取选择器选择后的结果中的最后一个元素
	var $first = $("li",$ul).first().clone(); 
	$($ul).prepend($last);
	$($ul).append($first);
	
	var imgs = $("img",$soldshow);
	var size = imgs.length;  // 不要用 imgs.size() 用 length 获取元素个数
	
	/*
	 	屏幕大小发生改变时可以自适应
	 	size 是 图片个数 *　100 就是所有 图片的宽度的和
	 * */
	$ul.css({
		"width" : (size * 50) + "%" 
	});
	// 100 / 图片个数 等于 单个 #main 的宽度
	$("li",$ul).css({
		"width" : (50 / size) + "%"
	});
	
	
	//因为前面 复制了一张图片到最前面去
	var index = 1; //记录当前移动的第几张图片
	
	
	/**
	 * move
	 * 动画函数
	 * @param animate [控制动画使用某种方式移动]
	 */
	function move(animate){
		if(animate == "css"){
			$ul.css({
				"left" : -index*240
			});
		}else{
			$ul.stop().animate({
				"left" :-index*240
			},1000,function(){
				if(index == size - 1){
					index = 1; //第二张才是真实的第一张图片
					move("css");
				}
				if(index == 0){
					index = size - 2;
					move("css");
				}
			});
		}
	}
	
	move("css"); // 页面加载完执行，显示图片到第一张位置
	
	
	//点击按钮
	//只需要负责控制显示某一张图片
	
	$soldshow.on("click",".button > span",function(){
		var number = $(this).data("number"); //data 方法内部有隐式转换 会自动判断数据类型
		index += number;
		
		if(index < 0){
			index = size -1;
		}
		if(index >= size){
			index = 0;
		}
		move();
	});
	
	var interval;
	//绑定定时器
	function bindInterval(){
		clearInterval(interval);
		interval = setInterval(function(){
			index++;
			move();
		},2000);
	}
	
	
	$soldshow.hover(function(){
		
		//当鼠标滑入
		clearInterval(interval);
	},function(){
		//当鼠标滑出
		bindInterval();
		
	});
	bindInterval(); //手动启动定时
	$("#soldshow span").hover(function(){
		$(this).css("background","#777")
	},
		function(){
		$(this).css("background","#999")
		}
	
	)
	
	
	
	
	
	
	
	
})