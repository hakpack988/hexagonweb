import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

//import emailjs from '@emailjs/browser';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-founders',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './founders.component.html',
  styleUrls: ['./founders.component.scss'],
})
export class FoundersComponent {

  phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; // don't validate empty value to allow optional controls
    }
    const validPhoneNumberPattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const isValid = validPhoneNumberPattern.test(control.value);
    return isValid ? null : { 'invalidPhoneNumber': { value: control.value } };
  };
  }



  constructor(
    private fb: FormBuilder,
        ) {}

        foundersForm: FormGroup = new FormGroup({
          from_name: new FormControl(null, Validators.required),
          email: new FormControl(null, [Validators.required, Validators.email]),
          cell: new FormControl(null, [Validators.required, this.phoneNumberValidator()])
         // cell: new FormControl(null, Validators.required),
        })
      
    
  
  async send(){
    emailjs.init('3_nevL2tNBl6WfpwB');
     let response = await
     
     emailjs.send("service_snswbt7","template_9oar3fg",
          {
          from_name: this.foundersForm.value.from_name,
          to_name: 'Founders',
          email: this.foundersForm.value.email,
          cell: this.foundersForm.value.cell,
          });
  
      alert('You are reserved!');    
      this.foundersForm.reset();
      }
  }

