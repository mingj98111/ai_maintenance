<template>
    <div class="map-container">
      <div class="chinaMap" ref="map"></div>
      <div v-if="selectedCity" class="infoBox">
        <p><strong>{{ selectedCity.name }}:</strong> </p>
        <p><strong>人员:</strong> {{ selectedCity.people }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import "echarts/map/js/china.js";
  import * as echarts from 'echarts';
  
  export default {
    name: 'WorldMap',
    data() {
      return {
        selectedCity: null,
      };
    },
    methods: {
      setMap() {
        const data = [
          { name: '广州', value: 200 },
          { name: '郑州', value: 300 },
          { name: '北京', value: 200 },
          { name: '沈阳', value: 200 },
          { name: '上海', value: 200 },
          { name: '乌鲁木齐', value: 200 },
        ];
  
        const geoCoordMap = {
          '北京': [116.46, 39.92],
          '郑州': [113.65, 34.76],
          '广州': [113.23, 23.16],
          '沈阳': [123.38, 41.8],
          '上海': [121.48, 31.22],
          '乌鲁木齐': [87.68, 43.77],
        };
  
        const cityInfo = {
          '北京': '沈明京',
          '郑州': '范杰，李宇飞，杨乐，王储，刘孟萌',
          '广州': '梁健彬',
          '沈阳': '沙治宇',
          '上海': '杨铭',
          '乌鲁木齐': '马利媛',
        };
  
        // 设置飞线
        const convertData = function (from, to) {
          const fromCoord = geoCoordMap[from];
          const toCoord = geoCoordMap[to];
          if (fromCoord && toCoord) {
            return [{
              fromName: from,
              toName: to,
              coords: [fromCoord, toCoord],
            }];
          }
          return [];
        };
  
        const option = {
          title: [
            {
              text: '科信部统管',
              top: '10.8%',
              left: '3.5%',
              textStyle: {
                color: '#00CCFF',
                fontSize: 19,
                fontWeight: 'normal',
              }
            },
          ],
          geo: {
            map: 'china',
            roam: false,
            zoom: 1.2, // Slight zoom to better fit the map in the screen
            center: [104.114129, 37.550339], // Centered around China
            itemStyle: {
              areaColor: '#2043AA', // Light blue background color
              borderColor: '#111',
            },
          },
          series: [
            // 飞线
            {
              name: '飞线',
              type: 'lines',
              coordinateSystem: 'geo',
              zlevel: 2,
              effect: {
                show: true,
                period: 4, // 控制流动速度，数值越小，飞线越快
                constantSpeed: 32, // 飞线的速度
                trailLength: 0.3, // 飞线的拖尾长度，增加拖尾感
                symbol: 'arrow', // 飞线尾部显示箭头
                symbolSize: 8, // 箭头大小
              },
              lineStyle: {
                normal: {
                  color: '#ADD8E6', // 飞线的颜色
                  width: 2,
                  opacity: 0.6,
                  curveness: 0.2,
                },
              },
              data: [
                ...convertData('北京', '广州'),
                ...convertData('郑州', '广州'),
                ...convertData('乌鲁木齐', '广州'),
                ...convertData('上海', '广州'),
                ...convertData('沈阳', '广州'),
              ],
            },
            // 城市数据点
            {
              name: '城市数据',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: data.map(d => ({
                name: d.name,
                value: geoCoordMap[d.name].concat(d.value),
              })),
              symbolSize: function (val) {
                return val[2] / 10;
              },
              label: {
                formatter: '{b}',
                position: 'right',
                show: true,
              },
              tooltip: {
                trigger: 'item', // Trigger tooltip on hover
                formatter: function (params) {
                  const cityName = params.name;
                  console.log('Hovering over:', cityName); // Debugging line
                  return `
                    <div><strong>${cityName}</strong></div>
                    <div><strong>人员:</strong> ${cityInfo[cityName] || '暂无信息'}</div>
                  `;
                },
                backgroundColor: '#00CCFF', // Optional: to match infoBox style
                borderRadius: 5,
                padding: [5, 10],
                textStyle: {
                  color: '#fff',
                },
              },
              itemStyle: {
                color: '#00CCFF',
              },
            },
          ],
        };
  
        const mapChart = echarts.init(this.$refs.map);
        mapChart.setOption(option);
  
        mapChart.on('mouseover', (params) => {
          // Highlight on mouseover, for visual feedback
          console.log('Hovered city:', params.name); // Debugging line
          this.selectedCity = {
            name: params.name,
            people: cityInfo[params.name] || '暂无信息',
          };
        });
  
        mapChart.on('mouseout', () => {
          this.selectedCity = null; // Reset on mouse out
        });
      },
    },
    mounted() {
      this.setMap();
    },
  };
  </script>
  
  <style scoped>
  .map-container {
    position: relative;
    width: 100%;
    height: 58vh; /* Ensure full screen height */
  }
  
  .chinaMap {
    width: 100%;
    height: 55%; /* Adjusted to make the map smaller */
    position: absolute;
    top: -15px;
    left: 0;
    z-index: 0;
  }
  
  .infoBox {
    position: absolute;
    top: 10%; /* Adjusted to move the info box slightly higher */
    left: 7.5%;
    background-color: #f4f1ed;
    padding: 10px;
    border-radius: 2px;
    z-index: 1; /* Ensure info box appears above the map */
  }
  </style>
  