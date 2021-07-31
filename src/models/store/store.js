import mongoose, { Schema } from "mongoose";

class store {
  constructor() {
  }

  initSchema() {
    const schema = new Schema({
      storeName: { type: String, required: true },
      storeDescription: { type: String },
      storeLogo: {type: String}
    });

    return mongoose.models.store || mongoose.model('store', schema);
  }

  constructModel() {
    return this.initSchema();
  }
}

export default store;
