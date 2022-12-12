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
	missionResultProgressReceive,
	missionResultReceive,
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
	Room.value.currentRound=0;
	Room.value.currentTeamVote=0;
	Room.value.prevTeamVote=0;
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
	showDialog((res.win?"迎接新神的诞生吧!":"「须弥的子民啊，再见了。」<br/>「愿你们今晚得享美梦。」")+res.reason);
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

export function playerConductMission(res : resultResponse){
	if(res.result==="fail"){
		showDialog(res.reason);
	}
}

export function missionResultProgress(res : missionResultProgressReceive){
	for(let i in players.value){
		if(res.decided.includes(players.value[i].index))players.value[i].voted=true;
		else players.value[i].voted=false;
	}
}

export function missionResult(res : missionResultReceive){
	Room.value.isVoting=false;
	for(let i in players.value){
		players.value[i].voted=false;
		players.value[i].inTeam=false;
	}
	Room.value.taskResult.push(res.missionSuccess?1:2);
	if(res.screw===0){
		if(Room.value.currentRound===0)showDialog("花神诞祭…你们就好好庆祝神明的诞生吧。");
		if(Room.value.currentRound===1)showDialog("已确保全部连接，构建最高稳定性架构。<br/>「计划」进入最关键阶段，从「——」中开始进行力量导出。");
		if(Room.value.currentRound===2)showDialog("「无需恐惧，疼痛只是一瞬。」<br/>「你们的时代…就要结束了。」");
		if(Room.value.currentRound===3)showDialog("「沙漠的子民们啊，无需再记恨什么。」<br/>「但唯独这份恩情，永远都不要遗忘。」");
		if(Room.value.currentRound===4)showDialog("此刻，重现魔神战争的一角，来为我作为神明的诞生而「正名」吧。");
	}
	else showDialog(`有${res.screw}人在阻止造神`);
	Room.value.currentRound++;
	router.push("play");
}

/**
 * @todo 记分板
 */
export function voteTeamResult(res : voteTeamReceive){
	Room.value.isVoting=false;
	Room.value.currentTeamVote++;
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
		Room.value.prevTeamVote=Room.value.currentTeamVote;
		router.push("mission");
		Room.value.isVoting=true;
	}
	else{
		showDialog(`队伍方案未通过<br/>${5-Room.value.currentTeamVote+Room.value.prevTeamVote}轮否决后教令院将造神失败。`);
		for(let i in players.value)players.value[i].inTeam=false;
	}
}