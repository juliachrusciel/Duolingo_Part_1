# Duolingo_Part_1

#Hello! I am Julia Chrusciel and this is the code for my first Duolingo coding test.

#I wrote a function in Javascript according to the guidelines. The function "grade" accepts the parameters correct_answer and student_answer and compares to two. After doing this, it determines whether the answer is (A) true or false, (B) whether the error falls into the following categories: none, typo, missing, or wrong word, and (C) the location of the errors.

#The conditions tested for are:
  #Condition 1: Exact Match - Correct
  #Condition 2: Exact Match but with Punctuation - Correct
  #Condition 3: Exact Match but with different capitalization - Correct
  #Condition 4: Near Match because of Repeated Letter at any point in the sentence - Typo
  #Condition 5: No Match because of missing letter - Incorrect
  #Condition 6: No Match because of wrong word - Incorrect
  #Condition 7: No Match because of missing word - Incorrect

#I tried to make the code as straightforward as possible - Condition 1 compares the two answers. Conditions 2 and 3 employ methods to compare the two answers after accounting for changes in punctuation and capitalization.

#Conditions 4, 5, 6 and 7 employ comparing the two answers through splitting the answers into arrays, looping through the words in the array and comparing the sentences character by character for errors.

#For each condition, I console logged the correct answer and the student answer and returned the final answer.

#As for me, I tested the code in Repl.it but it could be tested in any REPL program with the input: "grade(correct_answer, student_answer)".

#I've included the test cases I used below.

//Test Cases
// console.log(grade("house", "housed"));
// console.log("\n\n\n ");
// console.log(grade("house", "house"));
// console.log("\n\n\n ");
// console.log(grade("house", "hho"));
// console.log("\n\n\n ");
// console.log(grade("house", "hhouse"));
// console.log("\n\n\n ");
// console.log(grade("A house", "a house"));
// console.log("\n\n\n ");
// console.log(grade("This is my house", "This is mi house"));
// console.log("\n\n\n ");
// console.log(grade("This is my house", "This is your house"));
// console.log("\n\n\n ");
// console.log(grade("This is my house", "This my house"));
// console.log("\n\n\n ");
// console.log(grade("This is my house", "This house"));

#Finally, please feel free to contact me with any questions. My email address is juliamchrusciel@gmail.com.
