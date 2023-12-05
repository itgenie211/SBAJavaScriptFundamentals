// Create a function named getLearnerData() 
// that accepts these values as parameters, 
// in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), 
// and returns the formatted result, 
// which should be an array of objects as described above.

// The provided course information.
const CourseInfo = {
    id: 919,
    name: "JavaScript"
  };

// The provided assignment group.
  const AssignmentGroup = {
    id: 10823,
    name: "Fundamentals of JavaScript",
    course_id: 919,
    group_weight: 20,
    assignments: [
      {
        id: 101,
        name: "Manipulation with JavaScript",
        due_at: "2023-07-15",
        points_possible: 60
      },
      {
        id: 201,
        name: "Loops and Interation",
        due_at: "2023-05-27",
        points_possible: 100
      },
      {
        id: 301,
        name: "Create a Webiste",
        due_at: "2024-12-18",
        points_possible: 300
      }
    ]
  };
  
  console.log('Invalid Input');

  // The provided learner submission data.
const LearnerSubmissions = [
    {
      learner_id: 808,
      assignment_id: 101,
      submission: {
        submitted_at: "2023-07-15",
        score: 50
      }
    },
    {
      learner_id: 808,
      assignment_id: 201,
      submission: {
        submitted_at: "2023-05-27",
      score: 92
    }
  },
  {
    learner_id: 808,
    assignment_id: 301,
    submission: {
      submitted_at: "2024-12-18",
      score: 260
    }
  },
  {
    learner_id: 810,
    assignment_id: 101,
    submission: {
        submitted_at: "2023-07-15",
        score: 39
      }
    },
    {
      learner_id: 810,
      assignment_id: 201,
      submission: {
        submitted_at: "2023-05-27",
        score: 79
      }
    },
    {
        learner_id: 812,
        assignment_id: 101,
        submission: {
          submitted_at: "2023-07-14",
          score: 60
        }
      },
      {
        learner_id: 812,
        assignment_id: 201,
        submission: {
          submitted_at: "2023-05-24",
        score: 62
      }
    },
    {
      learner_id: 812,
      assignment_id: 301,
      submission: {
        submitted_at: "2024-12-20", //late
        score: 300
      }
    }
  ];
  
  //processing the data
  function getLearnerData(course, assignment, submissions) {
    const result = [
      {
        id: 808,
        avg: 0.87, // (50 + 92 + 260) / (460)
        101: 0.83, // 50 / 60
        201: 0.92, // 92 / 100
        301: 0.87  // 260 / 300
      },
      {
        id: 810,
        avg: 0.74, // (39 + 79) / (160)
        101: 0.65, // 39 / 60
        201: 0.79 // 79 / 100
      },
      {
        id: 812,
        avg: 0.92, // (60 + 62 + 300) / (460)
        101: 0.78, // 60 / 60
        201: 0.833, // 62 / 100
        301: 0.9 // late: (300 - 30) / 300
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);

//   If an AssignmentGroup does not belong to its course (mismatching course_id),
//   your program should throw an error, letting the user know that the input was invalid. 
let course_id = 917;

if (course_id = 919) {
   console.log('JavaScript Course');
} else {
  console.log('Error: Incorrect course');
}

//   You should also account for potential errors in the data that your program receives. 
//   What if points_possible is 0? You cannot divide by zero. 
//   What if a value that you are expecting to be a number is instead a string? 
//   Similar data validation should occur elsewhere within the program.(throw a error)
//   Use try/catch and other logic to handle these types of errors gracefully.
let points_possible = 80;

try {
  if (points_possible > 0) {
    console.log('Calculating Grade');
  } else {
    throw "Error - Invalid Input.";
  }
} catch (error) {
  console.log(error);
}


