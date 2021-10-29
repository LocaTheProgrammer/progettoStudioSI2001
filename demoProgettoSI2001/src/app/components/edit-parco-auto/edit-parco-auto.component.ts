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
  data!:JSON
  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap.get('data'))
    this.itemToUpdate= this.route.snapshot.queryParamMap.get('data');
    this.data=JSON.parse(this.itemToUpdate);
  }

}
