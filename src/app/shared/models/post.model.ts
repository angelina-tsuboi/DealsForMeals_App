import { User } from "./user.model";

export interface Post {
    userProfile: User;
    title: string;
    description: string;
    images: string[];
    amount: number;
  }