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

function grade(correct_answer, student_answer){
  //Condition 1: Exact Match - Correct
  if (condition 1 = exact match) {
  return "Correct";
  //Condition 2: 
} else if (condition 2= ) {
  return (result 2)
  }  else if (condition 3) {
  return (result 3)
  } else (condition 4) {
  return (result 4)
  }
};
