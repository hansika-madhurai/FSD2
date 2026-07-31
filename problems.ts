// Check Prime Number
let num1:number=17;
let prime=true;
if(num1<=1) prime=false;
else{
 for(let i=2;i<num1;i++){ if(num1%i==0){prime=false;break;}}
}
console.log(prime?"Prime":"Not Prime");

// Generate Prime Numbers in a Range
let start=10,end=30;
for(let n1=start;n1<=end;n1++){
 let p=n1>1;
 for(let j=2;j<n1&&p;j++) if(n1%j==0) p=false;
 if(p) console.log(n1);
}

// Find GCD and LCM of Two Numbers
let a=24,b=36,x=a,y=b;
while(y!=0){let t=y;y=x%y;x=t;}
console.log("GCD",x);
console.log("LCM",(a*b)/x);

// Check Armstrong Number
let arm=153,t1=arm,s1=0;
while(t1>0){let d=t1%10;s1+=d*d*d;t1=Math.floor(t1/10);}
console.log(s1==arm?"Armstrong":"Not Armstrong");

// Check Perfect Number
let per=28,s2=0;
for(let i=1;i<per;i++) if(per%i==0) s2+=i;
console.log(s2==per?"Perfect":"Not Perfect");

// Check Strong Number
let st=145,t2=st,s3=0;
while(t2>0){
 let d=t2%10,f=1;
 for(let i=1;i<=d;i++) f*=i;
 s3+=f;
 t2=Math.floor(t2/10);
}
console.log(s3==st?"Strong":"Not Strong");

// Find the Sum of Digits of a Number
let n2=4567,sum=0;
while(n2>0){sum+=n2%10;n2=Math.floor(n2/10);}
console.log(sum);

// Convert Decimal to Binary
let dec=13;
console.log(dec.toString(2));

// Convert Binary to Decimal
let bin="1101";
console.log(parseInt(bin,2));

// Count the Frequency of Characters in a String
let str1="typescript";
let freq:any={};
for(let c of str1) freq[c]=(freq[c]||0)+1;
console.log(freq);

// Remove Duplicate Characters from a String
let str2="programming",res="";
for(let c of str2) if(!res.includes(c)) res+=c;
console.log(res);

// Find the Second Largest Number in an Array
let arrA=[15,45,20,90,70];
arrA.sort((a,b)=>b-a);
console.log(arrA[1]);

// Merge Two Arrays Using the Spread Operator
let ar1=[1,2,3],ar2=[4,5,6];
console.log([...ar1,...ar2]);

// Find the Missing Number in an Array
let arrB=[1,2,3,5],size=5;
let total=size*(size+1)/2;
let arrSum=arrB.reduce((p,c)=>p+c,0);
console.log(total-arrSum);

// Rotate an Array by N Positions
let arrC=[1,2,3,4,5],rot=2;
console.log(arrC.slice(rot).concat(arrC.slice(0,rot)));

// Count the Occurrences of Each Element in an Array
let arrD=[1,2,2,3,1,4,2],cnt:any={};
for(let v of arrD) cnt[v]=(cnt[v]||0)+1;
console.log(cnt);

// Find Duplicate Elements in an Array
let arrE=[1,2,3,2,4,5,1],dup:number[]=[];
for(let v of arrE) if(arrE.indexOf(v)!=arrE.lastIndexOf(v)&&!dup.includes(v)) dup.push(v);
console.log(dup);

// Create a Student Class with a Constructor and Display Student Details
class Student{
 constructor(public name:string,public roll:number){}
 display()
 {
    console.log(this.name,this.roll);
}
}
new Student("shafana",56).display();

// Create a BankAccount Class with deposit(), withdraw(), and displayBalance() Methods
class BankAccount{
 constructor(public balance:number){}
 deposit(a:number){this.balance+=a;}
 withdraw(a:number){this.balance-=a;}
 displayBalance(){console.log(this.balance);}
}
let acc=new BankAccount(5000);
acc.deposit(1000);acc.withdraw(700);
acc.displayBalance();

// Demonstrate public, private, and protected Access Modifiers Using an Employee Class
class Employee{
 constructor(public name:string,private salary:number,protected dept:string){}
}
class Manager extends Employee{
 show(){console.log(this.name,this.dept);}
}
new Manager("ramm",45000,"senior associate").show();

// Create a Student Class with a readonly Student ID
class StudentInfo{
 constructor(readonly id:number,public name:string){}
 display(){console.log(this.id,this.name);}
}
new StudentInfo(8,"Hansika").display();

// Create a Class with a static College Name and a static Method
class College{
 static collegeName="Shri Vishnu Engineering College";
 static show(){console.log(College.collegeName);}
}
College.show();

// Create a MathOperations Namespace with add(), subtract(), multiply(), and divide() Functions
namespace MathOperations{
 export function add(a:number,b:number){return a+b;}
 export function subtract(a:number,b:number){return a-b;}
 export function multiply(a:number,b:number){return a*b;}
 export function divide(a:number,b:number){return a/b;}
}
console.log(MathOperations.add(10,5));
console.log(MathOperations.subtract(10,5));
console.log(MathOperations.multiply(10,5));
console.log(MathOperations.divide(10,5));


// Create a Generic Box<T> Class to Store and Display Different Types of Data
class Box<T>{
 constructor(public value:T){}
 display(){console.log(this.value);}
}
new Box<number>(111).display();
new Box<string>("Hy").display();
new Box<boolean>(true).display();
