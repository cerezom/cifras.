import { ContentDrawerType } from "main/pages/types/ContentDrawerType";
import { OnlyInstantiableByContainer, Singleton } from "typescript-ioc";
import { ContentDrawerState } from "../model/content-drawer-state";

@Singleton
@OnlyInstantiableByContainer
export default class ContentDrawerRules {

    public agregarInformacionDrawer(state: ContentDrawerState, informacionContentDrawer: ContentDrawerType) {
        return {
            ...state,
            informacionContentDrawer: informacionContentDrawer
        }
    };

}

