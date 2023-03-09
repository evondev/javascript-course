{
  // // Temporal Dead Zone: TDZ
  const teacher = "evondev";

  const teacherLearning = function () {
    console.log(teacher);
    const teacher = "evondev";
  };
  // teacherLearning();
  /**Process code
   * const teacher
   * const teacherLearning
   * teacher = "evondev"
   * teacherLearning = f
   * invoke function teacherLearning
   * const teacher: TDZ
   * console.log(teacher) uncaught reference error
   * teacher = "evondev"
   */

  // TDZ is existed here
  // TDZ is existed here
  // TDZ is existed here
  // console.log(library);
  // TDZ is existed here
  // TDZ is existed here
  const library = "react"; // TDZ end here
  // TDZ is not existed here
  console.log(library);
  // declaration priority

  // TDZ start and end here
  console.log(hobbies); // TDZ is not existed here
  // TDZ is not existed here
  var hobbies = "Badminton";
  /**
   * var hobbies; // undefined
   * console.log(hobbies);
   * hobbies = "Badminton";
   */
}
