import mqtt from "mqtt";

export const client = mqtt.connect("mqtt://192.168.0.143:8883");

client.on("connect", () => {
  console.log("client connected to broker");
});
