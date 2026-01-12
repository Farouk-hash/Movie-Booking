import mongoose from "mongoose";

// structure of documents
const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phonenumber:{type:String , required:true , unique:true},

  },
  {
    timestamps: true, // automatically creates createdAt + updatedAt
  }
);

// (collection in MongoDB) If model exists use it ,other-wise create new one ; 
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
