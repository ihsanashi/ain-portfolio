'use client';

import React from 'react';
import { Media } from '@/components/Media';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import { Gallery } from '@/payload-types';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

export const Slider: React.FC<Gallery> = (props) => {
  const { content } = props;

  const arrowsBaseClasses =
    'absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-100 bg-opacity-50 p-2 text-gray-800 hover:bg-opacity-75';

  return (
    <Carousel
      className="relative mx-auto w-full"
      opts={{
        loop: true,
      }}
      plugins={[WheelGesturesPlugin()]}
    >
      <CarouselContent className="h-[400px] md:h-[500px] lg:h-[600px]">
        {content.map((slide, index) => (
          <CarouselItem
            className="relative flex items-center justify-center"
            key={index}
          >
            <Media
              className="h-full w-full"
              imgClassName="m-auto h-full w-full object-cover"
              resource={slide.media}
            />
            {(slide.richText || slide.link) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                {slide.richText && (
                  <RichText className="p-5" data={slide.richText} />
                )}
                {slide.link?.label && <CMSLink {...slide.link} />}
              </div>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className={`${arrowsBaseClasses} left-4`} />

      <CarouselNext className={`${arrowsBaseClasses} right-4`} />
    </Carousel>
  );
};
