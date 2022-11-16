import { players, self } from './game';
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
	self.value.character=res.role;
	router.push("play");
}