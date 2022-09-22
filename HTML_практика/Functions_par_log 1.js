function Autorization(){
var specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы
var is_sp = false; // Есть ли в пароле спецсимволы
  if(document.autorization.password.value==document.autorization.password1.value){
        var login= document.autorization.login.value;    
		var password=document.autorization.password.value;
		for (var i = 0; i < login.length; i++) 
			{
				if (is_sp==false && specials.indexOf(login[i]) != -1) {is_sp = true;break;}
			}
		
		if(is_sp==false)
{		
			for (var i = 0; i < password.length; i++) 
			{
				if (specials.indexOf(password[i]) != -1) {is_sp = true;break;}
			}
}

			  if(is_sp==false){
				alert("Вы успешно зарегестрированы!");
				
				$.get(
				'handler1.php',
				{a:login,b:password});
				//window.location.href = "Forms.html";
				}
				else {alert("В пароле присутствуют недопустимые спецсимволы!!!\nПопробуйте еще раз!!!");}
				
				}
		else {alert("Ошибка при вводе повторного пароля!!!\nПопробуйте еще раз!!!");}
}

function auto1()
{
	if(document.reg.login.value=="ASD1"&&document.reg.password.value=="qwerty")
	{
	window.location.href = "Forms.html";	
	}
	else {alert("Ошибка при логина и пароля!!!\nПопробуйте еще раз!!!");}
}