// CODE here for your Lambda Classes

class Person {
    constructor(prop){
        this.name = prop.name,
        this.age = prop.age,
        this.location = prop.location
    }
    speak() {
        return `Hello my name is ${this.name}, and I am from ${this.location}`;
    }
}

// is an extension of Person
class Instructor extends Person {
    constructor(prop) {
        super(prop)
        this.specialty = prop.specialty
        this.favLanguage = prop.favLanguage
        this.catchPhrase = prop.catchPhrase
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(obj, subject) {
        return `${obj.name} receives a perfect score on ${subject}`;
    }

    grading (obj) {
        return`Your grade is ${obj.grade = Math.round(Math.random() * 100)}`; // second stretch goal///////////////////
    }
}    

// is also an  extension of person
class Student extends Person {
    constructor(prop) {
        super(prop)
        this.previousBackground = prop.previousBackground
        this.className = prop.className
        this.favSubjects = prop.favSubjects
        this.grade = prop.grade    // First stretch goal ///////////////////////
    }

    listsSubjects() {
        this.favSubjects.map(function(x) {
            console.log(x);
        });
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }  
};

// is an extension of instructor
class ProjectManager extends Instructor {
    constructor(prop){
        super(prop)
        this.gradClassName = prop.gradClassName
        this.favInstructor = prop.favInstructor
    }

    standUp(channel) {
        return `${this.name} announces to ${channel} @channel standy times!`;
    }

    debugsCode(obj, subject) {
        return `${this.name} debugs ${obj.name}'s code on ${subject}.` 
    }
}


//methods
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

const austin = new ProjectManager({
    name: 'Austin',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Josh knell',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:",
});

const marguel = new ProjectManager({
    name: 'Marguel',
    age: 'Maybe 26',
    gradClassName: 'WEBPT2',
    favInstructor: 'Me?',
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript, Python, Elm etc.',
    catchPhrase: "Practice Flex Zombies !!!",
});

const andrew = new Student ({
    name:'Andrew',
    age: 23,
    location: 'Arizona',
    previousBackground: 'Call center',
    className:'WEB 21',
    favSubjects:['CSS', 'Javascript', 'HTML'],
    grade: 80,
  });

const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 95,
});
 
  console.log(austin.debugsCode(isaiah, "Sprint challenge 1"));
  console.log(andrew.PRAssignment('Front end development'));
  console.log(fred.demo('Math'));
  console.log(andrew.listsSubjects());
  console.log(dan.speak());
  console.log(isaiah.grade);
  console.log(austin.grading(andrew))
  console.log(andrew.graduate());
