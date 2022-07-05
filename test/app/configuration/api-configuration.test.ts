import { ApiConfiguration } from "main/app/configuration/api-configuration";
import { BoardServices } from "main/shared/api/base-project/board/services/board-services";
import { ContentDrawerServices } from "main/shared/api/base-project/contentDrawer/services/content-drawer-services";

describe('should build api dependences', () => {
    
    test('should build BoardSerices api', () => {
        const boardServices: BoardServices = ApiConfiguration.buildBoardServices();
        expect(boardServices).toBeDefined();
        expect(boardServices).not.toBeNull();
    });

    test('should build ContentDrawerSerices api', () => {
        const contentDrawerServices: ContentDrawerServices = ApiConfiguration.buildContentDrawerServices();
        expect(contentDrawerServices).toBeDefined();
        expect(contentDrawerServices).not.toBeNull();
    });
});
