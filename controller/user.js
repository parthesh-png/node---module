
const fs = require('fs')

// const index = fs.readFileSync('index3.html','utf-8') //not usihng as we r doing with mooongse
const path = require('path')

// const dataPath = path.join(__dirname, '..', 'public', 'data.json');

// const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));


const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data.json'),'utf-8'))
const users = data.users  //connect with user data only in json /,scva  

exports. createUser = (req,res)=>{
    console.log(req.body)  
    users.push(req.body)   //kind of controller
   res.status(201).res.json(req.body)
}

  
exports. getAllUsers = (req,res) => {
    
    res.json(users) 
}

exports. getUsers =(req,res) => {
    const id =+req.params.id;
     const user = users.find(p=>p.id===id); //find always method take parameter for searching basis
     res.json(user) 
   
}
exports. replaceUsers=(req,res) => {
    const id =+req.params.id;
     const userIndex = users.findIndex(p=>p.id===id);
     users.splice(userIndex,1,{...req.body,id:id})
     res.status(201).json();

}
exports. updateUsers =(req,res) =>{
    const id =+req.params.id
    const userIndex = users.findIndex(p => p.id === id)

    const user = users[userIndex]; //- for old product
    users.splice(userIndex,1,{...user,...req.body})
    res.status(201).json();
}
exports. deleteUsers=(req,res) => {
    const id =+req.params.id;
     const userIndex = users.findIndex(p=>p.id===id);

      const user = users[userIndex];
     users.splice(userIndex,1)
     res.status(201).json(user)}