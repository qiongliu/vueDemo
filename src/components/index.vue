<template>
	<div class="index">
		<slider v-if="sliderInfo.length">
			<div v-for="item in sliderInfo">
				<a :href="item.linkUrl">
					<img :src="item.imgUrl" alt="">
				</a>
			</div>
		</slider>
		<scroll :data="wkInfo">
			<div class="wk">
				<div class="title">
					<span></span>
					<h2>优选微课</h2>
				</div>
				<wk-content :data="wkInfo"></wk-content>
			</div>
		</scroll>
	</div>
</template>

<script>
	import Slider from 'base/slider'
	import Scroll from 'base/scroll'
	import WkContent from 'components/wk-content'
	import {getSliderInfo,getWkInfo} from 'api/getIndexInfo'
	import {ERR_OK} from 'api/config'
	export default {
		data () {
			return {
				sliderInfo: [],
				wkInfo: []
			}
		},
		components: {
			Slider,
			Scroll,
			WkContent
		},
		created() {
			this._getSliderInfo()
			this._getWkInfo()
		},
		methods: {
			_getSliderInfo () {
				getSliderInfo().then((res) => {
					if(res.code === ERR_OK) {
						this.sliderInfo = res.data
					}
				},(err) => {
					console.log(err)
				})
			},
			_getWkInfo () {
				getWkInfo().then((res) => {
					this.wkInfo = res.data
				},(err) => {
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../common/css/variable';
	@import '../common/css/mixin';

	.title {
		display: flex;
		justify-content: center;
		align-items: center;
		@include px2rem(height, 110)
		h2 {
			@include px2px(font-size, 32)
			color: #4c4c4c;
			font-weight: 600;
		}
		span {
			@include px2px(width, 38)
			@include px2px(height, 38)
			display: inline-block;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			@include bg-image('../common/images/i-wk-title')
			@include px2px(margin-right, 8)
		}
	}
</style>