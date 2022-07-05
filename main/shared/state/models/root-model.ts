import { Models } from '@rematch/core'
import { tablero } from 'main/entities/board/state/model/tablero';
import { contentDrawer } from 'main/entities/contentDrawer/state/model/contentDrawer';

export interface RootModel extends Models<RootModel> {
    tablero: typeof tablero,
    contentDrawer: typeof contentDrawer
}

export const models: RootModel = { tablero, contentDrawer }