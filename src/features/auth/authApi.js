import apiSlice from '../api/apiSlice'
import { setUser } from './authSlice'

const authApi = apiSlice.injectEndpoints({
	endpoints: builder => ({
		// signup an user
		signup: builder.mutation({
			query: data => ({
				url: 'api/user/sign-up',
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['User']
		}),

		// signin an user
		signin: builder.mutation({
			query: data => ({
				url: 'api/user/sign-in',
				method: 'POST',
				body: data
			}),
			providesTags: ['User'],
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const userData = await queryFulfilled
					console.log(userData.data)

					if (Object.keys(userData.data).length > 3) {
						localStorage.setItem('accessToken', userData.data.accessToken)
						dispatch(setUser(userData.data))
					} else {
						//console.log(userData);
						throw new Error(userData.data.message)
					}
				} catch (error) {
					return error.description
				}
			}
		}),

		// display all users
		displayUsers: builder.query({
			query: ({ page, limit }) => ({
				url: page && limit ? `api/user/all?page=${page}&limit=${limit}` : `api/user/all`,
				method: 'GET'
			}),
			providesTags: ['User']
		}),

		// forgot password
		forgotPassword: builder.mutation({
			query: data => ({
				url: 'api/user/forgot-password',
				method: 'PATCH',
				body: data
			}),
			invalidatesTags: ['User']
		}),

		// update user
		updateUser: builder.mutation({
			query: ({ uid, userData }) => ({
				url: `api/user/${uid}`,
				method: 'PATCH',
				body: userData
			}),
			invalidatesTags: ['User']
		})
	})
})

export const {
	useSignupMutation,
	useSigninMutation,
	useForgotPasswordMutation,
	useUpdateUserMutation,
	useDisplayUsersQuery
} = authApi
