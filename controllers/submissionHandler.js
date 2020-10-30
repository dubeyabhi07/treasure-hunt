
gconst = require('../utilities/constants.js');

exports.handleSubmitRequest = function (req, response) {
    console.log(req.body)

    let answer = req.body.answer
    let question = req.body.title
    console.log(answer)
    console.log(question)

    
    a = answer.toLowerCase();
    b = a.replace(/ /g,'')
    processedAnswer= b.replace(/[^a-zA-Z0-9]/g, '');
    console.log(processedAnswer)


    switch(question) {
        case "Question_1":
        case "Question_2":
        case "Question_3":
        case "Question_4":
        case "Question_5":
        case "Question_6":
        case "Question_7":
        case "Question_8":
          if(gconst.questionAnswerMap[question]==processedAnswer){
              response.status(200).send({url : "/success/"+gconst.questionNextImageMap[question]})
          }
          else{
              response.status(400).send({err : "wrong Answer!"})
          }
          break;
        case "Question_9":
            if(gconst.questionAnswerMap[question]==processedAnswer){
                response.status(200).send({url : "/end"})
            }
            else{
                response.status(400).send({err : "wrong Answer!"})
            }
        default:
            response.status(400).send({err : "unknown error!"})
      }
};