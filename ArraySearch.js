let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let item = 8;
for (i = 0; i < a.length; i++) {
    if (a[i] == item) {
        index = i;
        break;
    }
}
console.log(index);
console.log(a.indexOf(item));
a.splice(2, 1);
console.log(a);


// Output: 7        