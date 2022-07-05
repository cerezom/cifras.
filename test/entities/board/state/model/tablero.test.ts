import { BoardState } from "main/entities/board/domain/model/board-state";
import BoardRules from "main/entities/board/domain/rules/board-rules";
import { tablero } from "main/entities/board/state/model/tablero";
import { EmbedConfigDomainType } from "main/pages/types/EmbedConfigDomainType";
import { Container, Snapshot } from "typescript-ioc";
import { BoardRulesMock } from "./mocks.config";

import '@testing-library/jest-dom';

describe('should manage application state', () => {
    
    let initialState: BoardState;
    let boardInformation: EmbedConfigDomainType;
    let addBoardResponse: BoardState;

    let snapshot: Snapshot

    beforeAll(() => {
        snapshot = Container.snapshot();
        Container.bind(BoardRules).to(BoardRulesMock);

        addBoardResponse = {
            informacionTablero: {
                type: "report",
                accessToken: "0000-mock",
                embedUrl: "https://mock-board.com",
                tokenType: 1
            }
        };
    });

    afterAll(() => {
        snapshot.restore();
    });

    test('should have a reducer to add dashboard info', () => {
        const newBoardState: BoardState = 
            tablero.reducers.agregarInformacionTablero(initialState, boardInformation)

        expect(newBoardState).toEqual(addBoardResponse);
    });
  

})
