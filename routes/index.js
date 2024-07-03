var express = require('express');
var router = express.Router();
const UserController = require('../controller/User');
const CatController = require('../controller/Category');
const BlogController = require('../controller/Blog');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// =============================== USER API =====================================

router.post('/user/add', UserController.AddUser);

router.get('/user/show', UserController.ShowUser);

router.patch('/user/update', UserController.UpdateUser);

router.delete('/user/delete', UserController.DeleteUser);

// =============================== CATEGORY API =================================

router.post('/category/add', CatController.AddCat);

router.get('/category/show', CatController.ShowCat);

router.patch('/category/update', CatController.UpdateCat);

router.delete('/category/delete', CatController.DeleteCat);

// ================================= BLOG API ===================================          

router.post('/blog/add', BlogController.AddBlog);

router.get('/blog/show', BlogController.ShowBlog);

router.patch('/blog/update', BlogController.UpdateBlog);

router.delete('/blog/delete', BlogController.DeleteBlog);

module.exports = router;
