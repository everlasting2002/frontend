import { players } from './game';
import { MessageReceive, resultResponse } from './../../shared/WSMsg';
import { Message } from './../../shared/ModelDefs';
import { Ref, ref } from 'vue';
import { socket } from './../socket/index';

export const Messages : Ref<Message[]> = ref([]);

export function chatInit(){
	Messages.value = [];
}

export function sendMessage(str : string){
	socket.send({
		type: "playerTextMessage",
		message: str
	});
}

export function sendMessagerecv(res : resultResponse){
	if(res.result==="fail"){
		Messages.value.push({
			Avatar: "",
			name: "",
			content: res.reason,
		});
	}
}

export function recvMessage(res : MessageReceive){
	let sender = players.value.find(item=>item.index===res.ID);
	if(!sender)return;
	Messages.value.push({
		Avatar: sender.avatar,
		name: sender.name,
		content: res.message,
	});
}