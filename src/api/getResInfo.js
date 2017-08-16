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

export function getChooses () {
	const url = "/api/getChooses"

	const data = {
		type: 'chooses'
	}

	return axios.get(url,{
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}

export function getSelections () {
	const url = "/api/getSelections"

	const data = {
		type: 'selections'
	}

	return axios.get(url,{
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}