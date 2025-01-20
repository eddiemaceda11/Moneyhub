import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const overviewApi = createApi({
  reducerPath: "overviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getOverview: builder.query({ query: () => "data.json" }),
  }),
});

export const { useGetOverviewQuery } = overviewApi;
