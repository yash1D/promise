const posts = [
    {title : 'model 1', body : 'this is a model 1'},
    {title: 'model 2', body : 'this is a model 2'},
    {title: 'model 3', body : 'this is a model 3'},

];

function getPost(){
    setTimeout(() => {
       let output = '';
       posts.forEach((post,index) =>{
           output += `<li>${post.title}</li>`
       });
       document.body.innerHTML = output; 
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            posts.push(post ++);
            const error =false;

            if(!error){
                resolve(console.log('code is done'));
            }
            else{
                reject('error:somethimg went wrong');
            }
        }, 2000);
    });
}

function deletepost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            posts.pop(post)
            const delete1 = true;
            if(delete1 == true){
                resolve(console.log('post is deleted'))
            }
            else{
                reject(console.log('error:delete is not work'))
            }
        }, 1000);
    })
}

createPost({title:'model 4', details: 'this is model 4'})
.then(getPost)
.catch(err => console.log(err));
deletepost(getPost)
.then(createPost)
.catch(arr =>console.log(arr));

// --------------------------------------------------------------------------------------------------------------------------

const promise = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>
setTimeout(resolve,3000,'goodmorning')
);
const promise4 = fetch
('https://jsonplaceholder.typicode.com/users')
.then(res =>
    res.json()
    );
    Promise.all([promise,promise2,promise3,promise4])
    .then(value => console.log(value)
    );