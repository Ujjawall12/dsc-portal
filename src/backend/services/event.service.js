const Event = require("../schema/event.schema");

const getEvents = async ({ id, page, max, year }) => {
  const limit = Math.min(max || 10, 20); // Upper limit of 20
  const skip = (page - 1) * limit;
  const currentYear = new Date().getFullYear();

  if (id) {
    const event = await Event.findById(id);
    return { data: event };
  }

  const queryYear = year || currentYear;
  const events = await Event.find({
    startDate: { $gte: new Date(`${queryYear}-01-01`) },
    endDate: { $lte: new Date(`${queryYear}-12-31`) },
  })
    .select("images name startDate endDate duration mode")
    .skip(skip)
    .limit(limit);

  const total = await Event.countDocuments({
    startDate: { $gte: new Date(`${queryYear}-01-01`) },
    endDate: { $lte: new Date(`${queryYear}-12-31`) },
  });

  return { data: events, total };
};

module.exports = {
  getEvents,
};
