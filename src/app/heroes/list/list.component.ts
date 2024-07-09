import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
    // const detedHero = this.heroNames.pop();
    // console.log(detedHero);
  }


}