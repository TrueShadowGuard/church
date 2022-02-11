import Events from "../db/models/Events.js";
import {extractFilterFromQuery, extractOptionsFromQuery, makePropsRegexSearched} from "../utils/controllerHelpers.js";

const MAX_EVENTS_PER_REQUEST = 20;

const eventsController = {};

eventsController.get = async (req, res) => {
  try {
    let page = req.query.page || 0;
    let count = req.query.count || 1;
    count = Math.min(MAX_EVENTS_PER_REQUEST, count);

    let filter = extractFilterFromQuery(req.query);

    const options = extractOptionsFromQuery(req.query);

    if (options.last === "true") {
      const previews = await Events
        .find(filter, {_id: 0})
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
