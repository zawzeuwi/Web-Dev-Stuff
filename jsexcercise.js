const StudentId = [
    {
        Name: "diego", 
        IDnum: 101010,
        Year: 2020,
        Grade: 90
},
    {
        Name: "dora",
        IDnum: 101011,
        Year: 2020,
        Grade: 80
},
    {
        Name: "matilda",
        IDnum: 101012,
        Year: 2020,
        Grade: 70
},
    {
        Name: "borger",
        IDnum: 101013,
        Year: 2020,
        Grade: 60
},
    {
        Name: "frich",
        IDnum: 101014,
        Year: 2020,
        Grade: 50
},
    {
        Name: "frays",
        IDnum: 101015,
        Year: 2020,
        Grade: 40
},
    {
        Name: "stake",
        IDnum: 101016,
        Year: 2020,
        Grade: 30
},
    {
        Name: "chiken",
        IDnum: 101017,
        Year: 2020,
        Grade: 20
},
    {
        Name: "joy",
        IDnum: 101018,
        Year: 2020,
        Grade: 10
},
    {
        Name: "jolly",
        IDnum: 101019,
        Year: 2020,
        Grade: 1
    }
];

let hGrade = StudentId[0].Grade;
let lGrade = StudentId[0].Grade;
let hGradeS = StudentId[0].Name;
let lGradeS = StudentId[0].Name;
let hGradeID = StudentId[0].IDnum;
let lGradeID = StudentId[0].IDnum;
let hGradeYear = StudentId[0].Year;
let lGradeYear = StudentId[0].Year;

function findingNemo(){

for (let i = 1; i < StudentId.length; i++) {
    if (StudentId[i].Grade > hGrade) {
        hGrade = StudentId[i].Grade;
        hGradeS = StudentId[i].Name;
        hGradeID = StudentId[i].IDnum;
        hGradeYear = StudentId[i].Year;
    }

    if (StudentId[i].Grade < lGrade) {
        lGrade = StudentId[i].Grade;
        lGradeS = StudentId[i].Name;
        lGradeID = StudentId[i].IDnum;
        lGradeYear = StudentId[i].Year;
    }
}

console.log("Highest Grade Student:");
console.log("Grade: " + hGrade + "\nName: " + hGradeS + "\nYear: " + hGradeYear + "\nID: " + hGradeID);
console.log("\nLowest Grade Student:");
console.log("Grade: " + lGrade + "\nName: " + lGradeS + "\nYear: " + lGradeYear + "\nID: " + lGradeID);
}

findingNemo();