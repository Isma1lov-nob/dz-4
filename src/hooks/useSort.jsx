export default function useSort (sortBy , array){
    if (sortBy === "name"){
        return array.sort((a, b) =>{
            if(a.name< b.name){
                return -1
            }
            if(a.name > b.name){
                return 1
            }
            return 0
        })
    }else if(sortBy === "id") {
        return array.sort((a , b)=> a.id - b.id)
    } else{
        return array
    }

}