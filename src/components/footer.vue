<template>
	<div class="m_footer" @click="clickFooter">
		<router-link tag="div" class="item" to="/index" data-title="首页">
			<span>首页</span>
		</router-link>
		<router-link tag="div" class="item" to="/res" data-title="资源">
			<span>资源</span>
		</router-link>
		<router-link tag="div" class="item" to="/wk" data-title="微课">
			<span>微课</span>
		</router-link>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'
	import {getData} from 'common/js/dom'

	export default {
		methods: {
			clickFooter (e) {
				let title = getData(e.target,'title')
				this.setTitle(title)
			},
			...mapMutations({
				setTitle: "SET_TITLE"
			})
		}
	}
</script>

<style lang="scss">
	@import '../common/css/variable';
	@import '../common/css/mixin';
	.m_footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		background: $c-topft-bg;
		display: flex;
		.item {
			flex: 1;
			text-align: center;
			@include px2rem(height,96);
			@include px2rem(line-height,164);
			color: $c-ft-font;
			background-position: center center;
			background-repeat: no-repeat;
			background-size: 1.52rem 1.026667rem;
			&.active {
				color: $c-ft-font-ac;
			}
			&:nth-child(1) {
				background-image: url(../common/images/index@2x.png);
			}
			&:nth-child(2) {
				background-image: url(../common/images/test@2x.png);
			}
			&:nth-child(3) {
				background-image: url(../common/images/wk@2x.png);
			}
			&.active:nth-child(1) {
				background-image: url(../common/images/index-ac@2x.png);
			}
			&.active:nth-child(2) {
				background-image: url(../common/images/test-ac@2x.png);
			}
			&.active:nth-child(3) {
				background-image: url(../common/images/wk-ac@2x.png);
			}
		}
	}
</style>