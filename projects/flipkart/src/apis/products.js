
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/constants'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL}),
    endpoints: (builder) => {
        return {
            getProductsData: builder.query({
                query: () => ''
            }),
            getProductsDetails: builder.query({
                query: (id) => `/${id}`
            })
        }
    }
})

export const { useGetProductsDataQuery, useGetProductsDetailsQuery } = productsApi;