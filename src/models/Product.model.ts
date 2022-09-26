import mongoose from 'mongoose';
// import * as nanoid from 'nanoid';
// import nanoid from 'nanoid';
import { UserDocument } from './User.model';

// const nanoiD = nanoid.customAlphabet(
//   'abcdefghijklmnopqrstuvwxyz0123456789',
//   10
// );

export interface HookNextFunction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error?: Error): any;
}
export interface ProductDocument extends mongoose.Document {
  user: UserDocument['_id'];
  title: string;
  description: String;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema(
  {
    // productId: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   // default: () => `product_${nanoid.nanoid()}`,
    // },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model<ProductDocument>('Product', productSchema);

export default Product;
