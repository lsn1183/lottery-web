/*
 * @Author: hongbin
 * @Date: 2022-11-01 21:32:16
 * @LastEditors: hongbin
 * @LastEditTime: 2022-11-01 21:32:16
 * @Description: 添加socket类型
 */
import { Server as NetServer, Socket } from "net";
import { Server as SocketIOServer } from "socket.io";

export const NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer
    },
  }
};
