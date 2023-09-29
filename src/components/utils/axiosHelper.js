import axios from "axios"

const apiUrl = "http://www.omdbapi.com/?apikey=247c0ee7&t=";
 export const fetchMovie = async (str) => {
    //promise

    try{
        const response = await axios.get(apiUrl + str);
         return response.data
    
    }catch(error){
        console.error(error)
    }

    // async/await
}