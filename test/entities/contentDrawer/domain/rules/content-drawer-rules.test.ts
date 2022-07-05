import { ContentDrawerState } from "main/entities/contentDrawer/domain/model/content-drawer-state";
import ContentDrawerRules from "main/entities/contentDrawer/domain/rules/content-drawer-rules";
import { ContentDrawerType } from "main/pages/types/ContentDrawerType";
import { Container } from "typescript-ioc";


describe('should test the domain rules of the drawer content', () => { 

    let contentDrawerRules: ContentDrawerRules;
    let contentDrawerState: ContentDrawerState;
    let contentDrawerStatusAddInformationExpected: ContentDrawerState;
    let contentDrawerStatusAddInformationExpectedTwo: ContentDrawerState;
    let contentDrawerStatusAddInformationExpectedThree: ContentDrawerState;


    beforeEach(() => {
        contentDrawerRules = Container.get(ContentDrawerRules);

        contentDrawerState = {
            informacionContentDrawer: {
                title: "",
                content: []
            }
        };
        
        contentDrawerStatusAddInformationExpected = {
            informacionContentDrawer: {
                title: "Hola",
                content: [{
                    itemTitleDrawer: "secretaria-01",
                    subItemTitleDrawer: [{
                        name: "secretaira-01.01",
                        path: "/secretaria-01/tic"
                    }],
                    path: "/secretaria-01"
                }]
            }
        };

        contentDrawerStatusAddInformationExpectedTwo = {
            informacionContentDrawer: {
                title: "!Hola",
                content: [{
                    itemTitleDrawer: "Contabilidad",
                    subItemTitleDrawer: [{
                        name: "Contabilidad-01",
                        path: "/contabilidad/01"
                    }],
                    path: "/contabilidad"
                }]
            }
        };

        contentDrawerStatusAddInformationExpectedThree = {
            informacionContentDrawer: {
                title: "Bienvenido!",
                content: [{
                    itemTitleDrawer: "Seguridad",
                    subItemTitleDrawer: [{
                        name: "Seguridad-01",
                        path: "/seguridad/01"
                    }],
                    path: "/seguridad"
                }]
            }
        }

    });

    test('should addInformationDrawer to state', () => { 
        const contentDrawer: ContentDrawerType = {
            title: "Hola",
            content: [{
                itemTitleDrawer: "secretaria-01",
                subItemTitleDrawer: [{
                    name: "secretaira-01.01",
                    path: "/secretaria-01/tic"
                }],
                path: "/secretaria-01"
            }]
        }        
        expect(contentDrawerRules.agregarInformacionDrawer(contentDrawerState, contentDrawer)).toEqual(contentDrawerStatusAddInformationExpected);

    });

    test('should addInformationDrawer to state two', () => { 
        const contentDrawer: ContentDrawerType = {
            title: "!Hola",
            content: [{
                itemTitleDrawer: "Contabilidad",
                subItemTitleDrawer: [{
                    name: "Contabilidad-01",
                    path: "/contabilidad/01"
                }],
                path: "/contabilidad"
            }]
        }        
        expect(contentDrawerRules.agregarInformacionDrawer(contentDrawerState, contentDrawer)).toEqual(contentDrawerStatusAddInformationExpectedTwo);

    });

    test('should addInformationDrawer to state three', () => { 
        const contentDrawer: ContentDrawerType = {
            title: "Bienvenido!",
                content: [{
                    itemTitleDrawer: "Seguridad",
                    subItemTitleDrawer: [{
                        name: "Seguridad-01",
                        path: "/seguridad/01"
                    }],
                    path: "/seguridad"
                }]
        }        
        expect(contentDrawerRules.agregarInformacionDrawer(contentDrawerState, contentDrawer)).toEqual(contentDrawerStatusAddInformationExpectedThree);

    });
})