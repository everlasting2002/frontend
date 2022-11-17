import { StartGameResponse } from './../../shared/WSMsg';
import { socket } from './../socket/index';

import router from "../router";
import { showDialog } from "./dialog";

export async function start(){
	socket.send({
		type: "startGame",
	});
}

export function startGame(res : StartGameResponse){
	if(res.result=="fail"){
		return showDialog(res.reason);
	}
	//console.log(res);
}