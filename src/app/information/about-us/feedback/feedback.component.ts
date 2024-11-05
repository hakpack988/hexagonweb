import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-feedback',
  standalone: true,
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class FeedbackComponent implements OnInit {
  recomanded: string[] = [];
  rating: string[] = [];
  feedbackForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      recomanded: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      comments: [''],
      picture: [''],
      agree: [''],
    });
  }

  get control() {
    return this.feedbackForm.controls;
  }

  selectRecomanded(evt: any, val: any) {
    const status = evt.target.checked;
    if (status) {
      this.recomanded.push(val);
    } else {
      this.recomanded = this.recomanded.filter((v) => v !== val);
    }
    // console.log("print", this.selected_Position.join(','));
    // Trigger form validation
    this.feedbackForm.controls['recomanded'].updateValueAndValidity();
  }

  selectRating(evt: any, val: any) {
    const status = evt.target.checked;
    if (status) {
      this.rating.push(val);
    } else {
      this.rating = this.rating.filter((v) => v !== val);
    }
    // console.log("print", this.selected_Position.join(','));
    // Trigger form validation
    this.feedbackForm.controls['rating'].updateValueAndValidity();
  }


async onSubmit() {
     this.submitted = true;
     if (this.feedbackForm.invalid) {
        window.scroll(0, 0);
        return;
       // console.log(this.feedbackForm.value);
      } else {
        emailjs.init('3_nevL2tNBl6WfpwB');
        let response = await
        emailjs.send('service_ah14i5g', 'template_50puxja', 
        {
         name: this.feedbackForm.value.name,
         phone: this.feedbackForm.value.phone,
         email: this.feedbackForm.value.email,
         recomaned: this.feedbackForm.value.recomanded,
         rating: this.feedbackForm.value.rating,
         comments: this.feedbackForm.value.comments,
         picture: this.feedbackForm.value.picture,
         agree: this.feedbackForm.value.agree,
        });
      }
      this.feedbackForm.reset();
      alert('Thank you for taking the time to give us this feedback.  The Yard');    
      this.submitted=false;  
    }
      
 }
