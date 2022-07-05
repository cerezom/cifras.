
import { EmbedConfigDomainType } from "main/pages/types/EmbedConfigDomainType";
import { EmbedConfig } from "../models/board-response";

export const convertirAEmbedConfigDomainType = (embedConfig: EmbedConfig): EmbedConfigDomainType => {
    
    return {
        type: embedConfig.Type,
        embedUrl: embedConfig.EmbedUrl,
        accessToken: embedConfig.EmbedToken.Token
    }
};
