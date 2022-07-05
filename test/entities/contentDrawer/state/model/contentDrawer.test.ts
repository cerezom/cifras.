import { ContentDrawerState } from 'main/entities/contentDrawer/domain/model/content-drawer-state';
import ContentDrawerRules from 'main/entities/contentDrawer/domain/rules/content-drawer-rules';
import { contentDrawer } from 'main/entities/contentDrawer/state/model/contentDrawer';
import { ContentDrawerType } from 'main/pages/types/ContentDrawerType';
import { Container, Snapshot } from 'typescript-ioc';
import { ContentDrawerRulesMock } from './mocks.config';

describe('should manage application state', () => { 

    let initialState: ContentDrawerState;
    let contentDrawerInformation: ContentDrawerType;
    let addContentDrawerResponse: ContentDrawerState;

    let snapshot: Snapshot;

    beforeAll(() => {
        snapshot = Container.snapshot();
        Container.bind(ContentDrawerRules).to(ContentDrawerRulesMock);

        addContentDrawerResponse = {
            informacionContentDrawer: {
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
        };
    });

    afterEach(() => {
        snapshot.restore();
    })

    test('should have a reducer to add drawer content info', () => { 
        const newContentDrawerState: ContentDrawerState = 
            contentDrawer.reducers.agregarInformacionDrawer(initialState, contentDrawerInformation);

        expect(newContentDrawerState).toEqual(addContentDrawerResponse);
    });
})