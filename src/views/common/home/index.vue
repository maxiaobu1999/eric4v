<template>
  <div class="homeBox">
    <div class="title">数据总览</div>
    <div class="topBox">
      <div class="dataBox">
        <div class="dataBoxTop">
          <el-tooltip
              class="box-item"
              effect="dark"
              content="开通APP账号的用户数量"
              placement="top-start"
          >
            <img
                class="questionMark"
                src="/src/assets/img/questionMark.png"
            />
          </el-tooltip>
        </div>
        <div class="dataBoxBottom">
          <div class="dataBoxBottomImg">
            <img src="/src/assets/img/icon_yhzcsl.png" />
          </div>
          <div class="content">
            <div class="contentTop">注册用户数量</div>
            <div class="contentBottom">
              {{ dataOverview.registerNum }}<span>人</span>
            </div>
          </div>
        </div>
      </div>
      <div class="dataBox">
        <div class="dataBoxTop">
          <el-tooltip
              class="box-item"
              effect="dark"
              content="APP中所有可用的预付卡数量，不包括已过期的预付卡数量"
              placement="top-start"
          >
            <img
                class="questionMark"
                src="/src/assets/img/questionMark.png"
            />
          </el-tooltip>
        </div>
        <div class="dataBoxBottom">
          <div class="dataBoxBottomImg">
            <img src="/src/assets/img/icon_yhzcsl.png" />
          </div>
          <div class="content">
            <div class="contentTop">预付卡数量</div>
            <div class="contentBottom">
              {{ dataOverview.usingPreCardsNum }}<span>人</span>
            </div>
          </div>
        </div>
      </div>
      <div class="dataBox">
        <div class="dataBoxTop">
          <el-tooltip
              class="box-item"
              effect="dark"
              content="通过APP申请预付卡的数量"
              placement="top-start"
          >
            <img
                class="questionMark"
                src="/src/assets/img/questionMark.png"
            />
          </el-tooltip>
        </div>
        <div class="dataBoxBottom">
          <div class="dataBoxBottomImg">
            <img src="/src/assets/img/icon_yhzcsl.png" />
          </div>
          <div class="content">
            <div class="contentTop">预付卡申请数量</div>
            <div class="contentBottom">
              {{ dataOverview.preCardsApplyNum }}<span>人</span>
            </div>
          </div>
        </div>
      </div>
      <div class="dataBox">
        <div class="dataBoxTop">
          <el-tooltip
              class="box-item"
              effect="dark"
              content="当天登录过APP的用户数量"
              placement="top-start"
          >
            <img
                class="questionMark"
                src="/src/assets/img/questionMark.png"
            />
          </el-tooltip>
        </div>
        <div class="dataBoxBottom">
          <div class="dataBoxBottomImg">
            <img src="/src/assets/img/icon_yhzcsl.png" />
          </div>
          <div class="content">
            <div class="contentTop">当天在线客户</div>
            <div class="contentBottom">
              {{ dataOverview.onLineNum }}<span>人</span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="bottomBox">
      <div class="title">业务看板</div>
      <div class="bottomBoxCharts">
        <div class="canvas">
          <div class="canvasTitle">
            <div class="canvasTitleLeft">
              最近访问趋势
              <el-tooltip
                  class="box-item"
                  effect="dark"
                  content="统计最近一段时间内（可筛选维度如下）每天的访问人数，同一用户同一天多次登录只计算一次"
                  placement="top-start"
              >
                <img
                    class="questionMark"
                    src="/src/assets/img/questionMark.png"
                />
              </el-tooltip>
            </div>
            <div>
              <div class="select">
                <el-select
                    v-model="valueSelect"
                    placeholder="请选择"
                    size="small"
                    style="width: 240px"
                    @change="changeDate"
                >
                  <el-option
                      v-for="item in options"
                      :key="item.configItemId"
                      :label="item.configItemName"
                      :value="
											item.configItemName +
											',' +
											item.configItemDesc
										"
                  />
                </el-select>
              </div>
            </div>
          </div>
          <div
              id="myEchartsLine"
              class="lineCss"
              :style="{ 'min-width': '606px', 'height': '364px' }"
          ></div>
        </div>
        <div class="canvas">
          <div class="canvasTitle">
            <div class="canvasTitleLeft">
              客户数量分布
              <el-tooltip
                  class="box-item"
                  effect="dark"
                  content="按国家维度统计客户数量的分布情况"
                  placement="top-start"
              >
                <img
                    class="questionMark"
                    src="/src/assets/img/questionMark.png"
                />
              </el-tooltip>
            </div>
          </div>
          <div
              id="myEcharts"
              class="bieCss"
              :style="{ 'min-width': '487px', 'height': '364px' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted, onUnmounted, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

export default {
  setup() {
    const valueSelect = ref("");
    const changeDate = () => {
      initChartLine();
    };
    const options = ref([]);
    /// 声明定义一下echart
    let echart = echarts;
    onMounted(() => {
      initChart();
      initChartLine();
      getHomePageData();
      accessTypeFilter();
    });

    onUnmounted(() => {
      echart.dispose;
    });
    // 基础配置一下Echarts
    function initChart() {
      let chart = echart.init(document.getElementById("myEcharts"));
      // 把配置和数据放这里
      chart.setOption({
        tooltip: {
          trigger: "item",
        },
        label: {
          position: "outside",
          fontSize:16,
          color: '#595959',//文字颜色
        },
        labelLine: {
          length: 20,
          length2: 30,
        },
        color: [
          "rgba(247, 69, 81, 1)",
          "rgba(255, 141, 26, 1)",
          "rgba(232, 102, 197, 1)",
          "rgba(133, 125, 245, 1)",
          "rgba(255, 213, 46, 1)",
        ],
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            data: [],
          },
        ],
        title:{
          text: '',
          textStyle: {//主标题样式
            fontFamily: 'Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif',
            fontSize: 16,
            // fontStyle: 'normal',
            fontWeight: '400',
            color:'#595959'
          },
          subtextStyle: {//副标题样式
            color:'#000',
            fontFamily: 'Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: '500',
          }
        }
      });
      const pieData = ref([]);
      http({
        url: http.adornUrl(`/home/pieChart`),
        method: 'get',
        params: http.adornParams({})
      })
          .then((res) => {
            if(res){
              const dataObj = res.data.data
              let chart = echart.init(
                  document.getElementById("myEcharts"),
              );
              res.data.data.PigChartResList.forEach((item) => {
                pieData.value.push({
                  value: item.customerNum,
                  name: item.country,
                });
              });
              chart.setOption({
                series: [
                  {
                    data: pieData.value, //赋值
                  },
                ],
                title:{
                  text: '共计（人）',
                  subtext:res.data.data.total,
                  left: 'center',
                  top:'center'
                },
                label:{
                  formatter: function (val) {
                    return val.name + val.value + '\n' + val.percent+ '%';
                  },

                }
              });
            }
          })
          .catch((err) => {
            ElMessage.error(err);
          });

      window.onresize = function () {
        //自适应大小
        chart.resize();
      };
    }
    // 折线图
    function initChartLine() {
      let chart = echart.init(document.getElementById("myEchartsLine"));
      // 把配置和数据放这里
      chart.setOption({
        title: {
          left: "left",
        },
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
        },
        lineStyle: {
          color: "rgba(238, 10, 36, 1)",
        },
        symbol: "circle", // 拐点的形状
        symbolSize: 6,
        series: [
          {
            data: [],
            type: "line",
            itemStyle: {
              //下面是拐点样式配置属性
              color: "rgba(238, 10, 36, 1)",
            },
          },
        ],
      });
      const lineData = ref({});
      const selectString = valueSelect.value.split(",");
      if (selectString.length === 2) {
        const param = {
          date: selectString[0],
          type: selectString[1],
        };
        http({
          url: http.adornUrl(`/home/discountChart`),
          method: 'post',
          params: http.adornParams(param),
          data: param
        }).then((res) => {
          if(res){
            lineData.value = res.data.data;
            chart.setOption({
              data: lineData.value.dayMonth,
              series: [
                {
                  data: lineData.value.data, //赋值
                },
              ],
            });
          }
        });
      }
      window.onresize = function () {
        //自适应大小
        chart.resize();
      };
    }
    const dataOverview = ref({});
    function getHomePageData() {
      http({
        url: http.adornUrl(`/home/count/`),
        method: 'get',
        params: http.adornParams({})
      })
          .then((res) => {
            if(res){
              dataOverview.value = res.data.data;
            }
          })
          .catch((err) => {
            ElMessage.error(err);
          });
    }
    function accessTypeFilter() {
      http({
        url: http.adornUrl(`/home/accessTypeFilter`),
        method: 'get',
        params: http.adornParams({})
      })
          .then((res) => {
            if(res){
              options.value = res.data.data;
              if (options.value) {
                valueSelect.value =
                    options.value[0].configItemName +
                    "," +
                    options.value[0].configItemDesc;
                initChartLine();
              }
            }
          })
          .catch((err) => {
            ElMessage.error(err);
          });
    }
    return {
      initChart,
      initChartLine,
      valueSelect,
      options,
      getHomePageData,
      dataOverview,
      accessTypeFilter,
      changeDate,
    };
  },
};
</script>
<style scoped lang="less">


@media (max-width:12080px){
  .homeBox{
    min-width: 1240px;
    padding: 0 20px;
    background-color: rgba(245, 247, 250, 1);
    .title{
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      color: rgba(0, 0, 0, 1);
      padding: 24px 0 16px 0;
    }
    .topBox{
      display: flex;
      .dataBox{
        margin-right:20px;
        display: flex;
        flex-direction: column;
        min-width: 283px;
        flex: 1 0 183px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 8px  rgba(0, 0, 0, 0.15);
        .questionMark{
          width: 30px;
          float: right;
          margin: 6px 6px 6px 0;
          overflow: hidden;
        }
        .dataBoxBottom{
          display: flex;
          padding: 0 20px 20px 20px;
          img{
            width: 54px;
          }
          .content{
            margin-left: 16px;
            .contentTop{
              font-size: 18px;
              font-weight: 400;
              line-height: 28px;
              color: rgba(50, 50, 51, 1);
              margin-bottom: 10px;
            }
            .contentBottom{
              font-size: 34px;
              font-weight: 700;
              line-height: 28px;
              color: rgba(50, 50, 51, 1);
              span{
                font-size: 20px;
                font-weight: 400;
                line-height: 28px;
                color: rgba(0, 0, 0, 1);
              }
            }
          }
        }
      }
    }
    .bottomBoxCharts{
      display: flex;
    }
    .canvas{
      background-color: #fff;
      margin-right: 20px;
      border-radius: 8px;
      box-shadow: 0px 2px 8px  rgba(0, 0, 0, 0.15);
      padding: 16px;
      flex: 1 0 183px;
      .lineCss{
        min-width: 616px;
        height: 364px;
      }
      .bieCss{
        min-width: 497px;
        height: 364px;
      }
      .canvasTitle{
        display: flex;
        justify-content: space-between;
        .canvasTitleLeft{
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          color: rgba(29, 33, 41, 1);
          .questionMark{
            width: 30px;
            float: right;
            margin: 6px 6px 6px 0;
            overflow: hidden;
            float:right;
            margin-top:-3px;
            margin-left:4px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1451px) and (max-width:1610px) {
  .homeBox{
    padding: 0 20px;
    background-color: rgba(245, 247, 250, 1);
    .title{
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      color: rgba(0, 0, 0, 1);
      padding: 24px 0 16px 0;
    }
    .topBox{
      display: flex;
      .dataBox{
        margin-right:22px;
        display: flex;
        flex-direction: column;
        min-width: 314px;
        flex: 1 0 183px;
        border-radius: 8.9px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 8px  rgba(0, 0, 0, 0.15);
        .questionMark{
          width: 30px;
          float: right;
          margin: 6px 6px 6px 0;
          overflow: hidden;
        }
        .dataBoxBottom{
          display: flex;
          padding: 0 25px 25px 25px;
          .dataBoxBottomImg{
            margin-top: 10px;
            img{
              width: 60px;
            }
          }

          .content{
            margin-left: 9px;
            .contentTop{
              font-size: 18px;
              font-weight: 400;
              line-height: 28px;
              color: rgba(50, 50, 51, 1);
              margin-bottom: 18px;
            }
            .contentBottom{
              font-size: 34px;
              font-weight: 700;
              line-height: 28px;
              color: rgba(50, 50, 51, 1);
              span{
                font-size: 20px;
                font-weight: 400;
                line-height: 28px;
                color: rgba(0, 0, 0, 1);
              }
            }
          }
        }
      }
    }
    .bottomBoxCharts{
      display: flex;
    }
    .canvas{
      background-color: #fff;
      margin-right: 20px;
      border-radius: 8px;
      box-shadow: 0px 2px 8px  rgba(0, 0, 0, 0.15);
      padding: 16px;
      flex: 1 0 183px;
      .lineCss{
        min-width: 616px;
        height: 364px;
      }
      .bieCss{
        min-width: 497px;
        height: 364px;
      }
      .canvasTitle{
        display: flex;
        justify-content: space-between;
        .canvasTitleLeft{
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          color: rgba(29, 33, 41, 1);
          .questionMark{
            width: 30px;
            float: right;
            margin: 6px 6px 6px 0;
            overflow: hidden;
            float:right;
            margin-top:-3px;
            margin-left:4px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1611px) and (max-width:1690px) {
  .homeBox{
    padding: 0 20px;
    background-color: rgba(245, 247, 250, 1);
    .title{
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      color: rgba(0, 0, 0, 1);
      padding: 24px 0 16px 0;
    }
    .topBox{
      display: flex;
      .dataBox{
        margin-right:22px;
        display: flex;
        flex-direction: column;
        min-width: 314px;
        flex: 1 0 183px;
        border-radius: 8.9px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 8px  rgba(0, 0, 0, 0.15);
        .questionMark{
          width: 30px;
          float: right;
          margin: 6px 6px 6px 0;
          overflow: hidden;
        }
        .dataBoxBottom{
          display: flex;
          padding: 0 25px 25px 25px;
          .dataBoxBottomImg{
            margin-top: 10px;
            img{
              width: 63px;
            }
          }

          .content{
            margin-left: 9px;
            .contentTop{
              margin-bottom: 16px;
              font-size: 21px;
              font-weight: 400;
              line-height: 32.67px;
              color: rgba(50, 50, 51, 1);
            }
            .contentBottom{
              font-size: 39.67px;
              font-weight: 700;
              line-height: 32.67px;
              color: rgba(50, 50, 51, 1);
              span{
                font-size: 23.33px;
                font-weight: 400;
                line-height: 32.67px;
                color: rgba(0, 0, 0, 1);
              }
            }
          }
        }
      }
    }
    .bottomBoxCharts{
      display: flex;
    }
    .canvas{
      background-color: #fff;
      margin-right: 20px;
      border-radius: 8px;
      box-shadow: 0px 2px 8px  rgba(0, 0, 0, 0.15);
      padding: 16px;
      flex: 1 0 183px;
      .lineCss{
        min-width: 616px;
        height: 364px;
      }
      .bieCss{
        min-width: 497px;
        height: 364px;
      }
      .canvasTitle{
        display: flex;
        justify-content: space-between;
        .canvasTitleLeft{
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          color: rgba(29, 33, 41, 1);
          .questionMark{
            width: 30px;
            float: right;
            margin: 6px 6px 6px 0;
            overflow: hidden;
            float:right;
            margin-top:-3px;
            margin-left:4px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1691px) and(max-width:1920px) {
  .homeBox{
    padding: 0 20px;
    background-color: rgba(245, 247, 250, 1);
    .title{
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      color: rgba(0, 0, 0, 1);
      padding: 24px 0 16px 0;
    }
    .topBox{
      display: flex;
      .dataBox{
        margin-right:22px;
        display: flex;
        flex-direction: column;
        min-width: 314px;
        flex: 1 0 183px;
        border-radius: 8.9px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 8px  rgba(0, 0, 0, 0.15);
        .questionMark{
          width: 30px;
          float: right;
          margin: 6px 6px 6px 0;
          overflow: hidden;
        }
        .dataBoxBottom{
          display: flex;
          padding: 0 25px 25px 25px;
          .dataBoxBottomImg{
            margin-top: 10px;
            img{
              width: 72px;
            }
          }

          .content{
            margin-left: 9px;
            .contentTop{
              margin-bottom: 20px;
              font-size: 24px;
              font-weight: 400;
              line-height: 37.33px;
              color: rgba(50, 50, 51, 1);
            }
            .contentBottom{
              font-size: 45.33px;
              font-weight: 700;
              line-height: 37.33px;
              color: rgba(50, 50, 51, 1);
              span{
                font-size: 26.67px;
                font-weight: 400;
                line-height: 37.33px;
                color: rgba(0, 0, 0, 1);
              }
            }
          }
        }
      }
    }
    .bottomBoxCharts{
      display: flex;
    }
    .canvas{
      background-color: #fff;
      margin-right: 20px;
      border-radius: 8px;
      box-shadow: 0px 2px 8px  rgba(0, 0, 0, 0.15);
      padding: 16px;
      flex: 1 0 183px;
      .lineCss{
        min-width: 616px;
        height: 364px;
      }
      .bieCss{
        min-width: 497px;
        height: 364px;
      }
      .canvasTitle{
        display: flex;
        justify-content: space-between;
        .canvasTitleLeft{
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          color: rgba(29, 33, 41, 1);
          .questionMark{
            width: 30px;
            float: right;
            margin: 6px 6px 6px 0;
            overflow: hidden;
            float:right;
            margin-top:-3px;
            margin-left:4px;
          }
        }
      }
    }
  }
}
</style>
