$("#btnCalc").click(function () {
    /*Couldn't get code to print for calculator but here is what I have*/
    alert("Final weighted score is " + total + " with a letter grade of " + grade)

    var asmt = $("#Assign").val();
    var gp = $("Group").val();
    var qz = $("Quiz").val();
    var ex = $("Exam").val();
    var intx = $("INTEX").val();
    var grade = ""
    var total = (asmt * .55).val + (gp * .05) + (qz * .10) + (ex * .20) + (intx * .10)


    alert(if
        total >= 94
        grade = "A"
    elseif total >= 90
    grade = "A-"
    elseif total >= 87
    grade = "B+"
    elseif total >= 84
    grade = "B"
    elseif total >= 80
    grade = "B-"
    elseif total >= 77
    grade = "C+"
    elseif total >= 74
    grade = "C"
    elseif total >= 67
    grade = "C-"
    elseif total >= 64
    grade = "D+"
    elseif total >= 60
    grade = "D"
    elseif total >=
    alert("Final weighted score is " + total + " with a letter grade of " + grade)
 

       )
})

