import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {NgbCalendar, NgbDate} from "@ng-bootstrap/ng-bootstrap";
import {CarService} from "../../services/ca/car.service";
import {dataMock, tableConfig} from "../data";
import {MyTableConfig} from "../table/table.component";

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.scss']
})
export class BookCarComponent implements OnInit , OnChanges, OnDestroy{

  tableConfig!:MyTableConfig;

  ngOnInit(): void {
    sessionStorage.setItem("parcoAuto", "si")
    this.tableConfig=tableConfig;

  }

  ngOnChanges() {
    this.prenota()
  }

  ngOnDestroy() {
    sessionStorage.setItem("parcoAuto", "no")
  }

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  isPrenotaClicked=false;

  availableCars!:any[]

  constructor(calendar: NgbCalendar, private carService:CarService) {
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

  output($event:any){
    console.log($event)
  }

  prenota(){
    let busyCars:any[]=[];
    let bookedCars:any[]=[] //avrà data, id auto e id utente
    this.isPrenotaClicked=true;
    this.carService.getBusyCars().subscribe((res:any)=>{
      if(res!=null&&res!=[]){
        bookedCars=res;
        let dateFromS:string=this.fromDate.day+"/"+this.fromDate.month+"/"+this.fromDate.year;
        // @ts-ignore
        let dateToS:string=this.toDate.day+"/"+this.toDate.month+"/"+this.toDate.year;


        let d1 = dateFromS.split("/");
        let d2 = dateToS.split("/");


        let from = new Date(+d1[2], parseInt(d1[1])-1, +d1[0]);  // -1 because months are from 0 to 11
        let to   = new Date(+d2[2], parseInt(d2[1])-1, +d2[0]);

        let bookDateToCheck:any

        for(let i=0; i<bookedCars.length;i++){
          bookDateToCheck=bookedCars[i].reservationDate;
          let splittedCheckDate=bookDateToCheck.split("/");
          let check= new Date(+splittedCheckDate[2], parseInt(splittedCheckDate[1])-1, +splittedCheckDate[0])

          if(check > from && check < to){ //carico id auto che in quel periodo sono prenotati
            busyCars[i]=bookedCars[i].carId;
          }
        }

        console.log("busy cars: "+busyCars.toString())
        let carList!:any[]
        this.carService.getCars().subscribe((res:any)=>{
          carList=res;
          let resAvailableCars:any[]=[]
          let isCarBusy:boolean=false;

          //removes duplicate
          for (let j=0; j<carList.length;j++){
            for (let k=0;k<busyCars.length;k++){
              if(carList[j].id==busyCars[k]){
                isCarBusy=true
              }
              if(!isCarBusy){
                resAvailableCars[j]=carList[j].id;
              }
              isCarBusy=false;
            }

          }

          let resAvailableCarsidS:any[]=[]
          for (let i = 0; i < resAvailableCars.length; i++) {
            if (resAvailableCars[i]) {
              resAvailableCarsidS.push(resAvailableCars[i]);
            }
          }

          let carAvailableList:any[]=[]
          for (let i=0; i<resAvailableCarsidS.length;i++){
            this.carService.getCarById(resAvailableCarsidS[i]).subscribe(res=>{
              carAvailableList[i]=res;
              console.log(carAvailableList.length)
              if(carAvailableList.length==resAvailableCarsidS.length){
                this.availableCars=carAvailableList
                return carAvailableList;
              }
            })
          }
        })

      }else{
        return this.carService.getCars();
      }
    })
  }
}
