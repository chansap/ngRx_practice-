import { createFeatureSelector, createSelector } from "@ngrx/store";

const _addselector = createFeatureSelector<any>('addref');

export const addselector = createSelector(
    _addselector,
    (state) => {
        return state
    }
)