export default function useFillter(search , array){
   if(search){
    return array.filter(el=> el.name.toLowerCase().includes(search.toLowerCase()))
   }else{
    return array
   }

}