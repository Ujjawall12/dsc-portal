const eventService = require("../services/event.service");

const getEvents = async (req, res) => {
  try {
    const { id, page = 1, max = 10, year } = req.query;
    const response = await eventService.getEvents({ id, page, max, year });

    if (id && !response.data) {
      return res.status(404).json({ message: "Event not found" });
    }

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getEvents,
};
