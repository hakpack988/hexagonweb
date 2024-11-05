import { Component, HostListener } from '@angular/core';
import { StoreinfoComponent } from '../information/storeinfo/storeinfo.component';
import { RouterLink } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { CommonModule } from '@angular/common';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule, StoreinfoComponent, SwiperModule],
})
export class HomeComponent {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  // Array of testimonial image file names
  testimonialImages: string[] = [
    // 'FB-1.jpg',
    // 'FB-2.jpg',
    // 'FB-3.jpg',
    // 'FB-4.jpg',
     'FB-5.jpg',
    // 'FB-6.jpg',
     //'FB-7.jpg',
     //'FB-8.jpg',
     'FB-9.jpg',
     'FB-10.jpg',
     'FB-11.jpg',
    // //'FB-12.jpg',
     'FB-12T.jpg',
     'FB-13.jpg',
     'FB-14.jpg',
     'FB-15.jpg',
    // 'FB-16.jpg',
    // 'BattleBats.jpg',
    // 'battlebats2.png',
    // 'NowHiring.jpg',
    'Morgan.jpg',
    'FB-17.png',
  ];

  constructor() {
    // Shuffle the array of testimonial image file names
    this.testimonialImages = this.shuffle(this.testimonialImages);
  }

  // Function to shuffle an array
  shuffle(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
