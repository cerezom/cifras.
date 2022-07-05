import { IContentDrawerServices } from 'main/entities/contentDrawer/api/icontent-drawer-services';
import { ContentDrawerAPI } from 'main/shared/api/base-project/contentDrawer/contentDrawerAPI';
import { Container, ObjectFactory, Snapshot } from 'typescript-ioc';
import { AxiosInstance } from "axios";
import { apiInstance } from 'main/shared/api/base-project/config/api-instance';
import { ContentDrawerServices } from 'main/shared/api/base-project/contentDrawer/services/content-drawer-services';
import { ContentDrawerResponse } from 'main/shared/api/base-project/contentDrawer/models/content-drawer-response';
import { ContentDrawerType } from 'main/pages/types/ContentDrawerType';

describe('should have a services gateways to external resources', () => { 
    let contentDrawerServices: IContentDrawerServices;
    let snapshot: Snapshot;
    let contentDrawerAPIMock: jest.MockedFunction<any>
    let contenidoDrawerResponse: ContentDrawerResponse;
    let obtenerContenidoDelDrawerResponse: ContentDrawerType;


    beforeAll(() => {
        snapshot = Container.snapshot();

        const ContentDrawerApiMock = jest.fn<ContentDrawerAPI, [AxiosInstance]>((apiInstance: AxiosInstance) => ({
            apiInstance: apiInstance,
            obtenerContenidoDelDrawer: jest.fn()
        }));
        contentDrawerAPIMock = new ContentDrawerApiMock(apiInstance);
        const contentDrawerServicesFactory: ObjectFactory = () => new ContentDrawerServices(contentDrawerAPIMock);
        Container.bind(ContentDrawerServices).factory(contentDrawerServicesFactory);
        contentDrawerServices = Container.get(ContentDrawerServices);

        contenidoDrawerResponse = {
            title: "Bienvenido",
            content: [{
                itemTitleDrawer: "secretaria-01",
                subItemTitleDrawer: [{
                    name: "secretaira-01.01",
                    path: "/secretaria-01/tic"
                }],
                path: "/secretaria-01"
            }]
        };

        obtenerContenidoDelDrawerResponse ={
            title: contenidoDrawerResponse.title,
            content: contenidoDrawerResponse.content
        };

        
    });
    
    afterAll(() => {
        snapshot.restore();
    });
    
    test('should obtenerContenidoDelDrawer', async() => { 
        contentDrawerAPIMock.obtenerContenidoDelDrawer.mockResolvedValue(contenidoDrawerResponse);
        let contentDrawer: ContentDrawerType = await contentDrawerServices.obtenerContenidoDelDrawer();
        expect(contentDrawer).toEqual(obtenerContenidoDelDrawerResponse);
    });
})