function generate() {
	var field = '0681594327597283416342671589934157268278936145156842973729318654813465792465729831';
	var arr = Array(1,2,3,4,5,6,7,8,9);
	for (var j=0;j<9;j++) arr.push(arr.splice((Math.random() * arr.length), 1));
	for (var i=1;i<82;i++) { 
		if (i%9==1) document.write('<tr>');
		document.write( (Math.random()*10>5) ? '<td>'+arr[field.substr(i,1)-1] + '</td>' : '<td class="l"><input type="text" size="1" maxlength="1" onchange="test()" onkeydown = "javascript: return ((event.keyCode>47)&&(event.keyCode<58))"></td>' );
		if (i%9==0) document.write('</tr>');
	}
}