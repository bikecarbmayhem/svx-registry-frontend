import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-profile',
  templateUrl: './car-profile.component.html',
  styleUrls: ['./car-profile.component.css']
})
export class CarProfileComponent implements OnInit {
  slides = [
    { img: 'https://japanesenostalgiccar.com/wordpress/wp-content/uploads/2016/12/1990-Subaru-SVX-Concept-01.jpg', caption: 'Caption Text' },
    { img: 'https://japanesenostalgiccar.com/wordpress/wp-content/uploads/2016/12/1990-Subaru-SVX-Concept-01.jpg', caption: 'Caption Two' },
    { img: 'https://japanesenostalgiccar.com/wordpress/wp-content/uploads/2016/12/Subaru-SVX-03.jpg', caption: 'Caption Three' }
  ];

  currentSlideIndex = 0;

  ngOnInit() {
    this.showSlides(this.currentSlideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.currentSlideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.currentSlideIndex = n);
  }

  showSlides(n: number) {
    if (n >= this.slides.length) {
      this.currentSlideIndex = 0;
    } else if (n < 0) {
      this.currentSlideIndex = this.slides.length - 1;
    } else {
      this.currentSlideIndex = n;
    }
  }
}
