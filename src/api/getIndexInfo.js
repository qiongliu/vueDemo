import axios from 'axios'

export function getSliderInfo() {
	const url = '/api/getSliderInfo'

	const data = {
		type: 'slider'
	}

	return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}