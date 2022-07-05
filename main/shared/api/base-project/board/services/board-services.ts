import { IBoardServices } from "main/entities/board/api/iboard-services";
import { EmbedConfigDomainType } from "main/pages/types/EmbedConfigDomainType";
import { OnlyInstantiableByContainer, Singleton } from "typescript-ioc";
import { BoardAPI } from "../boardAPI";
import { convertirAEmbedConfigDomainType } from "../mappers/board-services-mapper";
import { EmbedConfig } from "../models/board-response";

@Singleton
@OnlyInstantiableByContainer
export class BoardServices implements IBoardServices {

    public constructor(
        readonly boardAPI: BoardAPI
    ) {}

    public obtenerInformacionTablero = (tableroURL: string): Promise<EmbedConfigDomainType> => {
        return this.boardAPI.obtenerInformacionTablero(tableroURL)
            .then((embedConfig: EmbedConfig) => convertirAEmbedConfigDomainType(embedConfig));
    };

}


