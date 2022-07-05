import { BoardState } from 'main/entities/board/domain/model/board-state';
import BoardRules from 'main/entities/board/domain/rules/board-rules';
import { EmbedConfigDomainType } from 'main/pages/types/EmbedConfigDomainType';
import { Container } from 'typescript-ioc';

describe('should test the domain rules of the board', () => {

    let boardRules: BoardRules;
    let boardState: BoardState;
    let boardStatusAddInfoDashboardExpected: BoardState
    let boardStatusAddInfoDashboardExpectedTwo: BoardState
    let boardStatusAddInfoDashboardExpectedThree: BoardState

    beforeEach(() => {
        boardRules = Container.get(BoardRules);

        boardState = {
            informacionTablero:{
                type: 'type',
                embedUrl: "",
                accessToken: "",
            }
        };

        boardStatusAddInfoDashboardExpected = {
            informacionTablero: {
                type: "type",
                embedUrl: "http://ejemplo/ejemplo-1.com",
                accessToken: "abc0123"
            }
        };

        boardStatusAddInfoDashboardExpectedTwo = {
            informacionTablero: {
                type: "visual",
                embedUrl: "http://ejemplo2/ejemplo2.com",
                accessToken: "0123Abc"
            }
        };

        boardStatusAddInfoDashboardExpectedThree = {
            informacionTablero: {
                type: "dashboard",
                embedUrl: "http://board3?board=ejemplo3&type=dashboard.com",
                accessToken: "zxywe-1222"
            }
        };

    });

    test('should addBoardInformation to state', () => {
        const board: EmbedConfigDomainType = { 
            type: "type",
            embedUrl: "http://ejemplo/ejemplo-1.com",
            accessToken: "abc0123"
        };

        expect(boardRules.agregarInformacionTablero(boardState, board)).toEqual(boardStatusAddInfoDashboardExpected)
    });

    test('should addBoardInformation to state test two', () => {
        const board: EmbedConfigDomainType = { 
            type: "visual",
            embedUrl: "http://ejemplo2/ejemplo2.com",
            accessToken: "0123Abc"
        };

        expect(boardRules.agregarInformacionTablero(boardState, board)).toEqual(boardStatusAddInfoDashboardExpectedTwo)
    });

    test('should addBoardInformation to state test three', () => {
        const board: EmbedConfigDomainType = { 
            type: "dashboard",
            embedUrl: "http://board3?board=ejemplo3&type=dashboard.com",
            accessToken: "zxywe-1222"
        };

        expect(boardRules.agregarInformacionTablero(boardState, board)).toEqual(boardStatusAddInfoDashboardExpectedThree)
    });
    
})
