'use strict'

//конструктор
export var Board = function(m,n) {
    this.matrix = [];//матрица m на n заполненная false
    this.running = false;//запущен ли цыкл
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
    resize : function (n,m) {
        console.log('res')
    },
    pause : function () {
        this.running = false;
    },
    start : function () {
        this.running = true;
    },
    anim : function() {
        if (this.running) window.requestAnimationFrame(this.anim);
        this.worker();
    },
    worker : function () {//обход всех ячеек с записью нового состояния
        var newMatrix = [];
        for(var i=0; i<this.matrix.length; i++){
            var newLine = [];
            for(var j=0; j<this.matrix[0].length; j++){
                newLine.push(this.cell(i,j));
            }
            newMatrix.push(newLine);
        }
        console.log('test',this.matrix);
        console.log('test',newMatrix);

        if(newMatrix === this.matrix){
            console.log('no new');
            this.running = false;
        }/*
        if(1){
            console.log('no new');
            this.running = false;
        }*/
        this.matrix = newMatrix;
    },
    cell : function (i,j) {
        //новое состояние клетки
        //соседи за пределами поля считаются мертвыми
        var count = 0;//живые соседи
        var newCell = this.matrix[i][j];//клетка

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

        //console.log(i,j,newCell,'count=',count);
        if(count<2 || count>3) newCell = false;
        else if(count == 3) newCell = true;
        //console.log(i,j,newCell,'count=',count,'after');
        return newCell
    },
    setCell : function (i,j) {
        this.matrix[i][j] = !this.matrix[i][j];
    }
};