##ReadMe

**Tutorial**: 'Build a RESTful API Using Node and Express 4' using the guides present in scotch.io

----------

###Notes
- CRUD application with Node.js, Express and Mongoose
- No need to 'npm install' everytime. Copy the necessary node_modules from existing projects if you are just going to test something
- Configure mongoose to use local mongodb instance  
- Ensure mongodb is running while running the app

###Steps for first commit
1. create .gitignore file and add 'node_modules'  line
2. create a new repository 'restfulAPI' in github
```sh
$ git init
$ git add .
$ git commit -m "bare essential CRUD design"
$ git remote add origin https://github.com/cvanesh/restfulAPI.git
$ git push -u origin master
```

###To try the app
```sh
$ git clone https://github.com/cvanesh/restfulAPI.git
$ cd restfulAPI
$ npm install
$ node server.js
```