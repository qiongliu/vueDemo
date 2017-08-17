<template>
	<div class="dialog-wrap">
		<div class="dialog">
			<div class="title" isShow="hasTitle">
				<p>this is title</p>
				<span @click="dialogEvent('close')">x</span>
			</div>
			<div class="content">
				<slot></slot>
			</div>
			<div class="btn" isShow="hasBtn">
				<span class="btn-confirm" @click="dialogEvent('confirm')">确定</span>
				<span class="btn-cancel" @click="dialogEvent('cancel')">取消</span>
			</div>
		</div>
		<div class="mask" @click="dialogEvent('close')"></div>
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
		},
		methods: {
			dialogEvent (type) {
				this.$emit("clickDialog",type)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../common/css/mixin';
	.dialog-wrap {
		position: fixed;
		top: $h-hd;
		bottom: $h-ft;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	.dialog {
		width: 6.666667rem;
		border-radius: 0.266667rem;
		overflow: hidden;
		z-index: 1001;
	}
	.title {
		height: 0.933333rem;
		line-height: 0.933333rem;
		background-color: #65AFF1;
		padding: 0 0.133333rem;
		display: flex;
		color: #fff;
		text-align: center;
		p {
			flex: 1;			
			@include px2px(font-size, 28)
		}
		span {
			flex: 0 0 0.666667rem;
		}
	}
	.content {
		background-color: #fff;
		min-height: 2.266667rem;
		padding: 0.133333rem;
		@include px2px(font-size, 28);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn {
		border: 1px solid #ccc;
		min-height: 0.933333rem;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		span {
			display: inline-block;
			padding: 0.16rem 0.266667rem;
			background-color: #65AFF1;
			border-radius: 0.133333rem;
			color: #fff;
			margin: 0 0.266667rem;
		}
	}
	.mask {
		position: fixed;
		top: $h-hd;
		bottom: $h-ft;
		left: 0;
		right: 0;
		background-color: rgba(0,0,0,.3);
		z-index: 1000;
	}
</style>