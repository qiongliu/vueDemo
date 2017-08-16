import axios from 'axios'

export function getResInfo () {
	const url = "/api/getResInfo"

	const data = {
		type: 'res'
	}

	return axios.get(url,{
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}