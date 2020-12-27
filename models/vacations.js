var settings = require("../db/settings");

var VacationsSchema = settings.mongoose.Schema({
  name: { type: String, required: [true, "name is needed"] },
  description: { type: String, required: true },
  type: { type: String, enum: ["resort", "cruise"] },
  destinations: [{ city: String, country: String }],
  includes: [
    {
      what: {
        type: String,
        enum: [
          "flight",
          "meals",
          "cruise",
          "hotel",
          "rentalcar",
          "excursions",
          "misc",
        ],
      },
      description: { type: String, required: false },
    },
  ],
  numberOfNights: { type: Number, required: true, min: 1, max: 31 },
  pricePP: Number,
  offer: {
    discount: Number,
    description: String,
    expires: { type: Date, required: false },
  },
  validTill: { type: Date, required: true },
  soldout: { type: Boolean, required: true, default: false },
});

exports.Vacations = settings.mongoose.model("vacations", VacationsSchema);
