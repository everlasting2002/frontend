import { PublicPlayerDef } from './../../shared/ModelDefs';
import { players, Room, self } from './game';
import { BeginGameResponse, EndGameResponse } from './../../shared/WSMsg';
import router from '../router';
import { socket } from './../socket/index';
import { showDialog } from './dialog';
import { chatInit } from './chat';

export function beginGame(res : BeginGameResponse){
	if(res.fairyID===self.value.index){
		self.value.isFairy=true;
	}
	for(let i in players.value){
		if(players.value[i].index===res.fairyID){
			players.value[i].isFairy=true;
		}
	}
	Room.value.playing=true;
	self.value.character=res.role;
	chatInit();
	router.push("play");
}

export function endGame(res : EndGameResponse){
	Room.value.playing=false;
	self.value.isFairy=false;
	self.value.character="";
	router.push("waitRoom");
	//console.log(res);
	showDialog((res.win?"好那菈清理了死域!<br/><br/>":"死域将继续蔓延。<br/><br/>")+res.reason);
}

export function refreshPlayers(data : any){
	//console.log(data);
	let online=[];
	for(const i in data){
		if(data[i].online)online.push(data[i].ID);
	}
	for(const i in players.value){
		if(!online.includes(players.value[i].index)){
			players.value[i].leave=true;
		}
	}
	//console.log(players);
	//console.log(online);
}