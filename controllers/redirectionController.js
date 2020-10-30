
gconst = require('../utilities/constants.js');

exports.redirect = function (req, response) {
    console.log(req.params.id)
    imageId = req.params.id
    switch(imageId) {
        case "29087":
        case "3987":
        case "42087":
        case "5878":
        case "64387": 
        case "71087":
        case "81017":
        case "90873":
            response.render('screenB', { 
            title: gconst.imageQuestionMap[imageId],
            imageId : imageId });
          break;
        default:
            response.status(400).send({err : "unknown error!"})
      }
};
