import Events from "../db/models/Events.js";

const MAX_EVENTS_PER_REQUEST = 20;

const eventsController = {};

eventsController.get = async (req, res) => {
  try {
    let {page, count, ...options} = req.query;
    count = Math.min(MAX_EVENTS_PER_REQUEST, count);
    page = page || 0;
    count = count || 1;
    const filter = {};

    if (req.query.id) filter._id = req.query.id;
    if (req.query.header) filter.header = req.query.header;

    if (options.last === "true") {
      const previews = await Events
        .find({filter})
        .sort({id: -1})
        .skip(page * count)
        .limit(count);
      res.json(previews);
      return;
    }

    const previews = await Events.find({}).skip(page * count).limit(count);
    res.json(previews);

  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

export default eventsController;
