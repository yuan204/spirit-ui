export const generateUniqueId = function () {
    let id = 0
    return function () {
        return id++;
    }
}()
