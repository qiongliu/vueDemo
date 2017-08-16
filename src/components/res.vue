<template>
	<div class="res">
		<chooser :chooses="chooses" @clickChoose="clickChoose"></chooser>
		<selection :selections="selections"></selection>
		<list-view :data="contentInfo"></list-view>
		<keep-alive>
			<router-view></router-view>		
		</keep-alive>
		<m-dialog></m-dialog>
	</div>
</template>

<script>
  import Chooser from 'base/chooser'
	import Selection from 'base/selection'
	import ListView from 'base/list-view'
	import * as getData from 'api/getResInfo'
	import MDialog from 'base/dialog'
	export default {
		components: {
			Chooser,
			Selection,
			ListView,
			MDialog
		},
		data () {
			return {
				chooses: [],
				contentInfo: [],
				selections: []
			}
		},
		created () {
			this._getContent()
			this._getChooses()
			this._getSelection()
		},
		methods: {
			_getContent () {
				getData.getResInfo().then((res) => {
					this.contentInfo = res.data
				})
			},
			_getChooses () {
				getData.getChooses().then((res) => {
					this.chooses = res.data
				})
			},
			_getSelection () {
				getData.getSelections().then((res) => {
					this.selections = res.data
				})
			},
			clickChoose (choose) {
				console.log(choose)
			}

		}
	}
</script>

<style lang="scss" scoped>

</style>