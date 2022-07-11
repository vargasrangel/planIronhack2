const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const eventSchema = new Schema(
  {
    name: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    description: String,
    date: String,
    number-of-people: ["2 people", "more of 2 people"],
    
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
