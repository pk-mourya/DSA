/// Easy method to insert an element at a given position in an array

let a = [1, 2, 3, 4, 5, 6, 7];
let newEle = 12;
let position = 3;
a.splice(3, 0, 12);
console.log(a);

//different method to insert an element at a given position in an array

let b = [12, 13, 14, 15, 16, 17];
let newEle2 = 20;
let position2 = 2;
for (let i = b.length - 1; i >= 0; i--) {
    // console.log(b[i]);
    if (i >= position2) {
        b[i + 1] = b[i];
        if (i == position2) {
            b[i] = newEle2;
        }

    }

}
console.log(b);

let c = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = 12;
let y = 2;
for (let i = c.length - 1; i >= 0; i--) {
    if (i >= y) {
        c[i + 1] = c[i];
        if (i == y) {
            c[i] = x;
        }
    }
}
console.log(c);






