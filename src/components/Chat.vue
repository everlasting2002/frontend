<template>
	<div class="chat-box">
		<div class="message-box" id="message-box">
			<div v-for="item in Messages" class="message">
				<div v-if="(item.name && item.name!==self.name)" class="player-message">
					<img class="chat-avatar" :src="`/assets/avatar/${item.Avatar.toLowerCase()}.png`"/>
					<div class="chat-info">
						<div class="chat-name">{{item.name}}</div>
						<div class="chat-text">{{item.content}}</div>
					</div>
				</div>
				<div v-else-if="(item.name && item.name===self.name)" class="self-message">
					<img class="chat-avatar" :src="`/assets/avatar/${item.Avatar.toLowerCase()}.png`"/>
					<div class="chat-info">
						<div class="chat-name">{{item.name}}</div>
						<div class="chat-text">{{item.content}}</div>
					</div>
				</div>
				<div v-else class="fail-message">{{item.content}}</div>
			</div>
		</div>
		<div class="chat-background"></div>
		<input class="send-input" type="text" placeholder="把你知道的信息跟大家讲一讲吧" @keyup.enter="sendText===''?()=>{}:(sendMessage(sendText),sendText='')" v-model="sendText" />
	</div>
</template>

<script setup lang="ts">
	import { nextTick, ref, Ref, watch } from 'vue';
	import { Messages, sendMessage } from '../reactivity/chat';
	import { self } from '../reactivity/game';
	
	let sendText : Ref<string> = ref("");
	
	watch(Messages.value,()=>{
		nextTick(()=>{
			setTimeout(()=>{
				let box=document.getElementById("message-box");
				if(!box)return;
				box.scrollTop=box.scrollHeight;
			},200);
		});
	});
</script>

<style lang="scss" scoped>
	.chat-box{
		display: flex;
		height: 100%;
		width: 100%;
		flex-wrap: wrap;
		justify-content: center;
		align-content: space-around;
		border-radius: calc(2/100*var(--height));
		overflow-y: hidden;
		.chat-background{
			z-index: 2;
			background-color: black;
			opacity: 0.4;
			position: absolute;
			width: 100%;
			height: 100%;
		}
		.message-box{
			overflow-y: auto;
			display: flex;
			height: 75%;
			width: 90%;
			flex-wrap: nowrap;
			flex-direction: column;
			z-index: 3;
			.message{
				width: 100%;
				height: auto;
				margin: 2% 0px 2% 0px;
				.fail-message{
					width: 100%;
					height: 10%;
					color: red;
				}
				.player-message , .self-message{
					height: auto;
					width: 100%;
					.chat-avatar{
						width: calc(10/100*var(--height));
						height: calc(10/100*var(--height));
						border-radius: 50%;
						background-color: #615c60;
					}
					.chat-info{
						display: flex;
						width: 70%;
						justify-content: space-around;
						.chat-name{
							color: #c4c9d7;
						}
						.chat-text{
							max-width: 100%;
							word-wrap: break-word;
							word-break: normal;
							border-radius: calc(20/1000*var(--height));
							padding: calc(15/1000*var(--height));
						}
					}
				}
				.player-message{
					display: flex;
					.chat-avatar{
						margin: 0px calc(1/100*var(--height)) 0px 0px;
					}
					.chat-info{
						flex-direction: column;
						align-items: flex-start;
						.chat-text{
							background-color: #414757;
							color: white;
						}
					}
				}
				.self-message{
					display: flex;
					flex-direction: row-reverse;
					.chat-avatar{
						margin: 0px 0px 0px calc(1/100*var(--height));
					}
					.chat-info{
						flex-direction: column;
						align-items: flex-end;
						.chat-text{
							background-color: #d9d2c7;
							color: black;
						}
					}
				}
			}
		}
		.send-input{
			height: 15%;
			width: 80%;
			background-color: black;
			opacity: 0.6;
			color: white;
			z-index: 3;
			border-radius: 1000px;
			padding-left: 5%;
			padding-right: 5%;
			transition: 0.2s;
			&:focus{
				opacity: 1;
			}
		}
	}
</style>