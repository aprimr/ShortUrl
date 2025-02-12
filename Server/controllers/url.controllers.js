import generateShortId from "../utils/shortId.js";
import Url from "../models/url.model.js";

const shortUrl = async (req, res) => {
  const { longUrl } = req.body;
  try {
    //generate shortUrl
    const shortId = generateShortId();
    //check if shortUrl already exists
    const doesIdExists = await Url.findOne({ shortId });
    if (doesIdExists) {
      return res
        .status(500)
        .json({ message: "ShortUrl error: Internal server error." });
    }
    //create new url
    const newUrl = new Url({ longUrl, shortId });
    await newUrl.save();
    return res.status(200).json({
      message: "Short Url created successfully.",
      urls: {
        longUrl,
        shortId,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

const getShortUrl = async (req, res) => {
  const shortId = req.params.shortId;
  try {
    //find shortId in DB
    const url = await Url.findOne({ shortId });
    if (!url) {
      return res.status(404).json({ message: "ShortURL not found." });
    }
    return res
      .status(200)
      .json({ message: "Redirected.", longUrl: url.longUrl });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { shortUrl, getShortUrl };
