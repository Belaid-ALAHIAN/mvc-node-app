const posts =[];

module.exports = class Post {
    constructor(Postbody){
        this.Postbody=Postbody;

    }
    save(){
        posts.push(this);
    }

    static fetchAll(){
        return posts;
    }

}