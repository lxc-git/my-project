// JavaScript Document
$(function(){
	$("#content button").click(function(e){
		e.preventDefault?e.preventDefault():e.returnValue=false;
		var str=$("#content .txt").val();
		var str2=$("#content .txt2").val();
		var reg=/(^18(5|3|7|)[0-9]{9}$)|(^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,4})$)/ig;
		var reg2=/^(2460|7439|9854|0150|0603|7439)$/ig
		if((reg.test(str))&&(reg2.test(str2))){
			$("#content .yz").html("输入正确")
			}else{
				$("#content .yz").html("您的手机/邮箱信息输入有误 , 请检查并修正 !")
				
				}
		
		
		})
	
})