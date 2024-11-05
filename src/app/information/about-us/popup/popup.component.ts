import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
// import { EmailService } from '../email.service';


@Component({
  selector: 'app-popup',
  standalone: true,
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})

export class PopupComponent{
    emailForm: FormGroup;
    submitted = false;

constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

 async onSubmit() {
    this.submitted = true;
    if (this.emailForm.invalid) {
       window.scroll(0, 0);
       return;
       console.log(this.emailForm.value);
     } else {
       emailjs.init('3_nevL2tNBl6WfpwB');
       let response = await
       emailjs.send('service_ah14i5g', 'template_50puxja', 
       {
        email: this.emailForm.value.email,
       });
     }
     this.emailForm.reset();
     alert('Thank you. We will contract you closer to Hexagon Muscle Recoverys Grand Opening!');    
     this.submitted=false;  
   }
 
}
