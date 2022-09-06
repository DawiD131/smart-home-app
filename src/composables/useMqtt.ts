import { client } from "@/services/globalMqttClient";

export const useMqtt = () => {
  const publishMessage = (topic: string, payload: string | Buffer) =>
    client.publish(topic, payload);

  const subscribeTopic = (topic: string, cb: (payload: Buffer) => void) => {
    client.subscribe(topic);
    client.on("message", (_topic, payload) => {
      if (topic !== _topic) return;
      cb(payload);
    });
  };

  return {
    publishMessage,
    subscribeTopic,
  };
};
