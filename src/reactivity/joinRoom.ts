import { JoinRoomResponse } from './../../shared/WSMsg';
import { socket } from './../socket/index';
import sha256 from "sha256";
import { ref } from "vue";

import router from "../router";
import { showDialog } from "./dialog";
import { Room,self } from "./game";

export async function join() {
  if (!Room.value.roomNumber) return showDialog("请填写房间号");
  if (!self.value.name) return showDialog("请填写昵称");
  
  socket.send({
		type: "joinRoom",
		name: self.value.name,
    roomNumber: Room.value.roomNumber,
		password: Room.value.password,
	});
}

export function joinRoom(res : JoinRoomResponse){
	if(res.result=="fail"){
		return showDialog(res.reason);
	}
	self.value.index = res.ID;
	router.push({
		name: "waitRoom",
	});
	//console.log(res);
}