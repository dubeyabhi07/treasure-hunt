'use strict';

let questionNextImageMap = {
    "Question_1":"111176",
    "Question_2":"29087",
    "Question_3":"3987",
    "Question_4":"42087",
    "Question_5":"5878",
    "Question_6":"64387",
    "Question_7":"71087",
    "Question_8":"81017",
    "Question_9":"90873"
}

let imageQuestionMap = {
    "111176":"Question_2",
    "29087":"Question_3",
    "3987":"Question_4",
    "42087":"Question_5",
    "5878":"Question_6",
    "64387":"Question_7",
    "71087":"Question_8",
    "81017":"Question_9",
    "90873":"Question_10"
}

let questionAnswerMap = {
    "Question_1":"8",
    "Question_2":"notspider",
    "Question_3":"thegreenhornet",
    "Question_4":"theloneranger",
    "Question_5":"paris",
    "Question_6":"davidbeckham",
    "Question_7":"kohinoor",
    "Question_8":"victoriamemorial",
    "Question_9":"alappuzha",
    "Question_10":"tumbbad"
}

let alternateQuestionAnswerMap = {
    "Question_1":"10",
    "Question_2":"notspider",
    "Question_3":"greenhornet",
    "Question_4":"loneranger",
    "Question_5":"paris",
    "Question_6":"davidbeckham",
    "Question_7":"kohinoor",
    "Question_8":"victoriamemorial",
    "Question_9":"alleppey",
    "Question_10":"tumbbad"
}

let constants = {
    serverPort : 8076,
    questionNextImageMap: questionNextImageMap,
    questionAnswerMap: questionAnswerMap,
    alternateQuestionAnswerMap:alternateQuestionAnswerMap,
    imageQuestionMap:imageQuestionMap
};

module.exports = Object.freeze(constants); // freeze prevents changes
