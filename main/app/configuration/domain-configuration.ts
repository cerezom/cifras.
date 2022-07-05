
import BoardRules from "main/entities/board/domain/rules/board-rules";
import ContentDrawerRules from "main/entities/contentDrawer/domain/rules/content-drawer-rules";
import { Container } from "typescript-ioc";

export class DomainConfiguration {

    public static buildContentDrawerRules(): ContentDrawerRules {
        return Container.get(ContentDrawerRules);
    };
    public static buildBoardRules(): BoardRules {
        return Container.get(BoardRules);
    };
    private constructor() {}

}