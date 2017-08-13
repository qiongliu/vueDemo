<template>
	<div class="m_footer">
		<router-link tag="div" class="item" to="/index">
			<span>首页</span>
		</router-link>
		<router-link tag="div" class="item" to="/test">
			<span>试卷</span>
		</router-link>
		<router-link tag="div" class="item" to="/wk">
			<span>微课</span>
		</router-link>
	</div>
</template>

<style lang="scss">
	@import '../common/css/variable';
	@import '../common/css/mixin';
	.m_footer {
		background: $c-topft-bg;
		display: flex;
		// align-self: flex-end;
		.item {
			flex: 1;
			text-align: center;
			@include px2rem(height,96);
			@include px2rem(line-height,164);
			color: $c-ft-font;
			background-position: center center;
			background-repeat: no-repeat;
			&.active {
				color: $c-ft-font-ac;
			}
			&:nth-child(1) {
				@include bg-image('../common/images/index');
			}
			&:nth-child(2) {
				@include bg-image('../common/images/test');
			}
			&:nth-child(3) {
				@include bg-image('../common/images/wk');
			}
			&.active:nth-child(1) {
				@include bg-image('../common/images/index-ac');
			}
			&.active:nth-child(2) {
				@include bg-image('../common/images/test-ac');
			}
			&.active:nth-child(3) {
				@include bg-image('../common/images/wk-ac');
			}
		}
	}
</style>