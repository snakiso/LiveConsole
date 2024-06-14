import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Data} from "./types.ts";




export const dataService = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `/`,
    }),
    keepUnusedDataFor: 0,
    endpoints: builder => {
        return {
            getData: builder.query<Data, void>({
                query: () => `data.json`,
            }),

        }
    },

})

export const {useGetDataQuery} = dataService
