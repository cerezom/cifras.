import { AxiosInstance } from "axios";
import { OnlyInstantiableByContainer, Singleton } from "typescript-ioc";
import { ContentDrawerResponse } from "./models/content-drawer-response";

@Singleton
@OnlyInstantiableByContainer
export class ContentDrawerAPI {

    public constructor(
        readonly apiInstance: AxiosInstance
    ) {}

    public obtenerContenidoDelDrawer = (): Promise<ContentDrawerResponse>  => {
        return Promise.resolve({
            title: '¡Bienvenido!',
            content: [
                {
                    "itemTitleDrawer": "Secretar\u00cda TIC",
                    "path": "/secretaria_tic",
                    "subItemTitleDrawer": [
                        {
                            "name": "objeto1",
                            "path": "/secretaria_tic/objeto1"
                        },
                        {
                            "name": "objeto2",
                            "path": "/secretaria_tic/objeto2"
                        }
                    ]
                },
                {
                    "itemTitleDrawer": "Secretar\u00cda Seguridad",
                    "path": "/secretaria_seguridad",
                    "subItemTitleDrawer": [
                        {
                            "name": "objeto1",
                            "path": "/tablero/powerbi?tablerourl=https://playgroundbe-bck-1.azurewebsites.net/Reports/SampleReport&type=report"
    
                        },
                        {
                            "name": 'objeto2',
                            "path": "/tablero/powerbi?tablerourl=https://playgroundbe-bck-1.azurewebsites.net/Reports/LayoutDemoReport&type=report"
                        },
                        {
                            "name": 'objeto3',
                            "path": "/tablero/powerbi?tablerourl=https://playgroundbe-bck-1.azurewebsites.net/Reports/ThemesReport&type=report"
                        }
                    ],
                },
                {
                    "itemTitleDrawer": "Secretar\u00cda Salud",
                    "path": "/tablero/powerbi?tablerourl=https://playgroundbe-bck-1.azurewebsites.net/Reports/InsightToActionReport&type=report",
                    "subItemTitleDrawer": [],
                },
                {
                    "itemTitleDrawer": "Secretar\u00cda Infrastructura",
                    "path": "/secretaria_infrastructura",
                    "subItemTitleDrawer": [
                        {
                            "name": "objeto1",
                            "path": "/tablero/powerbi?tablerourl=https://playgroundbe-bck-1.azurewebsites.net/Reports/InsightToActionGreenReport&type=report",
                        },
                        {
                            "name": "objeto2",
                            "path": "/tablero/powerbi?tablerourl=https://playgroundbe-bck-1.azurewebsites.net/Reports/InsightToActionV2Report&type=report",
                        }
                    ]
                }
            ]        
        })
    }
};