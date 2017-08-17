<template>
	<div class="res">
		<chooser :chooses="chooses" @clickChoose="clickChoose"></chooser>
		<selection :selections="selections" @clickSelection="clickSelection"></selection>
		<div class="content">
			<scroll ref="scroll" :data="dataLoad" class="scroll">
				<list-view :data="content" @goResDetail="goResDetail"></list-view>
			</scroll>
		</div>
		<keep-alive>
			<router-view></router-view>		
		</keep-alive>
		<m-dialog v-show="showDialog" @clickDialog="clickDialog">
			<p>{{dialogContent}}</p>
		</m-dialog>
	</div>
</template>

<script>
	import Scroll from 'base/scroll'
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
			MDialog,
			Scroll
		},
		data () {
			return {
				chooses: [],
				content: [],
				selections: [],
				showDialog: false,
				dialogContent: 'hello!!'
			}
		},
		created () {
			this._getContent()
			this._getChooses()
			this._getSelection()
		},
		computed: {
			dataLoad () {
				return this.content
			}
		},
		methods: {
			_getContent () {
				getData.getContent().then((res) => {
					this.content = res.data
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
				getData.getContent(choose).then((res) => {
					this.content = res.data
					this.$refs.scroll.refresh()
				})
			},
			clickSelection (selection,index) {
				if (index === 0) return
				let lastIndex = index - 1
				if (!this.selections[lastIndex].checked) {
					this.dialogContent = `请先选择${this.selections[lastIndex].type}`
					this.showDialog = true
				}
			},
			clickDialog (type) {
				switch (type) {
					case "confirm": 
						console.log(type)
						this.showDialog = false
						break;
					case "cancel": 
						console.log(type)
						this.showDialog = false
						break;
					case "close": 
						console.log(type)
						this.showDialog = false
						break;
				}
			},
			goResDetail (item) {
				this.$router.push({
					path: `/res/:${item.id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../common/css/variable';
	.content {
		position: fixed;
		top: $h-hd + $h-chooser + $h-selection;
		bottom: $h-ft;
	}
	.scroll {
		height: 100%;
		overflow: hidden;
	}
</style>