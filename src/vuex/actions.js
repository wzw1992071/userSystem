
import * as $http from "@/api/Allhttp"
export default {
    getShopTypeLists:({state,commit})=>{
        return new Promise((resolve, reject)=>{
            if(state.shopTypeLists.length==0){
                $http.getShopTypeLists().then(res=>{
                    commit('GETSHOPTYPELISTS',res.data.lists)
                    resolve();
                })
            }else{
                resolve();
            }
            
        })
        
    },
    getManagerLists:({state,commit})=>{
        return new Promise((resolve, reject)=>{
            if(state.managerLists.length==0){
                $http.getManagerLists().then(res=>{
                    res.data.lists.forEach((item,index) => {
                        item.namePhone = `${item.name}-${item.phone}`
                    });
                    commit('GETMANAGERLISTS',res.data.lists);
                    resolve();
                })
            }else{
                resolve();
            }
        })
    }
}