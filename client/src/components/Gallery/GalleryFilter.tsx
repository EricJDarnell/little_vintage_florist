import { GalleryFilterProps } from "../../types/gallery";

const GalleryFilter = ({
    categories,
    selectedCategory,
    onSelectCategory
}: GalleryFilterProps) => {
    return (
        <div className="gallery-filter">
            <label htmlFor="category-filter">Filter by: </label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => onSelectCategory(e.target.value)}
            >
                {categories.map(category => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GalleryFilter;