const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      error: 'Invalid ID format'
    });
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    return res.status(400).json({
      success: false,
      error: message
    });
  }

  res.status(500).json({
    success: false,
    error: 'Server Error'
  });
};

module.exports = errorHandler;