import { Media } from '@/components/Media';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { MediaSlider as MediaSliderProps } from '@/payload-types';
import React from 'react';

type Props = MediaSliderProps;

export const MediaSlider: React.FC<Props> = (props) => {
  const { slides } = props;

  return (
    <Carousel
      className="relative mx-auto w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem
            className="flex items-center justify-center"
            key={index}
          >
            <Media
              className="h-full w-full"
              imgClassName="m-auto h-full w-full object-cover"
              resource={slide.media}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-100 bg-opacity-50 p-2 text-gray-800 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1" />
      <CarouselNext className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-100 bg-opacity-50 p-2 text-gray-800 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1" />
    </Carousel>
  );
};
