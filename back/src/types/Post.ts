import { User } from "./User";

export class Post {
    id: number;
    topic: string;
    place: string | null;
    title: string;
    quantity: number;
    author: User;
    createdAt: Date;
    content: string;
    media: string[];
    quantityOfReplies: number;
    quantityOfLikes: number;
    quantityOfRetweets: number;
    quantityOfViews: number;

    constructor(id: number, topic: string, place: string | null, title: string, quantity: number, author: User, createdAt: Date, content: string, media: string[], quantityOfReplies: number, quantityOfLikes: number, quantityOfRetweets: number, quantityOfViews: number) {
        this.id = id;
        this.topic = topic;
        this.place = place;
        this.title = title;
        this.quantity = quantity;
        this.author = author;
        this.createdAt = createdAt;
        this.content = content;
        this.media = media;
        this.quantityOfReplies = quantityOfReplies;
        this.quantityOfLikes = quantityOfLikes;
        this.quantityOfRetweets = quantityOfRetweets;
        this.quantityOfViews = quantityOfViews;
    }
}