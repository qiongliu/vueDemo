<template>
	<transition name="slide">
		<div class="res" v-for="item in data">
			<div class="header" ref="header">
					<div class="title">
					<p class="name">{{item.title}}</p>
					<span class="time">{{item.time}}</span>
				</div>
				<div class="fn">
					<div class="praise">
						<span class="i-praise"></span>
						<span class="data">{{item.praise}}</span>
					</div>
					<div class="download">
						<span class="i-download"></span>
						<span class="data">{{item.download}}</span>
					</div>
				</div>
			</div>
			<div class="mask" ref="mask"></div>
			<Scroll class="scroll" ref="scroll" :data="data" :probeType="3" :listenScroll="true" @scroll="listenScroll">
				<div>
					<pre v-html="item.content"></pre>
				</div>
			</Scroll>
		</div>
	</transition>
</template>

<script>
	import Scroll from 'base/scroll'
	import {getResDetail} from 'api/getResInfo'
	export default {
		components: {
			Scroll
		},
		created () {
			this._getResDetail()
		},
		data () {
			return {
				data: [],
				posY: 0
			}
		},
		mounted () {
			setTimeout(() => {
				this._calculateHeight()
			},20)
		},
		methods: {
			listenScroll (pos) {
				// console.log(parseInt(this.$refs.mask[0].style.top))
				this.posY = pos.y;
			},
			_getResDetail () {
				let param = this.$route.query.resId
				getResDetail(param).then((res) => {
					this.data.push(res.data)
				})
			},
			_calculateHeight () {
				let headerHeight = this.$refs.header[0].clientHeight
				this.$refs.scroll[0].$el.style.top = headerHeight + 'px'
				this.$refs.mask[0].style.height = headerHeight + 'px'
				this.$refs.mask[0].style.top = headerHeight + 'px'
				// this.$refs.scroll.refresh()
			}
		},
		watch: {
			posY (y) {
				console.log(y)
				let offsetY = y
				if (this.$refs.header[0].clientHeight + y <= 0) {
					this.$refs.scroll[0].$el.style.Zindex = '-1'
					return
				}
				this.$refs.mask[0].style.transform = `translate3d(0, ${offsetY}px, 0`
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../common/css/mixin';
	.res {
		position: fixed;
		top: 1.706667rem;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		z-index: 1002;
	}
	.slide-enter-active,.slide-leave-active {
		transition: all 0.2s ease;
	}
	.slide-enter,.slide-leave-to {
		transform: translate3d(100%,0,0);
	}
	.title {
		padding: 0.4rem;
		border-top: 1px solid #e0e0e0;
		.name {
			color: #1a1a1a;
			line-height: 0.693333rem;
			@include px2px(font-size, 36);
		}
		.time {
			color: #808080;
			@include px2px(font-size, 24);
			line-height: 0.666667rem;
		}
	}
	.fn {
		display: flex;
		.praise,.download {
			flex: 1;
			height: 0.906667rem;
			text-align: center;
			line-height: 0.906667rem;
			border: 1px solid #e0e0e0;
		}
		.i-download,.i-praise {
			background-size: 0.426667rem 0.426667rem;
			width: 0.426667rem;
			height: 0.426667rem;
			display: inline-block;
			vertical-align: text-bottom;
		}
		.i-download {
			background-image: url(../common/images/i-download.png);
			background-repeat: no-repeat;
		}
		.i-praise {
			background-image: url(../common/images/i-praise.png);
			background-repeat: no-repeat;
		}
	}
	.scroll {
		// overflow: hidden;
		position: absolute;
		bottom: 0.4rem;
		width: 100%;
		// top: 0;
	}
	pre {
		padding: 0.266667rem;
		padding-bottom: 0;
		white-space: pre-wrap;
		@include px2px(font-size, 32);
		color: #000;
		line-height: 0.746667rem;
	}
	.mask {
		background-color: #fff;
		width: 100%;
		position: absolute;
	}
	
</style>