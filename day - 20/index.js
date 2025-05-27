let marks = [45, 68, 72, 95, 35, 78, 45];

let sum = 0;

let length = marks.length;

for (let index = 0; index < length; index++) {
    sum = sum + marks[index];
}

console.log(sum / length);
