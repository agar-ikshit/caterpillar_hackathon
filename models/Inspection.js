const mongoose = require('mongoose');

const inspectionSchema = new mongoose.Schema({
  truckSerialNumber: { type: String, required: true },
  truckModel: { type: String, required: true },
  inspectionID: { type: Number, required: true, unique: true },
  inspectorName: { type: String, required: true },
  inspectionEmployeeID: { type: String, required: true },
  inspectionDateTime: { type: Date, required: true },
  inspectionLocation: { type: String, required: true },
  geoCoordinates: { type: String }, // optional
  serviceMeterHours: { type: Number, required: true },
  inspectorSignature: { type: String, required: true },
  customerName: { type: String, required: true },
  customerID: { type: String, required: true },

  tires: {
    tirePressure: {
      leftFront: { type: Number },
      rightFront: { type: Number },
      leftRear: { type: Number },
      rightRear: { type: Number }
    },
    tireCondition: {
      leftFront: { type: String, enum: ["Good", "Ok", "Needs Replacement"] },
      rightFront: { type: String, enum: ["Good", "Ok", "Needs Replacement"] },
      leftRear: { type: String, enum: ["Good", "Ok", "Needs Replacement"] },
      rightRear: { type: String, enum: ["Good", "Ok", "Needs Replacement"] }
    },
    overallTireSummary: { type: String, maxlength: 1000 },
    attachedImages: [{ type: String }]
  },

  battery: {
    batteryMake: { type: String },
    batteryReplacementDate: { type: Date },
    batteryVoltage: { type: String },
    batteryWaterLevel: { type: String, enum: ["Good", "Ok", "Low"] },
    batteryCondition: { type: String, enum: ["Y", "N"] },
    batteryLeakOrRust: { type: String, enum: ["Y", "N"] },
    batterySummary: { type: String, maxlength: 1000 },
    attachedImages: [{ type: String }]
  },

  exterior: {
    rustDentOrDamage: { type: String, enum: ["Y", "N"] },
    oilLeakInSuspension: { type: String, enum: ["Y", "N"] },
    exteriorSummary: { type: String, maxlength: 1000 },
    attachedImages: [{ type: String }]
  },

  brakes: {
    brakeFluidLevel: { type: String, enum: ["Good", "Ok", "Low"] },
    brakeConditionFront: { type: String, enum: ["Good", "Ok", "Needs Replacement"] },
    brakeConditionRear: { type: String, enum: ["Good", "Ok", "Needs Replacement"] },
    emergencyBrake: { type: String, enum: ["Good", "Ok", "Low"] },
    brakeSummary: { type: String, maxlength: 1000 },
    attachedImages: [{ type: String }]
  },

  engine: {
    rustDentOrDamage: { type: String, enum: ["Y", "N"] },
    engineOilCondition: { type: String, enum: ["Good", "Bad"] },
    engineOilColor: { type: String },
    brakeFluidCondition: { type: String, enum: ["Good", "Bad"] },
    brakeFluidColor: { type: String },
    oilLeakInEngine: { type: String, enum: ["Y", "N"] },
    engineSummary: { type: String, maxlength: 1000 },
    attachedImages: [{ type: String }]
  },

  voiceOfCustomer: {
    customerFeedback: { type: String },
    attachedImages: [{ type: String }]
  }
});

const Inspection = mongoose.model('Inspection', inspectionSchema);
module.exports = Inspection;
