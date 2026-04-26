import { ABOUT_CAROUSEL_DATA } from '@/features/about/consts/about-carousel.const';
import { AboutCarouselView } from './about-carousel.view';

export function AboutCarouselComponent() {
  return <AboutCarouselView items={ABOUT_CAROUSEL_DATA} />;
}
