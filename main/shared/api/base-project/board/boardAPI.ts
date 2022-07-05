import { AxiosInstance } from "axios";
import { OnlyInstantiableByContainer, Singleton } from "typescript-ioc";
import { EmbedConfig } from "./models/board-response";

@Singleton
@OnlyInstantiableByContainer
export class BoardAPI {

    public constructor(
        readonly apiInstance: AxiosInstance
    ) {}

    public obtenerInformacionTablero = (tableroURL: string): Promise<EmbedConfig> => {
        return this.apiInstance.get(tableroURL); 
    };

};

