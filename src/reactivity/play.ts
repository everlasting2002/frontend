import { PlayerDef } from './../../shared/ModelDefs';
import { players, Room, self } from './game';
import { BeginGameResponse } from './../../shared/WSMsg';
import router from '../router';

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
	router.push("play");
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