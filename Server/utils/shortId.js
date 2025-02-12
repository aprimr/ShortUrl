import { nanoid } from "nanoid";

const generateShortId = () => {
  const shortId = nanoid(10);
  return shortId;
};

export default generateShortId;
