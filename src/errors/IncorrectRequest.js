import ErrorBase from "./ErrorBase.js"

class IncorrectRequest extends ErrorBase {
    constructor(message = "One or more provided data are incorrect") {
        super(message, 400)
    }
}

export default IncorrectRequest;