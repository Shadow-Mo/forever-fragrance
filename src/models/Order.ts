import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: [true, 'Customer name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  itemDescription: {
    type: String,
    required: [true, 'Item description is required'],
  },
  file: {
    type: Buffer,
    required: [true, 'File is required'],
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'cancelled'],
    default: 'pending',
  },
  shippingAddress: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
