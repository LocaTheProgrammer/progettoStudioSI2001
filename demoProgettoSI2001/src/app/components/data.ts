import {
  MyTableActionEnum,
  MyTableConfig
} from "./table/table.component";

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


export const tableConfig: MyTableConfig = {
  headers: [{
    key: "Name",
    label: "Name"
  },
    {
      key: "Miles_per_Gallon",
      label: "Miles_per_Gallon"
    },
    {
      key: "Cylinders",
      label: "Cylinders"
    },
    {
      key: "Displacement",
      label: "Displacement"
    },
    {
      key: "Horsepower",
      label: "Horsepower"
    },
    {
      key: "Weight_in_lbs",
      label: "Weight_in_lbs"
    },
    {
      key: "Acceleration",
      label: "Acceleration"
    },
    {
      key: "Year",
      label: "Year"
    },
    {
      key: "Origin",
      label: "Origin"
    },
  ],
  myOrder: {
    defaultColumn: "age",
    orderType: "asc"
  },

  search: {
    columns: []
  },

  myPagination:{
    itemPerPage : 5 ,
    itemPerPageOptions: [5,10,15,20]

  },
  actions:[
    MyTableActionEnum.DELETE
  ]


}
