import ErrorBase from "./ErrorBase.js";

class NotFound extends ErrorBase {
    constructor(message = "Page Not Found") {
        super(message, 404)
    }
}

export default NotFound;