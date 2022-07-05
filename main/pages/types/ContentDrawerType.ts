export type ContentDrawerType = { 
    title: string, 
    content: IContent[], 
}

type IContent = {   
    dataTestid?: string
    indexContent?: number;
    itemTitleDrawer: string;
    path: string,
    subItemTitleDrawer: IRoutes[];
};

type IRoutes = {
    name: string
    path: string,
}
