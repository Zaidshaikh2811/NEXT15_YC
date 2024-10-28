

declare global {
interface startUpCardType {
    _createdAt: Date,
    Views: number,
    author: { _id: number,name:string },
    id: number,
    title: string,
    description: string,
    image: string,
    category: string
}
}
export {};