import ratelimit from "../../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit(req.ip); // IP Address

    if (!success) {
      console.warn(`[RATE_LIMIT] ${req.ip} ${req.method} ${req.originalUrl}`);
      return res.status(429).json({
        message: "Chill bro, too many requests, try again later lol.",
      });
    }

    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export default rateLimiter;
