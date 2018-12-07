
import * as $http from "@/api/Allhttp"
export default {
    getShopTypeLists:({state,commit})=>{
        if(state.shopTypeLists.length>0){
            return false;
        }else{
            $http.getShopTypeLists().then(res=>{
                commit('GETSHOPTYPELISTS',res.data.lists)
            })
        }
    },
    getManagerLists:({state,commit})=>{
        if(state.managerLists.length>0){
            return false;
        }else{
            $http.getManagerLists().then(res=>{
                res.data.lists.forEach((item,index) => {
                    item.namePhone = `${item.name}-${item.phone}`
                });
                commit('GETMANAGERLISTS',res.data.lists)
            })
        }
    }
}