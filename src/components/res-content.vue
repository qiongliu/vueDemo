<template>
	<ul class="res-content">
		<li v-for="item in data">
		 <a :href="item.linkUrl">
			<div class="img">
				<img src="../common/images/ppt.png" alt="">
			</div>
			<div class="info">
				<p class="name">{{item.name}}</p>
				<p class="detail">{{item.type}} {{item.subject}}</p>
			</div>
		 </a>
		</li>
	</ul>
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
	@import '../common/css/mixin';
	@import '../common/css/fileicon.css';
	.res-content {
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
			@include px2px(border-width, 1)
			border-style: solid;
			border-color: #e0e0e0;
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
</style>