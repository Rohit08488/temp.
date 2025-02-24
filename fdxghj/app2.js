// const express=require('express');
// const database=require('./database/db')
// const st=require('./student');
// const app=express();
// app.use(express.json())

// app.get('/getdata',async(req,res)=>{
//     const db=database.main();
//     const collection= (await db).collection('studentlist');
//     const findResult = await collection.find({}).toArray();
//    try{ res.send({
//         status: 200,
//         message: findResult
//     });
//     }
//     catch(arr){
//         res.send({
//             message:"something went worng"+arr,
//             status:500
//         });
//     }
// });

// app.post('/insertdata',async(req,res)=>{
    
//         try{
//             const db=database.main();
//             const collection= (await db).collection('studentlist');
//             let result = await collection.insertOne(req.body);
//             console.log(result)
//             res.send({
//                 status:200,
//                 message:"data inserted  successfully",
//                 data:result
                
//             })
//         }
//         catch(arr){
//             res.send({
//                 message:"something went worng "+arr,
//                 status:500
//             })
//         }
    
// });
// app.delete('/deletedata',async(req,res)=>{
    
//     try{
//         const db=database.main();
//         const collection= (await db).collection('studentlist');
//         let result = await collection.deleteOne({name:req.query.name});
//         console.log(result)
//         if(result.deletedCount>0){
//         res.send({
//             status:200,
//             message:"data deleted  successfully",
//             data:result
            
//         })
//     }
//     else {
//         res.send({
//             message:"please enter the coorect name"
//         })
//     }
//     }
//     catch(arr){
//         res.send({
//             message:"something went worng "+arr,
//             status:500
//         })
//     }

// });

// app.put('/updatedata',async(req,res)=>{
    
//     try{
//         const db=database.main();
//         const collection= (await db).collection('studentlist');
//         var newvalues={$set:req.body};
//         let result = await collection.updateOne({name:req.query.name},newvalues);
//         console.log(result)
//         if(result.modifiedCount>0){
//         res.send({
//             status:200,
//             message:"data updated  successfully",
//             data:result
            
//         })
//     }
//     else{
//         res.send({
//             message:"please enter the coorect name"
//         })
//     }
//     }
//     catch(arr){
//         res.send({
//             message:"something went worng "+arr,
//             status:500
//         })
//     }

// });

// app.listen(3000,()=>{
//     console.log("server started")
// })