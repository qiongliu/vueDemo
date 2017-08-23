<template>
	<transition name="slide">
		<div class="res">
			<div class="header" ref="header">
					<div class="title">
					<p class="name">江苏常州翠竹中学16-17学年八年级下第二 次月考测试题-英语</p>
					<span class="time">2017-05-22 10:23:20</span>
				</div>
				<div class="fn">
					<div class="praise">
						<span class="i-praise"></span>
						<span class="data">1132</span>
					</div>
					<div class="download">
						<span class="i-download"></span>
						<span class="data">1132</span>
					</div>
				</div>
			</div>
			<Scroll class="scroll" ref="scroll">
				<div>
					<pre>会有 6 个(CSS)类名在 enter/leave 的过渡中切换
1、v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
2、v-enter-active: 定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。 这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
3、v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效（于此同时 v-enter 被删除），在 transition/animation 完成之后移除。
4、v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
5、v-leave-active: 定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。 这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
6、v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效（于此同时 v-leave 被删除），在 transition/animation 完成之后移除。</pre>
				</div>
			</Scroll>
		</div>
	</transition>
</template>

<script>
	import Scroll from 'base/scroll'
	export default {
		components: {
			Scroll
		},
		created () {
			this._getResDetail()
		},
		mounted () {
			setTimeout(() => {
				let headerHeight = this.$refs.header.clientHeight
				this.$refs.scroll.$el.style.top = headerHeight + 'px'
				this.$refs.scroll.refresh()
			},20)
		},
		methods: {
			_getResDetail () {
				let param = this.$route.query.resId
				console.log(param)
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
		overflow: hidden;
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
	
</style>