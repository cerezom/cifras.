import { createModel } from "@rematch/core";
import { RootModel } from "main/shared/state/models/root-model";
import { ApiConfiguration } from "main/app/configuration/api-configuration";
import { DomainConfiguration } from "main/app/configuration/domain-configuration";
import { ContentDrawerType } from "main/pages/types/ContentDrawerType";
import ContentDrawerRules from "../../domain/rules/content-drawer-rules";
import { IContentDrawerServices } from "../../api/icontent-drawer-services";
import { ContentDrawerState } from "../../domain/model/content-drawer-state";


const icontentDrawerServices: IContentDrawerServices = ApiConfiguration.buildContentDrawerServices();

export const contentDrawer = createModel<RootModel>()({
    state: {
        informacionContentDrawer: {},
    } as ContentDrawerState,
    reducers: {
        agregarInformacionDrawer: (state: ContentDrawerState, informacionContentDrawer: ContentDrawerType): ContentDrawerState => {
            const drawerContentRules: ContentDrawerRules = DomainConfiguration.buildContentDrawerRules();
            return drawerContentRules.agregarInformacionDrawer(state, informacionContentDrawer);
        }
    },
    effects: dispatch => ({
        async obtenerInformacionDrawer(): Promise<void> {
            try {            
                const informacionDrawer: ContentDrawerType = await icontentDrawerServices.obtenerContenidoDelDrawer();     
                dispatch.contentDrawer.agregarInformacionDrawer(informacionDrawer)
            } catch (error) {
                console.log(error);
            }
        }
    })
})