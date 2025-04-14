import { useState, useEffect } from "react";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import GalleryFilter from "../components/Gallery/GalleryFilter";
import { GalleryImage } from "../types/gallery";
import { fetchGalleryImages } from "../api";

const GalleryPage = () => {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
    const [categories, setCategories] = useState<String[]>(['All']);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    //fetch images from db
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetchGalleryImages();
                setImages(res);
                setFilteredImages(res);

                //extract unique categories
                const uniqueCategories = ['All', ...new Set(res.map((img): string  => img.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        fetchImages();
    },[]);

    //filter images by category
    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredImages(images);
        } else {
            setFilteredImages(images.filter(img => img.category === selectedCategory));
        }
    },[selectedCategory, images]);

    return (
        <div className="gallery-page">
            <h1>Little Vintage Gallery</h1>
            <GalleryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <GalleryGrid images={filteredImages} />
        </div>
    );
};

export default GalleryPage;