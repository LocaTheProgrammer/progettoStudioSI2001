import {MyTableConfig} from "./table/table.component";

export const dataMock:any=[
    {
      "name": "pietro",
      "surname": "locatelli",
      "age": "21"
    },
    {
      "name": "mario",
      "surname": "rossi",
      "age": "22"
    },
    {
      "name": "luca",
      "surname": "verdi",
      "age": "23"
    }
  ];


export const tableConfig:MyTableConfig= {
  headers:[
    {
      key:"name",
      label:"nome"
    },
{
  key:"surname",
    label:"cognome"
},
{
  key:"age",
    label:"eta"
}
]

}
