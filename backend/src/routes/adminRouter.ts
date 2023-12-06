import express, { Request, Response } from "express";
import { Kafka, Consumer } from "kafkajs";
import MessageCollection from "../../model/message";


const router = express.Router();


interface Message {
  payload: string;
  timestamp: string;
}


const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "test-group" });

const messages: Message[] = [];

consumer.connect().then(() => {
  consumer.subscribe({ topics: ["test-topic"], fromBeginning: true });

  consumer.run({
    eachMessage: async ({ message }) => {
      console.log("Received message:", message?.value?.toString());

      if (message.value !== null && message.value !== undefined) {
        const payload = message.value.toString();
        const timestamp = new Date().toISOString();

        const enrichedMessage: Message = {
          payload,
          timestamp,
        };
        messages.push(enrichedMessage);
      } else {
        console.log("Received message with null or undefined value.");
      }
    },
  });
});


router.get("/", async (req: Request, res: Response) => {
  try {
    // Wait for the consumer to process messages

    const messageData = await MessageCollection.find().sort({ timestamp: -1 }).exec();
    console.log("message collection datas", messageData);
    res.json(messageData);
  } catch (err) {
    console.error("Error consuming message from Kafka:", err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
