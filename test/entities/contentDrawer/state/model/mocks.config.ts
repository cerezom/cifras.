
import { ContentDrawerState } from 'main/entities/contentDrawer/domain/model/content-drawer-state';
import { ContentDrawerType } from 'main/pages/types/ContentDrawerType';

export class ContentDrawerRulesMock {
    
    public agregarInformacionDrawer(state: ContentDrawerState, informacionTablero: ContentDrawerType): ContentDrawerState {
        console.log(`Mock function -> boardRules.agregarInformacionTablero(${JSON.stringify(state)}, ${JSON.stringify(informacionTablero)})`);
        return {
            informacionContentDrawer:{
                title:"mock",
                content: [{
                    itemTitleDrawer: "titleMock",
                    subItemTitleDrawer: [{
                        name: "itemMock",
                        path: "/titleMock/mock"
                    }],
                    path: "/titleMock"
                }]
            }
        }
    };
}
