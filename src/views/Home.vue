<template>
    <div>
        <el-row style="padding-top:20px" type="flex" justify="center">
            <el-col :span='15'>
                <el-card class="box-card" :body-style="{ padding: '0px' }">
                    <el-carousel height="200px">
                        <el-carousel-item :key="1">
                            <img width="100%" height="100%" src="../assets/images/lunbo1.jpg">
                        </el-carousel-item>
                        <el-carousel-item :key="2">
                            <img width="100%" height="100%" src="../assets/images/lunbo2.jpg">
                        </el-carousel-item>
                    </el-carousel>
                </el-card>
            </el-col>
            <el-col :span='6' :offset='1'>
                <el-card :body-style="{ padding: '0px',height:'200px' }">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="统计信息" name="tongji">

                        </el-tab-pane>
                        <el-tab-pane label="联系站长" name="lianxi">

                        </el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-col>
        </el-row>
        <el-row style="padding-top:20px" type="flex" justify="center">
            <el-col :span='15'>
                <el-card>
                    <h2 style=" margin-top: 0;">
                        <span style="color:red">推荐</span>
                        <a href="#@" style="cursor: pointer;text-decoration: none; color: #555;">用DTcms做一个独立博客网站（响应式模板）</a>
                    </h2>
                    <p class="note">用DTcms做一个独立博客网站（响应式模板），采用DTcms V4.0正式版（MSSQL）。开发环境：SQL2008R2+VS2010。DTcms V4.0正式版功能修复和优化：1、favicon.ico图标后台上传。（解决要换图标时要连FTP或者开服务器的麻烦）</p>
                </el-card>
                <el-row>
                    <h3>最新发布</h3>
                </el-row>
                <tr v-for="item in NewItems">
                    <el-card  :body-style="{ padding: '10px 10px 10px 10px'}">
                        <el-row>
                            <el-col :span='8' style="padding: 20px;padding-bottom: 12px;">
                                <img width="100%" height="100%" :src="item.image">
                            </el-col>
                            <el-col :span='16' style="padding-top:20px">
                                <a class="cat"> {{item.cate}}
                                    <i></i>
                                </a>
                                <h2 class="newbody">
                                    <a>{{ item.title }}</a>
                                </h2>
                                <p class="meta">
                                    {{item.datetime}} 216 4
                                </p>
                                <p class="wnote">{{item.descript}}</p>
                            </el-col>
                        </el-row>
                    </el-card>
                </tr>
            </el-col>
            <el-col :span='6' :offset='1'>

            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'tongji',
            NewItems: []
        }
    },

    methods: {
        GetData() {
            var _this = this;
            this.$http.get('/api/getNewItems')
                .then(function (response) {
                    _this.NewItems = response.data.newData;
                })
        }
    },
    created: function () {
        this.GetData();
    }
}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.note {
    color: #666;
    margin-bottom: 0;
    text-indent: 28px;
    cursor: default;
}

.wnote {
    font-size: 12px;
    color: #999;
    word-wrap: break-word;
    line-height: 20px;
    cursor: default;
    margin: 5px 0px 5px 0px;
}

.meta {
    color: #999;
    font-size: 12px;
    margin: 5px 0px 5px 0px;
}

.cat {
    color: #FFF;
    background-color: #3399CC;
    padding: 3px 6px;
    font-size: 12px;
    display: inline-block;
    position: relative;
    top: -2px;
    margin-right: 6px;
}

.cat i {
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: -4px;
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-left: 4px solid #3399CC;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
}

.newbody {
    display: inline;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    color: #555;
}
</style>
