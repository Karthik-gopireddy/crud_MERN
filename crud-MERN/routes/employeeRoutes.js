const express=require("express")
const router=express.Router()
const employeeController=require("../controllers/employeeController")
const Employee =require("../models/Employee")

//get, post, put, delete

router.post("/add-emp",employeeController.createEmployee)
router.get("/get-emp",employeeController.getEmployees)
router.get("/get-emp/:id",employeeController.getSingleEmployee)
router.put("/update-emp/:id",employeeController.updateEmployee)
router.delete("/delete-emp/:id",employeeController.deleteEmployee)


module.exports=router