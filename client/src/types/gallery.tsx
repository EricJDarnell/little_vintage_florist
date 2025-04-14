export interface GalleryImage {
    id: number;
    title: string;
    image_url: string;
    category: string;
}

export interface GalleryFilterProps {
    categories: string[];
    selectedCategory: string;
    onSelectedCategory: (category: string) => void;
}

export interface GalleryGridProps {
    images: GalleryImage[];
}

export interface LightboxProps {
    image: GalleryImage;
    onClose: () => void;
}