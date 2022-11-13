//logging something in the console
// console.log('HELO WORLD'); 
// var x,y,z;
// x=5;
// y=6;
// z=x+y;
// var bool=true;
// var num=23849033;
// console.log(typeof num);
// // let ,const,var  
// // let myname;
// // console.log(myname);
// let firstname="archie";
// let secondname="saxena";

// let interestrate=0.3;
// interestrate=1;
// console.log(interestrate);
 
// let name="archie";
// age=18;
// let isapproved=false;

// let a=null; 
// let person={
//     name:'archie',
//     age:18
// };
// person.name="pish";
// console.log(person.name);

// let b=['red','yellow'];
// b[2]=1;
// console.log(b[2 ]);


// function greet(name,lastname)//parameter
// {
//     console.log('hello'+name+lastname);
// }
// greet('archie','saxena');//argument


// function square(number)
// {
//     return number*number;
// }
// console.log(square(2));

// var x=5;
// x+=10;
// console.log(x);


// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//     return this.firstName + " " + this.lastName;
//     }
// };

let c=0;
for(let i=1;i<=10;i++)
{
    c+=i;
}
console.log(c);

// let a;
// let b;

// function max(a,b)
// {
//     if(a>b)
//     {
//         return a;
//     }
//     else
//     {
//         return b;
//     }
// }
// console.log(max(3,4));

// function translate(s)
// {
//     let m=" ";
//     let n=s.length;
//     for(let i=0;i<n;i++)
//     {
//         if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' ||s[i]=='u')
//         {
//             m+=s[i];
//         }
//         else if(s[i]!=' ')
//         {
           
//             m+=s[i]+'o'+s[i];
//         }
//         else
//         {
//             m+=s[i];
//         }
//     }
//     console.log(m);
// }
// translate("this is fun");



// function translate(a) {
//     var i;
//     let str = '';
//     for(i=0; i<a.length; i++)
//     {
//         if(a.charAt(i)=='a'||a.charAt(i)=='e'||a.charAt(i)=='i'||a.charAt(i)=='o'||a.charAt(i)=='u'||a.charAt(i)=='A'||a.charAt(i)=='E'||a.charAt(i)=='I'||a.charAt(i)=='O'||a.charAt(i)=='U')
//         {
//             str = str + a.charAt(i);
//         }
//         else if(a.charAt(i)!=' ')
//         {
//             str = str + a.charAt(i);
//             str = str + 'o';
//             str = str + a.charAt(i);
//         } 
//         else 
//         {
//             str = str + a.charAt(i);
//         }
//     }
//     return str;
// }
// console.log(translate("this is fun"));

// function translate(s)
// {
//     let m="";
//     let n=s.length;
//     for(let i=0;i<n;i++)
//     {
//         if(s[i]!='a' || s[i]!='e' || s[i]!='i' || s[i]!='o' ||s[i]!='u' || s[i]!='')
//         {
//             m+=s[i];
//             m+='o';
//             m+=s[i];
//         }
//         else{
//             m+=s[i];
//         }
//     }
//     console.log(m);
// }
// translate("this is fun");