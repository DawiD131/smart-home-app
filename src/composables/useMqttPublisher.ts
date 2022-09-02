import { client } from "@/services/globalMqttClient";

export const useMqttPublisher = (uniqueDeviceName: string) => {
  const publishMessage = (topic: string, payload: string | Buffer) => {
    client.publish(`${topic}`, payload);
  };

  return {
    publishMessage,
  };
};
