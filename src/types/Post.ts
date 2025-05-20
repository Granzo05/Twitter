export class Post {
    id: number;
    topic: string;
    place: string | null;
    title: string;
    quantity: number;

    constructor(id: number, topic: string, place: string | null, title: string, quantity: number) {
        this.id = id;
        this.topic = topic;
        this.place = place;
        this.title = title;
        this.quantity = quantity;
    }
}