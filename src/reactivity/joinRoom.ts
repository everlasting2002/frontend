import sha256 from "sha256";
import { ref } from "vue";

import router from "../router";
import { showDialog } from "./dialog";
import { Room } from "./game";

export const password = ref("");
export const roomNumber = ref("");
export const nickname = ref("");

export async function join() {
  if (!roomNumber.value) return showDialog("请填写房间号");
  if (!nickname.value) return showDialog("请填写昵称");
  
  //if(成功加入房间){
    showDialog("成功加入房间!");
    Room.value.roomNumber="joinRoom";
    router.push({
      name: "waitRoom",
    });
  //}
}