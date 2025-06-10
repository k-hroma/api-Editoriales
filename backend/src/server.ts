import dotenv from 'dotenv'
import { connectDb } from "./config/dbMongo";
import { app } from './app';
dotenv.config()

const PORT = process.env.PORT || 300

const startServer = async () => { 
  try {
    await connectDb()
    console.log('📦 Connected to MongoDB successfully')
     if (!connectDb) {
      throw new Error("MongoDB connection failed ");
    }
    if (!PORT) { 
      console.error("Port credentials are missing or empty")
    }
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
      console.log(`🔗 http://localhost:${PORT}/api/editoriales`);
    })
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error(`❌ Fatal startup error: ${errMsg}`);
    process.exit(1);
    
  }
  
}

startServer()