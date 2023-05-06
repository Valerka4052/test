import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://64563e0e2e41ccf1691779b2.mockapi.io/api/cards/' }),
    tagTypes: ['users'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `users`,
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'users', id })),
                    { type: 'users', id: 'LIST' },
                ]
                : [{ type: 'users', id: 'LIST' }],
        }),
        changeFollowersQuantity: builder.mutation({
            query(data) {
                const { id, ...body } = data
                return {
                    url: `users/${id}`,
                    method: 'PUT',
                    body,
                }
            },
            invalidatesTags: (result, error, { id }) => [{ type: 'users', id }],
        }),
    }),
});

export const { useGetUsersQuery, useChangeFollowersQuantityMutation } = usersApi;