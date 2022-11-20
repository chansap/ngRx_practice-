import { createFeatureSelector, createSelector } from "@ngrx/store";


const _albumSelector = createFeatureSelector<any>('getAlbum')

export const albumSelector = createSelector(
    _albumSelector,
    (state) => state
)