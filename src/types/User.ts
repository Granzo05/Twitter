export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    avatar: string;
    createdAt: Date;

    constructor(id: number, name: string, username: string, email: string, password: string, avatar: string, createdAt: Date) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.createdAt = createdAt;
    }
}