import {createApi} from 'unsplash-js';
import {ApiResponse} from "unsplash-js/dist/helpers/response";

const unsplashCred = {
        access_key: "",
        secret_key: ""
}

import nodeFetch from 'node-fetch';


const unsplashClient = createApi({
	accessKey: unsplashCred.access_key,
	fetch: nodeFetch,
});

export const findUnsplashPhotos = async (query: string, page: number, perPage: number) => {
	query = query ? query : ""
	page = page > 1 ? page : 1
	perPage = perPage > 1 ? perPage : 1

	const criteria = {
		query,
		page,
		perPage
	}
	const result = await unsplashClient.search.getPhotos(criteria)
	if (result.type === "error") {
		const error = result.errors[0]
		throw error
	}
	const response = result.response;

	return response

}


