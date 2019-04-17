/**
*Генерация судоку
*
*Данная функция перемешивает значения шаблона и отображает частично заполненную таблицу
*/
function generate() {
    var field = '0681594327597283416342671589934157268278936145156842973729318654813465792465729831';
	var arr = Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
	var n = 9;
    sessionStorage['mas'] = [];
	for (var i = 0; i < 9; i++) 
	for (var j = 0; j < 9; j++) 	
		sessionStorage['mas[' + i + '][' + j + ']'] = 0;
	for (var i = 0; i < n; i++)
        sessionStorage['mas[' + i + ']'] = [];
	for (var j = 0; j < 9; j++) arr.push(arr.splice((Math.random() * arr.length), 1));
	for (var i = 1; i < 82; i++) { 
		if (i % 9 == 1) document.write('<tr>');
		if ((Math.random() * 10 > complication)) {
			var num = arr[field.substr(i, 1) - 1];
			var k = Math.floor(i / 9);
			var t = i % 9;
			if (t == 0) {
			    t = 8;
				k--;
			}
			else
				t--;
			document.write('<td>' + num + '</td>');
			sessionStorage['mas[' + (k) + '][' + t + ']'] = num;

		}
		else
			document.write('<td class="l"><input type="text" name=' + i + ' autocomplete="off" size="1" maxlength="1" onchange="change(this.name,this,value)"onkeydown = "javascript: return ((event.keyCode>47)&&(event.keyCode<58))"></td>');
		if (i % 9 == 0) document.write('</tr>');
	}
}
/**
*Фиксирование введённого пользователем значения
*
*Данный метод записывает введённое пользователем значение в массив
*и проверяет на завершение решения 
*
*@param {int} cell изменяемая ячейка
*@param {int} value значение ячейки
*
*/
function change(cell, value) {
	var k = Math.floor(cell / 9);
	var t = (cell % 9) - 1;
		if (t < 0) {
				t = 8;
				k--;
			}
	sessionStorage['mas[' + k + '][' + t + ']'] = value;
		if (chekedAllCells())
	if (checkwin())
		alert ("Вы победили!");
	else 
		alert ("Попробуйте ещё раз");
}
/**
*Проверка заполнена ли таблица
*
*Данный метод проверяет заполнена ли таблица
*
*/
function chekedAllCells() {

	for (var i = 0; i < 9; i++) { 
		for (var j = 0; j < 9; j++) {
			if(sessionStorage['mas[' + i + '][' + j + ']'] < 1){			
				alert(i + "," + j);
				return false;	
			}

		}
		
	}
	return true;
}
/**
*Проверка таблицы на правильность
*
*Данный метод проверяет на наличие совпадений цифр по столбцам,
*строкам или блокам 3х3
*
*/
function checkwin() {
	var arr = [];
	for (var i = 0; i < 9; i++)
		arr[i] = 0;
	for (var i = 0; i < 9; i++) 
		for (var j = 0; j < 9; j++) 
			if ((arr[(sessionStorage['mas[' + i + '][' + j + ']'] - 1)]) == i){
				arr[(sessionStorage['mas[' + i + '][' + j + ']'] - 1)]++;
			}
			else {
				return false;
			}

			for (var i = 0; i < 9; i++)
		arr[i] = 0;
				
	for (var j = 0; j < 9; j++) 
		for (var i = 0; i < 9; i++) 
			if ((arr[(sessionStorage['mas[' + i + '][' + j + ']'] - 1)]) == j) {

				arr[(sessionStorage['mas[' + i + '][' + j + ']'] - 1)]++;
			}
			else{
				return false;
			}
	for (var k1 = 0; k1 < 3; k1++) {
		for(var k2=0;k2<3;k2++) {
			for (var t = 0; t < 9; t++)
				arr[t] = 0;
			for (var i = 0; i < 3; i++) 
				for (var j = 0; j < 3; j++) 
					if (arr[sessionStorage['mas[' + (i + (k1 * 3)) + '][' + (j + (k2 * 3)) + ']'] - 1] == 0) {
						arr[sessionStorage['mas[' + (i + (k1 * 3)) + '][' + (j + (k2 * 3)) + ']'] - 1]++;
					}
					else {
						return false;
					}
		}
	}
	return true;
}