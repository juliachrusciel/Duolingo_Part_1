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

// var correct = [true, false];
// var blame = ["None", "Typo", "Missing", "Wrong_word"];
// var highlights = ["[]"];

  function grade(correct_answer, student_answer){
    //for returned results
    var correct = [true, false];
    var blame = ["none", "typo", "missing", "wrong_word"];
    var highlights;
    //For Condition 2:
    var punctuation = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#\$%&\(\)\*\+,\-\.\/:;<=>\?@\[\]\^_`\{\|\}~]/g;
    var space = /\s+/g;
    var student_answer_no_punct= student_answer.replace(punctuation, '').replace(space, ' ');
    //For Condition 4-7:
    var previous;
    var boolWordDone = 0;
    var i, j, k, n; //loops and indices

    var correct_answer_string = [];
    var student_answer_string = [];
    var correct_answer_place = [];
    var student_answer_place = [];
    correct_answer_string = correct_answer.split(" ");
    student_answer_string = student_answer.split(" ");
    //

    //Condition 1: Exact Match - Correct
    if (correct_answer == student_answer) {
      highlights = "[]";
      console.log("Correct Answer: \""+correct_answer + "\",  Student Answer: \""+student_answer + "\"");
      console.log("Condition 1 check has ended.");
      return "(" + correct[0] + ", " + blame[0] + ", " + highlights + ")";

    //Condition 2: Exact Match but with Punctuation - Correct
    } else if (correct_answer == student_answer_no_punct) {
     highlights = "[]";
     console.log("Correct Answer: \""+correct_answer + "\",  Student Answer: \""+student_answer + "\"");
     console.log("Condition 2 check has ended.");
     return "(" + correct[0] + ", " + blame[0] + ", " + highlights + ")";

    //Condition 3: Exact Match but with different capitalization - Correct
    }  else if ((correct_answer.toLowerCase()) == (student_answer.toLowerCase())) {
      highlights = "[]";
      console.log("Correct Answer: \""+correct_answer + "\",  Student Answer: \""+student_answer + "\"");
      console.log("Condition 3 check has ended.");
      return "(" + correct[0] + ", " + blame[0] + ", " + highlights + ")";


    //Condition 4: Near Match because of Repeated Letter at any point in the sentence - Typo
   } else if (correct_answer !== student_answer){
      for (i = 0; i < correct_answer_string.length; i++);
      console.log("Correct Answer: \""+correct_answer + "\",  Student Answer: \""+student_answer + "\"");

      //Position Array for Correct Answer String and Debugging
      for (var i = 0; i < correct_answer_string.length; i++) {
        correct_answer_place[i] = correct_answer.search(correct_answer_string[i]);
        console.log(correct_answer_string[i] + ", " + correct_answer_place[i]);
      //Position Array for Student Answer String
        } for (i = 0; i < student_answer_string.length; i++) {
          student_answer_place[i] = student_answer.search(student_answer_string[i]);
          console.log(student_answer_string[i] + ", " + student_answer_place[i]);
        } for (var i = 0; i < correct_answer_string.length; i++){
          for (var k = 0, j = 0; k < correct_answer_string[i].length && boolWordDone === 0; k++) {
          console.log(correct_answer_string[i][k] + " " + student_answer_string[i][j]);
      //If equal
        if (correct_answer_string[i][k] == student_answer_string[i][j]) {
          console.log("1");
          previous = correct_answer_string[i][k];
          continue;

      //If Not equal
      } else if (student_answer_string[i][j + 1] == previous) {
        console.log("2");

        outcome = "(" + correct_answer_place[i] + "," + correct_answer_string[i].length +")), (" + student_answer_place[i] + "," + student_answer_string[i].length + ")";
        highlights = " [" + outcome + "]";
        previous = " ";
        console.log("Condition 4 check has ended.");
        return "(" + correct[0] + ", " + blame[1] + ", " + highlights + ")";


  //Condition 5: No Match because of omitted letter - False
  } else if (correct_answer.split(" ") != student_answer.split(" ")) {
    //Position Array for Correct Answer String and Debugging
    for (var i = 0; i < correct_answer_string.length; i++) {
      correct_answer_place[i] = correct_answer.search(correct_answer_string[i]);
      console.log(correct_answer_string[i] + ", " + correct_answer_place[i]);
    //Position Array for Student Answer String
      } for (i = 0; i < student_answer_string.length; i++) {
        student_answer_place[i] = student_answer.search(student_answer_string[i]);
        console.log(student_answer_string[i] + ", " + student_answer_place[i]);
      } for (var i = 0; i < correct_answer_string.length; i++){
        for (var k = 0, j = 0; k < correct_answer_string[i].length && boolWordDone === 0; k++) {
        console.log(correct_answer_string[i][k] + " " + student_answer_string[i][j]);
    //If equal
      if (correct_answer_string[i][k] == student_answer_string[i][j]) {
        console.log("1");
        previous = correct_answer_string[i][k];
        continue;
      }
    //If Not equal
      else if (student_answer_string[i][j - 1] == previous) {
      console.log("2");
      }
    outcome = "(" + correct_answer_place[i] + "," + correct_answer_string[i].length +")), (" + student_answer_place[i] + "," + student_answer_string[i].length + ")";
    highlights = " [" + outcome + "]";
    previous = " ";
      console.log("Condition 5 check has ended.");
      return "(" + correct[1] + ", " + blame[2] + ", " + highlights + ")";
      }
    }
  }

  //Condition 5: No Match because of missing letter - False
  } else if (correct_answer.split(" ").length != student_answer.split(" ").length) {
    //Position Array for Correct Answer String and Debugging
    for (var i = 0; i < correct_answer_string.length; i++) {
      correct_answer_place[i] = correct_answer.search(correct_answer_string[i]);
      console.log(correct_answer_string[i] + ", " + correct_answer_place[i]);
    //Position Array for Student Answer String
      } for (i = 0; i < student_answer_string.length; i++) {
        student_answer_place[i] = student_answer.search(student_answer_string[i]);
        console.log(student_answer_string[i] + ", " + student_answer_place[i]);
      } for (var i = 0; i < correct_answer_string.length; i++){
        for (var k = 0, j = 0; k < correct_answer_string[i].length && boolWordDone === 0; k++) {
        console.log(correct_answer_string[i][k] + " " + student_answer_string[i][j]);
    //If equal
      if (correct_answer_string[i][k] == student_answer_string[i][j]) {
        console.log("1");
        previous = correct_answer_string[i][k];
        continue;
      }
    //If Not equal
      else if (student_answer_string[i][j - 1] == previous) {
      console.log("2");
      }
    outcome = "(" + correct_answer_place[i] + "," + correct_answer_string[i].length +")), (" + student_answer_place[i] + "," + student_answer_string[i].length + ")";
    highlights = " [" + outcome + "]";
    previous = " ";
      console.log("Condition 5 check has ended.");
      return "(" + correct[1] + ", " + blame[2] + ", " + highlights + ")";
      }
    }
    //Condition 6: No Match because of wrong word - False
    } else if (correct_answer.split(" ") != student_answer.split(" ")) {
      //Position Array for Correct Answer String and Debugging
      for (var i = 0; i < correct_answer_string.length; i++) {
        correct_answer_place[i] = correct_answer.search(correct_answer_string[i]);
        console.log(correct_answer_string[i] + ", " + correct_answer_place[i]);
      //Position Array for Student Answer String
        } for (i = 0; i < student_answer_string.length; i++) {
          student_answer_place[i] = student_answer.search(student_answer_string[i]);
          console.log(student_answer_string[i] + ", " + student_answer_place[i]);
        } for (var i = 0; i < correct_answer_string.length; i++){
          for (var k = 0, j = 0; k < correct_answer_string[i].length && boolWordDone === 0; k++) {
          console.log(correct_answer_string[i][k] + " " + student_answer_string[i][j]);
      //If equal
        if (correct_answer_string[i][k] == student_answer_string[i][j]) {
          console.log("1");
          previous = correct_answer_string[i][k];
          continue;
        }
      //If Not equal
        else if (student_answer_string[i][j + 1] == previous) {
        console.log("2");
        }
      outcome = "(" + correct_answer_place[i] + "," + correct_answer_string[i].length +")), (" + student_answer_place[i] + "," + student_answer_string[i].length + ")";
      highlights = " [" + outcome + "]";
      previous = " ";
        console.log("Condition 6 check has ended.");
        return "(" + correct[1] + ", " + blame[3] + ", " + highlights + ")";
        }
      }
    }

    //Condition 7: No Match because of missing word - False
    } else (correct_answer.split(" ").length != student_answer.split(" ").length)  {
        //Position Array for Correct Answer String and Debugging
        for (var i = 0; i < correct_answer_string.length; i++) {
          correct_answer_place[i] = correct_answer.search(correct_answer_string[i]);
          console.log(correct_answer_string[i] + ", " + correct_answer_place[i]);
        //Position Array for Student Answer String
          } for (i = 0; i < student_answer_string.length; i++) {
            student_answer_place[i] = student_answer.search(student_answer_string[i]);
            console.log(student_answer_string[i] + ", " + student_answer_place[i]);
          } for (var i = 0; i < correct_answer_string.length; i++){
            for (var k = 0, j = 0; k < correct_answer_string[i].length && boolWordDone === 0; k++) {
            console.log(correct_answer_string[i][k] + " " + student_answer_string[i][j]);
        //If equal
          if (correct_answer_string[i][k] == student_answer_string[i][j]) {
            console.log("1");
            previous = correct_answer_string[i][k];
            continue;
          }
        //If Not equal
          else if (student_answer_string[i][j - 1] == previous) {
          console.log("2");
          }
        outcome = "(" + correct_answer_place[i] + "," + correct_answer_string[i].length +")), (" + student_answer_place[i] + "," + student_answer_string[i].length + ")";
        highlights = " [" + outcome + "]";
        previous = " ";
          console.log("Condition 7 check has ended.");
          return "(" + correct[1] + ", " + blame[2] + ", " + highlights + ")";
          }
        }
    }


  }
















    highlights = ;
    return "(" + correct[1] + ", " + blame[2] + ", " + highlights + ")";

  } else if (correct_answer.split(" ").search !== student_answer.split(" ").search.match(correct_answer.split(" "))) {

    for (i = 0; i < correct_answer.length; i++);
    highlight = ;
    return "(" + correct[1] + ", " + blame[3] + ", " + highlights + ")";


  //Condition 7: No Match because of omitted word - False
  } else (correct_answer.split(" ").length != student_answer.split(" ").length)  {
    highlights = ;
    return "(" + correct[1] + ", " + blame[2] + ", " + highlights + ")";
  }
};
















//     } else if (student_answer_string[n][j] == previous) {
//       console.log("2A");
//       console.log(j + " " + student_answer_string[n].length + " " + student_answer_string[n][j] + " " student_answer_string[n][j + 1]);
//       if (j + 1 <= student_answer_string[n].length + " " + student_answer_string[n][j + 1]) { // continue to next one
//         console.log("2B");
//         blame_b = blame[1];
//         outcome = "((" + correct_answer_place[i] + ", " + (correct_answer_place[i] + correct_answer_string[i].length) + ")), (" + student_answer_string[n] + "," + (student_answer_place[n] + student_answer_string[n]) + "))";
//         previous = " ";
//         j = j + 2;
//         if (j >= student_answer_string[n].length) {
//           console.log("2C");
//           blame_b = blame[3];
//           boolWordDone = 1;
//         }
//         boolWordDone = 1;
//     } else { //next one match fails so continue
//       console.log("3");
//       blame_b = blame[3];
//       boolWordDone = 1;
//       outcome = "((" + correct_answer_place[i] + ", " + (correct_answer_place[i] + correct_answer_string[i].length) + ")), (" + student_answer_string[n] + "," + (student_answer_place[n] + student_answer_string[n]) + "))";
//       previous = " ";
//     }
//       //If missing - Condition 5: No Match because of omitted letter - False
//     } else if (k === 0) {
//       console.log("4A i + 1-" + i + " correct_answer_string[i + 1]" + correct_answer_string[i + 1]+ ". n-" + n + "student_answer_string[n][j]" + student_answer_string[n][j]);
//       //is there another word after this one?
//         if (i + 1 < correct_answer_string.length && correct_answer_string[i + 1][0] == student_answer_string[n][j] || i + 2 < correct_answer_string && correct_answer_string[i + 2][0] == student_answer_string[n][j] ){
//           wantNextSAS = 0;
//           blame_b = blame[3];
//           boolWordDone = 1;
//           outcome = "((" + correct_answer_place[i] + ", " + (correct_answer_place[i] + correct_answer_string[i].length) + "))" + ",(" + student_answer_place[n] + "," + student_answer_place[n] + "))";
//           console.log("4B " + outcome);
//
//         } else if (i + 2 < correct_answer_string.length && correct_answer_string[i + 2][0] == student_answer_string[n][j]) {
//           //second is missing so Done
//           outcome = "";
//           result = correct[1];
//           blame_b = blame[2];
//           console.log("4C " + outcome);
//           boolWordDone = 1;
//           bGiveUp = 1;
//         }
//       } else {
//         console.log("4D");
//         blame_b = blame[0];
//         break;
//       }
//     }
//     console.log("6 " + outcome)
//     if (j < student_answer_string[n].length && blame_b != blame[1] || blame_b != blame[2]){
//       console.log("5 j" + j  + " i" + i + ", n" + n);
//       blame_b = blame[3];
//       outcome = "((" + correct_answer_place[i] + ", " + (correct_answer_place[i] + correct_answer_string[i].length) + ")), (" + student_answer_string[n] + "," + (student_answer_place[n] + student_answer_string[n]) + "))";
//     }
//
//   }
//   if(blame_b == blame[3] || blame_b = blame[2]){
//     result = correct[1];
//     highlights = "[" + outcome + "]";
//     return "(" + correct[1] + ", " + blame_b + ", " + highlights + ")";
//   }
// }
