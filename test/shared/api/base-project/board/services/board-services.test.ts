import { AxiosInstance } from "axios";
import { apiInstance } from "main/shared/api/base-project/config/api-instance";
import { IBoardServices } from "main/entities/board/api/iboard-services";
import { BoardAPI } from "main/shared/api/base-project/board/boardAPI";
import { Container, ObjectFactory, Snapshot } from "typescript-ioc";
import { BoardServices } from "main/shared/api/base-project/board/services/board-services";
import { EmbedConfig } from "main/shared/api/base-project/board/models/board-response";
import { EmbedConfigDomainType } from "main/pages/types/EmbedConfigDomainType";

describe('should have a services gateways to external resources', () => {

    let boardServices: IBoardServices;
    let snapshot: Snapshot;
    let boardAPIMock: jest.MockedFunction<any>
    let informacionTableroResponse: EmbedConfig;
    let obtenerInformacionTableroResponse: EmbedConfigDomainType;

    beforeAll(() => {
        snapshot = Container.snapshot();

        const BoardAPIMock = jest.fn<BoardAPI, [AxiosInstance]>((apiInstance: AxiosInstance) => ({
            apiInstance: apiInstance,
            obtenerInformacionTablero: jest.fn(),
        }));
        boardAPIMock = new BoardAPIMock(apiInstance);
        const boardServicesFactory: ObjectFactory = () => new BoardServices(boardAPIMock); 
        Container.bind(BoardServices).factory(boardServicesFactory);
        boardServices = Container.get(BoardServices);

        informacionTableroResponse = {
            EmbedUrl: "https://algo.com",
            EmbedToken:{
                Token: "000"
            },
            Type: "report"
        };

        obtenerInformacionTableroResponse = {
            type: informacionTableroResponse.Type,
            embedUrl: informacionTableroResponse.EmbedUrl,
            accessToken: informacionTableroResponse.EmbedToken.Token
        }
    });

    afterAll(() => {
        snapshot.restore();
    });

    test('should obtenerInformacionTablero', async() => { 
        boardAPIMock.obtenerInformacionTablero.mockResolvedValue(informacionTableroResponse);
        let board: EmbedConfigDomainType = await boardServices.obtenerInformacionTablero("https://hgg.com");
        expect(board).toEqual(obtenerInformacionTableroResponse);
        expect(boardAPIMock.obtenerInformacionTablero).toHaveBeenCalled();
    })

})