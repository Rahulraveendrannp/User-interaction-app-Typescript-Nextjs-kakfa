import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  user: {type:String, default:"user1"},
  text: String,
  timestamp: { type: Date, default: Date.now() },
});

const MessageCollection = mongoose.model('Message', messageSchema);

export default MessageCollection;