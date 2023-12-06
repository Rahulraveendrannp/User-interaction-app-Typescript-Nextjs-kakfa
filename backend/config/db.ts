import { connect } from "mongoose";

const url = 'mongodb+srv://pumex:pumex@cluster0.bolcmes.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
      const mongoURI: string = url
      await connect(mongoURI);
      console.log("MongoDB Connected...");
    } catch (err) {
      console.error(err);
      // Exit process with failure
      process.exit(1);
    }
  };
  
  export default connectDB;

