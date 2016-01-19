var num=0,result=0,numshow="0"; 
var operate=0; //判断输入状态的标志 
var calcul=0; //判断计算状态的标志 
var quit=0; //防止重复按键的标志 
function command(num){ 
	if(calcul==5){
		clearscreen();
	}
	var str=String(document.calculator.numScreen.value); //获得当前显示数据 
	str=(str!="0") ? ((operate==0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
	str=str + String(num); //给当前值追加字符 
	document.calculator.numScreen.value=str; //刷新显示 
	operate=0; //重置输入状态 
	quit=0; //重置防止重复按键的标志 
} 
function dzero(){ 
	var str=String(document.calculator.numScreen.value); 
	str=(str!="0") ? ((operate==0) ? str + "00" : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0"; 
	document.calculator.numScreen.value=str; 
	operate=0; 
} 
function dot(){ 
	var str=String(document.calculator.numScreen.value); 
	str=(str!="0") ? ((operate==0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
	for(i=0; i<=str.length;i++){ //判断是否已经有一个点号 
		if(str.substr(i,1)==".") return false; //如果有则不再插入 
		} 
	str=str + "."; 
	document.calculator.numScreen.value=str; 
	operate=0; 
} 
function del(){ //退格 
	var str=String(document.calculator.numScreen.value); 
	str=(str!="0") ? str : ""; 
	str=str.substr(0,str.length-1); 
	str=(str!="") ? str : "0"; 
	document.calculator.numScreen.value=str; 
} 
function clearscreen(){ //清除数据 
	num=0; 
	result=0; 
	numshow="0"; 
	document.calculator.numScreen.value="0"; 
} 
function plus(){ //加法 
	calculate(); //调用计算函数 
	operate=1; //更改输入状态 
	calcul=1; //更改计算状态为加 
} 
function minus(){ //减法 
	calculate(); 
	operate=1; 
	calcul=2; 
} 
function times(){ //乘法 
	calculate(); 
	operate=1; 
	calcul=3; 
} 
function divide(){ //除法 
	calculate(); 
	operate=1; 
	calcul=4; 
} 
function persent(){ //百分号 
	var fristnum=document.calculator.numScreen.value;
	var str=String(fristnum); 
	str=(str!="0") ? ((operate==0) ? String(fristnum/100): "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0"; 
	document.calculator.numScreen.value=str; 
	operate=0; 
	calcul=5; 
} 
function equal(){ //等于
	calculate();  
	operate=1; 
	num=0; 
	result=0; 
	numshow="0"; 
} 
function square(){  //平方

    var fristnum=document.calculator.numScreen.value;
	var str=String(fristnum); 
	str=(str!="0") ? ((operate==0) ? String(fristnum*fristnum): "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0"; 
	document.calculator.numScreen.value=str; 
	operate=0; 
}
function cube(){ //立方
    var fristnum=document.calculator.numScreen.value;
	var str=String(fristnum); 
	str=(str!="0") ? ((operate==0) ? String(fristnum*fristnum*fristnum): "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0"; 
	document.calculator.numScreen.value=str; 
	operate=0; 
}
function sqrt(){  //平方根
    var fristnum=document.calculator.numScreen.value;
	var str=String(fristnum); 
	str=(str!="0") ? ((operate==0) ? String(Math.sqrt(fristnum)): "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0"; 
	document.calculator.numScreen.value=str; 
	operate=0; 
}
function cubeRoot(){ //立方根
	var fristnum=document.calculator.numScreen.value;
	var str=String(fristnum); 
	str=(str!="0") ? ((operate==0) ? String(Math.pow(fristnum,1/3)): "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0"; 
	document.calculator.numScreen.value=str; 
	operate=0; 
}
function sin(){
	var fristnum=document.calculator.numScreen.value;
	var str=String(fristnum); 
	str=String(Math.sin(2*Math.PI/360*fristnum));  
	document.calculator.numScreen.value=str; 
	operate=0; 
}
function cos(){
	var fristnum=document.calculator.numScreen.value;
	var str=String(fristnum); 
	str=String(Math.cos(2*Math.PI/360*fristnum)); //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0"; 
	document.calculator.numScreen.value=str; 
	operate=0;
}
function tan(){
	var fristnum=document.calculator.numScreen.value;
	var str=String(fristnum); 
	if((fristnum==90)||(fristnum==270)){
       str="无效输入";
       calcul=5;
	}else if((fristnum==180)||(fristnum==360)){
       str="0";
       calcul=0;
	}else{
       str=String(Math.tan(2*Math.PI/360*fristnum));
       calcul=0;
	}
	document.calculator.numScreen.value=str; 
	operate=0;
} 
function log(){
	var fristnum=document.calculator.numScreen.value;
	var str=String(fristnum); 
	str=(str!="0") ? ((operate==0) ? String(Math.log(fristnum)/Math.LN10): "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0"; 
	document.calculator.numScreen.value=str; 
	operate=0;
}
function calculate(){ 
	numshow=Number(document.calculator.numScreen.value); 
	if(quit!=1){ //防重复按键的状态 
		switch(calcul){ //判断要输入状态 
			case 1:result=num+numshow;
			break; //计算"+" 
			case 2:result=num-numshow;
			break; //计算"-" 
			case 3:result=num*numshow;
			break; 
			case 4:
				if(numshow!=0){
					result=num/numshow;
				}else{
					result="错误";
				}
			break; 
		} 
		quit=1; //避免重复按键 
	} 
	else{ 
	result=numshow; 
	} 
	document.calculator.numScreen.value=String(result); 
	num=numshow; //存储当前值 
}