const performance = (subject,startTime,endTime)=>{
    console.log(`${subject} taken ${endTime - startTime} ms`)
}
module.exports={
    performance
}




// // defauklt export
// module.exports = function anExportedFunc() {
//     return "this is exported function";
// };

// // // name export
// const anNamedExportedFunc = () => { return "anNamedExportedFunc"};
// const anExportedString = "this is named exported";

// exports.nameExportAnotherWay="Named export another way";

// module.exports={
//     anNamedExportedFunc,
//     anExportedString

// }

