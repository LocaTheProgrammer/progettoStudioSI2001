import {MyTableActionEnum, MyTableConfig} from "./table/table.component";

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


export const tableConfigAdmin: MyTableConfig = {
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
    defaultColumn: "Name",
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
    {
      action: MyTableActionEnum.APPROVA,
      icon: "book",
      customCssClass:"btn btn-primary",
      customCssId:"idTable"
    },

  ]


}
export const tableConfigUser: MyTableConfig = {
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
    defaultColumn: "Name",
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
