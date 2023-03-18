import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes: ["Books", "Book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      keepUnusedDataFor: 60,
      providesTags: ["Books"],
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: (result, error, id) => [{ type: "Book", id }],
    }),
    createBook: builder.mutation({
      query: (body) => ({
        url: "/books",
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, body) => [
        "Books",
        { type: "Book", id: result.id },
      ],
    }),
    updateBook: builder.mutation({
      query: (body) => ({
        url: `/books/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, body) => [
        "Books",
        { type: "Book", id: body.id },
      ],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = apiSlice;
