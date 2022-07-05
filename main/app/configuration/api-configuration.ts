import { BoardAPI } from "main/shared/api/base-project/board/boardAPI";
import { BoardServices } from "main/shared/api/base-project/board/services/board-services";
import { ContentDrawerAPI } from "main/shared/api/base-project/contentDrawer/contentDrawerAPI";
import { ContentDrawerServices } from "main/shared/api/base-project/contentDrawer/services/content-drawer-services";
import { apiInstance } from "main/shared/api/base-project/config/api-instance";
import { Container, ObjectFactory } from "typescript-ioc";

export class ApiConfiguration {

    private constructor() {}

    public static buildContentDrawerServices = (): ContentDrawerServices => {
        const contentDrawerServicesFactory: ObjectFactory = () => new ContentDrawerServices(new ContentDrawerAPI(apiInstance));
        Container.bind(ContentDrawerServices).factory(contentDrawerServicesFactory);
        return Container.get(ContentDrawerServices);
    }

    public static buildBoardServices = (): BoardServices => {
        const boardServicesFactory: ObjectFactory = () => new BoardServices(new BoardAPI(apiInstance));
        Container.bind(BoardServices).factory(boardServicesFactory);
        return Container.get(BoardServices);
    }
    
}
