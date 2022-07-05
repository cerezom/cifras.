import { DomainConfiguration } from "main/app/configuration/domain-configuration";
import BoardRules from "main/entities/board/domain/rules/board-rules";
import ContentDrawerRules from "main/entities/contentDrawer/domain/rules/content-drawer-rules";

describe('should build domain dependences', () => {
    
    test('should build BoardRules', () => {
        const boardRules: BoardRules = DomainConfiguration.buildBoardRules();
        expect(boardRules).toBeDefined();
        expect(boardRules).not.toBeNull();
    });

    test('should build ContentDrawerdRules', () => {
        const contentDtawerRules: ContentDrawerRules = DomainConfiguration.buildContentDrawerRules();
        expect(contentDtawerRules).toBeDefined();
        expect(contentDtawerRules).not.toBeNull();
    });


});