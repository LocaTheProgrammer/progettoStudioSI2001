import {Component, Input, OnInit} from '@angular/core';

export interface MyButtonConfig{
  customCssClass :string ;
  text : string;
  icon :string ;
}


@Component({
  selector: 'app-my-button-component',
  templateUrl: './my-button-component.component.html',
  styleUrls: ['./my-button-component.component.scss']
})
export class MyButtonComponentComponent implements OnInit{
  @Input () buttonConfig !: MyButtonConfig;
  constructor() { }

  ngOnInit(): void {
  }


}
