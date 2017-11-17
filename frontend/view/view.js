//отрисовка матрицы

export var painter = function (board) {
    //заполнение таблицы
    var matrix = board.matrix;
    var m = matrix.length;
    var n = matrix[0].length;
    //console.log(m,n);
    var width = 400/n;
    var height = 400/m;

    var tbody = document.createElement('tbody');
    for(var i=0; i<m; i++){
        var tr = document.createElement('tr');
        for(var j=0; j<n; j++){
            var  td = document.createElement('td');
            td.style.width=width+'px';
            td.style.height=width+'px';
            if(matrix[i][j]) td.className = 'live';
            tr.appendChild(td);
        };
        tbody.appendChild(tr);
    };
    return tbody
};

export var newTable = function (board,table) {
    //для  создания и ресайза таблицы
    var tbody = painter(board);
    if(table.children.length) table.replaceChild(tbody, table.children[0]);
    else table.appendChild(tbody);
};

export var repainter = function (board,table) {
    //перерисовка таблицы
    var matrix = board.matrix;
    var tbody = table.children[0];
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
};