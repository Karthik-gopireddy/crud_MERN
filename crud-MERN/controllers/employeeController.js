const Employee=require("../models/Employee")

const createEmployee = async(req,res)=>{
    try{
        const {name,email,phone,city}=req.body

        const employee= new Employee({
            name,
            email,
            phone,
            city
        })
        await employee.save()
        res.status(201).json(employee)

    } catch (error){
        console.log("there is an error:",error)
        res.status(500).json({message:"server error"})
    }
}



const getEmployees=async(req,res)=>{
    try{
        const employees=await Employee.find()
        res.status(200).json(employees)
    }catch(error){
        console.log("There is an error:",error)
        res.status(500).json({message:"server error"})
    }

}


const getSingleEmployee= async(req,res)=>{
    try{
        const singleEmployee= await Employee.findById(req.params.index)
        if(!singleEmployee){
            return res.status(404).json({message:"Employee not found"})
        }
        res.status(200).json(singleEmployee)
    }catch(error){
        console.log("There is an error:",error)
        res.status(500).json({message:"server error"})

    }
}

const updateEmployee= async(req,res)=>{
    try{
        const {name,email,phone,city}=req.body

        const updateemployee=await Employee.findByIdAndUpdate(
            req.params.id,
            {name,email,phone,city}
        )
        if(!updateemployee){
            return res.status(404).json({message:"Employee not found"})
        }
        res.status(200).json(updateemployee)
    }catch(error){
        console.log("error",error)
        res.status(500).json({message:"server Error"})

    }
}


const deleteEmployee = async(req,res)=>{
    try{
        const deleteemployee= await Employee.findByIdAndDelete(req.params.id)
        if(!deleteemployee){
            return res.status(404).json({message:"Employee not Found to Delete"})
        }
        res.status(204).json({message:"Deleted the user"})
    }catch(error){
        console.log("error",error)
        res.status(500).json({message:"server Error"})
    }
}
module.exports={createEmployee,getEmployees,getSingleEmployee,updateEmployee,deleteEmployee}