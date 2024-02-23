const express = require("express");
const { UsersModel } = require("../models/usersModels");

const usersRoute = express.Router()




// post route for users
  usersRoute.post("/post" , async(req,res)=>{
    try {
        const { name ,email , phone, website, city, company, userId} = req.body

        const user = new UsersModel({ name ,email , phone, website, city, company, userId})
        await user.save()

        return res.status(200).send({ "message": "User added in database" });

    } catch (error) {
        return res.status(500).send({ "message": "Internal Server Error" });
    }
  })

// get route for users
  usersRoute.get("/get", async (req, res) => {
    try {
      const data = await UsersModel.find();
  
      if (data.length === 0) {
        return res.status(400).send({ "message": "No User Data" });
      }
  
      const allUserIDs = data.map(user => user.userId);// get user IDs from the data
      return res.status(200).send({ "userIDs": allUserIDs });

    } catch (error) {
      console.error(error);
      return res.status(500).send({ "message": "Internal Server Error" });
    }
  });

// get users by id
  usersRoute.get("/:id", async (req, res) => {
    try {

        const { id } = req.params;
      const data = await UsersModel.findOne({userId:id});
  
      if (!data) {
        return res.status(400).send({ "message": "No User Data" });
      }
      
      return res.status(200).send({ "data": data });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ "message": "Internal Server Error" });
    }
  });
  

module.exports ={usersRoute}