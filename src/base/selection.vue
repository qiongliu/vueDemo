<template>
	<div>
		<div class="selections-wrap">
			<div v-for="(item,index) in selections" class="selection">
				<div class="title" :class="{active: currentIndex === index}" @click="showList(index)">
					<span class="name">{{item.type}}</span>
					<span class="arrow"></span>
				</div>
				<ul class="list" v-show="index === currentIndex">
					<li v-for="subItem in item.content" @click="clickItem(subItem,index)">{{subItem}}</li>
				</ul>
			</div>
		</div>
		<div class="mask" v-show="maskShow"></div>
	</div>
</template>

<script>
	export default {
		props: {
			selections: {
				type: Array,
				default: []
			}
		},
		data () {
			return {
				currentIndex: null,
				maskShow: false
			}
		},
		methods: {
			showList (index) {
				let currentItem = this.selections[index]
				this.$emit("clickSelection",currentItem,index)

				if (index && !this.selections[index - 1].checked) return

				if (this.currentIndex === index) {
					this.currentIndex = null
					this.maskShow = false
				} else {
					this.currentIndex = index
					this.maskShow = true
				}
			},
			clickItem (subItem,index) {
				this.selections[index].type = subItem
				this.currentIndex = null
				this.maskShow = false
				this.selections[index].checked = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../common/css/mixin';
	.selections-wrap {
		display: flex;
		padding: 0 0.133333rem;
		z-index: 999;
		position: relative;
		background-color: #fff;
	}
	.selection {
		flex: 1;
		margin: 0 0.133333rem;
	}
	.title {
		height: 0.8rem;
		line-height: 0.8rem;
		border-radius: 0.053333rem;
		background-color: #f3f3f3;
		display: flex;
		border: 1px solid #ddd;
		margin-bottom: 0.08rem;
		&.active {
			border-color: #26a5fa;
		}
		.name {
			flex: 1 0 0.8rem;
			text-align: center;
			@include px2px(font-size, 28)
			@include ellipsis()
		}
		.arrow {
			flex: 0 0 0.4rem;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			border-left: 1px solid #ddd;
			&:after {
				content: ' ';
				width: 0;
		    height: 0;
		    line-height: 0;
		    font-size: 0;
		    overflow: hidden;
				border-width: 0.133333rem;
				border-color: #b2b2b2 transparent transparent transparent;
				border-style: solid;
				border-bottom: none;
			}
		}
	}
	.list {
		position: absolute;
		background-color: #fff;
		box-shadow: 0 0 0.026667rem #aaa;
		border-radius: 0.053333rem;
		left: 0;
		right: 0;
		// margin: 0 0.133333rem;
		display: flex;
		flex-flow: row wrap;
		li {
			flex: 0 0 3.2rem;
			height: 1.2rem;
			line-height: 1.2rem;
			text-align: center;
			@include px2px(font-size,24)
		}
	}
	.mask {
		position: fixed;
		left: 0;
		right: 0;
		top: $h-hd;
		bottom: $h-ft;
		background-color: rgba(0,0,0,.4);
		z-index: 998;
	}
</style>