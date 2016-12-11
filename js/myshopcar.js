$(function(){
				var cars = getCookie("cars");
				//如果 cookie 有商品信息
				if(cars){
					//将商品信息转换为对象
					cars = JSON.parse(cars);
				}else{
					//默认空数据
					cars = [];
				}
				
			
				var html = "";
				//循环 cookie 中的商品信息
				//动态生成 html
				//console.log(shopinfo.src );
				cars.forEach(function(shopinfo,i){
					html += '<div class="shop-item clearfix">'+
						'<img class="fl" src="img/'+ shopinfo.src +'" alt="" />'+
						'<p class="fl">'+ shopinfo.name +'</p>'+
						'<span class="fl">'+ shopinfo.price +'元</span>'+
						'<p class="fl count" '+
							'data-id="'+ shopinfo.id +'" '+
							'data-price="'+ shopinfo.price +'" data-count="'+ shopinfo.count +'"'+
							'data-name="'+ shopinfo.name +'" data-src="'+ shopinfo.src +'"'+
							'>'+
							'<span class="updateCount" data-number="1">+</span>'+
							'<span class="shop-count">'+ shopinfo.count +'</span>'+
							'<span class="updateCount" data-number="-1">-</span>'+
						'</p>'+
						'<em class="fl sumPrice">共'+' <span>'+(shopinfo.count * shopinfo.price) +'</span>'+'元</em>'+
						'<i class="fl delBtn">删除</i>'+
						'<div class="main-3 Con" >'+
				'<p class="main-3L"><<继续购物</p>'+
				'<div class="main-3R">'+
				
					'<a href="getshopping.html"><button></button></a>'+
				'</div>'+
			'</div>'+
					'</div>';
				});
				$("#main").html(html);
				//alert();
				$("#main").on("click",".delBtn",function(e){
					if(confirm("是否确认删除 ？ ")){
						var $shopItem = $(this).parents(".shop-item");
						//取出商品信息
						var $p = $(this).siblings(".count");
						//删除该商品
						removeShopCar($p.data());
						$shopItem.remove();
					}
				});
				$("#main").on("click",".updateCount",function(e){
					var $shopItem = $(this).parents(".shop-item");
					var number = $(this).data("number");
					var $p = $(this).parent();
					var price =$p.data("price");
					var count = $p.data("count");
					//console.log(price)
					//修改后的数量
					count += number;
					if(count < 1){
						//如果点击确定
						if(confirm("商品数量不能小于1，确认从购物移除吗？")){
							//将该商品从购物车中删除
							$shopItem.remove();
							//不传参数时，会将所有的 data 数据以对象形式返回
							//删除该商品
							removeShopCar($p.data());
						}
						return false;
					}
					
					//把修改后的数量存入 元素中
					$p.data("count",count);
					
					var sum = price * count;
					
					//获取小计的元素节点
					var $sumPrice = $shopItem.find(".sumPrice");
					
					$sumPrice.html("共"+'<span>'+sum+'</span>' + "元");//alert(sum)
				//$(this).siblings(".main-3R p span").html(sum+"元");
					
					
					//找到数量的元素节点，修改数量
					$(this).siblings(".shop-count").html(count);
					//将修改的商品数量传入过去
					_shopinfo($p,number);
				});
			});