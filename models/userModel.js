import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: "lastname",
  },
  location: {
    type: String,
    default: "my city",
  },
  role: {
    type: String,
    enul: ["admin", "user"],
    defailt: "user",
  },
});

export default mongoose.model("Usar", UserSchema);
