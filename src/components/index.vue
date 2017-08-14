<template>
	<div class="index">
		<scroll class="content" :data="wkInfo">
			<div>
				<slider v-if="sliderInfo.length">
					<div v-for="item in sliderInfo">
						<a :href="item.linkUrl">
							<img :src="item.imgUrl" alt="">
						</a>
					</div>
				</slider>
				<div class="wk">
					<div class="title">
						<span></span>
						<h2>优选微课</h2>
					</div>
					<wk-content :data="wkInfo"></wk-content>
				</div>
				<div class="res">
					<h2><span></span>为您推荐的好资源<span></span></h2>
					<ul class="subject">
						<li><a href="javascript:;">数学</a></li>
						<li><a href="javascript:;">语文</a></li>
						<li><a href="javascript:;">英语</a></li>
						<li><a href="javascript:;">物理</a></li>
						<li><a href="javascript:;">化学</a></li>
						<li><a href="javascript:;">政治</a></li>
						<li><a href="javascript:;">历史</a></li>
						<li><a href="javascript:;">更多</a></li>
					</ul>
					<ul class="info-group">
						<li>
						 <a href="javascript:;">
							<div class="img">
								<img src="../common/images/ppt.png" alt="">
							</div>
							<div class="info">
								<p class="name">英语八年级上译林牛津版测试题</p>
								<p class="detail">学业测试 英语</p>
							</div>
						 </a>
						</li>
						<li>
						 <a href="javascript:;">
							<div class="img">
								<img src="../common/images/ppt.png" alt="">
							</div>
							<div class="info">
								<p class="name">英语八年级上译林牛津版测试题</p>
								<p class="detail">学业测试 英语</p>
							</div>
						 </a>
						</li>
						<li>
						 <a href="javascript:;">
							<div class="img">
								<img src="../common/images/ppt.png" alt="">
							</div>
							<div class="info">
								<p class="name">英语八年级上译林牛津版测试题</p>
								<p class="detail">学业测试 英语</p>
							</div>
						 </a>
						</li>
						<li>
						 <a href="javascript:;">
							<div class="img">
								<img src="../common/images/ppt.png" alt="">
							</div>
							<div class="info">
								<p class="name">英语八年级上译林牛津版测试题</p>
								<p class="detail">学业测试 英语</p>
							</div>
						 </a>
						</li>
						<li>
						 <a href="javascript:;">
							<div class="img">
								<img src="../common/images/ppt.png" alt="">
							</div>
							<div class="info">
								<p class="name">英语八年级上译林牛津版测试题</p>
								<p class="detail">学业测试 英语</p>
							</div>
						 </a>
						</li>
						<li>
						 <a href="javascript:;">
							<div class="img">
								<img src="../common/images/ppt.png" alt="">
							</div>
							<div class="info">
								<p class="name">英语八年级上译林牛津版测试题</p>
								<p class="detail">学业测试 英语</p>
							</div>
						 </a>
						</li>
					</ul>
				</div>
				<!-- <div class="virtual-footer"></div> -->
			</div>
		</scroll>
	</div>
</template>

<script>
	import Slider from 'base/slider'
	import WkContent from 'components/wk-content'
	import Scroll from 'base/scroll'
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

<style lang="scss" scoped>
	@import '../common/css/variable';
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
			@include px2px(margin-right, 8)
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
		.info-group {
			li {
				border-bottom: solid #e0e0e0;
				@include px2px(border-width, 1)
			}
			a {
				height: 1.733333rem;
				display: flex;
				align-items: center;
				padding: 0 0.213333rem;
			}
			.img {
				width: 1.106667rem;
				height: 1.16rem;
				border-width: 0.013333rem;
				border: solid #e0e0e0;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			img {
				width: 0.693333rem;
				height: 0.773333rem;
			}
			.info {
				flex: 1;
				margin-left: 0.266667rem;
			}
			p {
				line-height: 0.613333rem;
			}
			.name {
				@include px2px(font-size, 28)
				color: #191919;
			}
			.detail {
				@include px2px(font-size, 24)
				color: #808080
			}
		}
	}
	.virtual-footer {
		height: 1.28rem;
	}
</style>