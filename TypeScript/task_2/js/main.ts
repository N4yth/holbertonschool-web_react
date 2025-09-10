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
  workFromHome(): string { return 'Currently working' }
  workDirectorTasks(): string { return 'Getting to director tasks' }
  getCoffeeBreak(): string { return 'Getting a coffee break' }
}

class Teacher implements TeacherInterface {
  workFromHome(): string { return 'Cannot work from home' }
  workTeacherTasks(): string { return 'Getting to director tasks' }
  getCoffeeBreak(): string { return 'Getting to work' }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number') {
    if (salary < 500) {
      return new Teacher()
    } 
  }  
  return new Director()
}
