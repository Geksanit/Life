'use strict';

//конструктор
var Board = function(m,n) {
    //матрица m на n заполненная false
    this.matrix = [];
    this.running = false;//для циклической обработки
    this.m = m;//строки
    this.n = n;//столбцы

    for(var i=0; i<m; i++){
        var line = [];
        for(var j=0; j<n; j++){
            line.push(false);
        }
        this.matrix.push(line);
    }
};
//методы
Board.prototype={
    resize : function (m,n) {
        this.running = false;
        var matrix = this.matrix;
        var o = matrix.length;
        var p = matrix[0].length;
        //console.log('resize',o,p,' to ',m,n);
        if(p > n){//убираем столбцы
            for(var i=0; i<o; i++){
                matrix[i].splice(n-1,p-n);//изменить length?
            }
        }
        if(p < n){//добавляем столбцы
            for(var i=0; i<o; i++){
                for(var j=p; j<n; j++){
                    matrix[i].push(false);
                }
            }
        }
        if(o > m){//убираем строки
            matrix.splice(m-1,o-m);//изменить length?
        }
        if(o < m){//добавляем строки
            var line = [];
            for(var j=0; j<n; j++){
                line.push(false);
            }
            for(var i=o; i<m; i++){
                matrix.push(line.slice());
            }
        }
        this.m = m;
        this.n = n;
    },
    stop : function () {
        this.running = false;
    },
    clear : function () {
        this.running = false;
        for(var i=0; i<this.m; i++){
            for(var j=0; j<this.n; j++){
                this.matrix[i][j] = false;
            }
        }
    },
    start : function () {
        this.running = true;
    },
    worker : function () {
        //обход всех ячеек с записью нового состояния
        var newMatrix = [];
        var flag = false;//изменмлась ли матрица?
        for(var i=0; i<this.matrix.length; i++){
            var newLine = [];
            for(var j=0; j<this.matrix[0].length; j++){
                var cell = this.cell(i,j);
                newLine.push(cell);
                if(cell != this.matrix[i][j]) flag = true;
            }
            newMatrix.push(newLine);
        }
        if(flag) this.matrix = newMatrix;
    },
    cell : function (i,j) {
        //вычисляет новое состояние клетки
        //соседи за пределами поля считаются мертвыми
        var count = 0;//живые соседи
        var newCell = this.matrix[i][j];

        if(this.matrix[i-1]) {
            if (this.matrix[i - 1][j - 1]) count++;
            if (this.matrix[i - 1][j]) count++;
            if (this.matrix[i - 1][j + 1]) count++;
        }
        if(this.matrix[i][j-1]) count++;
        if(this.matrix[i][j+1]) count++;

        if(this.matrix[i+1]) {
            if (this.matrix[i + 1][j - 1]) count++;
            if (this.matrix[i + 1][j]) count++;
            if (this.matrix[i + 1][j + 1]) count++;
        }

        if(count<2 || count>3) newCell = false;
        else if(count == 3) newCell = true;
        return newCell;
    },
    setCell : function (i,j) {
        this.matrix[i][j] = !this.matrix[i][j];
    }
};
export {Board};