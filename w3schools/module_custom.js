// exports.myDateTime = function () {
//     return Date();
// };

const myDateTime = (new Date().toLocaleTimeString([], {hour12: false})).split(':').join('-');

module.exports = myDateTime;