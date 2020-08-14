export interface Navigation {
    left: NavObject[];
    right: NavObject[];
    up?: NavObject[];
    down?: NavObject[];
}

export interface NavObject {
    title?: string;
    path: string;
}