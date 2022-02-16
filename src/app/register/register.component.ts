import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators,FormGroup } from "@angular/forms";
import {  ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Employeemodel } from './register.model';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  emailInvalid:boolean=false;
  formvalue !: FormGroup;
  employeemodelObj : Employeemodel = new Employeemodel;
  employeeData !: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  url : any;
  msg ="";

  
  onSubmit() {
    let emailStatus = this.emailValidation();
    if(emailStatus == true && this.model.password==this.model.Confirmpassword){
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))

    }
  }
  emailValidation() {
    this.model.email =this.model.email.trim();
    let emailvalid = /^([A-Za-z0-9_\-\.]+)@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,3})$/.test(this.model.email);
    if (emailvalid == false) {
      this.emailInvalid = true;

    } else {
      this.emailInvalid = false;
    }
    return emailvalid;
  }

  selectFile(event : any){
    if(!event.target.files[0] || event.target.files[0].legnth==0){
      this.msg='You must select an image';
      return;
    }
    var mimeType = event.target.files[0].type;
    if(mimeType.match(/image\/*/)==null){
      this.msg="Only images are Support";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg="";
      this.url = reader.result;
    }
     
  }

  constructor(public fb: FormBuilder,
    private cd: ChangeDetectorRef,private formbuilder: FormBuilder, private api : ApiService,private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {this.formvalue = this.formbuilder.group({
    FirstName : [''],
    LastName: [''],
    Email:[''],
    Password:[''],
    password:[''],
    PhoneNO:['']
  })

}
clickAddEmployee(){
  this.formvalue.reset();
  this.showAdd = true;
  this.showUpdate = false;
}
  postEmployeeDetails(){
    this.employeemodelObj.FirstName = this.formvalue.value.FirstName;
    this.employeemodelObj.LastName = this.formvalue.value.lastname;
    this.employeemodelObj.Email = this.formvalue.value.Email;
    this.employeemodelObj.Password = this.formvalue.value.Password;
    this.employeemodelObj.PhoneNO = this.formvalue.value.PhoneNO;

    this.api.postEmployee(this.employeemodelObj)
     .subscribe(res=>{
       console.log(res);
       alert(" Employee added process done")
       let ref = document.getElementById('cancel')
       ref?.click();
       this.formvalue.reset();
       this.getAllEmployee();
     },
     err=>{
       alert("Something went wrong")
     })
  }
  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData = res;
    })
  }
  deleteEmployee(row : any){
    this.api.deleteEmployee(row.id)
    .subscribe(res=>{
      alert("Employee Deleted")
      this.getAllEmployee();
    })
  }
  onEdit(row: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.employeemodelObj.id = row.id;
    this.formvalue.controls['FirstName'].setValue(row.FirstName);
    this.formvalue.controls['LastName'].setValue(row.LastName)  
    this.formvalue.controls['Email'].setValue(row.Email)
    this.formvalue.controls['Password'].setValue(row.Password)
    this.formvalue.controls['PhoneNO'].setValue(row.PhoneNO)
  }
  updateEmployeeDetails(){
    this.employeemodelObj.FirstName = this.formvalue.value.FirstName;
    this.employeemodelObj.LastName = this.formvalue.value.LastName;
    this.employeemodelObj.Email = this.formvalue.value.Email;
    this.employeemodelObj.Password = this.formvalue.value.Password;
    this.employeemodelObj.PhoneNO = this.formvalue.value.PhoneNO;
  
    this.api.updateEmployee(this.employeemodelObj,this.employeemodelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formvalue.reset();
      this.getAllEmployee();
    })
    this.primengConfig.ripple = true;
  }}
  


