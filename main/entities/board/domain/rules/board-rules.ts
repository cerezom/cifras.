import { EmbedConfigDomainType } from "main/pages/types/EmbedConfigDomainType";
import { OnlyInstantiableByContainer, Singleton } from "typescript-ioc";
import { BoardState } from "../model/board-state";

@Singleton
@OnlyInstantiableByContainer
export default class BoardRules {

    public agregarInformacionTablero(state: BoardState, informacionTablero: EmbedConfigDomainType): BoardState {
        return {
            ...state,
            informacionTablero: informacionTablero
        }
    };

}

