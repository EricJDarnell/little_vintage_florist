import { useEffect } from "react";
import { LightboxProps } from "../../types/gallery";

const Lightbox = ({ image, onClose }: LightboxProps) => {
    //close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>x</button>
                <img src={image.image_url} alt={image.title} />
                <div className="image-meta">
                    <h3>{image.title}</h3>
                    <p>{image.category}</p>
                </div>
            </div>
        </div>
    );
};

export default Lightbox;