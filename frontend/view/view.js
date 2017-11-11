//отрисовка матрицы

export var painter = function (matrix) {
    //заполнение таблицы
    //console.log('painter');
    var m = matrix.length;
    var n = matrix[0].length;
    //console.log(m,n);

    var tbody = document.createElement('tbody');
    for(var i=0; i<m; i++){
        var tr = document.createElement('tr');
        for(var j=0; j<n; j++){
            var  td = document.createElement('td');
            if(matrix[i][j]) td.className = 'live';
            tr.appendChild(td);
        };
        tbody.appendChild(tr);
    };

    return tbody
};

export var newTable = function (board) {
    var table = document.getElementById('board');
    console.dir(table);
    var tbody = painter(board.matrix);
    if(table.children.length) table.replaceChild(tbody, table.children[0]);
    else table.appendChild(tbody);
};

export var repainter = function (matrix,tbody) {
    //перерисовка таблицы
    //console.log('repainter');
    var m = matrix.length;
    var n = matrix[0].length;
    //console.log(m,n);

    for(var i=0; i<m; i++){
        for(var j=0; j<n; j++){//строка
            var td = tbody.children[i].children[j];
            if(matrix[i][j]) td.className = 'live';
            else td.className = '';
        };
    };
    return tbody
};