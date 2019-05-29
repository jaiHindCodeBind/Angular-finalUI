import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
//import * as $ from "jquery";
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';

declare const $:any;

@Component({
  selector: 'app-omf',
  templateUrl: './omf.component.html',
  styleUrls: ['./omf.component.css']
})
 
export class OMFComponent implements OnInit {

  addInvoiceValidation:boolean = false;

    public myDatePickerOptions: IMyDpOptions = {
      todayBtnTxt: 'Today',
      dateFormat: 'dd-mm-yyyy',
      firstDayOfWeek: 'su',
      sunHighlight: true,
      inline: false,
      height: '35px'
    }; 

    public FormDatePickerOptions: IMyDpOptions = {
      todayBtnTxt: 'Today',
      dateFormat: 'dd-mm-yyyy',
      firstDayOfWeek: 'su',
      sunHighlight: true,
      inline: false,
      height: '30px'
    }; 

    dtOptions: DataTables.Settings = {};
    dtUsers =[
      {"id": 101, "firstName": "Anil", "lastName": "Singh"},
      {"id": 102, "firstName": "Reena", "lastName": "Singh"},
      {"id": 103, "firstName": "Aradhay", "lastName": "Simgh"},
      {"id": 104, "firstName": "Dilip", "lastName": "Singh"},
      {"id": 105, "firstName": "Alok", "lastName": "Singh"},
      {"id": 106, "firstName": "Sunil", "lastName": "Singh"},
      {"id": 107, "firstName": "Sushil", "lastName": "Singh"},
      {"id": 108, "firstName": "Sheo", "lastName": "Shan"},
      {"id": 109, "firstName": "Niranjan", "lastName": "R"},
      {"id": 110, "firstName": "Lopa", "lastName": "Mudra"},
      {"id": 111, "firstName": "Paramanand","lastName": "Tripathi"}
    ];

  constructor(
    private fb: FormBuilder
  ) { }
  ngOnInit() {

    $('.panel-collapse').on('show.bs.collapse', function () {
      $(this).siblings('.panel-heading').addClass('active');
     });
     
    $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.panel-heading').removeClass('active');
    }); 

    this.dtOptions = {
      data:this.dtUsers,
      columns: [{title: 'User ID', data: 'id'},
               {title: 'First Name', data: 'firstName'},
               {title: 'Last Name', data: 'lastName' }]
    };
 } 

  createForm = new FormGroup({
    fieldArray: this.fb.array([this.fb.group({
      
    })
    ]),
  }); 
  addInvoice(f)
  {
    //console.log(f.form.value);
    let randomnumber = Math.floor(Math.random()*99);
    f.form.value.inv_number = randomnumber;
    f.form.value.items = <FormArray>this.createForm.controls.fieldArray.value;
    if (f.invalid === true) {
      this.addInvoiceValidation = true;
    } else 
    {
      this.addInvoiceValidation = false;
    
    $('#add_invoice').modal('hide');
    }
  }

    
   advanceSearchDetails(){
       $('.advSearchBox').toggle("slow");
            
    } 


}
