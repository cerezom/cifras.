import { ContentDrawerType } from "main/pages/types/ContentDrawerType";

export interface IContentDrawerServices {
    obtenerContenidoDelDrawer(): Promise<ContentDrawerType>;
};