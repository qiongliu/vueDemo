import * as types from './mutation-types'

const mutations = {
	[types.SET_TITLE] (state, title) {
		state.title = title
	},
	[types.SET_SHOWBACK] (state, back) {
		state.showBack = back
	}
}

export default mutations