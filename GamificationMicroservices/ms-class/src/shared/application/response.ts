export interface ThemeResponse {
    id: string;
    name: string;
    description: string;
}

export interface ClassResponse {
    id: string;
    theme: ThemeResponse;
    content: any;
}
