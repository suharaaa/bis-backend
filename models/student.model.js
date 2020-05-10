const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    admissionNumber: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    nation: { type: String, required: true },
    religion: { type: String, required: true },
    mail: { type: String, required: true },
    class: {
      type: Schema.Types.ObjectId,
      ref: "Classes",
    },
    // img: { type: String, required: true },

    mname: { type: String, required: true },
    moccupation: { type: String, required: true },
    mworkp: { type: Number, required: true },
    maddress: { type: String },
    mphone: { type: Number, required: true },
    memail: { type: String },

    faname: { type: String, required: true },
    foccupation: { type: String, required: true },
    fworkp: { type: Number, required: true },
    faddress: { type: String },
    fphone: { type: Number, required: true },
    femail: { type: String },
    archive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("student", studentSchema);
