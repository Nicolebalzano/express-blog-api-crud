function errorHandler(err, req, res, next) {
    res.status(500);
    return res.jason({
        error : "errore interno al server",
    })
}
export default errorHandler;