import { OnlyInstantiableByContainer, Singleton } from "typescript-ioc";
import { ContentDrawerType } from "main/pages/types/ContentDrawerType";
import { ContentDrawerAPI } from "../contentDrawerAPI";
import { IContentDrawerServices } from "main/entities/contentDrawer/api/icontent-drawer-services";


@Singleton
@OnlyInstantiableByContainer
export class ContentDrawerServices implements IContentDrawerServices {

    public constructor(
        readonly contentDrawerAPI: ContentDrawerAPI
    ) {}

    public obtenerContenidoDelDrawer = (): Promise<ContentDrawerType> => {
        return this.contentDrawerAPI.obtenerContenidoDelDrawer()
    };

}


