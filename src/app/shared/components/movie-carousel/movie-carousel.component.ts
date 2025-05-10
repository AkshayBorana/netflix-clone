import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  input,
  viewChild,
} from '@angular/core';
import { MovieList } from '../../../core/models/movies.interface';
// import {input} from '@angular/core`;
import { Swiper } from 'swiper';
import { ClipTextPipe } from '../../pipes/clip-text.pipe';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  imports: [ClipTextPipe]
})
export class MovieCarouselComponent implements OnInit, AfterViewInit {
  videoContents = input<MovieList[]>();
  title = input<string>('');
  selectedContent: any;
  image = 'movie not found';

  swiperContainer = viewChild<ElementRef>('swiperContainer');

  constructor() {
    console.log(this.videoContents);
  }

  ngOnInit(): void {
    console.log(this.videoContents);
    // this.initSwiper();
  }

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  private initSwiper() {
    return new Swiper(this.swiperContainer()?.nativeElement, {
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        },
      },
    });
  }

  setHoverMovie(movie: any): void {
    console.log(movie);
  }

  clearHoverMovie(): void {}
}

// function input<T>(arg0: never[]): any[] {
//   throw new Error('Function not implemented.');
// }
