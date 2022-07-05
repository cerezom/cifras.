import { models } from 'powerbi-client';

export type EmbedConfigDomainType = {
    type?: string,
    embedUrl: string,
    tokenType?: models.TokenType.Embed,
    accessToken: string,
}