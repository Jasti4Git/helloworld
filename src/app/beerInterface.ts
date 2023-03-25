export interface Beer {
    price:  string;
    name:   string;
    rating: RatingElement[] | RatingElement;
    image:  string;
    id:     number;
}

export interface RatingElement {
    average: number;
    reviews: number;
}