export type ContentDrawerResponse = { 
    title: string, 
    content: ContentDrawer[], 
}

type ContentDrawer = {   
    dataTestid?: string
    indexContent?: number;
    itemTitleDrawer: string;
    path: string,
    subItemTitleDrawer: ContentDrawerSubItem[];
};

type ContentDrawerSubItem = {
    name: string
    path: string,
}