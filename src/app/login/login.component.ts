import { Component, OnInit } from '@angular/core';
//import { PrimeNGConfig } from 'primeng/api';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  styles: [`
        .demo-container {
            border: 1px solid var(--surface-d);
        }
    `], 
    
})
export class LoginComponent implements OnInit {
  title = 'Angular Form Validation Tutorial';
   angForm: any ;

  


  constructor(private fb: FormBuilder) {this.createForm();}
 
  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       address: ['', Validators.required ]
    });
  }
  
  ngOnInit(): void {
    

     
  }

  
  


}
