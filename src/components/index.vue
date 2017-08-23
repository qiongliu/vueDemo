<template>
	<div class="index">
		<scroll ref="scroll" class="content" :data="dataLoad">
			<div>
				<slider v-if="sliderInfo.length">
					<div v-for="item in sliderInfo">
						<a :href="item.linkUrl">
							<img :src="img" alt="" @load='imgLoad'>
						</a>
					</div>
				</slider>
				<div class="wk">
					<div class="title">
						<span></span>
						<h2>优选微课</h2>
					</div>
					<keep-alive>
						<wk-content :data="wkInfo"></wk-content>
					</keep-alive>
				</div>
				<div class="res">
					<h2><span></span>为您推荐的好资源<span></span></h2>
					<ul class="subject">
						<li v-for="item in subject"><a href="javascript:;">{{item.name}}</a></li>
					</ul>
					<res-content :data="resInfo" @clickItem="goResDetail"></res-content>
				</div>
				<!-- <div class="virtual-footer"></div> -->
			</div>
		</scroll>
	</div>
</template>

<script>
	import Slider from 'base/slider'
	import WkContent from 'base/card-view'
	import ResContent from 'base/list-view'
	import Scroll from 'base/scroll'
	import * as getData from 'api/getIndexInfo'
	import {ERR_OK} from 'api/config'
	import {mapMutations} from 'vuex'
	export default {
		data () {
			return {
				sliderInfo: [],
				wkInfo: [],
				resInfo: [],
				subject: [],
				img: require('../common/images/banner_01.jpg')
			}
		},
		components: {
			Slider,
			Scroll,
			WkContent,
			ResContent
		},
		created() {
			this._getSliderInfo()
			this._getWkInfo()
			this._getSubject()
			this._getResInfo()
		},
		computed: {
			dataLoad () {
				if (this.sliderInfo.length && this.wkInfo.length && this.resInfo.length && this.subject.length) {
					return this.resInfo
				}
			}
		},
		methods: {
			_getSliderInfo () {
				getData.getSliderInfo().then((res) => {
					if(res.code === ERR_OK) {
						this.sliderInfo = res.data
					}
				},(err) => {
					console.log(err)
				})
			},
			_getWkInfo () {
				getData.getWkInfo().then((res) => {
					this.wkInfo = res.data
				},(err) => {
					console.log(err)
				})
			},
			_getSubject () {
				getData.getSubject().then((res) => {
					this.subject = res.data
				})
			},
			_getResInfo () {
				getData.getResInfo().then((res) => {
					this.resInfo = res.data
				})
			},
			imgLoad () {
				if(!this.checkloaded) {
					this.checkloaded = true
					this.$refs.scroll.refresh()
				}
			},
			goResDetail (item) {
				this.$router.push({
					path: `/res/:${item.id}`
				})
				this.setTitle('资源')
				this.setShowBack(true)
			},
			...mapMutations ({
				setTitle: 'SET_TITLE',
				setShowBack: 'SET_SHOWBACK'
			})
		}
	}
</script>

<style lang="scss" scoped>
	@import '../common/css/mixin';
	.index {
		position: absolute;
		width: 100%;
		top: 1.706667rem;
		bottom: 1.28rem;
	}
	.content {
		height: 100%;
		overflow: hidden;
	}
	.wk {
		.title {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 1.466667rem;
		}
		h2 {
			@include px2px(font-size, 32)
			color: #4c4c4c;
			font-weight: 600;
		}
		span {
			width: 0.506667rem;
			height: 0.506667rem;
			display: inline-block;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			@include bg-image('../common/images/i-wk-title')
			margin-right: 0.106667rem;
		}
	}
	.res {
		h2 {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 1.333333rem;
			@include px2px(font-size, 26)
			color: #999;
			span {
				@include px2px(width, 110)
				@include px2px(height, 1)
				background: url(../common/images/res-title-bg.png) center center no-repeat;
				background-size: 100% 100%;
				margin: 0 0.16rem;
			}
		}
		.subject {
			display: flex;
			flex-wrap: wrap;
			li {
				flex: 1;
				margin: 0.066667rem 0;
				display: flex;
				justify-content: center;
			}
			a {
				display: block;
				width: 2.24rem;
				height: 0.773333rem;
				border-radius: 0.08rem;
				@include px2px(border-width, 1)
				border-style: solid;
				border-color: #b5b5b5;
				color: #1a1a1a;
				text-align: center;
				line-height: 0.773333rem;
			}
		}
	}
</style>