const ins = require('instagram-scraping')
const download = require('image-downloader')
const options = {

	url: "",
	dest:""

}

/*ins.scrapeTag('longbeach').then(result =>{

	const a = (result.medias).map(result => result.display_url)
	for(var b = 0; b < a.length; b++ ){

		let options = {
			url:a[b] ,
			dest:"D:/node/ImgIns/img"
		}
		download.image(options)
  		.then(({ filename, image }) => {
    			console.log('Saved to', filename)  // Saved to /path/to/dest/photo.jpg
  		})
  		.catch((err) => console.error(err))
	}

})*/

ins.scrapeUserPage('ntt_trang1011').then(result =>{

	var a = (((((result.user).edge_owner_to_timeline_media).edges).map(res => res.node).map(res => res.display_url)))
	for(var b = 0; b < a.length; b++){
	 	let options = {
	        	url:a[b],
	        	dest:"D:/node/ImgIns/img"
		}
		download.image(options)
		.then(({ filename, image }) => {
		        console.log('Saved to', filename)  // Saved to /path/to/dest/photo.jpg
	        })
	        .catch((err) => console.error(err))
	}
})

/*ins.deepScrapeTagPage('sad').then(result => {
	const a = (result.medias).map(res => res.display_url)
	for(var b = 0; b < a.length; b++){
                let options = {
                        url:a[b],
                        dest:"D:/node/ImgIns/img"
                }
                download.image(options)
                .then(({ filename, image }) => {
                        console.log('Saved to', filename)  // Saved to /path/to/dest/photo.jpg
                })
	        .catch((err) => console.error(err))
}

})
*/
