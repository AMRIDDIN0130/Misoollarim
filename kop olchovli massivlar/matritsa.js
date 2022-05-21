// let uy=[
//     [12,34,5456,67],
//     ["salom","kalom","alam"],
// ]
// console.log(uy[1][1]);



// matrix 1
// let m = 3, n = 2;
// let mat = [];
// for (let i = 0; i < m; i++) {
//     mat.push([]);
//     for (let j = 0; j < n; j++) {
//         mat[i][j] = 10 * i;
//     }
// }
// console.table(mat);



// matrix 2
// let m = 3, n = 4;
// let mat = [];
// for (let i = 0; i < m; i++) {
//     mat.push([]);
//     for (let j = 0; j < n; j++) {
//         mat[i][j] = 5* j;
//     }
// }
// console.table(mat);



// matrix 3
let m = 3, n = 2;
let mat = [];
let a=[1,2,3]
for (let i = 0; i < m; i++) {
    mat.push([]);
    for (let j = 0; j < n; j++) {
        mat[i][j] = a[i];
    }
}
console.table(mat);




// // matrix 4
// let m = 4, n = 3;
// let mat = [];
// let a=[1,2,3,4,5,6]
// for (let i = 0; i < n; i++) {
//     mat.push([]);
//     for (let j = 0; j < m; j++) {
//         mat[i][j] = a[i];
//     }
// }
// console.table(mat);


// // matrix 5
// let m = 4, n = 3, d = 2;
// let mat = [];
// a = [1, 5, 7, 8, 9];
// for (let i = 0; i < n; i++) {
//     mat.push([]);
//     for (let j = 0; j < m; j++) {
//         if (j == 0) {
//             mat[i][j] = a[i];

//         }
//         else if (j > 0) {
//             mat[i][j] = mat[i][j - 1] + d;
//         }
//     }
// }
// console.table(mat);



// // matrix 6
// let m = 4, n = 3, q = 4;
// let mat = [];
// a = [1, 5, 7, 8, 9];
// for (let i = 0; i < n; i++) {
//     mat.push([]);
//     for (let j = 0; j < m; j++) {
//         if (j == 0) {
//             mat[i][j] = a[i];

//         }
//         else if (j > 0) {
//             mat[i][j] = mat[i][j - 1] *q;
//         }
//     }
// }
// console.table(mat);





// //  matrix 7
// let m = 4, n = 3, k=2;
// let mat = [
// [3,4,5],
// [6,7,2],
// [12,1234,45],
// [132,543,5646]
// ];
// let k=1;
// for (let i=0;i<n ; i++){
//     console.log(mat[k][i]);
// }


// // matrix 8
// let m = 4, n = 3, k=2;
// let mat = [];
// let a=[1,2,3,4,5,6]
// for (let i = 0; i < n; i++) {
//     mat.push([]);
//     for (let j = 0; j < m; j++) {
//         if(j==k-1){
//         mat[i][j] = a[i];
//         console.log(mat[i][j]+" ");
//     }
// }
// }




// // //  matrix 9
// let m = 6, n = 5, k=2;
// let mat = [];
// let a=[1,2,3,4,5,6]
// for (let i = 0; i < n; i++) {
//     mat.push([]);
//     for (let j = 0; j < m; j++) {
//         mat[i][j] = a[i];
//     }
  

// }
// for (let index = 0; index <n; index+=2) {
//     for (let indexv = 0; indexv <m; indexv++) {
//      console.log(mat[index][indexv]+" ");
        
//     }
  
//   console.log(" ");
// }





//  matrix 10
// let m = 6, n = 5, k=2;
// let mat = [];
// let a=[1,2,3,4,5,6]
// for (let i = 0; i < n; i++) {
//     mat.push([]);
//     for (let j = 0; j < m; j++) {
//         mat[i][j] = a[i];
//     }
// }
// for (let index = 0; index <n; index+=2) {
//     for (let indexv = 0; indexv <m; indexv++) {
//      console.log(mat[index][indexv]+" ");  
//     }
//   console.log(" ");
// }




// // matrix 11
// let m = 3, n = 2;
// let mat = [];
// let a=[1,4,6,75,87]
// for (let i = 0; i < m; i++) {
//     mat.push([]);
//     for (let j = 0; j < n; j++) {
//         mat[i][j] = a[i];
//     }
// }
// console.table(mat);





// //   matrix 17
// let m = 4, n = 3, k=3;
// let mat = [];
// let a=[1,2,3,4,5,6]
// let s=0,kop=1;
// for (let i = 0; i < n; i++) {
//     mat.push([]);
//     for (let j = 0; j < m; j++) {
//         if(i==k-1){
//         mat[i][j] = a[i];
//         s+=k;
 //      kop*=k;
//     }
// }
// }console.log(s,kop);




// //   matrix 18
// let m = 4, n = 3, k=3;
// let mat = [];
// let a=[1,2,3,4,5,6]
// let s=0,kop=1;
// for (let i = 0; i < n; i++) {
//     mat.push([]);
//     for (let j = 0; j < m; j++) {
//         if(j==k-1){
//         mat[i][j] = a[i];
//         s+=k;
//        kop*=k;
//     }
// }
// }console.log(s,kop);



// // matrix 19
// let m = 4, n = 3, k=3;
// let mat = [];
// let a=[1,2,3,4,5,6]
// let s=0,kop=1;
// for (let i = 0; i < n; i++) {
//     mat.push([]);
//     for (let j = 0; j < m; j++) {  
//         mat[i][j] = a[i];
//         s+=i;
// }
// }console.log(s);