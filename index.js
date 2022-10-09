// Task 1 :
// ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

// გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
// განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
// 'ანა ლევანზე 7 წლით უფროსია'
// სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
// დალოგეთ ზემოაღნიშნული ცვლადი .
let anaAge = 29;
let levaniAge = 21;
let ageDifference = `ანა ლევანზე ${anaAge-levaniAge} წლით უფროსია`;
console.log(ageDifference);

/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/
//2. როცა სიგრძე ლუწია შუა ინდექსის მნიშვნელობის გამოტანა შეუძლებელია.
let studentsArr = ['John','Sam','Ann','Will','giorgi','giorgi','Andrew','Joseph','Lorelai','Amelie','Den']
let middle=(studentsArr[Math.floor(studentsArr.length/2)]);
console.log(middle);
/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან

    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        

*/
let student={
    firstName: "givi",
    lastName: "givia",
    age: 18,
    subject: ['math', 'biology','sport','music'],
    roommate:{
        firstName: 'gio',
        lastName: 'dvali',
    }
}

for(let i = 0; i < student.subject.length; i++){
    console.log(student.subject[i]);
}

let fullName = student.firstName +" "+student.lastName;

student.fullName=student.firstName +" "+student.lastName;
console.log(student);
let roommateFullName = student.roommate.firstName+' '+student.roommate.lastName;
console.log(roommateFullName);

let result = `${student.fullName} is ${student.age} age and his rommmate is ${roommateFullName}`

console.log(result);

/*
    Task 4 : 
        გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
        გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
        დალოგეთ ეს ელემენტი.

*/
let fruitArr = ["Banana", "Orange", "Apple", "Mango",2,12];
let i = 0;
while(typeof fruitArr[i] === 'string'){
    console.log(fruitArr[i]);
    i++
}
/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/

let numbers = [12,23,43,11,9,2,121,90];

for(i = 0; i<numbers.length;i++){
    if(numbers[i] % 2 === 0 & numbers[i] > 31){
        console.log('Element is greater than provided value and is EVEN');
    }
    if(numbers[i] % 2 !== 0 & numbers[i] < 31){
        console.log('Element is less than provided value and is ODD');
    }else console.log('This number is greater then provided and is OOD or less than provided and EVEN');
      
}

//part2

//Task 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

*/
let sampleObject = {
    isItarable : true,
    sampleArray : [12,63,21,34,98,57]
}

const justFunction = function(x){
    if(x.isItarable){
        for(let el of x.sampleArray){
            console.log(el);
        }
        
    }else console.log("provided array isn't itarable");
}
justFunction(sampleObject);

//Task 2
/*
    შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
    ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
    აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
    თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
    წინააღმდეგ შემთხვევაში false
    
*/

const checkPythagoras = function( a , b , c){
    if(a*a+b*b===c*c){
        return true;
    }else return false;
}

//Task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/

/*
let list = [2,14,25,75,11,6];

function minMax(x) {
    return `Min value is ${Math.min(...x)} and Max value is ${Math.max(...x)}`;
}
console.log(minMax(list)); */

const minMax = function(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= max){
            max = arr[i];
        }
        if(arr[i] <= min){
            min = arr[i];
        }
    }
    return `MIn value is ${min} and Max value is ${max}.`;
}
let list = [2,14,25,75,11,6];
console.log(minMax(list));



// Task 4
/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/

function checkDeg (deg) {
    if(deg > 0 & deg < 90){
        let answer = 'Acute angle'
        return answer;
    }
    if(deg === 90){
        return 'Right angle'
    }
    if(deg > 90 & deg < 180){
        return 'Obtuse angle'
    }
    if(deg === 180){
        return 'Right angle'
    }

}

//Task 5
/*
    დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .

    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A

    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/

const checkStudentGrade = function(y){
    let shefaseba = '';
    for(let i = 0; i < y.length; i++){
        if(y[i].grade <= 50){
            shefaseba = 'F';
            y[i].finalResult = shefaseba;
        }
        if(y[i].grade >= 51 & y[i].grade <= 60){
            shefaseba = 'E';
            y[i].finalResult = shefaseba;
        }
        if(y[i].grade >= 61 & y[i].grade <= 70){
            shefaseba = 'D';
            y[i].finalResult = shefaseba;
        }
        if(y[i].grade >= 71 & y[i].grade <= 80){
            shefaseba = 'C';
            y[i].finalResult = shefaseba;
        }
        if(y[i].grade >= 81 & y[i].grade <= 100){
            shefaseba = 'A';
            y[i].finalResult = shefaseba;
        }
        
    }
    
}

let students = [{name: 'student1', grade : 91}, {name: 'student2', grade : 71}, {name: 'student3', grade : 45} ]
checkStudentGrade(students);
console.log(students);




















