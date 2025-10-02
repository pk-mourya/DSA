let a = [1, 2, 3, 4, 5, 6, 7];
let position = 3;
for (let i = position; i < a.length - 1; i++) {
    a[i] = a[i + 1];
}
a.length = a.length - 1;
console.log(a);


let b = [1, 2, 3, 4, 5];
let position2 = 2;
for (let i = position2; i < b.length - 1; i++) {
    b[i] = b[i + 1];

}
b.length = b.length - 1;
console.log(b);

