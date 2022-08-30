import mqtt from "mqtt";
import { App } from "vue";

export default {
  install: (app: App) => {
    const mqttClient = () => {
      const client = mqtt.connect("mqtt://192.168.0.143:8883");

      console.log(client);
      client.on("connect", () => {
        console.log("connected to mqtt broker");
      });

      return {
        client,
      };
    };

    app.provide("mqtt", mqttClient);
  },
};
