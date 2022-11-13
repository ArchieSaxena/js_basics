// let arr=[1,2,3,4,5,6,7,8];
// const num=new Array(1,2,3,4,5,6);
// console.log(num[2]);
// console.log(arr[2]);

//PUSH
// num.push(10);
// console.log(num.push(10));

//UNSHIFT
// arr.unshift(0);

//POP(REMOVE ELEMENTS FROM LAST)
// console.log(arr.pop())

//SHIFT
// arr.shift();

//indexof
// const names=["archie","drishti","riya","ram"];
// console.log(names.indexOf("riya"));
// console.log(names.length);

// function processrecords(records)
// {
//     if(records.length==0)
//     {
//         console.log("no records length is 0");
//         return;
//     }
//     // records.forEach(record => {
//     //     console.log(`The record is: ${record}`);
        
//     // });
//     processrecords(['hi','hello','ny']);
//     processrecords([]);
// }

function processRecords (records) {
    if (records.length === 0) {
        console.log(`No records to process`);
        return;
    }
  
    records.forEach(record => {
      console.log(`The record is: ${record}`);
    });
}

processRecords(['foo', 'bar', 'baz']);

// The record is: foo
// The record is: bar
// The record is: baz

processRecords([]);
// No records to process