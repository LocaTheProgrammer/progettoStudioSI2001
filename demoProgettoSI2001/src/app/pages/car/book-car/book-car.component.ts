import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {NgbCalendar, NgbDate, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CarService} from "../../../services/car/car.service";
import {tableConfigAdmin, tableConfigUserPrenotazioni,} from "../../../components/data";
import {MyTableConfig} from "../../../components/other/table/table.component";
import {ReservationService} from "../../../services/reservation/reservation.service";
import {last} from "rxjs/operators";



class NgbDateRange {
  public end!: NgbDate;
  public start!: NgbDate;

}




@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.scss']
})


export class BookCarComponent implements OnInit , OnChanges, OnDestroy{

  tableConfig!:MyTableConfig;

  ngOnInit(): void {

    if(sessionStorage.getItem("ruolo")==='admin'){
      this.tableConfig=tableConfigAdmin;
    }
    else{
      this.tableConfig=tableConfigUserPrenotazioni;
    }


  }

  ngOnChanges() {
    this.freeCarList()

  }

  ngOnDestroy() {
    sessionStorage.setItem("parcoAuto", "no")
  }

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  isPrenotaClicked=false;
  availableCars!:any[]
  ngbDateRange= new NgbDateRange;

  constructor(calendar: NgbCalendar, private carService:CarService, private reservationService:ReservationService, private modalService: NgbModal) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  book($event:any){


    let start=new Date(this.fromDate.year, this.fromDate.month-1, this.fromDate.day)



    // @ts-ignore
    let end=new Date(this.toDate.year, this.toDate.month-1, this.toDate.day)


    let day = 1000*60*60*24;

  let lastId:any

    this.reservationService.getReservations().subscribe((res:any)=>{

      lastId=res.result.length+1
      var diff = (end.getTime()- start.getTime())/day;
      for(var i=0;i<=diff; i++)
      {
        var xx = start.getTime()+day*i;
        var yy = new Date(xx);

        // @ts-ignore
        this.reservationService.insertReservation(+lastId, +sessionStorage.getItem("idUtente"), $event.data.id, yy.getDate()+"/"+yy.getMonth()+"/"+yy.getFullYear()).subscribe()


      }
    })




  }



  freeCarList(){
    this.isPrenotaClicked=true;
   this.ngbDateRange.start=this.fromDate;
   // @ts-ignore
    this.ngbDateRange.end=this.toDate

    this.carService.getFreeCarByReservationDate(this.ngbDateRange).subscribe((res:any)=>{
      console.log(res)
     this.availableCars=res.result.slice(1);
   })
  }





}
