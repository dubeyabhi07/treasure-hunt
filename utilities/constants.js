'use strict';

let questionNextImageMap = {
    "Question_1":"29087",
    "Question_2":"3987",
    "Question_3":"42087",
    "Question_4":"5878",
    "Question_5":"64387",
    "Question_6":"71087",
    "Question_7":"81017",
    "Question_8":"90873"
}

let imageQuestionMap = {
    "29087":"Question_2",
    "3987":"Question_3",
    "42087":"Question_4",
    "5878":"Question_5",
    "64387":"Question_6",
    "71087":"Question_7",
    "81017":"Question_8",
    "90873":"Question_9"
}

let questionAnswerMap = {
    "Question_1":"notspider",
    "Question_2":"thegreenhornet",
    "Question_3":"loneranger",
    "Question_4":"paris",
    "Question_5":"davidbeckham",
    "Question_6":"kohinoor",
    "Question_7":"victoriamemorial",
    "Question_8":"allapuzza",
    "Question_9":"tumbbad"
}

let constants = {
    serverPort : 8076,
    questionNextImageMap: questionNextImageMap,
    questionAnswerMap: questionAnswerMap,
    imageQuestionMap:imageQuestionMap
};

module.exports = Object.freeze(constants); // freeze prevents changes
