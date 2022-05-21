// massivlarni saralash
// burbble sort
let a=[1,2,3,343,254,25];
let n=a.length;
for (i=0;i<n;i++){
    for (j=0;j<n-i-1;j++){
        if(a[j]>a[j+1]){
            let t=a[j+1];
            a[j]=a[j+1];
            a[j]=t;
        }
    }
}
console.log(a);