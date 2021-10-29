import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-parco-auto',
  templateUrl: './edit-parco-auto.component.html',
  styleUrls: ['./edit-parco-auto.component.scss']
})
export class EditParcoAutoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  itemToUpdate!:any
  
  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.itemToUpdate = params['data'];
  });
    console.log(this.itemToUpdate.data)
  }

}
