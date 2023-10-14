import { HttpHeaders } from "@angular/common/http"

export const appConfig={

  backEndUrl:'http://localhost:8000/api/v1',
  url:'http://localhost:8000/api',
  frontEndUrl:'http://localhost:4200',
  httpOptions : {
    headers: new HttpHeaders(
        {
          'Accept': 'application/json',
          'Content-Type':  'application/x-www-form-urlencoded; charset=UTF-8;application/json',
         'cleint_id': 'gvhcvhgcgcfgcfgghcghcg',
         'key': 'samhKey75fghfvhgcgcgfcgfccxxcc',
         'Authorization': 'Bearer bbb',
        //  'enctype': 'multipart/form-data'
        }
      ),

  },
  appName:'Samh Platform',
  appArName:'منصه سمح',
  logo:'assets\logo.jpeg',
  image:'assets\logo.jpeg',
}


export const routes={
  register:'/register',
  login:'/login',
  createSystem:'/create-system',
}
