import express,{Request, Response } from 'express';
import { Kafka,Partitioners,ProducerRecord } from 'kafkajs';
import MessageCollection from '../../model/message';

const router=express.Router();


export const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
})

router.post('/',async(req: Request, res: Response)=>{

    const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner});
      const kafkaMsg=req.body.message
      const user="userrr"
      const date=Date.now()
  

    try {
      const msg=new MessageCollection({user:user,text:kafkaMsg,timestamp:date})
      await msg.save()
      await producer.connect();
      const message: ProducerRecord = {
        topic: 'test-topic',
        messages: [
          { value:kafkaMsg },
        ],
      };
      await producer.send(message);
      await producer.disconnect();
      console.log("Message sent successfully");
      res.send("Message sent successfully");
    } catch (error) {
      console.error("Error producing message to Kafka:", error);
      res.status(500).send("Internal Server Error");
    }
})
 





export default router;