import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-storeinfo',
    templateUrl: './storeinfo.component.html',
    styleUrls: ['./storeinfo.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class StoreinfoComponent {
  machines = [
    {
  // title: 'The Yard Sports Development Facility',
  // image: 'fungoman-machine.jpg', // Update with your image name
  // describe: 'The Yard Business Hours',
  // text1: 'Monday - Friday hours: 3:00pm till 9.00pm',
  // text2: 'Saturday Hours: 9:00am till 9.00pm',
  // text3: 'Sunday Hours: 12:00pm till 8.00pm',
  // title: 'The Yard Sports Development Facility',
  // describe: 'The Yard Sport Development Facility will be opening SOON!',
  // text1: 'Monday - Friday hours: Opening soon',
  // text2: 'Saturday Hours: Opening soon',
  // text3: 'Sunday Hours: Opening soon',
  // text4: 'Phone Number: 513-433-1069',

  title: 'Hexagon Muscle Recovery',
  //describe: 'The Yard Sport Development Facility',
  text1: 'Monday - Friday Hours: 7:00am till 9.00pm',
  text2: 'Saturday Hours: 9:00am till 9.00pm',
  text3: 'Sunday Hours: 12:00pm till 6.00pm',
  text4: 'Phone Number: 513-433-Hexa',
  //text5: 'Holiday Hours:',
  //text6: '4th of July: Open 11:00am till 4:00pm '
}

];
}