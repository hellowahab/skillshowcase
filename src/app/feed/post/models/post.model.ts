export interface Post {
    id?: number;
    title: string;
    content?: string;
    author?: string;
    createdDate?: Date;
    privacyLevel?: string;
    UserId: number;
}