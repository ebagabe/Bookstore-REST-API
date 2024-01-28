import NotFound from "../errors/NotFound.js";

const handler404 = async (req, res, next) => {
    const error404 = new NotFound();
    next(error404);
}

export default handler404;