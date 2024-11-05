import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

import emailjs from '@emailjs/browser';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-contactus',
  standalone: true,
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  //template: 
  //'<app-home></app-home>',
 imports: [ ReactiveFormsModule, CommonModule],
})

export class ContactusComponent{ // implements OnInit{
    constructor(
      private fb: FormBuilder,
          ) {}
        contactusForm: FormGroup = new FormGroup({
        from_name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        subject: new FormControl(null, Validators.required),
        message: new FormControl(null, Validators.required),
      })
    
  

async send(){
  emailjs.init('3_nevL2tNBl6WfpwB');
   let response = await
   emailjs.send("service_3vfs4fm","template_c4ag75n", 
        {
        from_name: this.contactusForm.value.from_name,
        to_name: 'ContactUs',
        email: this.contactusForm.value.email,
        subject: this.contactusForm.value.subject,
        message: this.contactusForm.value.message,
        });

    alert('Thank you for contacting us. Someone will be reaching out to you soon.');    
    this.contactusForm.reset();
      
    }

}

