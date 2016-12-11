// JavaScript Document
$(function(){
	
	
	$("#formbox .btn").click(function(e){
		//var a=e.preventDefault?e.preventDefault():e.returnValue=false;
		
		var str=$("#formbox .txt").val();
		//var str2=$("#formbox .txt2").val();
		var reg=/(^1(8|5|3|7)[0-9]{9}$)|(^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,4})$)/ig;
		//var reg2=/^(2460|7439|9854|0150|0603|7439)$/ig
		var psd1=$("#formbox input[name=psd1]").val();
		var psd2=$("#formbox input[name=psd2]").val();
		setCookie("name",str);
		setCookie("psd",psd1);
		var str=getCookie("name");
		var psd=getCookie("psd");
		
		
		if((reg.test(str))&&(psd1==psd2)){
			//alert("登录成功")
			//$("#formbox .pcon a").attr("href","http://www.baidu.com");
			$("#formbox .pcon a").attr("href","denglu.html");
			$("#formbox .pcon a").attr("target","_blank")
			}else if((!reg.test(str))&&(psd1==psd2)){
				$("#formbox .yz").html("您的手机/邮箱信息输入有误 , 请检查并修正 !")
				
				}else if((reg.test(str))&&(psd1!=psd2)){
					$("#formbox .yz").html("两次密码输入不同 , 请重新输入 !")
					
					}else{
						$("#formbox .yz").html("您的手机/邮箱信息输入有误 , 请检查并修正 !")
						
						
						
						}
		
		
		
	
	})
	
	
	
	
	
})