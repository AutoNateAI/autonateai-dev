import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductImage {
  id: string;
  image_url: string;
  alt_text?: string;
  caption?: string;
}

interface ProductCarouselProps {
  images: ProductImage[];
  className?: string;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ images, className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  if (!images?.length) {
    return (
      <div className={cn("bg-muted rounded-lg flex items-center justify-center p-8", className)}>
        <span className="text-muted-foreground">No images available</span>
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={image.id} className="flex-[0_0_100%] min-w-0">
              <div className="relative">
                <img
                  src={image.image_url}
                  alt={image.alt_text || `Product image ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm">
                    {image.caption}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows for desktop */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background hidden md:flex"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background hidden md:flex"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === selectedIndex ? "bg-primary" : "bg-muted-foreground/30"
              )}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};