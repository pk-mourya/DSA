let a = [1, 2, 3, 4, 5, 6];
let b = [7, 8, 9, 10, 11, 12];
let c = [];
for (let i = 0; i < a.length; i++) {
    c[i] = a[i];
}
for (let i = 0; i < b.length; i++) {
    c[a.length + i] = b[i];
}
console.log(c);

/// Reversec karney key liye

c.reverse();
console.log(c);
