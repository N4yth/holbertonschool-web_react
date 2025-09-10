interface DirectorInterface {
  workFromHome(): string;
  workDirectorTasks(): string;
  getCoffeeBreak(): string;
} 

interface TeacherInterface {
  workFromHome(): string;
  workTeacherTasks(): string;
  getCoffeeBreak(): string;
} 

class Director implements DirectorInterface {
  workFromHome(): string { return 'Working from home' }
  workDirectorTasks(): string { return 'Getting to director tasks' }
  getCoffeeBreak(): string { return 'Getting a coffee break' }
}

class Teacher implements TeacherInterface {
  workFromHome(): string { return 'Cannot work from home' }
  workTeacherTasks(): string { return 'Getting to work' }
  getCoffeeBreak(): string { return 'Cannot have a break' }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number') {
    if (salary < 500) {
      return new Teacher();
    } 
  }  
  return new Director();
}

function isDirector(employee: any) {
  return employee.workDirectorTasks !== undefined;
}

function executeWork(employee: any) {
  if(isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
  if (todayClass === 'History'){
    console.log('Teaching History')
    return 'Teaching History';
  }
  console.log('Teaching Math')
  return 'Teaching Math';
}
