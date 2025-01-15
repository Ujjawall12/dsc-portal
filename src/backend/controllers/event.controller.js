// backend/controllers/event.controller.js
const Event = require('../schema/event.schema');

const getEvents = async (req, res) => {
  try {
    const { page = 1, max = 9, year } = req.query;
    const limit = Math.min(parseInt(max), 20);
    const skip = (parseInt(page) - 1) * limit;

    // Create date range for the specified year
    const startOfYear = new Date(`${year}-01-01`);
    const endOfYear = new Date(`${year}-12-31`);

    const query = year ? {
      startDate: { 
        $gte: startOfYear,
        $lte: endOfYear
      }
    } : {};

    const [events, total] = await Promise.all([
      Event.find(query)
        .skip(skip)
        .limit(limit)
        .sort({ startDate: 1 }),
      Event.countDocuments(query)
    ]);

    return res.status(200).json({
      data: events,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit)
    });

  } catch (error) {
    console.error('Error in getEvents:', error);
    return res.status(500).json({ 
      message: "Internal server error",
      error: error.message 
    });
  }
};

module.exports = {
  getEvents
};