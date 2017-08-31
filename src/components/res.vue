<template>
	<div class="res">
		<chooser :chooses="chooses" @clickChoose="clickChoose"></chooser>
		<selection :selections="selections" @clickSelection="clickSelection"></selection>
		<div class="content">
			<list-view :data="content" 
								 :hasTitle="true"
								 :hasShortcut="true"
								 :hasFixedTitle="true"
								 :listenScroll="true"
								 @clickItem="goResDetail">
			</list-view>
		</div>
		<router-view></router-view>		
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
	import {mapMutations} from 'vuex'
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
			clickChoose (index) {
				getData.getContent(index).then((res) => {
					this.content = res.data
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
						this.showDialog = false
						break;
					case "cancel": 
						this.showDialog = false
						break;
					case "close": 
						this.showDialog = false
						break;
				}
			},
			goResDetail (item) {
				this.$router.push({
					path: `/res/:${item.id}`,
					query: {
						resId: item.id
					}	
				})
				this.showBack(true)
			},
			...mapMutations ({
				showBack: 'SET_SHOWBACK'
			})
		}
	}
</script>

<style lang="scss" scoped>
	@import '../common/css/variable';
	.content {
		position: fixed;
		top: $h-hd + $h-chooser + $h-selection;
		bottom: $h-ft;
		width: 100%;
	}
</style>