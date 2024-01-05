// Your code here ...
const { model, Schema } = require("mongoose");

// CREATE A SCHEMA
const recipeSchema = new Schema(
  {
    title: { type: String, unique: true, required: true },
    instructions: { type: String, required: true },
    level: {
      type: String,
      enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
    },
    ingredients: { type: [String] },
    image: {
      type: String,
      default: "https://images.media-allrecipes.com/images/75131.jpg",
    },
    duration: { type: Number, min: 0 },
    isArchived: { type: Boolean, default: false },
    created: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// CREATE A MODEL && EXPORT THE MODEL
module.exports = model("Recipe", recipeSchema);
