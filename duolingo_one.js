// The goal of this task is to write a function grade() that grades a student's
// answer and finds certain common mistakes. In particular, the program should
// figure out (1) if there is a typo in the student's answer, (2) if a word is
// missing or (3) if a word is wrong. If the program finds a common mistake it
// should highlight it.
//
// # Specification
//
// Here is the specification in Python (you do not have to use python). Make
// sure to make the function available from the command line.
//
// def grade(correct_answer, student_answer):
// """
//     - correct_answer: a unicode string, the correct answer
//     - student_answer: a unicode string, what the student typed
//
//     returns a tuple (correct, blame, highlights)
//         - correct:      a boolean, True if and only if the student_answer
//                         should be considered a correct answer
//         - blame:        one out of {None, "typo", "missing", "wrong_word"}
//                         depending on the cause of the mistake, if it can
//                         be detected
//         - highlights:   a list of tuples, where each tuple is of type
//                         ((c1, c2), ((s1, s2)) and c1/s1 is the index of the
//                         first character of a blamed word in
//                         the correct/student's answer and c2/s2 is the index
//                        of the last character of that same blamed word
//

var correct_answer = ["The dog sleeps in the house"];
//////////////////////////////////////////////////////
var student_answer = ["Hello my name is Julia"]; //incorrect
var student_answer = ["The dog steeps in the house"]; //correct with typo
var student_answer = ["The cat sleeps in the house"]; //incorrect
var student_answer = ["The god sleeps in the house"]; //incorrect
var student_answer = ["The dog stteeps in the house"]; //correct with typo
var student_answer = ["The dog sttteeps in the house"]; //incorrect
////////////////////////////////////////////////////////////////////////////
// const isCorrect = Boolean(true) if (var blame == [0] || var blame == [0]);
//
// var correct = true;
// while (blame == "None" || "Typo") {
//   return true;
//   else return false;
// }

// var correct = [
//   {none_c: true,
//   blame: ["None"],
//   },
//   {typo_c: true,
//   blame: ["Typo"],
//   },
//   {missing_f: false,
//   blame: ["Missing"],
//   },
//     {wrong_word_f: false,
//   blame: ["Wrong_word"],
//   },
// ];

// var correct = [
//   if ((var blame == blame[0]) || (var blame == blame[1])) {
//     correct = true;
//   } else {
//   correct= false;
//   }
// ];
// var correct_answer = document.getElementById('correct')

// function correct {
//   if (var blame == blame[0]) || (var blame = blame[1]) {
//     document.correct(true);
//   } else {
//     document.correct(false);
//   }
// };
// switch(level) {
//   case blame[0]:
//     msg = true;
//   case blame[1]:
//     msg = true;
//   case blame[2]:
//     msg = false;
//   case blame[3]:
//     msg = false;
// }

var correct = [true, false];
var blame = ["None", "Typo", "Missing", "Wrong_word"];
var highlights = ["[]"];

function grade(correct_answer, student_answer){
  //Condition 1: Exact Match - Correct
  if (correct_answer == student_answer) {
  return document.getElementById(correct[0], blame[0], highlights[0]);
  //Condition 2: Exact Match but with Punctuation - Correct
  } else if (correct_answer + "." || "!" || "?" == student_answer + "." || "!" || "?"){
  return (correct[0], blame[0], highlights[0]);
  //Condition 3: Exact Match but with different capitalization - Correct
  }  else if (correct_answer.toLowerCase == student_answer.toLowerCase) {
  return (correct[0], blame[0], highlights[0]);

  //Condition 4: Near Match because of Repeated Letter at any point in the sentence - Typo
  } else if ( correct_answer.split(" ").search !== student_answer.split(" ").search(correct_answer.split(" ")).match ) {
  ///indexOf, lastIndexOf  
  student_answer.charAt( )
  return (correct[0], blame[1], ( (correct_answer.charAt(' '), correct_answer.lastCharAt(' ')), (student_answer.charAt(' '),student_answer.lastCharAt(' ') );

  //Condition 5: No Match because of omitted letter - False
  } else if (correct_answer.split(" ") != student_answer.split(" ")) {
  return (correct[1], blame[2], highlights[X];
  //Condition 6: No Match because of wrong word - False
  } else if student_answer correct_answer  {
  return (correct[1], blame[1], highlights[X]);
  //Condition 7: No Match because of omitted word - False
  } else if (correct_answer.split(" ").length != student_answer.split(" ").length)  {
  return (correct[1], blame[0], highlights[0]);
  }
};
