import './index.styl';
import './favicons/favicons';
import './components/slider/slider';
import './components/standart-button/standart-button';
import Controller from './mvc/controller/Controller';
import Model from './mvc/model/Model';
import View from './mvc/view/View';

const controller = new Controller(new Model(10, 10), new View());
