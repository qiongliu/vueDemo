<template>
	<div class="wk-content">
		<div class="item" v-for="item in data">
			<a :href="item.linkUrl"><img v-lazy="item.imgUrl"></a>
			<p class="author">{{item.author}}</p>
			<p class="info">
				<span class="time">{{item.time}}</span> | <span>{{item.people}}人观看</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			data: {
				type: Array,
				default: []
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../common/css/variable';
	@import '../common/css/mixin';
	.wk-content {
		overflow: hidden;
	}
	.item {
		float: left;
		width: 50%;
		padding: 0 0.16rem;
		box-sizing: border-box;
		a {
			display: block;
			width: 4.6rem;
			height: 3.453333rem;
		}
		img {
			width: 100%;
			height: 100%;
		}
		p {
			line-height: 0.54rem;
		}
	}
	.author {
		@include px2px(font-size, 32)
		color: #1a1a1a;
	}
	.info {
		@include px2px(font-size, 22)
		color: #808080;
	}
</style>