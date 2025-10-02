// let a = [3, 4, 6, 8, 9, 10];
// let b = [2, 5, 7, 11];
// let c = [];
// let d1 = 0;
// let d2 = 0;
// let d3 = 0;
// while (d1 < a.length && d2 < b.length) {
//     if (a[d1] < b[d2]) {
//         c[d3] = a[d1];
//         d1++;
//         d3++;
//     }
//     else {
//         c[d3] = b[d2];
//         d2++;
//         d3++;
//     }
// }

// while (d1 < a.length) {
//     c[d3] = a[d1];
//     d1++;
//     d3++;
// }
// while (d2 < b.length) {
//     c[d3] = b[d2];
//     d2++;
//     d3++;
// }

// console.log(c)



let x = [12, 13, 14, 15, 16];
let y = [11, 18, 19, 20];
let z = [];
let p1 = 0;
let p2 = 0;
let p3 = 0;
while (p1 < x.length && p2 < y.length) {
    if (x[p1] < y[p2]) {
        z[p3] = x[p1];
        p1++;

    }
    else {
        z[p3] = y[p2];
        p2++;

    }

    p3++;


}
while (p1 < x.length) {
    z[p3] = x[p1];
    p1++;
    p3++;

}
while (p2 < y.length) {
    z[p3] = y[p2];
    p2++;
    p3++;
}
console.log(z);
