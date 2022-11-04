import { reactive } from 'vue';
import SocketService from './websocket';

const data = reactive({
  socketServe: SocketService.Instance
});
export const socket: any = data.socketServe;