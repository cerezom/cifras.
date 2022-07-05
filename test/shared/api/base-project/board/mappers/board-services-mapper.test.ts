import { EmbedConfigDomainType } from 'main/pages/types/EmbedConfigDomainType';
import { convertirAEmbedConfigDomainType } from 'main/shared/api/base-project/board/mappers/board-services-mapper';
import { EmbedConfig } from 'main/shared/api/base-project/board/models/board-response';

describe('should have mappers domain to api and api to domain', () => {
    
    const type = "report";
    const embedUrl = "https://www.tablero.com";
    const embedToken = {
        Token: "12345-ABCDE"
    };
    
    let bordResponseAPI: EmbedConfig;
    let boardDomainExpected: EmbedConfigDomainType;

    beforeAll(() => {
        bordResponseAPI = {
            EmbedToken: embedToken,
            Type: type,
            EmbedUrl: embedUrl
        };

        boardDomainExpected = {
            type: type,
            embedUrl: embedUrl,
            accessToken: embedToken.Token
        }
    });

    test('should mapper convertirAEmbedConfigDomainType', () => {
        let board: EmbedConfigDomainType = convertirAEmbedConfigDomainType(bordResponseAPI);
        expect(board).toEqual(boardDomainExpected);
    });
})
 