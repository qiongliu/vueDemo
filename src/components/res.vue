<template>
	<div class="res">
		<chooser :chooses="chooses"></chooser>
		<div class="select">
			<selection :selections="selections"></selection>
		</div>
		<div class="content">
			<list-view :data="contentInfo"></list-view>
		</div>
		<keep-alive>
			<router-view></router-view>		
		</keep-alive>
	</div>
</template>

<script>
  import Chooser from 'base/chooser'
	import Selection from 'base/selection'
	import ListView from 'base/list-view'
	import {getResInfo} from 'api/getResInfo'
	export default {
		components: {
			Chooser,
			Selection,
			ListView
		},
		data () {
			return {
				chooses: ['好评','最新','最热'],
				contentInfo: [],
				active: 0,
				selections: [
					{
						type: '年级',
						content: ['一年级','二年级','三年级','四年级','五年级','六年级','七年级']
					},
					{
						type: '科目',
						content: ['科目一','科目二','科目三','科目四','科目五','科目六','科目七','科目八','科目九','科目十']
					},
					{
						type: '教材版本',
						content: ['版本一','版本二','版本三','版本四']
					},
					{
						type: '试卷分类',
						content: ['试卷分类一','试卷分类二','试卷分类三','试卷分类四','试卷分类五','试卷分类六','试卷分类七']
					}
				]
			}
		},
		created () {
			this._getContent()
		},
		methods: {
			_getContent () {
				getResInfo().then((res) => {
					this.contentInfo = res.data
				})
			},
			isActive (index) {
				this.active = index
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>