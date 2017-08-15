import axios from 'axios'

export function getSliderInfo () {
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

export function getWkInfo () {
	const url = '/api/getWkInfo'

	const data = {
		type: 'wk'
	}

	return axios.get(url,{
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}

export function getSubject () {
	const url = '/api/getSubject'

	const data = {
		type: 'subject'
	}

	return axios.get(url,{
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}

export function getResInfo () {
	const url = '/api/getResInfo'

	const data = {
		type: 'res'
	}

	return axios.get(url,{
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}