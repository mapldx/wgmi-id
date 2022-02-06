import Moralis from 'moralis'
import axios from 'axios'

export default (path, callback) => {
	setTimeout(async () => {
		const params = {
			username: path
		};
		var u = await Moralis.Cloud.run("userInfo", params);
		var user = u[0].attributes
    var nft = []
    try {
      var solAddress = u[0].attributes.solAddress
      nft = await axios.get(`https://api.blockchainapi.com/v1/solana/wallet/mainnet-beta/${solAddress}/nfts`, {
        headers: {
          'APIKeyID': '6rNBepYdWdgmVOs',
          'APISecretKey': '9GaOcfpO0kTm3HH'
        }
      })
    } catch (error) {
      console.log(error)
    }
    try {
      var ethAddress = u[0].attributes.ethAddress
      var e = await axios.get(`https://deep-index.moralis.io/api/v2/${ethAddress}/nft?chain=eth&format=decimal&limit=4`, {
        headers: {
          'X-API-Key': 'CJT4CvxuKhMbUqAa1RFV7Ryq5cGejYLT4vVYt3tbaHZ8cz7bc4q7Vyd4wYPw2VY2'
        }
      })
      for (var i = 0; i < 4; i++) {
        var token_address = e.data.result[i]["token_address"]
        var id = e.data.result[i]["token_id"]
        var metadata = await axios.get(`https://api.opensea.io/api/v1/asset/${token_address}/${id}/?format=json`)
        var obj = {
          "name": metadata.data.name,
          "description": metadata.data.description,
          "image": metadata.data.image_url
        }
        nft.push(obj)
      }
      console.log(nft)
    } catch (error) {
      console.log(error)
    }
		callback(nft, user);
	}, 0);
};
