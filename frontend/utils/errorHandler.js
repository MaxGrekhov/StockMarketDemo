export function tryGetMessage(error) {
    if (error) {
        console.error(error);
        if (error.response) {
            if (error.response.status == 400) {
                return error.response.data ? error.response.data.message : "Bad request";
            }
            if (error.response.status == 500) {
                return "Server error";
            }
        }
    }
    return "Unknown client error";
}