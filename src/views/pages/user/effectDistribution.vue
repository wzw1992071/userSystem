// 有效已分配
<template>
    <div class="mainBox">
        <form>
            <div class="searchArea">
                <div class="demo-input-suffix">
                    <span>客户：</span>  
                    <el-input v-model="searchParam.shop_name"></el-input>
                </div>
                <div class="demo-input-suffix">
                    <span>电话：</span>  
                    <el-input v-model="searchParam.phone"></el-input>
                </div>
                 <div class="demo-input-suffix">
                    <span>分类：</span>  
                    <el-select v-model="searchParam.shop_type">
                        <el-option
                            v-for="item in shopTypeLists"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select> 
                </div>
                <div class="btnGuoup">
                    <el-button type="success" icon="el-icon-search" @click="search">确定</el-button>
                    <el-button type="primary" icon="el-icon-tickets" @click="importUser(0)">录入</el-button>
                    <!-- <el-button type="primary" icon="el-icon-document" @click="exportUser">导出</el-button> -->
                </div>
            </div>
        </form>
        <div class="tableArea">
            <el-table
            :data="tableData"
            border
            align="center"
            >
             <el-table-column
                prop="id"
                label="店铺id"
                min-width="80"
                align="center">
            </el-table-column>
            <el-table-column
                prop="shop_name"
                label="店铺名称"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="name"
                label="姓名"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="phone"
                label="电话"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="address"
                label="地址"
                min-width="150"
                align="center">
            </el-table-column>
            <el-table-column
                prop="shop_type_name"
                label="分类"
                min-width="150"
                align="center">
            </el-table-column>
            <el-table-column
                prop="stewardName"
                label="分配给"
                min-width="150"
                align="center">
            </el-table-column>
            <el-table-column
                
                label="注册平台"
                min-width="150"
                align="center">
                 <template slot-scope="scope">
                   <div v-for="(item,index) in scope.row.order_info">{{item.platform}}</div>
                </template>
            </el-table-column>
             <el-table-column

                label="最后下单日期"
                min-width="150"
                align="center">
                 <template slot-scope="scope">
                   <div v-for="(item,index) in scope.row.order_info">{{item.lately_order_time}}</div>
                </template>
            </el-table-column>
             <el-table-column
                prop="order_no"
                label="操作"
                min-width="150"
                align="center">
                <template slot-scope="scope">
                    <el-button @click="cancelDistribution(scope.row)" type="text" size="small">取消分配</el-button>
                    <el-button @click="importUser(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="delectInfo(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>

            </el-table>
        </div>
        <div class="pageControl">
            <el-pagination
                background
                :page-size=20
                layout="prev, pager, next"
                @current-change="pageChange"
                :total="dataTotal">
            </el-pagination>
        </div> 
        <el-dialog
            title="用户信息"
            :visible.sync="dialogVisible"
            width="60%"
            :close-on-click-modal="false"
            >
            <el-form 
                label-width="90px"
                :model="changeUserInfo" 
                :rules="validataRules"
                ref="changeUserInfo"
                >
                <el-row class="online">
                    <el-col :span="8">
                    <el-form-item label="店铺名:" prop="shop_name">
                        <el-input v-model="changeUserInfo.shop_name"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-form-item label="姓名:" prop="name" >
                        <el-input v-model="changeUserInfo.name"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-form-item label="电话:" prop="phone">
                        <el-input v-model="changeUserInfo.phone"></el-input>
                    </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="online">
                    <el-col :span="8">
                    <el-form-item label="店铺地址:" prop="address">
                        <el-input v-model="changeUserInfo.address"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="店铺类型:" prop="shop_type">
                            <el-select v-model="changeUserInfo.shop_type">
                                <el-option
                                    v-for="item in shopTypeLists"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                </el-option>
                            </el-select> 
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="是否加微信:" prop="add_wechat">
                            <el-select v-model="changeUserInfo.add_wechat">
                                <el-option
                                    v-for="item in selectData.add_wechat"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                </el-option>
                            </el-select> 
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="online">
                    <el-col :span="8">
                    <el-form-item label="分配给:" prop="steward_id">
                        <!-- <el-input v-model="changeUserInfo.steward_id"></el-input> -->
                        <el-select v-model="changeUserInfo.steward_id">
                            <el-option
                                v-for="item in managerLists"
                                :key="item.id"
                                :label="item.namePhone"
                                :value="item.id">
                            </el-option>
                        </el-select> 
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="是否有效:" prop="valid">
                            <el-select v-model="changeUserInfo.valid">
                                <el-option
                                    v-for="item in selectData.valid"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                </el-option>
                            </el-select> 
                        </el-form-item>
                   
                    </el-col>
                </el-row>
                <el-row class="online">
                    <el-col :span="24">
                        <el-form-item label="备注:" prop="remark">
                            <el-input type="textarea" v-model="changeUserInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitChangeInfo">确 定</el-button>
            </span>
        </el-dialog>   
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "effectDistribution",
  data() {
    return {
      // 搜索数据
      searchParam: {
        shop_name: "",
        phone: "",
        shop_type: "",
        valid:1,
        allot:1


      },
      copyParam:{},
      // 下拉框数据
      selectData: {
        shop_type:[],
        valid:[{name:"无效",id:0},{name:"有效",id:1}],
        add_wechat:[{name:"未加",id:0},{name:"已加",id:1}]
      },
      tableData: [
          
      ],
      
      dataTotal: 20,
      nowPage:1,
    //   弹窗是否显示
      dialogVisible: false,
    //   录入数据
      changeUserInfo: {},
    //   新增模板
      changeUserInfoDemo: {
        shop_name: "",
        name:"",
        phone:"",
        address:"",
        shop_type:"",
        valid:"",
        steward_id:"",
        add_wechat:"",
        remark:""
      },
    //   验证字段
      validataRules:{
          shop_name:[{ required: true, message: '店铺名不能为空', trigger: 'blur' }],
          name:[{ required: true, message: '姓名不能为空', trigger: 'blur' }],
          phone:[
              { required: true, message: '电话名不能为空', trigger: 'blur' },
              { validator: (rule, value, callback)=>{
                if (!(/^1[3456789]\d{9}$/.test(value))) {
                    callback(new Error('请输入正确的电话号'));
                } else {
                    callback();
                }
              }, trigger: 'blur' }
          ],
          address:[{ required: true, message: '店铺地址不能为空', trigger: 'blur' }],
          shop_type:[{ required: true, message: '店铺类型不能为空', trigger: 'change' }]
           
      }
      
    };
  },
  computed: {
    ...mapGetters(["shopTypeLists","managerLists"])
  },
  methods: {
    ...mapActions(["getShopTypeLists","getManagerLists"]),
    
    
    exportUser() {}, //导出用户
    //搜索
    search() {
        let copyObj = JSON.parse(JSON.stringify(this.searchParam)) 
        for(let i in copyObj ){
             if(copyObj[i]===""){
                delete copyObj[i];
            }
        }
        let sendParam = {
            source:1,
            page:1,
            size:20,
            search:copyObj
        }
        this.$http.buyerList(sendParam).then(res=>{
            this.copyParam = copyObj ;
            this.tableData=res.data.lists
            this.dataTotal=res.data.total
            this.tableData.forEach((item,index)=>{
                item.shop_type_name= this.getTypeName(item.shop_type)
              
                item.stewardName = this.managerLists.filter(element=>{
                    return element.id==item.steward_id;
                })[0].namePhone
            })
        })
    },
    // 获取表单数据
    getData() {
        this.searchParam=JSON.parse(JSON.stringify(this.copyParam)) 
        let sendParam = {
            source:1,
            page:this.nowPage,
            size:20,
            search:this.copyParam
        }
        this.$http.buyerList(sendParam).then(res=>{
            this.tableData=res.data.lists
            this.dataTotal=res.data.total
            this.tableData.forEach((item,index)=>{
                item.shop_type_name= this.getTypeName(item.shop_type)
                
                item.stewardName = this.managerLists.filter(element=>{
                    return element.id==item.steward_id;
                })[0].namePhone
            })
        });
           
    },
    getTypeName(type){
       // 根据类型匹配类型名字
        let name = "";
        this.shopTypeLists.forEach((item,index )=> {
            
            if(item.id==type){
                name= item.name
            }
        });
        return name
    },
     //翻页
    pageChange(page) {
        this.nowPage = page;
        this.getData();
    },
    //录入用户(有参数则是修改，否再为新增)
    importUser(row) {
        // console.log(row)
        if(row){
            this.changeUserInfo=row
        }else{
            this.changeUserInfo=JSON.parse(
                JSON.stringify(this.changeUserInfoDemo)
            );
        }
        this.dialogVisible=true;
        this.$refs.changeUserInfo?this.$refs["changeUserInfo"].resetFields():"";
    },
    // 提交修改
    submitChangeInfo(){
        let flag = true;
        this.$refs["changeUserInfo"].validate(valid => {
            flag = valid;
        });
        if(flag){
            if(this.changeUserInfo.steward_id){
                if(this.changeUserInfo.valid===""){
                    this.$message.error("请选择是否有效！");
                    return false;
                }
            }
            let param = JSON.parse(
                JSON.stringify(this.changeUserInfo)
            )
           for(let i in param){
                if(param[i]==="") delete param[i];
            }
            delete param["order_info"]
            delete param["shop_type_name"]    
            delete param["stewardName"]         
            if(this.changeUserInfo.id){
                // 有id是修改
                let sendParam = {
                    // sp_id:this.changeUserInfo.id,
                    source:1,
                    data:[param],
                }
                this.$http.editBuyer(sendParam).then(res=>{
                    this.$message({
                        message: "修改成功！",
                        type: "success"
                    });
                    this.getData()
                    this.dialogVisible=false;
                })
            }else{
                let sendParam = {
                    data:[param]
                }
                this.$http.entryBuyer(sendParam).then(res=>{
                    this.$message({
                        message: "添加成功！",
                        type: "success"
                    });
                    this.getData()
                    this.dialogVisible=false;
                })

            }
        }else{
            this.$message.error("请完善资料！");
            return false;
        }
    },
    // 删除信息
    delectInfo(row){
        this.$http.deleteUser({
            id:row.id,
            source:1
        }).then(res=>{
            this.$message({
              message: "删除成功！",
              type: "success"
            });
            
            this.getData();
        })

        
    },
    // 取消分配
    cancelDistribution(row){
        this.$confirm('确认取消？').then(()=> {
            this.$http.cancelSteward(row.id).then(res=>{
                    this.$message({
                        message: "取消分配成功！",
                        type: "success"
                    });
                    this.getData()
                })
            }).catch(() => {});
    }
  },
  created() {
        // this.getShopTypeLists()
        // this.getManagerLists() 
        // this.search()

        Promise.all([this.getShopTypeLists(),this.getManagerLists()]).then(()=>{
            this.search()
        }).catch(()=>{
        })
    
    
  },
};
</script>
<style lang="less" scoped>
.mainBox {
  height: 100%;
  background: #fff;
  .searchArea {
    margin: 0 10px 10px;
    padding: 15px 0;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #ccc;
    & > div {
      display: flex;
      justify-content: space-between;
      span {
        text-align: right;
        line-height: 42px;
        min-width: 65px;
      }
      .line {
        text-align: center;
        line-height: 42px;
        margin: 0 5px;
      }
    }
  }
  .checkBoxArea {
    margin: 0 10px 10px;
    padding: 15px 0;
  }
  .btnGuoup {
    display: flex;
    justify-content: flex-start;
    margin: 0 10px 10px;
    padding-bottom: 10px;
  }
  .tableArea {
    margin: 10px;
  }
  .pageControl {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  .online {
    .el-select {
      width: 233px;
    }
  }
}
</style>