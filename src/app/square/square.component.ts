import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      square works with {{ rando }}!
    </p>
  `,
  styles: [
  ]
})
export class SquareComponent {

  rando = Math.random();

  constructor(){
    setInterval(() => this.rando = Math.random(),500)
    //#region this randomises the number under the hood every 500ms
    //#endregion
  }
}
