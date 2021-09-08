import { hostAddress } from '../../config';
import axios from "axios";


export function request(URL:string,method:"POST"|"GET"|"DELETE"="GET",data?:any,id:string="",key:string="") {


  let url = hostAddress + URL
  if(id){
    url+="/"+id
  }else if(key){
    url+="?"+"key="+key
  }
  console.log(url)
  return axios.request({
    method,
    url,
    data,
    withCredentials:true,
    
  }).then(elem=>elem.data);
}
