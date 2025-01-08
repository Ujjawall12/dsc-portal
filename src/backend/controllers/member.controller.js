const User = require('../schema/user.schema');

const getMembersController = async (req, res) => {
  try {
    const { member, team, page = 1, max = 10 } = req.query;
    
    let query = {};
    
    // Filter by member name or get all
    if (member && member !== 'all') {
      query.name = new RegExp(member, 'i');
    }
    
    // Filter by team/field
    if (team) {
      query.field = team;
    }

    const skip = (page - 1) * max;
    
    const members = await User.find(query)
      .skip(skip)
      .limit(parseInt(max))
      .select('-password');

    const total = await User.countDocuments(query);

    return res.status(200).json({
      success: true,
      data: members,
      meta: {
        current: parseInt(page),
        pages: Math.ceil(total / max),
        total
      }
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching members"
    });
  }
};

module.exports = {
  getMembersController
};