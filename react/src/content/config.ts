import { defineCollection, z} from "astro:content";

const carouselSlidesCollection = defineCollection({
    schema: z.object({ 
        image : z.string(),
        title: z.string()
    }),
});

export const collections = {
    carouselSlides: carouselSlidesCollection,
};