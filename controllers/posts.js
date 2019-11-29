
const Post = require('../models/postData');


exports.getAddpost = (req,res)=>{
    res.render('add-post',{title:'add-post'})
};

//Post req from add-post
exports.postAddPost = (req,res)=>{
    const post = new Post(req.body.Postbody);
    post.save();
    res.redirect('/post');
}
//render post
exports.getPost = (req,res)=>{
    const post = Post.fetchAll();
    res.render('post',
    {
        title:'Post',
        posts:post
    })
};


exports.getPnf = (req,res)=>{
    res.status(404);
    res.render('pnf',{title:'404'})
};