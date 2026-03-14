import { CarouselItem } from '@/app/website/interfaces/carousel/carousel.interface';
import { ABOUT_CAROUSEL_DATA } from '@/app/website/consts/carousel/about-carousel.const';
import { AboutCarouselView } from './about-carousel.view';

export function AboutCarouselComponent() {
  return <AboutCarouselView items={ABOUT_CAROUSEL_DATA} />;
}
