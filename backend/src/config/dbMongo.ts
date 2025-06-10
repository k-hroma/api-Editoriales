import { connect } from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const URI_DB = process.env.URI_DB?.trim() || ""

const connectDb = async () => { 
  try {
    if (!URI_DB) {
      console.error("❌ MongoDB connection string missing or empty")
     }
    await connect(URI_DB, { serverSelectionTimeoutMS: 500 })
    console.log("💾")
    
  } catch (error:any) {
    const errMsg = error instanceof Error ? error.message : "Unknown database connection error"
    console.error(`Error connecting date base ${errMsg}`)
  
}

}

export { connectDb }