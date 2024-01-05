import { CLIENT_API } from "@/api/config";
import { io } from "socket.io-client";

export const state = {
  connected: false,
  fooEvents: [],
  barEvents: []
}

export const socket = io(CLIENT_API);

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("foo", (...args) => {
  state.fooEvents.push(args);
});

socket.on("bar", (...args) => {
  state.barEvents.push(args);
});

