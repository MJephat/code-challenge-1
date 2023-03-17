// prompt the user to enter their marks
let marks = prompt()
let grade;

// create condtions for each mark to display the grade.
// we need to use if and else if statements.
if(marks>79 && marks<=100){
    grade = "A";
}
else if(marks>=60 && marks<=79){
    grade = "B";
}
else if(marks>=50 && marks<=59){
    grade = "C";
}
else if(marks>=40 && marks<=49){
    grade = "D";
}
else if(marks>=0 && marks<=39){
    grade = "F";
}
//if the value entered is not in the range of (0-100) or it is not an integer. then the output will be invalid.
else{
    grade = "Invalid";
}