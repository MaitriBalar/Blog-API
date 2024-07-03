const BLOG = require('../model/blog');

exports.AddBlog = async function(req, res, next) {
    try {
        if(!req.body.title || !req.body.image || !req.body.discription || !req.body.category || !req.body.user) {
            throw new Error("Enter Valid Field");
        }
        let data = await BLOG.create(req.body);
         res.status(201).json({
            status : "Success",
            message : "Data Added",
            data : data
         })
    } catch (error) { 
        res.status(404).json({
            status : "Fail",
            message : error.message
         })
    }
}

exports.ShowBlog = async function(req, res, next) {
    try {
        let data = await BLOG.find();
        if(!data) {
            throw new Error("Data not Found");
        }
         res.status(201).json({
            status : "Success",
            data : data
         })
    } catch (error) { 
        res.status(404).json({
            status : "Fail",
            message : error.message
         })
    }
}

exports.UpdateBlog = async function(req, res, next) {
    try {
        let data = await BLOG.findByIdAndUpdate(req.query.id, req.body);
        if(!data) {
            throw new Error("Data not Found");
        }
         res.status(201).json({
            status : "Success",
            message : "Data Updated",
            data : data
         })
    } catch (error) { 
        res.status(404).json({
            status : "Fail",
            message : error.message
         })
    }
}

exports.DeleteBlog = async function(req, res, next) {
    try {
        let data = await BLOG.findByIdAndDelete(req.query.id, req.body);
        if(!data) {
            throw new Error("Data not Found");
        }
         res.status(201).json({
            status : "Success",
            message : "Data Deleted",
            data : data
         })
    } catch (error) { 
        res.status(404).json({
            status : "Fail",
            message : error.message
         })
    }
}