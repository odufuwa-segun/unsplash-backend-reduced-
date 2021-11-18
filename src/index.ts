import {findUnsplashPhotos} from "./service/mediaProvider.service";

const searchPhoto = async () => {

	const query = ""

	const result = await findUnsplashPhotos(query, 1, 50)
	console.log(result)
}


searchPhoto().then(() => {
	console.log("Done")
})