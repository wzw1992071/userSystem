import axios from "@/api/http";
// 获取店铺类型
export function getShopTypeLists(sendParam){
    return axios.get("/api/other/shop-type/list", {
        params: sendParam
    });
}
// 获取管理员列表
export function getManagerLists(sendParam){
    return axios.get("/manage/list", {
        params: sendParam
    });
}


// 客户数据列表
export function buyerList(sendParam) {
  return axios.post("/pc/buyer/manage/list", sendParam);
}
// 录入客户数据
export function entryBuyer(sendParam) {
    return axios.post("/pc/buyer/manage/entry",sendParam);
}
// 修改客户数据
export function editBuyer(sendParam) {
    return axios.put("/pc/buyer/manage/update",sendParam);
}
// 取消分配
export function cancelSteward(id) {
    return axios.patch(`/pc/buyer/manage/cancel/steward/${id}`);
}

// 删除用户数据
export function deleteUser(param){
    return axios.delete(`/pc/buyer/manage/del/${param.id}`,{
        params: {source:param.source}
    });
}

// 下载模板
export function importExcel(sendParam){
    return axios.post("/pc/buyer/manage/import",sendParam);
}