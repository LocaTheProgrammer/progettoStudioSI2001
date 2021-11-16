import {MyTableActionEnum, MyTableConfig} from "./other/table/table.component";
import {MyReservationTableConfig} from "./reservation/reservation-table/reservation-table.component";

export const dataMock: any = [{
  "name": "pietro",
  "surname": "locatelli",
  "age": 21
},
  {
    "name": "mario",
    "surname": "rossi",
    "age": 22
  },
  {
    "name": "luca",
    "surname": "verdi",
    "age": 23
  }
];

export const tableConfigAdminParcoAuto: MyTableConfig = {
  headers: [{
    key: "name",
    label: "name"
  },
    {
      key: "milesPerGallon",
      label: "milesPerGallon"
    },
    {
      key: "cylinders",
      label: "cylinders"
    },
    {
      key: "displacement",
      label: "displacement"
    },
    {
      key: "horsePower",
      label: "horsePower"
    },
    {
      key: "weightInLbs",
      label: "weightInLbs"
    },
    {
      key: "acceleration",
      label: "acceleration"
    },
    {
      key: "year",
      label: "year"
    },
    {
      key: "origin",
      label: "origin"
    },
  ],
  myOrder: {
    defaultColumn: "name",
    orderType: "asc"
  },

  search: {
    columns: []
  },

  myPagination:{
    itemPerPage : 5 ,
    itemPerPageOptions: [5,10,15,20],
    customCssClass:"form-select form-select-sm"

  },
  actions:[
    {
      action: MyTableActionEnum.DELETE,
      icon: "delete_forever",
      customCssClass:"btn btn-danger",
      customCssId:"idTable"
    },
    {
      action: MyTableActionEnum.EDIT,
      icon: "border_color",
      customCssClass:"btn btn-primary",
      customCssId:"idTable"
    },

  ]


}



export const tableConfigAdminDelete: MyTableConfig = {
  headers: [{
    key: "name",
    label: "name"
  },
    {
      key: "milesPerGallon",
      label: "milesPerGallon"
    },
    {
      key: "cylinders",
      label: "cylinders"
    },
    {
      key: "displacement",
      label: "displacement"
    },
    {
      key: "horsepower",
      label: "horsepower"
    },
    {
      key: "weightInLbs",
      label: "weightInLbs"
    },
    {
      key: "acceleration",
      label: "acceleration"
    },
    {
      key: "year",
      label: "year"
    },
    {
      key: "Origin",
      label: "Origin"
    },
  ],
  myOrder: {
    defaultColumn: "name",
    orderType: "asc"
  },

  search: {
    columns: []
  },

  myPagination:{
    itemPerPage : 5 ,
    itemPerPageOptions: [5,10,15,20],
    customCssClass:"form-select form-select-sm"

  },
  actions:[
    {
      action: MyTableActionEnum.DELETE,
      icon: "delete_forever",
      customCssClass:"btn btn-danger",
      customCssId:"idTable"
    },


  ]


}



export const tableConfigAdmin: MyTableConfig = {
  headers: [{
    key: "name",
    label: "name"
  },
    {
      key: "milesPerGallon",
      label: "milesPerGallon"
    },
    {
      key: "cylinders",
      label: "cylinders"
    },
    {
      key: "displacement",
      label: "displacement"
    },
    {
      key: "horsePower",
      label: "horsePower"
    },
    {
      key: "weightInLbs",
      label: "weightInLbs"
    },
    {
      key: "acceleration",
      label: "acceleration"
    },
    {
      key: "year",
      label: "year"
    },
    {
      key: "origin",
      label: "origin"
    },
  ],
  myOrder: {
    defaultColumn: "name",
    orderType: "asc"
  },

  search: {
    columns: []
  },

  myPagination:{
    itemPerPage : 5 ,
    itemPerPageOptions: [5,10,15,20],
    customCssClass:"form-select form-select-sm"

  },
  actions:[

    {
      action: MyTableActionEnum.APPROVA,
      icon: "book",
      customCssClass:"btn btn-primary",
      customCssId:"idTable"
    },

  ]


}
export const  tableConfigUserPrenotazioni: MyTableConfig = {
  headers: [{
    key: "name",
    label: "name"
  },
    {
      key: "milesPerGallon",
      label: "milesPerGallon"
    },
    {
      key: "cylinders",
      label: "cylinders"
    },
    {
      key: "displacement",
      label: "displacement"
    },
    {
      key: "horsePower",
      label: "horsePower"
    },
    {
      key: "weightInLbs",
      label: "weightInLbs"
    },
    {
      key: "acceleration",
      label: "acceleration"
    },
    {
      key: "year",
      label: "year"
    },
    {
      key: "origin",
      label: "origin"
    },
  ],
  myOrder: {
    defaultColumn: "name",
    orderType: "asc"
  },

  search: {
    columns: []
  },

  myPagination:{
    itemPerPage : 5 ,
    itemPerPageOptions: [5,10,15,20],
    customCssClass:"form-select form-select-sm"

  },
  actions:[

    {
      action: MyTableActionEnum.PRENOTA,
      icon: "book",
      customCssClass:"btn btn-primary",
      customCssId:"idTable"
    },

  ]


}

export const tableConfigDettagli: MyTableConfig = {
  headers: [{
    key: "name",
    label: "name"
  },
    {
      key: "milesPerGallon",
      label: "milesPerGallon"
    },
    {
      key: "cylinders",
      label: "cylinders"
    },
    {
      key: "displacement",
      label: "displacement"
    },
    {
      key: "horsePower",
      label: "horsePower"
    },
    {
      key: "weightInLbs",
      label: "weightInLbs"
    },
    {
      key: "acceleration",
      label: "acceleration"
    },
    {
      key: "year",
      label: "year"
    },
    {
      key: "origin",
      label: "origin"
    },
  ],
  myOrder: {
    defaultColumn: "name",
    orderType: "asc"
  },

  search: {
    columns: []
  },

  myPagination:{
    itemPerPage : 5 ,
    itemPerPageOptions: [5,10,15,20],
    customCssClass:"form-select form-select-sm"

  },
  actions:[
    {
      action: MyTableActionEnum.DETTAGLI,
      icon: "info",
      customCssClass:"btn btn-primary",
      customCssId:"idTable"
    },
  ]


}
export const tableConfigUserParcoAuto: MyTableConfig = {
  headers: [{
    key: "name",
    label: "name"
  },
    {
      key: "milesPerGallon",
      label: "milesPerGallon"
    },
    {
      key: "cylinders",
      label: "cylinders"
    },
    {
      key: "displacement",
      label: "displacement"
    },
    {
      key: "horsePower",
      label: "horsePower"
    },
    {
      key: "weightInLbs",
      label: "weightInLbs"
    },
    {
      key: "acceleration",
      label: "acceleration"
    },
    {
      key: "year",
      label: "year"
    },
    {
      key: "origin",
      label: "origin"
    },
  ],
  myOrder: {
    defaultColumn: "name",
    orderType: "asc"
  },

  search: {
    columns: []
  },

  myPagination:{
    itemPerPage : 5 ,
    itemPerPageOptions: [5,10,15,20],
    customCssClass:"form-select form-select-sm"

  },
  actions:[]


}





export const tableConfigReservation: MyReservationTableConfig = {
  headersDate: [
    {
      key: "reservationDate",
      label: "reservationDate"
    },
  ],

  carHeaders: [ {
    key: "name",
    label: "name"
  },
    {
      key: "milesPerGallon",
      label: "milesPerGallon"
    },
    {
      key: "cylinders",
      label: "cylinders"
    },
    {
      key: "displacement",
      label: "displacement"
    },
    {
      key: "horsePower",
      label: "horsePower"
    },
    {
      key: "weightInLbs",
      label: "weightInLbs"
    },
    {
      key: "acceleration",
      label: "acceleration"
    },
    {
      key: "year",
      label: "year"
    },
    {
      key: "origin",
      label: "origin"
    },
  ],


  myOrder: {
    defaultColumn: "name",
    orderType: "asc"
  },

  search: {
    columns: []
  },

  myPagination:{
    itemPerPage : 5 ,
    itemPerPageOptions: [5,10,15,20],
    customCssClass:"form-select form-select-sm"

  },
  actions:[

    {
      action: MyTableActionEnum.DETTAGLI,
      icon: "info",
      customCssClass:"btn btn-primary",
      customCssId:"idTable"
    },

  ]


}



export const tableConfigReservationAdmin: MyReservationTableConfig = {
  headersDate: [
    {
      key: "reservationDate",
      label: "reservationDate"
    },
  ],

  carHeaders: [ {
    key: "name",
    label: "name"
  },
    {
      key: "milesPerGallon",
      label: "milesPerGallon"
    },
    {
      key: "cylinders",
      label: "cylinders"
    },
    {
      key: "displacement",
      label: "displacement"
    },
    {
      key: "horsePower",
      label: "horsePower"
    },
    {
      key: "weightInLbs",
      label: "weightInLbs"
    },
    {
      key: "acceleration",
      label: "acceleration"
    },
    {
      key: "year",
      label: "year"
    },
    {
      key: "origin",
      label: "origin"
    },
  ],


  myOrder: {
    defaultColumn: "name",
    orderType: "asc"
  },

  search: {
    columns: []
  },

  myPagination:{
    itemPerPage : 5 ,
    itemPerPageOptions: [5,10,15,20],
    customCssClass:"form-select form-select-sm"

  },
  actions:[

    {
      action: MyTableActionEnum.DELETE,
      icon: "delete_forever",
      customCssClass:"btn btn-danger",
      customCssId:"idTable"
    },
    {
      action: MyTableActionEnum.APPROVA,
      icon: "info",
      customCssClass:"btn btn-primary",
      customCssId:"idTable"
    },

  ]
}





export const tableConfigUtente: MyTableConfig = {
  headers: [
    {
      key: "firstName",
      label: "name"
    },
    {
      key: "lastName",
      label: "surname"
    },
    {
      key: "email",
      label: "email"
    },
    {
      key: "password",
      label: "password"
    },
    {
      key: "role",
      label: "role"
    },
  ],
  myOrder: {
    defaultColumn: "name",
    orderType: "asc"
  },

  search: {
    columns: []
  },

  myPagination:{
    itemPerPage : 5 ,
    itemPerPageOptions: [5,10,15,20],
    customCssClass:"form-select form-select-sm"

  },
  actions:[
    {
      action: MyTableActionEnum.DELETE,
      icon: "delete_forever",
      customCssClass:"btn btn-danger",
      customCssId:"idTable"
    },
    {
      action: MyTableActionEnum.EDIT,
      icon: "border_color",
      customCssClass:"btn btn-primary",
      customCssId:"idTable"
    },

  ]


}
