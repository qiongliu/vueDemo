<template>
	<ul class="choose">
		<li v-for="(item,index) in chooses" class="item" :class="{active: index === currentIndex}" @click="isActive(index)" :title="item.type">{{item.type}}</li>
	</ul>
</template>

<script>
	export default {
		props: {
			chooses: {
				type: Array,
				default: []
			}
		},
		data () {
			return {
				currentIndex: 0
			}
		},
		methods: {
			isActive (index) {
				this.currentIndex = index
				this.$emit('clickChoose',this.chooses[index])
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../common/css/mixin';
	.choose {
		display: flex;
		z-index: 999;
		background-color: #fff;
		position: relative;
		li {
			flex: 1;
			text-align: center;
			height: 1.2rem;
			line-height: 1.2rem;
			color: #333;
			@include px2px(font-size, 28)
		}
		li.active {
			color: #26a5fa;
		}
	}
</style>