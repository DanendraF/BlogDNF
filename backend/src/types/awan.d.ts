export interface Awan {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AwanRequest {
    name: string;
    description: string;
}