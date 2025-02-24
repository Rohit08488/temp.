const database = require('../database/db')

const getCourseList= async(req,res)=>{
    const db=database.main();
        const collection= (await db).collection('Course');
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

const insertCourseList=async(req,res)=>{
    
            try{
                const db=database.main();
                const collection= (await db).collection('Course');
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

const deleteCourseList=async(req,res)=>{
     
        try{
            const db=database.main();
            const collection= (await db).collection('Course');
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

const updateCourseList=async(req,res)=>{
    try{
        const db=database.main();
        const collection= (await db).collection('Course');
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
module.exports={getCourseList,deleteCourseList,insertCourseList,updateCourseList}