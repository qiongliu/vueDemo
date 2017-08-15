import * as types from './mutation-types'

const mutations = {
	[types.SET_TITLE] (state, title) {
		state.title = title
	}
}

export default mutations