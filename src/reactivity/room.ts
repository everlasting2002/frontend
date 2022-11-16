import { PlayerDef, Avatar } from './../../shared/ModelDefs';
import { Room, self, players } from './game';
import { socket } from './../socket/index';
import router from '../router';
import { showDialog } from './dialog';
import { joinRoom } from './joinRoom';
import { leaveRoom } from './leaveRoom';
import { createRoom } from './createRoom';
import { startGame } from './startGame';
import { beginGame } from './play';

export async function WSConnect(){
	socket.connect();
	socket.ws.onmessage = (msg: { data: any }) => {
		const recv = JSON.parse(msg.data);
		if(recv.type==="roomStatus")getRoomStatus(recv.playerList);
		if(recv.type==="createRoom")createRoom(recv);
		if(recv.type==="joinRoom")joinRoom(recv);
		if(recv.type==="leaveRoom")leaveRoom(recv);
		if(recv.type==="startGame")startGame(recv);
		if(recv.type==="beginGame")beginGame(recv);
		
	};
}

function changeAvatar(str : Avatar){
	socket.send({
		type: "changeAvatar",
		avatar: str,
	});
}

function getRoomStatus(data:any){
	players.value=[];
	for(const i in data){
		//console.log(data[i]);
		const player:PlayerDef = {
			character: "",
			_id: "",
			index: data[i].ID,
			name: data[i].name,
			isFairy: false,
			teamVoted: [],
			questVoted: [],
			avatar: data[i].avatar,
		}
		if(data[i].isOwner==true){
			Room.value.ownerID=data[i].ID;
		}
		if(data[i].name==self.value.name){
			self.value=player;
		}
		players.value.push(player);
	}
	if(!self.value.avatar){
		changeAvatar("PlayerGirl");
	}
	//console.log(players.value);
}