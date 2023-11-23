import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL} from '../utils/constants'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: (builder) => {
        return {
            getCategories: builder.query({
                query: () => '/categories'
            }),
            getProducts: builder.query({
                query: (name) => `/category/${name}`
            }),
            getProductInfo: builder.query({
                query: (id) => `/${id}`
            })
        }
    }
})

export const { useGetCategoriesQuery, useGetProductsQuery, useGetProductInfoQuery } = productsApi;