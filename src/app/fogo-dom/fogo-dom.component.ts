import { Component } from '@angular/core';

@Component({
  selector: 'app-fogo-dom',
  templateUrl: './fogo-dom.component.html',
  styleUrls: ['./fogo-dom.component.scss']
})
export class FogoDomComponent {

  debbug: boolean = false;
  firePixelArray: number[][] = [];
  fireWidth: number = 50; // Colunas = Altura
  fireHeight: number = 50; //Linhas = Largura
  interval: number = 50;
  multNumber: number = 3;
  palette: any[] = ['rgb(7,7,7)', 'rgb(31,7,7)', 'rgb(47,15,7)', 'rgb(71,15,7)', 'rgb(87,23,7)', 'rgb(103,31,7)', 'rgb(119,31,7)', 'rgb(143,39,7)', 'rgb(159,47,7)', 'rgb(175,63,7)', 'rgb(191,71,7)', 'rgb(199,71,7)', 'rgb(223,79,7)', 'rgb(223,87,7)', 'rgb(223,87,7)', 'rgb(215,95,7)', 'rgb(215,95,7)', 'rgb(215,103,15)', 'rgb(207,111,15)', 'rgb(207,119,15)', 'rgb(207,127,15)', 'rgb(207,135,23)', 'rgb(199,135,23)', 'rgb(199,143,23)', 'rgb(199,151,31)', 'rgb(191,159,31)', 'rgb(191,159,31)', 'rgb(191,167,39)', 'rgb(191,167,39)', 'rgb(191,175,47)', 'rgb(183,175,47)', 'rgb(183,183,47)', 'rgb(183,183,55)', 'rgb(207,207,111)', 'rgb(223,223,159)', 'rgb(239,239,199)', 'rgb(255,255,255)'];


  constructor() {
    if(this.debbug){
      this.fireHeight = this.fireWidth = 10;
      this.interval = 500;
      this.multNumber = 10;
    }
    this.start();
  }

  start() {
    this.createFireDataStructore();
    this.createFireSource();

    setInterval(() => {
    this.calculateFirePropagation();
    }, this.interval);
  }

  createFireDataStructore() {
    for (let i = 0; i < this.fireHeight; i++) {
      const row: number[] = [];
      for (let j = 0; j < this.fireWidth; j++) {
        row.push(0);
      }
      this.firePixelArray.push(row);
    }
  }

  renderFire(row: number, column: number) {
    return this.palette[this.firePixelArray[row][column]]
  }

  createFireSource() {
    const array = [];
    for (let i = 0; i < this.fireWidth; i++) {
      array.push(36);
    }
    this.firePixelArray[this.fireWidth - 1] = array;
  }

    calculateFirePropagation() {
      for (let column = 0; column < this.fireWidth ; column++) {
        for (let row = 0; row < this.fireHeight - 1; row++) {
          const decay = Math.floor(Math.random() * this.multNumber);
          if(column - decay >= 0){
            this.firePixelArray[row][column - decay] = this.updateFireIntensityPerPixel(row, column, decay);
          }else {
            this.firePixelArray[row][column - decay + this.fireWidth] = this.updateFireIntensityPerPixel(row, column, decay);
          }
        }
      }
    }

  updateFireIntensityPerPixel(row: number, column: number, decay: number) {
    let newFireIntensity = this.firePixelArray[row + 1][column] - decay
    return newFireIntensity < 0 ? 0 : newFireIntensity;
  }
}
