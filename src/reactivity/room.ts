import { PlayerDef, Avatar } from './../../shared/ModelDefs';
import { Room, self, players } from './game';
import { socket } from './../socket/index';
import router from '../router';
import { showDialog } from './dialog';
import { joinRoom } from './joinRoom';
import { leaveRoom } from './leaveRoom';
import { createRoom } from './createRoom';
import { startGame } from './startGame';
import { beginGame, endGame, refreshPlayers } from './play';
import { recvMessage, sendMessagerecv } from './chat';
import { gsap } from "gsap";

export function skipin() {
	gsap.fromTo([".index_desk", ".index_room"], {
		opacity: 0,
	}, {
		opacity: 1,
		duration: 0.5,
	});
	gsap.from(".index_desk", {
		yPercent: 20,
		duration: 1.5,
		ease: "back",
	});
	gsap.fromTo(".homepage_button", {
		opacity: 0,
	}, {
		opacity: 0.8,
		delay: 1,
		duration: 0.5,
		ease: "none",
	});
}

export function jump() {
	gsap.to(".main-page", {
	  opacity: 0,
	  duration: 0.5,
	  onComplete() {
		router.push({
		  name: "character",
		});
	  }
	})
  }

export async function WSConnect() {
	socket.connect();
	socket.ws.onmessage = (msg: { data: any }) => {
		const recv = JSON.parse(msg.data);
		console.log(recv);
		if (recv.type === "roomStatus") {
			if (!Room.value.playing) getRoomStatus(recv.playerList);
			else refreshPlayers(recv.playerList);
		}
		else if(recv.type==="createRoom")createRoom(recv);
		else if(recv.type==="joinRoom")joinRoom(recv);
		else if(recv.type==="leaveRoom")leaveRoom(recv);
		else if(recv.type==="startGame")startGame(recv);
		else if(recv.type==="beginGame")beginGame(recv);
		else if(recv.type==="endGame")endGame(recv);
		else if(recv.type==="playerTextMessage")sendMessagerecv(recv);
		else if(recv.type==="textMessage")recvMessage(recv);
		else console.log(recv);
	};
}

export function changeAvatar(str: Avatar) {
	socket.send({
		type: "changeAvatar",
		avatar: str,
	});
}

function getRoomStatus(data: any) {
	players.value = [];
	for (const i in data) {
		//console.log(data[i]);
		const player: PlayerDef = {
			character: "",
			_id: "",
			index: data[i].ID,
			name: data[i].name,
			isFairy: false,
			teamVoted: [],
			questVoted: [],
			avatar: data[i].avatar,
			leave: false,
		}
		if (data[i].isOwner == true) {
			Room.value.ownerID = data[i].ID;
		}
		if (data[i].name == self.value.name) {
			self.value = player;
		}
		players.value.push(player);
	}
	if (!self.value.avatar) {
		changeAvatar("PlayerGirl");
	}
	//console.log(players.value);
}