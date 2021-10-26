import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface MyButtonConfig{
  customCssClass :string ;
  text : string;
  icon :string ;
  customCssId: string;
}


@Component({
  selector: 'app-my-button-component',
  templateUrl: './my-button-component.component.html',
  styleUrls: ['./my-button-component.component.scss']
})
export class MyButtonComponentComponent implements OnInit{
  @Input () buttonConfig !: MyButtonConfig;

  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  emitBtnFunct(value:string){
    this.newItemEvent.emit(value);
  }

}
