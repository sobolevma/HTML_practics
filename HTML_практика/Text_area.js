
	//var g=false;
	//for (var i = 0; i < theForm.length; i++) 
		//if( theForm.elements[i].name !=""){g=true;break;}
	//var w = document.getElementById('yourcomment').value;
	//if(w!="")
	//{alert("Спасибо за ваш комментарий.";}
	//else
	//{alert("Пожалуйста, напишите ваши пожелания. Ваше мнение очень важно для меня.";}


function Result(){
    var text =document.formtxt.yourcomment.value;		
	if(text!="")
		alert("Спасибо, за ваш комментарий.");
	else
		alert("Введите текст комментария, пожалуйста.");

}

