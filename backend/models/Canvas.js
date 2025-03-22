import mongoose from 'mongoose';

const canvasSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'Untitled Canvas'
  },
  nodes: [{
    id: String,
    type: String,
    position: {
      x: Number,
      y: Number
    },
    data: {
      label: String,
      type: String,
      description: String,
      value: String,
      min: String,
      max: String,
      currency: String,
      tokenName: String,
      role: String,
      shape: String,
      handles: {
        top: Number,
        right: Number,
        bottom: Number,
        left: Number
      }
    }
  }],
  edges: [{
    id: String,
    source: String,
    target: String
  }],
  moveCode: {
    type: String,
    default: ''
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const Canvas = mongoose.model('Canvas', canvasSchema);

export default Canvas; 