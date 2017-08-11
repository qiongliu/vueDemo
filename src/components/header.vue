<template>
	<div class="m_header">
		<div class="back" v-if="isBack"></div>
		<h1 v-text="title"></h1>
	</div>
</template>

<script>
	export default {
		props: {
			isBack: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: '首页'
			}
		}
	}
</script>

<style lang="scss">
	@import '../common/css/variable';
	@import '../common/css/mixin';
	.m_header {
		h1 {
			@include px2rem (height,128);
			@include px2rem (line-height,170);
			@include px2rem (width,750);
			@include px2px (font-size,38);
			background-color: $c-topft-bg;
			color: #fff;
			text-align: center;
		}
	}
</style>


