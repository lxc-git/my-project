
$(function(){
	/*商品展示*/
	$(".showL .ulsmall li").hover(function(){
	 i=$(this).index();
	 $(this).css({
	 	"border":"1px solid #ccc"
	 }).siblings().css("border","0")
	$(".showL .imgbox img").eq(i).show().siblings().hide();
	})
	/*商品详情切换*/
	
	$("#product ul li").click(function(){
		var j=$(this).index();
		$(this).addClass("active").siblings().removeClass("active")
			
		
		$("#product div" ).eq(j).show().siblings().not("ul,.img1").hide();
	})
	
})

$(function(){
				//获取 ？ 后面的值
				var search = (location.search || location.href).split("?");
				if(search.length > 1){
					search = search[search.length - 1];
				}else{
					search = "";
				}
				var obj = {};
				//如果 地址栏参数存在
				if(search){
					// 以 & 符合分割 字符串
					search = search.split("&");
					//循环遍历分割后的字符串
					for(var i=0;i<search.length;i++){
						//以 = 号分割
						var item = search[i].split("=");
						obj[item[0]] = item[1];
					}
				}
				//获取所有商品信息
				$.get("data.json",{},function(data){
					var i = obj.i; // 获取 i (分类的 key 值)
					//获取 i 对于的 value 值
					var item = data[i];
					//获取 该分类下的所有商品
					var list = item.list;
					var shopInfo; //商品详情
					//循环查找对应的商品
					for(var index = 0; index<list.length; index++){
						var child = list[index];
						//找到对应的商品
						if(child.id == obj.id){
							shopInfo = child;
							break;
						}
					}
					
					var html = 
					'<div class="showL">'+
					'<div class="main"><div class="wrap"><div class="content">'+
					'<img src="img/'+ shopInfo.src +'" />'+
				'</div>'+
				'<div class="hover"></div>'+
			'</div>'+
			'<div class="big-img">'+
				'<img src="img/'+ shopInfo.src +'" />'+
			'</div>'+
		'</div>'+	
				
			
		
			
					
					
					
					
					
					
					
					
					
				/*<div class="main">
			<div class="wrap">
				<div class="content">*/
					/**/
				
		
					
					
					
					
					
					
					
					
					
					
					
					
					
					'</div>'+
								
								//'<button>购买</button>'+	
					
					'<div class="showR">'+
					
						'<h2><a href="">'+
						shopInfo.infor+'</a><br><span>'+'牛皮 女士 手提包'+'</span>'+
						'</h2>'+
						'<p>' + shopInfo.name + '</p>'+
								'<p class="price">'+ shopInfo.price +'元</p>'+
								'<p class="money">'+ shopInfo.money +'元</p>'+
						
						'<p><button>即可购买</button><button class="btn2">加入购物袋</button></p>'+
						
						'<p class="pline">美西时尚100%正品,订购热线400-500-3456</p>'+
					
						
					'</div>'+
					
								
								'<i style="display:none;" class="shopInfo" '+
								'data-id="' + shopInfo.id +'" data-name="' + shopInfo.name + '" '+
								'data-src="' + shopInfo.src +'" data-price="' + shopInfo.price + '" '+
								'></i>';

					$("#show").append(html);
					
					abc();
					
				},"json")
			});
			$(function(){
				//将页面中的自定义属性取出来
				//封装为一个对象
				function click(e){
					var count = 1; //默认购买一件商品
					//$(".shopInfo") 商品的详细信息
					_shopinfo( $(".shopInfo") ,count);
					if(!confirm("是否继续购物，取消直接去购物车页面")){
						//跳转到购物车页面
						window.location.href = "./myshopping.html";
					}
				}
				console.log($(".shopInfo"))
				//购买按钮
				$("#show").on("click",".btn2",click);
				$("#shopbtn").on("click",click);
			});