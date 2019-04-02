function generate() {
	var field = '0681594327597283416342671589934157268278936145156842973729318654813465792465729831';
	var arr = Array(1,2,3,4,5,6,7,8,9);
	var n = 9;
	sessionStorage['mas'] = [];
	for (var i=0;i<9;i++) 
	for (var j=0;j<9;j++) 	
		sessionStorage['mas['+i+']['+j+']']=0;
	for (var i = 0; i < n; i++)
    	sessionStorage['mas['+i+']'] = [];
	for (var j=0;j<9;j++) arr.push(arr.splice((Math.random() * arr.length), 1));
	for (var i=1;i<82;i++) { 
		if (i%9==1) document.write('<tr>');
		if ((Math.random()*10>6))
		{
			var num =arr[field.substr(i,1)-1];
			var k=Math.floor(i/9);
			var t=i%9;
			if (t==0)
			{
				t=8;
				k--;
			}
			else
				t--;
			document.write('<td>'+ num + '</td>');
			sessionStorage['mas['+(k)+']['+t+']']=num;

		}
		else
			document.write('<td class="l"><input type="text" name='+i+' autocomplete="off" size="1" maxlength="1" onchange="change(this.name,this,value)"onkeydown = "javascript: return ((event.keyCode>47)&&(event.keyCode<58))"></td>');
		if (i%9==0) document.write('</tr>');
	}
}
function change(cell,value)
{
	var k=Math.floor(cell/9);
	var t=(cell%9)-1;
		if (t<0)
			{
				t=8;
				k--;
			}
	sessionStorage['mas['+k+']['+t+']']=value;
}

function chekedAllCells()
{

	for (var i=0;i<9;i++) { 
		for (var j=0;j<9;j++) 
		{
			if(sessionStorage['mas['+i+']['+j+']']<1)
			{			
				alert(i+","+j);
				return false;	
			}

		}
		
	}
	return true;
}
function checkwin()
{
	var arr=[];
	for (var i=0;i<9;i++)
		arr[i]=0;
	for (var i=0;i<9;i++) 
		for (var j=0;j<9;j++) 
			if ((arr[(sessionStorage['mas['+i+']['+j+']']-1)])==i)
			{
				arr[(sessionStorage['mas['+i+']['+j+']']-1)]++;
			}
			else
			{
				return false;
			}

			for (var i=0;i<9;i++)
		arr[i]=0;
				
	for (var j=0;j<9;j++) 
		for (var i=0;i<9;i++) 
			if ((arr[(sessionStorage['mas['+i+']['+j+']']-1)])==j)
			{

				arr[(sessionStorage['mas['+i+']['+j+']']-1)]++;
			}
			else
			{
				//alert(i+","+j+"2");
				return false;
			}
}