// script file for the dropdown begins
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//script ends here

//Course Unit
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//General script ends here

// Calculate Function Begins Here
function calculate() {
  // to check if the user entered a value at least
  try {
    if(typeof sum === 'undefined' || sum == 0) {
      alert('All Fields are Required');
    }
    else {
      totalCourses = courses.length;
      totalGrade = grades.length;
      totalCredit = creditUnit.length;
      console.log(totalCourses);
      console.log(totalGrade);
      console.log(totalCredit);
      console.log(sum);
      lastG = totalGrade - 1;
      lastGrade = grades[lastG];
      lastC = totalCredit - 1;
      lastCredit = creditUnit[lastC];
    
      // IF STATEMENT FOR FIRST GRADE LOOPING (WHILE LOOP)
      let index = 0;
      let calculateGPA = 0;
      while((index < grades.length-1) && (creditUnit.length-1)) {
        otherCourse = grades[index];
        otherGrade = creditUnit[index]; 
        // OtherCourses and with 3 credit Unit excluding the Last Course
        if(otherCourse == "A" && otherGrade == 3) {
          randomCourse = 12;
          console.log(randomCourse);
        }
        else if(otherCourse == "AB" && otherGrade ==3) {
          randomCourse = 10.5;
          console.log(randomCourse);
        }
        else if(otherCourse == "B" && otherGrade == 3) {
          randomCourse = 9;
          console.log(randomCourse);
        }
        else if(otherCourse == "BC" && otherGrade == 3) {
          randomCourse = 7.5;
          console.log(randomCourse);
        }
        else if(otherCourse == "C" && otherGrade == 3) {
          randomCourse = 6;
          console.log(randomCourse);
        }
        else if(otherCourse == "F" && otherGrade == 3) {
          randomCourse = 4.5;
          console.log(randomCourse);
        }
        // Other Courses with 2 Credit Unit excluding the last course
        else if(otherCourse == "A" && otherGrade == 2) {
          randomCourse = 8;
          console.log(randomCourse);
        }
        else if(otherCourse == "AB" && otherGrade == 2) {
          randomCourse = 7;
          console.log(randomCourse);
        }
        else if(otherCourse == "B" && otherGrade == 2) {
          randomCourse = 6;
          console.log(randomCourse);
        }
        else if(otherCourse == "BC" && otherGrade == 2) {
          randomCourse = 5;
          console.log(randomCourse);
        }
        else if(otherCourse == "C" && otherGrade == 2) {
          randomCourse = 4;
          console.log(randomCourse);
        }
        else if(otherCourse == "F" && otherGrade == 2) {
          randomCourse = 3;
          console.log(randomCourse);
        }
    
        // Other Courses with 4 Credit Unit excluding the last course
        else if(otherCourse == "A" && otherGrade == 4) {
          randomCourse = 16;
          console.log(randomCourse);
        }
        else if(otherCourse == "AB" && otherGrade == 4) {
          randomCourse = 14;
          console.log(randomCourse);
        }
        else if(otherCourse == "B" && otherGrade == 4) {
          randomCourse = 12;
          console.log(randomCourse);
        }
        else if(otherCourse == "BC" && otherGrade == 4) {
          randomCourse = 10;
          console.log(randomCourse);
        }
        else if(otherCourse == "C" && otherGrade == 4) {
          randomCourse = 8;
          console.log(randomCourse);
        }
        else if(otherCourse == "F" && otherGrade == 4) {
          randomCourse = 6;
          console.log(randomCourse);
        }
    
          // Other Courses with 1 Credit Unit excluding the last course
          else if(otherCourse == "A" && otherGrade == 1) {
            randomCourse = 4;
            console.log(randomCourse);
          }
          else if(otherCourse == "AB" && otherGrade ==1) {
            randomCourse = 3.5;
            console.log(randomCourse);
          }
          else if(otherCourse == "B" && otherGrade == 1) {
            randomCourse = 3;
            console.log(randomCourse);
          }
          else if(otherCourse == "BC" && otherGrade == 1) {
            randomCourse = 2.5;
            console.log(randomCourse);
          }
          else if(otherCourse == "C" && otherGrade == 1) {
            randomCourse = 2;
            console.log(randomCourse);
          }
          else if(otherCourse == "F" && otherGrade == 1) {
            randomCourse = 1.5;
            console.log(randomCourse);
          }
        
        // loops but stylishly finds the total Courses excluding the last one for now
        calculateGPA = calculateGPA + randomCourse;
        index += 1;
        
        
      }
      // While Loop Ends Here
    
      // IF STATEMENT FOR LAST GRADE 3 CREDIT UNIT
      if(lastGrade == "A" && lastCredit == 3) {
        lastCourse = 12; // last Course 12 points
        console.log(lastCourse);
    
      }
      else if(lastGrade == "AB" && lastCredit == 3) {
        lastCourse = 10.5;
        console.log(lastCourse);
    
      }
      else if(lastGrade == "B" && lastCredit == 3) {
        lastCourse = 9.0;
        console.log(lastCourse);
      }
      else if(lastGrade == "BC" && lastCredit == 3) {
        lastCourse = 7.5;
        console.log(lastCourse);
      }
      else if(lastGrade == "C" && lastCredit == 3) {
        lastCourse =  6.0;
        console.log(lastCourse);                                                                                                                                         
                  
      }
      else if(lastGrade == "F" && lastCredit == 3) {
        lastCourse = 4.5;
        console.log(lastCourse);
      }
    
      // IF STATEMENT FOR LAST GRADE 2 CREDIT UNIT
      if(lastGrade == "A" && lastCredit == 2) {
        lastCourse = 8; // last Course 12 points
        console.log(lastCourse);
    
      }
      else if(lastGrade == "AB" && lastCredit == 2) {
        lastCourse = 7.0;
        console.log(lastCourse);
    
      }
      else if(lastGrade == "B" && lastCredit == 2) {
        lastCourse = 6.0;
        console.log(lastCourse);
      }
      else if(lastGrade == "BC" && lastCredit == 2) {
        lastCourse = 5.0;
        console.log(lastCourse);
      }
      else if(lastGrade == "C" && lastCredit == 2) {
        lastCourse =  4.0;
        console.log(lastCourse);                                                                                                                                         
                  
      }
      else if(lastGrade == "F" && lastCredit == 2) {
        lastCourse = 3.0;
        console.log(lastCourse);
      }
    
        // IF STATEMENT FOR LAST GRADE 4 CREDIT UNIT
        if(lastGrade == "A" && lastCredit == 4) {
          lastCourse = 16; // last Course 12 points
          console.log(lastCourse);
    
        }
        else if(lastGrade == "AB" && lastCredit == 4) {
          lastCourse = 14;
          console.log(lastCourse);
    
        }
        else if(lastGrade == "B" && lastCredit == 4) {
          lastCourse = 12;
          console.log(lastCourse);
        }
        else if(lastGrade == "BC" && lastCredit == 4) {
          lastCourse = 10;
          console.log(lastCourse);
        }
        else if(lastGrade == "C" && lastCredit == 4) {
          lastCourse =  8;
          console.log(lastCourse);                                                                                                                                         
                    
        }
        else if(lastGrade == "F" && lastCredit == 4) {
          lastCourse = 6;
          console.log(lastCourse);
        }
    
            // IF STATEMENT FOR LAST GRADE 1 CREDIT UNIT
            if(lastGrade == "A" && lastCredit == 1) {
              lastCourse = 4; // last Course 12 points
              console.log(lastCourse);
          
            }
            else if(lastGrade == "AB" && lastCredit == 1) {
              lastCourse = 3.5;
              console.log(lastCourse);
          
            }
            else if(lastGrade == "B" && lastCredit == 1) {
              lastCourse = 3;
              console.log(lastCourse);
            }
            else if(lastGrade == "BC" && lastCredit == 1) {
              lastCourse = 2.5;
              console.log(lastCourse);
            }
            else if(lastGrade == "C" && lastCredit == 1) {
              lastCourse =  2;
              console.log(lastCourse);                                                                                                                                         
                        
            }
            else if(lastGrade == "F" && lastCredit == 1) {
              lastCourse = 1.5;
              console.log(lastCourse);
            }
      // to Calculate the total GPA - the code is here
      let yourGPA = (calculateGPA + lastCourse) / sum;
      console.log("your GPA for this Semester is " + yourGPA);
    
      var showresult = document.getElementById("resulttab");
      showresult.style.display="flex";
      var getresult = "your GPA for this Semester is " + yourGPA;
      document.getElementById("resulttab").innerHTML = getresult;
    }

  }
  catch(err) {
    document.querySelector(".calculate").addEventListener('click', function(){
      Swal.fire("Use the Reset Button");
    });
  }
 
 



// It ends here
}

// A Global Variable associated with the add function
var courses = [];
document.getElementById("thecourses").innerHTML = courses;
var grades = [];
document.getElementById("thegrades").innerHTML = grades;
var creditUnit = []; // creditUnit Global Variable to house the credit units
document.getElementById("theunit").innerHTML = creditUnit; // A Global Variable though

// The Add Function starts here
function add() {
  try {
    var show1 = document.getElementById("tab1");
    show1.style.display="flex";
    var course = document.getElementById("course").value;
    courses.push(course);
    document.getElementById("thecourses").innerHTML = courses;
    // Courses Ends Here
  
    // Grades Begins here
    var show2 = document.getElementById("tab2");
    show2.style.display="flex";
    var grade = document.getElementById("grade").value;
    grades.push(grade);
    document.getElementById("thegrades").innerHTML = grades;
  
    // Credit Unit Begins Here
    var show3 = document.getElementById("tab3");
    show3.style.display="flex"
    var unit=document.getElementById("unit").value;
    var numberisconverted = Number(unit);
    creditUnit.push(numberisconverted);
    document.getElementById("theunit").innerHTML = creditUnit;
    sum = creditUnit.reduce(function(a, b) {
      return a + b;
    }, 0);

  }
  catch(err) {
    alert("Reload the Browser");
  }
 
  



  
 

}


function resetbtn() {
  window.location = window.location.href+'?eraseCache=true';
}
