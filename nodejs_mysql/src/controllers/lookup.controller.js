const Lookup = require("../services/lookup.service");

exports.retrieveLookupList = async (req, res, next) => {
  try {
    const data = await Lookup.retrieveLookupList();
    await res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};