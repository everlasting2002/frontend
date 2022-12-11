import { players, Room, self } from './game';
import {
	BeginGameResponse,
	EndGameResponse,
	setLeaderReceive,
	roleHintReceive,
	selectTeamReceive,
	voteTeamProgressReceive,
	voteTeamReceive,
	resultResponse,
} from './../../shared/WSMsg';
import router from '../router';
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
	showDialog((res.win?"迎接新神的诞生吧!<br/>":"小草神重新掌管了教令院。<br/>")+res.reason);
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

export function setLeader(res : setLeaderReceive){
	for(let i in players.value){
		if(players.value[i].index===res.ID){
			players.value[i].leader=true;
		}
		else players.value[i].leader=false;
	}
	if(self.value.index===res.ID)self.value.leader=true;
	else self.value.leader=false;
}

export function roleHint(res : roleHintReceive){
	for(let item of res.HintList){
		for(let i in players.value){
			if(players.value[i].index===item.ID){
				players.value[i].hint=item.HintType;
				break;
			}
		}
	}
}

export function selectTeam(res : selectTeamReceive){
	for(let i in players.value){
		if(res.team.includes(players.value[i].index))players.value[i].inTeam=true;
		else players.value[i].inTeam=false;
	}
}

export function voteTeamProgress(res : voteTeamProgressReceive){
	for(let i in players.value){
		if(res.voted.includes(players.value[i].index))players.value[i].voted=true;
		else players.value[i].voted=false;
	}
}

export function playerVoteTeam(res : resultResponse){
	if(res.result==="fail"){
		showDialog(res.reason);
	}
}

export function playerConfirmTeam(res : resultResponse){
	if(res.result==="fail"){
		showDialog(res.reason);
	}
}

export function playerSelectTeam(res : resultResponse){
	if(res.result==="fail"){
		showDialog(res.reason);
	}
}

/**
 * @todo 记分板
 */
export function voteTeamResult(res : voteTeamReceive){
	Room.value.isVoting=false;
	for(let i in players.value){
		let item=res.voteList.find(function(e){return players.value[i].index===e.ID});
		if(item){
			players.value[i].vote=item.vote?1:0;
			players.value[i].teamVoted.push(item.vote);
		}
	}
	for(let i in players.value){
		players.value[i].voted=false;
	}
	if(res.voteResult===true){
		//执行任务
		showDialog("执行任务...");
		for(let i in players.value)players.value[i].inTeam=false;
	}
	else{
		showDialog(`队伍方案未通过<br/>${5-Room.value.currentTeamVote+Room.value.prevTeamVote}轮否决后教令院将造神失败。`);
		for(let i in players.value)players.value[i].inTeam=false;
	}
}