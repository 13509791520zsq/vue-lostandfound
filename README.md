# lostandfound

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## api

1. POST /api/users/login  参数： email,password
2. POST /api/users/register 参数： email,username,password
3. post /api/items/lupload  参数：itemname,place,date,image,sketch
4. post /api/items/fupload  参数：itemname,place,date,image,sketch
5. DELETE /api/items/ldelete 参数： id(litemid)
6. DELETE /api/items/fdelete 参数： id(fitemid)

7. GET /api/get/getlitems
8. GET /api/get/getfitems
7. GET /api/get/getalllitems
8. GET /api/get/getallfitems

9. POST /api/get/getlitems  参数：itemname/place/date
10. POST /api/get/getfitems 参数：itemname/place/date
