
export interface Category<T> {
    id: string;
    name: string;
    downloadLink: string;
    description: string;
    mainImage: string;
    items: T[];
}


export interface Tile {
    id: string;
    name: string;
    mainImage: string;
    isCarousel: boolean;
    images: Image[];
    
}
export interface Image {
    src: string;
    downloadLink: string;
}