// JavaScript Document
$(function(){
	$(".form .btn").click(function(e){
		//var a=e.preventDefault?e.preventDefault():e.returnValue=false;
		
		var str=$(".form .txt").val();
		var psd=$(".form .psd1").val();
		var reg=/(^1(8|5|3|7)[0-9]{9}$)|(^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,4})$)/ig;
		//var reg2=/^(2460|7439|9854|0150|0603|7439)$/ig
		//var str=getCookie("name");
		//var psd=getCookie("psd");
		//console.log(str)
		
		if(reg.test(str)&&(str==getCookie("name")&&(psd==getCookie("psd")))){
			$(".form .yz").html("");
			alert("登录成功!!!")
			//window.location.href="./sy1.html";
			$(".form .pcon a").attr("href","sy1.html");
			//$(".form .pcon a").attr("target","_blank")
			
			}else if(!reg.test(str)){
				$(".form .yz").html("您的手机/邮箱信息或密码输入有误 , 请检查并修正 !")
				
			}
	})
	var name=getCookie("name");
	if(name==""){
		$(".topCon .name").html("注册")
		$(".topCon .ac").html("登录")
	}else{
		$(".topCon .name").html(name);
		
		$(".topCon .ac").html("退出")
	}
	
	
})