/*$(function(){
	var html=""
	$.get("js/data.json",{},function(data){
		var objdata=data;
		//console.log(data)
		for(var key in data){
			var item=data[key];
			console.log(item.src)
		html += '<li>'+		'<a href="#">'+
							'<img src="img/'+ item.src +'" />'+
							'</a>'+
							'<p>'+item.name+'</p>'+
							'<p>'+item.price+'</p>'
				'</li>';		
		}
		$("#show .shopshow ul").append(html)
	},"json")	
})
*/
			$(function(){
				//请求 json 数据
				$.get("data.json",{},function(data){
					
					(function(){
						var html = "";
						for(var i in data){
							//通过 i 获取 value 值
							var item = data[i];
							console.log(item.name);
							//拼接所有 span 标签
							html += "<span data-i='"+ i +"'>" + item.name + "</span>";
						}
						//将所有 span 标签一次添加到 nav 元素中
						$(".nav").append(html);
					})();
					
					(function(){
						// 给 span 标签添加 click 事件
						$(".nav").on("click","span",function(e){
							//给当前元素动态添加一个 class ，查找兄弟元素中是否有这个class的元素，并且删除该 class
							$(this).addClass("cur").siblings(".cur").removeClass("cur");
							//获取 i 值
							var i = $(this).data("i");
							// i 对应的 value 取出来
							var item = data[i];
							//获取 item 中 的 list 值
							var list = item.list;
							
							var html = "";
							
							//循环遍历 list 中的元素
							for(var index = 0; index < list.length; index++){
								var child = list[index];
								html += '<li>'+
											'<a href="xiangQing.html?i='+ i +'&id='+ child.id +'">'+
												'<img src="img/'+ child.src +'" />'+
												
												'<p class="name">'+ child.name +'</p>'+
												'<p class="money">￥'+ child.money +'</p>'+
												
												/*'<h2><a href="">'+child.infor+'</a><br>'+'</h2>'+*/
												'<p class="price">活动价:'+ child.price +'元</p>'+
											'</a>'+
											'<i style="display:none;" class="shopInfo" '+
											
											'data-id="' + child.id +'" data-name="' + child.name + '" '+
												'data-src="' + child.src    +'" data-price="' + child.price    + '" '+
												'></i>'+
											'<button>购买</button>'+
										'</li>';		
							}
							//将已有的内容清空，将新的内容添加到元素中
							$(".shoplist").html(html);
						});
						//自动触发 click 事件
						$("span",".nav").eq(0).trigger("click");
					})();
					
				},"json");
				
				
				$(".shoplist").on("click","button",function(e){
					//先通过 this 元素找到父元素
					//从父元素中去取出  i (.shopInfo)
					var $i = $(".shopInfo",$(this).parent());
//				console.lo
//console.log($(".shopInfo"))
					var count = 1;
					_shopinfo( $i , count);
				});
				
			});
			/*----------------滚动显示搜索框------------------*/
$(function(){
	
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

$("#sousuo .dghover").hover(function(){
	$("#sousuo .daogou").show();
},function(){
	$("#sousuo .daogou").hide();	
})	






})


