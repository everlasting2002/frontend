import { socket } from './../socket/index';
import { CreateRoomResponse } from './../../shared/WSMsg';
import router from "../router";
import { showDialog } from "./dialog";
import { self, players, Room } from "./game";

/**
 * 游戏人数配置(reactive)
 */

export async function create() {
  if (!self.value.name) return showDialog("请填写昵称");
  //const res = 1;
  socket.send({
		type: "createRoom",
		name: self.value.name,
		password: Room.value.password,
	});
}

export function createRoom(res : CreateRoomResponse){
	if(res.result=="fail"){
		return showDialog(res.reason);
	}
	Room.value.roomNumber = res.roomNumber;
	self.value.index = res.ID;
	router.push({
		name: "waitRoom",
	});
	//console.log(res);
}