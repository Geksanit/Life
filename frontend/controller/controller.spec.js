
import {Board} from '../model/model'
import {newTable,repainter} from '../view/view'
import {init} from './controller'

describe("контроллер", function () {
    describe("события", function () {
        /*beforeEach(function(){
            this.result = fixture.load('test1.html', 'test1.json');
        });
        afterEach(function(){
            fixture.cleanup()
        });*/
        //console.dir(table);
        //var table = document.createElement('table');
        //table.id = 'board';
        //document.appendChild(table);
        //console.log(fixture);
        debugger;
        fixture.setBase('test/spec/fixtures');
        //console.log(window.__html__);123
        fixture.load('index.html');
        //var html = fixture.set('<div class="game"><table id="board"></table><div class="controls"><button class="standart-button standart-button_ standart-button_small standart-button_-small" onclick="buttonClick(event)">start</button><button class="standart-button standart-button_ standart-button_small standart-button_-small" onclick="buttonClick(event)">pause</button><button class="standart-button standart-button_ standart-button_small standart-button_-small" onclick="buttonClick(event)">clear</button> <div class="container"> <div class="label">speed</div> <div class="slider"> <div class="slider__view">1</div><input class="slider" oninput="sliderInput(event)" type="range" min="1" max="10" value="1"> </div> </div> <div class="container"> <div class="label">width</div> <div class="slider"> <div class="slider__view">10</div><input class="slider" oninput="sliderInput(event)" type="range" min="0" max="100" value="10"> </div> </div> <div class="container"> <div class="label">height</div> <div class="slider"> <div class="slider__view">10</div><input class="slider" oninput="sliderInput(event)" type="range" min="0" max="100" value="10"> </div> </div> </div> </div>)');
        //console.log(html);
        //document.appendChild(html);
        init();
        //console.dir([]);
        it('click',function () {
            var cell = table.children[0].children[0].children[0];
            console.log(cell);
            cell.click();
            assert.equal(board.matrix[0][0],true,'клик');
        });
        it('start',function () {

        });
        it('pause',function () {

        });
        it('clear',function () {

        });
        it('setWidth',function () {

        });
        it('setHeight',function () {

        });
    });
    describe("анимация", function () {
        it('anim',function () {

        });

    });

});
