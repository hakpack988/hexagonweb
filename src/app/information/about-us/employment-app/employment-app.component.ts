import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import emailjs from '@emailjs/browser';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employment-app',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    RouterModule,
  ],
  templateUrl: './employment-app.component.html',
  styleUrls: ['./employment-app.component.scss'],
})
export class EmploymentAppComponent implements OnInit {
  EmploymentApplication!: FormGroup;
  submitted = false;
  selected_Position: string[] = [];
  selected_AgeGroup: string[] = [];
  selected_Language: string[] = [];
  selected_Expertise: string[] = [];
  selected_Location: string[] = [];

  selectedEmploymentSeeking: string = '';
  selectedteachlesson: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.EmploymentApplication = this.formBuilder.group({
      First_Name: ['', [Validators.required]],
      Last_Name: ['', [Validators.required]],
      // Checkbox and Radio
      position: [false, Validators.requiredTrue],
      // Select Dropdown
      selectedEmploymentSeeking: [''],
      selectedteachlesson: [''],
      // Availability how to capure
      MondayFrom: [''],
      MondayTo: [''],
      TuesdayFrom: [''],
      TuesdayTo: [''],
      WednesdayFrom: [''],
      WednesdayTo: [''],
      ThursdayFrom: [''],
      ThursdayTo: [''],
      FridayFrom: [''],
      FridayTo: [''],
      SaturdayFrom: [''],
      SaturdayTo: [''],
      SundayFrom: [''],
      SundayTo: [''],
      teach_lessons: [''],

      wheredoyou: [''],
      agegroup: [''],
      expertise: [''],
      language: [''],
      dateofbirth: ['', [Validators.required]],
      Street: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      City: ['', [Validators.required]],
      State: ['', [Validators.required]],
      Postal: ['', [Validators.required]],
      // Country: [
      //   '',
      //   [
      //     Validators.required
      //   ],
      // ],
      CellPhone: ['', [Validators.required]],
      EmailID: ['', [Validators.required]],
      GraduateFrom: ['', [Validators.required]],
      AttendCollege: ['', [Validators.required]],

      CoachingExp: [''],
      CoachingTeam: [''],
      r1name: [''],
      r1cell: [''],
      r1email: [''],

      r2name: [''],
      r2cell: [''],
      r2email: [''],

      r3name: [''],

      r3cell: [''],
      r3email: [''],

      additionalInfo: [''],

      // LeagueBaseball: [
      //   '',
      //   [
      //     Validators.required
      //   ],
      // ],
      // BaseballSoftball: [
      //   '',
      //   [
      //     Validators.required
      //   ],
      // ],
      // ProfessionalBall: [
      //   '',
      //   [
      //     Validators.required
      //   ],
      // ],
      Accomplishments: ['', [Validators.required]],
      // RetailExp: [
      //   '',
      //   [
      //     Validators.required
      //   ],
      // ],
      // ManagerExp: [
      //   '',
      //   [
      //     Validators.required
      //   ],
      // ],
      // InterestedWork: [
      //   false, Validators.requiredTrue
      // ],
    });
  }

  get control() {
    return this.EmploymentApplication.controls;
  }

  hasAddressRequiredError(): boolean {
    //const addressControls = ['Street', 'Address', 'City', 'State', 'Postal', 'Country'];
    const addressControls = ['Street', 'Address', 'City', 'State', 'Postal'];
    return addressControls.some(
      (controlName) =>
        this.submitted && this.control[controlName].hasError('required')
    );
  }

  selectPosition(evt: any, val: any) {
    const status = evt.target.checked;
    if (status) {
      this.selected_Position.push(val);
    } else {
      this.selected_Position = this.selected_Position.filter((v) => v !== val);
    }
    // console.log("print", this.selected_Position.join(','));
    // Trigger form validation
    this.EmploymentApplication.controls['position'].updateValueAndValidity();
  }

  changeEmploymentSeeking(event: any) {
    this.selectedEmploymentSeeking = event.target.value;
  }

  changeTeachLesson(event: any) {
    this.selectedteachlesson = event.target.value;
  }

  selectedAgeGroup(evt: any, val: any) {
    const status = evt.target.checked;
    if (status) {
      this.selected_AgeGroup.push(val);
    } else {
      this.selected_AgeGroup = this.selected_AgeGroup.filter((v) => v !== val);
    }
    // console.log("print", this.selected_Position.join(','));
    // Trigger form validation
    this.EmploymentApplication.controls['agegroup'].updateValueAndValidity();
  }

  selectedLanguage(evt: any, val: any) {
    const status = evt.target.checked;
    if (status) {
      this.selected_Language.push(val);
    } else {
      this.selected_Language = this.selected_Language.filter((v) => v !== val);
    }
    // console.log("print", this.selected_Position.join(','));
    // Trigger form validation
    this.EmploymentApplication.controls['language'].updateValueAndValidity();
  }

  selectedExpertise(evt: any, val: any) {
    const status = evt.target.checked;
    if (status) {
      this.selected_Expertise.push(val);
    } else {
      this.selected_Expertise = this.selected_Expertise.filter(
        (v) => v !== val
      );
    }
    // console.log("print", this.selected_Position.join(','));
    // Trigger form validation
    this.EmploymentApplication.controls['expertise'].updateValueAndValidity();
  }

  selectLocation(evt: any, val: any) {
    const status = evt.target.checked;
    if (status) {
      this.selected_Location.push(val);
    } else {
      this.selected_Location = this.selected_Location.filter((v) => v !== val);
    }
    // console.log("print", this.selected_Position.join(','));
    // Trigger form validation
    this.EmploymentApplication.controls['expertise'].updateValueAndValidity();
  }

  onSubmit() {
    this.submitted = true;
    console.log(
      'Monday:',
      this.EmploymentApplication.value.MondayFrom,
      'To',
      this.EmploymentApplication.value.MondayTo
    );
    if (this.EmploymentApplication.invalid) {
      window.scroll(0, 0);
      return;
    } else {
      emailjs.init('3_nevL2tNBl6WfpwB');
      emailjs.send('service_qyowbzv', 'template_30slxno', {
        first_name: this.EmploymentApplication.value.First_Name,
        Last_name: this.EmploymentApplication.value.Last_Name,
        position: this.selected_Position.join(','),
        employmenttype: this.selectedEmploymentSeeking,
        teachLesson: this.selectedteachlesson,

        mondayfrom: this.EmploymentApplication.value.MondayFrom,
        mondayto: this.EmploymentApplication.value.MondayTo,
        tuesdayfrom: this.EmploymentApplication.value.TuesdayFrom,
        tuesdayto: this.EmploymentApplication.value.TuesdayTo,
        wednesdayfrom: this.EmploymentApplication.value.WednesdayFrom,
        wednesdayto: this.EmploymentApplication.value.WednesdayTo,
        thursdayfrom: this.EmploymentApplication.value.ThursdayFrom,
        thursdayto: this.EmploymentApplication.value.ThursdayTo,
        fridayfrom: this.EmploymentApplication.value.FridayFrom,
        fridayto: this.EmploymentApplication.value.FridayTo,
        saturdayfrom: this.EmploymentApplication.value.SaturdayFrom,
        saturdayto: this.EmploymentApplication.value.SaturdayTo,
        sundayfrom: this.EmploymentApplication.value.SundayFrom,
        sundayto: this.EmploymentApplication.value.SundayTo,

        wheredoyou: this.EmploymentApplication.value.wheredoyou,
        agegroup: this.selected_AgeGroup.join(','),
        expertise: this.selected_Expertise.join(','),
        language: this.selected_Language.join(','),
        dateofbirth: this.EmploymentApplication.value.dateofbirth,
        Street: this.EmploymentApplication.value.Street,
        Address: this.EmploymentApplication.value.Address,
        City: this.EmploymentApplication.value.City,
        State: this.EmploymentApplication.value.State,
        Postal: this.EmploymentApplication.value.Postal,
        CellPhone: this.EmploymentApplication.value.CellPhone,
        EmailID: this.EmploymentApplication.value.EmailID,
        GraduateFrom: this.EmploymentApplication.value.GraduateFrom,
        AttendCollege: this.EmploymentApplication.value.AttendCollege,
        Accomplishments: this.EmploymentApplication.value.Accomplishments,
        r1name: this.EmploymentApplication.value.r1name,
        r1cell: this.EmploymentApplication.value.r1cell,
        r1email: this.EmploymentApplication.value.r1email,
        r2name: this.EmploymentApplication.value.r2name,
        r2cell: this.EmploymentApplication.value.r2cell,
        r2email: this.EmploymentApplication.value.r2email,
        r3name: this.EmploymentApplication.value.r3name,
        r3cell: this.EmploymentApplication.value.r3cell,
        r3email: this.EmploymentApplication.value.r3email,
        additionalInfo: this.EmploymentApplication.value.additionalInfo,
      });

      first_name: this.EmploymentApplication.value.First_Name,
        alert('Thank you for applying at The Yard Sports Development.');
      this.EmploymentApplication.reset();
    }
  }
}
