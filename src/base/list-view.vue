<template>
	<scroll class="list-view"
				  ref="scroll"
					:data="data"
				  :listenScroll="listenScroll"
				  :probeType = "3"
				  @scroll="scroll">
		<ul class="groups">
			<li v-for="group in data" ref="group">
				<h2 v-show="hasTitle">{{group.title}}</h2>
				<ul class="items">
					<li v-for="item in group.items" @click="clickItem(item)">
						<div class="img">
							<img src="../common/images/ppt.png" alt="">
						</div>
						<div class="info">
							<p class="name">{{item.name}}</p>
							<p class="detail">{{item.type}}</p>
						</div>
					</li>
				</ul>
			</li>
		</ul>
		<ul class="shortcut" v-show="hasShortcut" @touchstart.stop="touchShortcut" @touchmove.stop.prevent="touchMoveShortcut">
			<li v-for="(item,index) in shortcutList" :class="{active: index === currentIndex}" :data-index="index">{{item}}</li>
		</ul>
		<div class="fixed-title" v-show="fixedTitle" ref="fixedTitle">
			<h2>{{fixedTitle}}</h2>
		</div>
	</scroll>
</template>

<script>
	import Scroll from 'base/scroll'
	import {getData} from 'common/js/dom'
	export default {
		components: {
			Scroll
		},
		props: {
			data: {
				type: Array,
				default: []
			},
			hasTitle: {
				type: Boolean,
				default: false
			},
			hasShortcut: {
				type: Boolean,
				default: false
			},
			hasFixedTitle: {
				type: Boolean,
				default: false
			},
			listenScroll: {
				type: Boolean,
				default: false
			}
		},
		created() {
			this.touch = {}
		},
		data () {
			return {
				itemsHeight: [],
				currentIndex: 0,
				scrollY: 0
			}
		},
		computed: {
			shortcutList () {
				return this.data.map((item) => {
					return item.title.substr(0,1)
				})
			},
			fixedTitle () {
				if (this.scrollY > 0 || !this.hasFixedTitle) {
					return ''
				}
				return this.data[this.currentIndex] ? this.data[this.currentIndex].title : ''
			}
		},
		methods: {
			clickItem (item) {
				this.$emit('clickItem',item)
			},
			touchShortcut (e) {
				let anchorIndex = getData(e.target, 'index')
				this.touch.shortcutHeight = e.target.clientHeight
				this.touch.y1 = e.touches[0].pageY
				this.touch.anchorIndex = anchorIndex
				this.currentIndex = parseInt(anchorIndex)
				this._scrollTo(anchorIndex)
			},
			touchMoveShortcut (e) {
				this.touch.y2 = e.touches[0].pageY 
				let offset = (this.touch.y2 - this.touch.y1) / this.touch.shortcutHeight | 0
				let anchorIndex = parseInt(this.touch.anchorIndex) + offset
				this.currentIndex = parseInt(anchorIndex)
				this._scrollTo(anchorIndex)
			},
			scroll (pos) {
				this.scrollY = pos.y;
				this._calculateIndex(pos.y)
				this._translateFixedTitle()
			},
			_scrollTo (index) {
				this.$refs.scroll.scrollToElement(this.$refs.group[index],0)
			},
			_calculateHeight () {
				this.itemsHeight = []
				this.currentIndex = 0
				this._scrollTo(this.currentIndex)
				let groups = this.$refs.group
				let initHeight = 0
				// this.itemsHeight.push(initHeight)
				for (let i = 0; i < groups.length; i++) {
						initHeight += groups[i].clientHeight
						this.itemsHeight.push(initHeight)
				}
			},
			_calculateIndex (posY) {
				for (let i = 0; i < this.itemsHeight.length; i++) {
					let itemHeight1 = this.itemsHeight[i]
					let itemHeight2 = this.itemsHeight[i + 1]
					if (-posY < itemHeight1) {
						this.currentIndex = i
						return 
					}
				}
			},
			_translateFixedTitle () {
				let fixedTitle = this.$refs.fixedTitle
				let fixedTitleHeight = fixedTitle.clientHeight
				let offset = this.scrollY + this.itemsHeight[this.currentIndex]
				let fixedTop = offset < fixedTitleHeight ? offset - fixedTitleHeight : 0 

				if (this.fixedTop === fixedTop) {
          return
        }
        this.fixedTop = fixedTop
        fixedTitle.style.transform = `translate3d(0,${fixedTop}px,0)`
			}
		},
		watch: {
			data () {
				this.$refs.scroll.scrollTo(0,0)
				if (this.listenScroll) {
					setTimeout(() => {
						this._calculateHeight()
					},20)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../common/css/mixin';
	@import '../common/css/fileicon.css';
	.list-view {
		height: 100%;
		overflow: hidden;
	}
	.groups {
		h2 {
			height: 0.666667rem;
			background-color: #f0f0f0;
			line-height: 0.666667rem;
			padding: 0 0.213333rem;
		}
	}
	.items {
		li {
			display: flex;
			padding: 0.266667rem 0.133333rem;
			border-bottom: 1px solid #e0e0e0;
		}
		.img {
			width: 1.106667rem;
			height: 1.16rem;
			border: 1px solid #e0e0e0;
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 0 0 1.106667rem;
		}
		img {
			width: 0.693333rem;
			height: 0.773333rem;
		}
		.info {
			width: 8.0rem;
			flex: 1 0 8.0rem;
			margin-left: 0.266667rem;
		}
		p {
			line-height: 0.613333rem;
			@include ellipsis()
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
	.shortcut {
		position: absolute;
		background-color: #cdcdcd;
		top: 50%;
		transform: translateY(-50%);
		right: 0;
		li {
			padding: 0.186667rem 0.133333rem;
			&.active {
				color: #26a5fa;
			}
		}
	}
	.fixed-title {
		position: absolute;
		left: 0;
		right: 0;
		top: -1px;
		height: 0.666667rem;
		background-color: #f0f0f0;
		line-height: 0.666667rem;
		padding: 0 0.213333rem;
	}
</style>