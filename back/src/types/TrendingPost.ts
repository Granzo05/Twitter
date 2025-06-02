export class TrendingPost {
    id: number;
    topic: string;
    place: string | null;
    title: string;
    quantityPosts: number;

    constructor(id: number, topic: string, place: string | null, title: string, quantityPost: number) {
        this.id = id;
        this.topic = topic;
        this.place = place;
        this.title = title;
        this.quantityPosts = quantityPost;
    }
}