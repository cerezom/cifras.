import { BoardState } from 'main/entities/board/domain/model/board-state';
import { EmbedConfigDomainType } from 'main/pages/types/EmbedConfigDomainType';

export class BoardRulesMock {
    
    public agregarInformacionTablero(state: BoardState, informacionTablero: EmbedConfigDomainType): BoardState {
        console.log(`Mock function -> boardRules.agregarInformacionTablero(${JSON.stringify(state)}, ${JSON.stringify(informacionTablero)})`);
        return {
            informacionTablero: {
                type: "report",
                accessToken: "0000-mock",
                embedUrl: "https://mock-board.com",
                tokenType: 1
            }
        }
    };
}
