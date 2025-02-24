const database = require('../database/db')

const getStudentList= async(req,res)=>{
    const db=database.main();
        const collection= (await db).collection('Student');
        const findResult = await collection.find({}).toArray();
       try{ res.send({
            status: 200,
            message: findResult
        });
        }
        catch(arr){
            res.send({
                message:"something went worng"+arr,
                status:500
            });
        }
}

const insertStudentList=async(req,res)=>{
    
            try{
                const db=database.main();
                const collection= (await db).collection('Student');
                let result = await collection.insertOne(req.body);
                console.log(result)
                res.send({
                    status:200,
                    message:"data inserted  successfully",
                    data:result
                    
                })
            }
            catch(arr){
                res.send({
                    message:"something went worng "+arr,
                    status:500
                })
            }
}

const deleteStudentList=async(req,res)=>{
     
        try{
            const db=database.main();
            const collection= (await db).collection('Student');
            let result = await collection.deleteOne({name:req.query.name});
            console.log(result)
            if(result.deletedCount>0){
            res.send({
                status:200,
                message:"data deleted  successfully",
                data:result
                
            })
        }
        else {
            res.send({
                message:"please enter the coorect name"
            })
        }
        }
        catch(arr){
            res.send({
                message:"something went worng "+arr,
                status:500
            })
        }
}

const updateStudentList=async(req,res)=>{
    try{
        const db=database.main();
        const collection= (await db).collection('Student');
        var newvalues={$set:req.body};
        let result = await collection.updateOne({name:req.query.name},newvalues);
        console.log(result)
        if(result.modifiedCount>0){
        res.send({
            status:200,
            message:"data updated  successfully",
            data:result
            
        })
    }
    else{
        res.send({
            message:"please enter the coorect name"
        })
    }
    }
    catch(arr){
        res.send({
            message:"something went worng "+arr,
            status:500
        })
    }
}
module.exports={getStudentList,deleteStudentList,insertStudentList,updateStudentList}