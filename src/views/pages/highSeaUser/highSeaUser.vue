<template>
    <div class="mainBox">
        <form>
            <div class="searchArea">
                <div class="demo-input-suffix">
                    <span>客户：</span>  
                    <el-autocomplete 
                    v-model="searchParam.buyer"
                    :fetch-suggestions="queryBuyerName"
                    :trigger-on-focus="true"
                    >
                    </el-autocomplete>
                </div>
                <div class="demo-input-suffix">
                    <span>电话：</span>  
                    <el-autocomplete 
                    v-model="searchParam.buyer_tel"
                    :fetch-suggestions="querySearchTel"
                    :trigger-on-focus="true"
                    >
                    </el-autocomplete>
                </div>
                 <div class="demo-input-suffix">
                    <span>分类：</span>  
                    <el-select v-model="searchParam.income_expend">
                        <el-option
                            v-for="item in selectData.type"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select> 
                </div>
                <div class="btnGuoup">
                    <el-button type="success" icon="el-icon-search" @click="search">确定</el-button>
                    <el-button type="primary" icon="el-icon-tickets" @click="importUser">导入</el-button>
                    <el-button type="primary" icon="el-icon-document" @click="exportUser">导出</el-button>
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
                prop="order_no"
                label="客户名称"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="order_no"
                label="电话"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="order_no"
                label="地址"
                min-width="150"
                align="center">
            </el-table-column>
            <el-table-column
                prop="order_no"
                label="分类"
                min-width="150"
                align="center">
            </el-table-column>
            <el-table-column
                prop="order_no"
                label="注册平台"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="order_no"
                label="最后下单日期"
                min-width="150"
                align="center">
            </el-table-column>
             <el-table-column
                prop="order_no"
                label="操作"
                min-width="150"
                align="center">
            </el-table-column>

            </el-table>
        </div>
        <div class="pageControl">
            <el-pagination
                background
                :page-size=50
                layout="prev, pager, next"
                @current-change="pageChange"
                :total="dataTotal">
            </el-pagination>
        </div> 
        <el-dialog
            title="用户信息"
            :visible.sync="dialogVisible"
            width="60%"
            >
            <el-form label-width="120px">
                <el-row>
                    <el-col :span="8">
                    <el-form-item label="客户名称:" prop="buyer_shop_name">
                        <el-input v-model="changeUserInfo.userName"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-form-item label="电话:" prop="buyer_shop_name">
                        <el-input v-model="changeUserInfo.userName"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-form-item label="地址:" prop="buyer_shop_name">
                        <el-input v-model="changeUserInfo.userName"></el-input>
                    </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                    <el-form-item label="分类:" prop="buyer_shop_name">
                        <el-select v-model="searchParam.income_expend">
                            <el-option
                                v-for="item in selectData.type"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select> 
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-form-item label="是否有效:" prop="buyer_shop_name">
                        <el-select v-model="searchParam.income_expend">
                            <el-option
                                v-for="item in selectData.type"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select> 
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-form-item label="备注:" prop="buyer_shop_name">
                        <el-input v-model="changeUserInfo.userName"></el-input>
                    </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="changeInfo">确 定</el-button>
            </span>
        </el-dialog>   
    </div>
</template>

<script>
export default {
  name: "HighSeaUser",
  data() {
    return {
      // 搜索数据
      searchParam: {
        buyer: "",
        buyer_tel: "",
        type: ""
      },
      // 下拉框数据
      selectData: {
        type: {}
      },
      tableData:[],
      dataTotal:20,
      dialogVisible:true,
      changeUserInfo:{
          userName:""
      }
    };
  },
  methods: {
    queryBuyerName() {},
    querySearchTel() {},
    importUser() {},//导入用户
    exportUser() {},//导出用户
    getData(){},//获取数据
    pageChange(){},//翻页
    changeInfo(){}
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
}
</style>

