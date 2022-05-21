//  break  sindiradi
// for (let i=1;i<10;i++){
//     if (i==5) break;
//     console.log(i);
// }


// // continue usha qadamni tashlab ketadi
// for (let i=1;i<10;i++){
//     if (i==5) continue;
//     console.log(i);
// }

// // massiv 1
// let n=3;
// let toq =[];
// for (let i=0; i<n;i++){
// toq [i]= 2*i+1;
// }
// console.log(toq);



// // massiv 2
// let n=3;
// let d =[1];
// for (let i=1; i<n;i++){
// d [i]=2**d[i-1];
// }
// console.log(d);


// // array 3
// let a=3;
// let d=4;
// let n=3;
// let progressiya =[a];
// let s=0;
// for (let i=1;i<n; i++){
//     progressiya[i]= progressiya[i-1]+d;
//     s+=progressiya[i];
// }
// console.log(progressiya,s);


// // array 4
// let a=3,d=4,n=5;
// let progressiya =[a];
// for (let i=1;i<n; i++){
//     progressiya[i]= progressiya[i-1]*d;
// }
// console.log(progressiya);



// //// array 5
// let n=8;
// let f=[n];
// f[0]=1;f[1]=1;
// console.log(f[0])
// console.log(f[1])
// for (let i=2;i<n; i++){
//     f[i]=f[i-1]+f [i-2];

// console.log(f[i]);
// }

// // Array 6
//  let a = 3, b = 4;
// let n = 5;
// let yigindi = [a,b,a+b];
// for ( let i=3;i<n;i++){
//     yigindi[i]=2*yigindi[i-1];
// }
// console.log(yigindi);



// // array 7
// let n = 4;
// let teskari = [2,3,4,5];
// let mas=[];
// let j=0;
// for ( let i = n-1; i >=0; i--) {
//    mas [j]= teskari[i];
//    j++;
// }
// console.log(mas);


// // // array 8
// let n=5;
// let massiv=[2,3,4,5,6];
// let k=0;
// for (let i=n-1;i>=0;i--){

//     if(massiv[i]%2==0){
//         console.log(massiv[i]);
//         k++;
//     }
// }
// console.log(k);



// // array 9
// let n=6;
// let massiv=[4,5,6,7,8,9];
// let k=0;
// for (let i=0;i<n; i++){
//     if (massiv[i]%2==0){
//         console.log(massiv[i]);
//         k++;
//     }
// }
// console.log(k);


// // array 10
// let n=6;
// let massiv=[4,5,6,7,8,9];
// let k=0;
// for (let i=n-1;i>=0; i--){
//     if (massiv[i]%2==0){
//         console.log(massiv[i]);
//     }

// }
// for (let i=0;i<n-1;i++){
//     if (massiv[i]%2==1){
//         console.log(massiv[i]);
//     }
// }



// // array 11
// let n = 6, k = 2;
// let m = [1,2,3,4,5,6];
// let j=k;
// while (j<n){
//     console.log(m[j]);
//     j+=k;
// }


// // array 12
// let n = 6, k = 2;
// let m = [1,2,3,4,5,6];
// let j=0;
// while (j<n){
//     console.log(m[j]);
//     j+=2;
// }

// // array 13
// let n=7;
// let m=[1,2,3,4,5,6,7];
// for (let i=0;i<=n-1; i+=2){
//     console.log(m[i]);
// }

// // array 14
// let n = 7;
// let m = [1,2,3,4,5,6];
// for (let i=0;i<=n-1;i+=2){
//     console.log(m[i]);
// }
// for (let i=1;i<=n-1;i+=2){
//     console.log(m[i]);
// }


// // array 15
// let n=8;
// let m=[1,2,3,4,5,6,7,8];
// for (let i=1;i<=n-1;i+=2){
//     console.log(m[i]);

// }
// for (let j=n-2;j>=0;j-=2){
//     console.log(m[j]);
// }


// // array 16
// let n=6;
// let m=[1,2,3,4,5,6];
// for (let i=0;i<n/2; i++){
//     console.log(m[i],m[n-i-1]);
// }



// //// array 17
// let n=7;
// let m=[1,2,3,4,5,6,7];
// for (let i=0;i<=n-1;i++){
//     console.log(m[i],m[i+1],m[n-1-i],m[n-2-i]);
// }



// // array 18
// let n=5;
// let m=[1,2,3,4,5];
// let k=0;
// for (let i=0;i<=n-1;i++){
//     if (m[i]<m[n-1]){
//         k=m[i];
//         break;
//     }

// }
// console.log(k);


// // array 19
// let n = 5;
// let m = [ 13, 2, 3, 4, 5];
// let k = 0;
// for (let i = 0; i<=n-1; i++){
//     if (m[0]<m[i] && m[i]<m[n-1]){
//         k=m[i];
//         break;
//     }

// }
// console.log(k);


// // array 20
// let n = 7;
// let m = [1, 2, 3, 4, 5, 6, 7];
// let k = 3, l = 6;
// let s = 0;
// for (i = k; i <= l; i++) {
//     s += m[i];
// } console.log(s);




// // array 21
// let n = 7;
// let m = [1, 2, 3, 4, 5, 6, 7];
// let k = 3, l = 6;
// let s = 0;
// let arif = 0;

// for (i = k; i <= l; i++) {
//     s += m[i];
// }
// for (i = 0; i < k; i++) {
//     arif++;
// }
// console.log(s / arif);



// array 22
// let n = 7;
// let m = [1, 2, 3, 4, 5, 6, 7];
// let k = 3, l = 6;
// let s = 0;
// let um = 0;

// for (i = 0; i <= n - 1; i++) {
//     um += m[i];

// }
// for (i = k; i <= l; i++) {
//     s += m[i];

// }

// console.log(um - s);




// // array 23
// let m = [1, 2, 3, 4, 5, 6, 7,8,9];
// let n=m.length
// let k = 3, l = 6;
// let s = 0,v=0,d=0;
// let um = 0;
// for (i = 0; i <k; i++) {
//     um += m[i];
//     s++;
// }
// for (i = l; i <= n-1; i++) {
//     v += m[i];
//     d++;
// }
// console.log((um+v)/(s+d));



// array 24
// let m=[1,3,5,7];
// let n=m.length;
// let t=m[1]-m[0];
// n--;
// for (let i=0;i<=n-1;i++){
//     if ((m[i+1]-m[i])!=t){
//         t=0;
//         break;
//     }
// }
// console.log(t);



// // array 25
// let m=[2,6,18,54];
// let n=m.length;
// let t=m[1]/m[0];
// n--;
// for (let i=0;i<=n-1;i++){
//     if ((m[i+1]/m[i])!=t){
//         t=0;
//         break;
//     }
// }
// console.log(t);



// // // array 26
// let m = [12, 3, 4, 5, 6, 7, 8, 9];
// let n = m.length;
// let t = 0;
// for (let i = 1; i < n; i++) {
//     if (m[i] % 2 == 0) {
//         if (m[i - 1] % 2 == 0) {
//             t = i; break;
//         }
//     } else {
//         if (m[i - 1] % 2 === 1) {
//             t = i;
//             break;
//         }
//     }
// }
// console.log(t);


// array 27
// let m = [12, -3, 4, -5, 6, -7, 8, -9];
// let n = m.length;
// let t = 0;
// for (let i = 1; i < n; i++) {
//     if (m[i] > 0) {
//         if (m[i - 1] > 0) {
//             t = i; break;
//         }
//     } else {
//         if (m[i - 1] < 0) {
//             t = i;
//             break;
//         }
//     }
// }
// console.log(t);



// // // array 28
// let m = [10, 4, 3, 6, 15, 8, 9, 22];
// let n = m.length;
// let max = m[0];
// for (let i = 0; i < n; i += 2) {
//     if (max < m[i]) {

//         max = m[i];

//     }
// }
// let min = max;
// for (let i = 0; i < n; i += 2) {
//     if (m[i] < min) {
//         min = m[i];
//     }

// }
// console.log(min);





// array 29
// let m = [10, 4, 3, 6, 15, 8, 9, 22];
// let n = m.length;
// let min = m[0];
// for (let i = 1; i < n; i += 2) {
//     if (min < m[i]) {

//         min = m[i];

//     }
// }
// let max = min;
// for (let i = 1; i < n; i += 2) {
//     if (m[i] < max) {
//         max = m[i];
//     }

// }
// console.log(max);



// // array 30
// let m=[12,3,4,5,6,8,9,15,68,99];
// let n=m.length;
// let s=0;
// for (i=0;i<=n-2;i++){
//  let x=m[i];
// if (m[i+1]>x){
//     console.log(m[i]);
//     s++;
// }

// }
// console.log();