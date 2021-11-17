import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {tableConfigReservation} from "../../../components/data";
import {ReservationService} from "../../../services/reservation/reservation.service";
import {MyReservationTableConfig} from "../../../components/reservation/reservation-table/reservation-table.component";
import {MyTableConfig} from "../../../components/other/table/table.component";

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent implements OnInit {


  constructor(private route: ActivatedRoute,private router:Router, private reservationService:ReservationService) { }

  itemToUpdate!:any
  data!:JSON[]
  tableConfig!:MyTableConfig;


  ngOnInit() {
    this.tableConfig=tableConfigReservation;
    this.itemToUpdate= this.route.snapshot.queryParamMap.get('data');
    this.reservationService.getReservationById(this.itemToUpdate).subscribe((result:any)=>{
        this.data=new Array(1).fill(result.result);
      }
    );
  }

  output($event: any) {
    switch($event.action.action){
      case 'EDIT':
        this.router.navigate(['/edit-parco-auto'], {queryParams: {data: JSON.stringify($event.data.id)}})
        break;
      case 'DELETE':
        break;
    }
  }
}
