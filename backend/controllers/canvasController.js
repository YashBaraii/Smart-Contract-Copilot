import Canvas from '../models/Canvas.js';

// @desc    Create a new canvas
// @route   POST /api/canvas
// @access  Private
export const createCanvas = async (req, res) => {
  try {
    const { name, nodes, edges, moveCode } = req.body;
    const canvas = await Canvas.create({
      name,
      nodes,
      edges,
      moveCode,
      user: req.user._id
    });

    res.status(201).json(canvas);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get all canvases for a user
// @route   GET /api/canvas
// @access  Private
export const getCanvases = async (req, res) => {
  try {
    const canvases = await Canvas.find({ user: req.user._id })
      .select('name createdAt updatedAt')
      .sort('-updatedAt');
    res.json(canvases);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get a single canvas
// @route   GET /api/canvas/:id
// @access  Private
export const getCanvas = async (req, res) => {
  try {
    const canvas = await Canvas.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!canvas) {
      return res.status(404).json({ message: 'Canvas not found' });
    }

    res.json(canvas);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update a canvas
// @route   PUT /api/canvas/:id
// @access  Private
export const updateCanvas = async (req, res) => {
  try {
    const { name, nodes, edges, moveCode } = req.body;
    const canvas = await Canvas.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!canvas) {
      return res.status(404).json({ message: 'Canvas not found' });
    }

    canvas.name = name || canvas.name;
    canvas.nodes = nodes || canvas.nodes;
    canvas.edges = edges || canvas.edges;
    canvas.moveCode = moveCode || canvas.moveCode;

    const updatedCanvas = await canvas.save();
    res.json(updatedCanvas);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Delete a canvas
// @route   DELETE /api/canvas/:id
// @access  Private
export const deleteCanvas = async (req, res) => {
  try {
    const canvas = await Canvas.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!canvas) {
      return res.status(404).json({ message: 'Canvas not found' });
    }

    await canvas.deleteOne();
    res.json({ message: 'Canvas removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}; 