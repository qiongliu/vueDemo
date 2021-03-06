<template>
	<div class="slider" ref="slider">
		<div class="slider-group" ref="sliderGroup">
			<slot></slot>
		</div>
    <div class="dots">
      <span class="dot" :class="{'active': currentPageIndex === index}" v-for="(item,index) in dots"></span>
    </div>
	</div>
</template>

<script>
	import {addClass} from 'common/js/dom'
	import BScroll from 'better-scroll'

	export default {
		props: {
			loop: {
				type: Boolean,
				default: true
			},
			autoPlay: {
				type: Boolean,
				default: false
			},
			interval: {
				type: Number,
				default: 4000
			}
		},
		data () {
			return {
				dots: [],
				currentPageIndex: 0
			}
		},
		mounted () {
			setTimeout(() => {
				this._setSliderWidth()	
				this._initDots()	
				this._initSlider()

				if(this.autoPlay) {
					this._play()
				}

				window.addEventListener('resize', () => {
	        if (!this.slider) {
	          return
	        }
	        this._setSliderWidth(true)
	        this.slider.refresh()
	      })
			},20)
		},
		activated () {
			if (this.autoPlay) {
				this._play()
			}
		},
		deactivated () {
			clearTimeout(this.timer)
		},
		beforeDestroy () {
			clearTimeout(this.timer)
		},
		methods: {
			_setSliderWidth (isResize) {
				let width = 0
				let sliderWidth = this.$refs.slider.clientWidth
				this.children = this.$refs.sliderGroup.children
				for (let i = 0,len = this.children.length; i < len; i++) {
					let child = this.children[i]
					addClass(child,'slider-item')
					child.style.width = sliderWidth + 'px'
					width += sliderWidth
				}

				if (this.loop && !isResize) {
					width += sliderWidth * 2
				}

				this.$refs.sliderGroup.style.width = width + 'px'
			},
			_initDots () {
				this.dots = new Array(this.children.length)
			},
			_initSlider () {
				this.slider = new BScroll(this.$refs.slider,{
					scrollX: true,
					scrollY: false,
					momentum: false,
					snap: true,
					snapLoop: this.loop,
					snapThreshold: 0.3,
					snapSpeed: 400
				})

				this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX
          if (this.loop) {
            pageIndex -= 1
          }
          this.currentPageIndex = pageIndex

          if (this.autoPlay) {
            this._play()
          }
        })

        this.slider.on('beforeScrollStart', () => {
          if (this.autoPlay) {
            clearTimeout(this.timer)
          }
        })
			},
			_play () {
				let pageIndex = this.currentPageIndex + 1
        if (this.loop) {
          pageIndex += 1
        }
        this.timer = setTimeout(() => {
          this.slider.goToPage(pageIndex, 0, 400)
        }, this.interval)
			}
		}
	}
</script>

<style lang="scss">
	@import '../common/css/variable';
	@import '../common/css/mixin';
	.slider {
		min-height: 1px;
		position: relative;
		overflow: hidden;
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
				height: 0.106667rem;
				background-color: $c-slider-btn-ac;
			}
		}
	}
</style>