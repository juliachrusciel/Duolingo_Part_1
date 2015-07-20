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

    //Condition 7: No Match because of missing word - False
  } else (correct_answer.split(" ").length != student_answer.split(" ").length)
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
  }
}
