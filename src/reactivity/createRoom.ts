import { socket } from './../socket/index';
import { reactive, ref } from "vue";

import { SetableCharacters } from "../../shared/GameDefs";
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
  //if(){
  /*   Room.value.roomNumber = "114514";//之后得改成从后端获取房间号
    self.value.index=1;
    router.push({
      name: "waitRoom",
    });
    players.value = [
      {
        index: 1,
        name: self.value.name,
        isFairy: false,
        teamVoted: [],
        questVoted: [],
        avatar: "PlayerGirl",
      },
    ]; */
  //}
}
