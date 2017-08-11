<template>
	<div class="slider" ref="slider">
		<div class="slider-group" ref="sliderGroup">
			<slot></slot>
		</div>
    <div class="dots">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
	</div>
</template>

<script>
	import {addClass} from 'common/js/dom'
	import BScroll from 'better-scroll'

	export default {
		mounted () {
			setTimeout(() => {
				this._setSliderWidth()			
			},20)
		},
		methods: {
			_setSliderWidth () {
				let width = 0
				let sliderWidth = this.$refs.slider.clientWidth
				this.children = this.$refs.sliderGroup.children
				for (let i = 0,len = this.children.length; i < len; i++) {
					let child = this.children[i]
					addClass(child,'slider-item')
					child.style.width = sliderWidth + 'px'
					width += sliderWidth
				}

				if (this.loop) {
					width += sliderWidth
				}

				this.$refs.sliderGroup.style.width = width + 'px'
			}
		}

	}
</script>

<style lang="scss">
	@import '../common/css/variable';
	@import '../common/css/mixin';
	.slider {
		min-height: 1;
		position: relative;
		.slider-group {
			overflow: hidden;
		}
		.slider-item {
			float: left;
		}
		a {
			display: block;
			width: 100%;
			overflow: hidden;
			text-decoration: none;
		}
		img {
			display: block;
			width: 100%;
		}
		.dots {
			position: absolute;
			left: 0;
			right: 0;
			text-align: center;
			@include px2rem(bottom,14);
			font-size: 0;
		}
		.dot {
			display: inline-block;
			margin: 0 0.053333rem;
			width: 0.106667rem;
			height: 0.106667rem;
			border-radius: 50%;
			background-color: $c-slider-btn;
			&.active {
				width: 0.266667rem;
				height: 0.266667rem;
				background-color: $c-slider-btn-ac;
			}
		}
	}
</style>