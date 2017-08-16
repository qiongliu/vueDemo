<template>
	<div class="dialog-wrap">
		<div class="dialog">
			<div class="title" isShow="hasTitle">
				<p>this is title</p>
				<span>x</span>
			</div>
			<div class="content">
				<slot></slot>
			</div>
			<div class="btn" isShow="hasBtn">
				<span class="btn-confirm">确定</span>
				<span class="btn-cancel">取消</span>
			</div>
		</div>
		<div class="mask"></div>
	</div>
</template>

<script>
	export default {
		props: {
			hasTitle: {
				type: Boolean,
				default: true
			},
			hasBtn: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../common/css/mixin';
	// .mask {
	// 	position: fixed;
	// 	top: $h-hd;
	// 	bottom: $h-ft;
	// 	left: 0;
	// 	right: 0;
	// 	background-color: rgba(0,0,0,.3);
	// 	z-index: 1001;
	// }
	.dialog-wrap {
		position: fixed;
		top: $h-hd;
		bottom: $h-ft;
		left: 0;
		right: 0;
		background-color: rgba(0,0,0,.3);
		z-index: 1001;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dialog {
		flex: 1;
		min-height: 4.0rem;
		background-color: #fff;
		
	}
</style>