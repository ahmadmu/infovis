export interface Data {
    id: string;
    title: string;
    pages: Page[];
}

export interface Page {
    id: string;
    title: string;
    description: string;
    infoContent: string;
    assets: Asset[];
    webLinks: WebLink[];
    
    kempelenParts?: string[];
}

export interface Asset {
    id: string;
    author: string;
    path: string;
    type: AssetType;
}

export enum AssetType {
    VIDEO = 'video',
    PICTURE = 'picture'
}

export interface WebLink {
    url:string;
    description:string;
}