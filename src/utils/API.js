import axios from "axios";
//local
const URL_PREFIX = "http://localhost:3001"
const DATA_PREFIX = "https://api.openbrewerydb.org/breweries?by_city=seattle"
//delploy
// const URL_PREFIX = "https://reactauthdemo-back.herokuapp.com"


const API = {
    getProfile: (tkn)=>{
        return axios.get(`${URL_PREFIX}/profile`,{headers:{
        "Authorization": `Bearer ${tkn}`
      }})
    },
    login:(usrData)=>{
        return  axios.post(`${URL_PREFIX}/login`,usrData)
    },
    signup:(usrData)=>{
        return  axios.post(`${URL_PREFIX}/signup`,usrData)
    },
    getData:()=>{
        return axios.get(`${DATA_PREFIX} `)
    },

    getUserData:(id)=>{
        return axios.get(`${URL_PREFIX}/api/users/${id}/posts`)
    },
    

    getAllPost: ()=>{
        return axios.get(`${URL_PREFIX}/api/posts`)

    },
    addPost:(postData,token)=>{
        return axios.post(`${URL_PREFIX}/api/posts`, postData, {
            headers:{
                "Authorization": `Bearer ${token}` 
            }  
        } )
    
    },
    editPost:(postData, id ,token)=>{
        return axios.put(`${URL_PREFIX}/api/posts/${id}`, postData, {
            headers:{
                "Authorization": `Bearer ${token}` 
            }  
        } )
    
    },
    deletePost: (id,token)=>{
        return axios.delete(`${URL_PREFIX}/api/posts/${id}`,{headers:{
            "Authorization": `Bearer ${token}`
          }})

    }
 
}





export default API;