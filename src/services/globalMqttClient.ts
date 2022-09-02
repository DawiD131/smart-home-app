import mqtt from "mqtt";

export const client = mqtt.connect("mqtt://192.168.0.143:8883");
