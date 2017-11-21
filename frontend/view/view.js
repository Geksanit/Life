'use strict';

//отрисовка матрицы
var painter = function (board,tableWidth) {
    //заполнение тела таблицы
    var matrix = board.matrix;
    var m = matrix.length;
    var n = matrix[0].length;
    //console.log(m,n);
    var width = tableWidth/n;
    var height = width;

    var tbody = document.createElement('tbody');
    for(var i=0; i<m; i+=1){
        var tr = document.createElement('tr');
        for(var j=0; j<n; j+=1){
            var  td = document.createElement('td');
            td.style.width=width+'px';
            td.style.height=height+'px';
            if(matrix[i][j]) td.className = 'live';
            tr.appendChild(td);
        };
        tbody.appendChild(tr);
    };
    return tbody;
};

var newTable = function (board,table) {
    //для  создания и ресайза таблицы
    var tbody = painter(board,table.clientWidth);
    if(table.children.length) table.replaceChild(tbody, table.children[0]);
    else table.appendChild(tbody);
};

var repainter = function (board,table) {
    //изменение класса у ячеек таблицы
    var matrix = board.matrix;
    var tbody = table.children[0];
    var m = matrix.length;
    var n = matrix[0].length;
    //console.log(m,n);

    for(var i=0; i<m; i+=1){
        for(var j=0; j<n; j+=1){//строка
            var td = tbody.children[i].children[j];
            if(matrix[i][j]) td.className = 'live';
            else td.className = '';
        };
    };
};
export {painter,newTable,repainter};