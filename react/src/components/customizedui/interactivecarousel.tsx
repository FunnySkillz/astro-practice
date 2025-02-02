import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; 
import Autoplay from 'embla-carousel-autoplay'
import '../../styles/carousel_styling.css'


// Define the ICarouselItem interface
export interface ICarouselItem {
  image: string;
  imagealt: string; 
  body: string;  // This will contain HTML content as string
  heading: string;
}

const delayTime = 4000;

const InteractiveCarousel: React.FC<{ carouselItems: ICarouselItem[] }> = ({ carouselItems }) => {
  return (
    <Carousel plugins={[Autoplay({ delay: delayTime })]} className="mt-56 bg-primary">
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem
            key={index}
            className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            {/* Image with Tailwind CSS for size and margin */}
            <img 
              src={item.image} 
              alt={item.imagealt} 
              className="w-1/2 h-full object-fill" 
            />

            {/* Text content with Tailwind CSS */}
            <div className="w-1/2 text-center p-12">
              <div id="slides" dangerouslySetInnerHTML={{ __html: item.body }} /> {/* Body is rendered as HTML */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-primary" />
      <CarouselNext className="bg-primary" />
    </Carousel>
  );
};


export default InteractiveCarousel;
