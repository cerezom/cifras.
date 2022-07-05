import { EmbedConfigDomainType } from "main/pages/types/EmbedConfigDomainType";

export interface IBoardServices {
    obtenerInformacionTablero(tableroURL: string): Promise<EmbedConfigDomainType>;
};