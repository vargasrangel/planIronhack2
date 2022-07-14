const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const eventSchema = new Schema(
  {
    name: { 
      type: String,
      required: true,
      minLength: 3,
      trim: true
    },

    description: {
      type: String,
      required: true,
      minLength: 1
    },

    date: {
       type: String
    },
    
    numberOfPeople: {
    type: [String /*"2 people", "more of 2 people"*/]
    },
    
    hour: {
      type: String
    }
    // this second object adds extra properties: `createdAt` and `updatedAt`
    
  }, {timestamps: true})

const event = model("Event", eventSchema);

module.exports = event;