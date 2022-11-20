import { createAction, props } from "@ngrx/store";

// export const addNum = createAction('[sample Ng Component]', props<{num:any}>())

export const addNum = createAction('[Sample Ng Component]', (num:number) => ({num}))

export const getAlbumAction = createAction('[Action for album]')

export const getAlbumActionSuccess = createAction('[Action for Success Album]', 
                                        // props<{ albums: {} }>() )
                                        (albums:any) => ({albums})  
                                        )

