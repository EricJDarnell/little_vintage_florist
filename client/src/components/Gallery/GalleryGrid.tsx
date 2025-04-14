import { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "./Lightbox";
import { GalleryGridProps, GalleryImage } from "../../types/gallery";

const GalleryGrid = ({ images }: GalleryGridProps) => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    //masonry breakpoints
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {images.map((image) => (
                <div
                  key={image.id}
                  className="gallery-item"
                  onClick={() => setSelectedImage(image)}
                >
                    <img
                      src={image.image_url}
                      alt={image.title}
                      loading="lazy"
                    />
                    <p className="image-title">{image.title}</p>
                </div>
            ))}
          </Masonry>

          {/* Lightbox for zoomed image */}
          {selectedImage && (
            <Lightbox 
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
          )}
        </>
    );
};

export default GalleryGrid;