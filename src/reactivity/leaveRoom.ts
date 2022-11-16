import { LeaveRoomResponse } from './../../shared/WSMsg';
import { socket } from './../socket/index';

import router from "../router";
import { showDialog } from "./dialog";
import { Room,self } from "./game";

export async function leave() {
  socket.send({
		type: "leaveRoom",
	});
}

export function leaveRoom(res : LeaveRoomResponse){
	if(res.result=="fail"){
		return showDialog(res.reason);
	}
	Room.value.roomNumber="";
	router.push("Home");
}