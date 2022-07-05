import { createModel } from "@rematch/core";
import { RootModel } from "main/shared/state/models/root-model";
import { ApiConfiguration } from "main/app/configuration/api-configuration";
import { DomainConfiguration } from "main/app/configuration/domain-configuration";
import { EmbedConfigDomainType } from "main/pages/types/EmbedConfigDomainType";
import BoardRules from "../../domain/rules/board-rules";
import { IBoardServices } from "../../api/iboard-services";
import { BoardState } from "../../domain/model/board-state";

export const tablero = createModel<RootModel>()({
    state: {
        informacionTablero: {
            type: 'report',
            embedUrl: '',
            tokenType: 1,
            accessToken: ''
        },
    } as BoardState,
    reducers: {
        agregarInformacionTablero: (state: BoardState, informacionTablero: EmbedConfigDomainType): BoardState => {
            const boardRules: BoardRules = DomainConfiguration.buildBoardRules();            
            return boardRules.agregarInformacionTablero(state, informacionTablero);
        }
    },
    effects: dispatch => ({
        async obtenerInformacionTablero(tableroURL: string): Promise<void> {
            try {
                const iboardServices: IBoardServices = ApiConfiguration.buildBoardServices(); 
                const informacionTablero: EmbedConfigDomainType = await iboardServices.obtenerInformacionTablero(tableroURL);
                dispatch.tablero.agregarInformacionTablero(informacionTablero);
            } catch (error) {
                console.log(error);
            }
        }
    })
})