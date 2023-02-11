const Faculty = require('../models/Faculty')

//Get all Faculties
module.exports.getAllFaculties = async (req,res) => {
    console.log("Request received");
    try{
        const faculties = await Faculty.find();
        console.log("Data found")
        res.json(faculties);
    }catch(error){
        console.log("Data not found")
        res.json({message: error});
    }
}

// //Get single expense
// module.exports.getSingleExpense = async (req,res) => {}

// //Add new expense
// module.exports.addNewExpense = async (req,res) => {}

// //Update expense
// module.exports.updateExpense = async (req,res) => {}

// //Delete expense
// module.exports.deleteExpense = async (req,res) => {}