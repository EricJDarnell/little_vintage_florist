import { GalleryImage } from "./types/gallery";

export const fetchGalleryImages = async (): Promise<GalleryImage[]> => {
    const res = await fetch('/api/gallery');
    return res.json();
}