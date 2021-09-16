<template>
  <div class="design">
    {{ $store.state }}
  </div>
</template>

<script>
import { resourceDomainName, normalMapUrl, baseUrl } from './const'

export default {
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {},
  created() {
    // iframe console
    const iframe = document.createElement("iframe");
    iframe.setAttribute("style", "display:none;");
    document.body.appendChild(iframe);
    this.iframeWindow = iframe.contentWindow;
    // end iframe

    // 加载账号信息
    this.$store.dispatch('loadUserInfo')
    
    // 请求：材质、宝石、设计数据
    this.$store.dispatch('loadMetalWeb')
    this.$store.dispatch('loadGemWeb')
    this.$store.dispatch('loadDesignInfo')
  },
  mounted() {
    this.iframeWindow.console.log(this.$store);
    // this.init3D();
  },
  methods: {
    // 初始化3D
    async init3D() {
      const {
        userInfo,
        metals,
        designInfo,
        partIds,
        parts,
        otherGems,
        metalWeb,
        metalWebDefault,
        gemWeb,
        gemWebDefault,
        materialWeb,
        materialWebDefault,
        webModelPics,
      } = this.$store.state

      // 加载3D第一步：初始化3D场景
      this.my3d = Bavlo.initWeb3D(
        baseUrl,
        "web3d",
        false,
        resourceDomainName,
        false
      );

      // 加载3D第二步：定义3D窗口尺寸
      this.my3d.onWindowResize(2);
      window.onresize = () => {
        this.my3d.onWindowResize(2);
      };

      // 加载3D第三步：初始化web材质
      this.my3d.initUserMatInfo(
        metalWebDefault,
        metalWeb,
        gemWebDefault,
        gemWeb
      );

      // 加载3D第四步：设置3D场景背景色
      this.my3d.changeBackground('#ccc');

      // 加载3D第五步：加载款式3D
      my3d.loadVarDesign(designInfo, designInfo.mainParts[0].id, partIds);
      
      setTimeout(() => {
        this.loadNormalUI()
      }, 500);
      this.loadLjs(2);
    },

    /**
     * 加载主件UI或配件类型UI
     * @param asType
     */
    loadLjs(asType) {
      nowAsType = asType;
      let tjHtml = "";
      if (asType == 1) {
        let i = 0;
        if (this.partsGroupByType) {
          this.partsGroupByType.filter((item) => {
            let classHtml = "";
            if (nowPartTypeIndex) {
              if (i === nowPartTypeIndex) {
                classHtml = 'class="active"';
              }
            } else {
              if (tjHtml == "") {
                classHtml = 'class="active"';
              }
            }
            tjHtml +=
              "<div " +
              classHtml +
              ' pt="' +
              item.id +
              '" >' +
              item.name +
              "</div>";
            i++;
          });
        }
        $(".partTypes").html(tjHtml);
        this.loadPj(partsGroupByType[0].id);
        $(".partTypes div").click(() => {
          $(".partTypes div").attr("class", "");
          $(this).attr("class", "active");
          let pt = $(this).attr("pt");
          nowPartTypeIndex = $(this).index();
          this.loadPj(pt);
        });
      } else if (asType == 2) {
        let i = 0;
        designInfo.mainParts.filter((item) => {
          let classHtml = "";
          if (nowJbIndex) {
            if (i === nowJbIndex) {
              classHtml = 'class="active"';
              this.nowPartId = item.id;
            }
          } else {
            if (tjHtml == "") {
              classHtml = 'class="active"';
              this.nowPartId = item.id;
            }
          }
          tjHtml +=
            '<div type="2" pd="' +
            item.id +
            '" ' +
            classHtml +
            '><img src="https://design.bavlo.com/PartRes/webImg/' +
            item.defaultImg +
            '!250"></div>';
          i++;
        });
        $(".cts").hide();
        $(".ljs").html(tjHtml);
        this.loadNormalUI();
      }
    },

    /**
     * 根据零件类型加载配件
     * @param ptId
     */
    loadPj(ptId) {
      let tjHtml = "";
      let i = 0;
      let parts = partsGroupByType.filter(function (item) {
        return item.id == ptId;
      })[0];

      parts.data.filter(function (item) {
        let classHtml = "";
        if (nowPjIndex) {
          if (i === nowPjIndex) {
            classHtml = 'class="active"';
            nowPartId = item.id;
          }
        } else {
          if (tjHtml == "") {
            classHtml = 'class="active"';
            nowPartId = item.id;
          }
        }
        tjHtml +=
          "<div " +
          classHtml +
          ' pd="' +
          item.id +
          '" type="0"><img src="https://design.bavlo.com/PartRes/webImg/' +
          item.defaultImg +
          '!250"></div>';
        i++;
      });
      $(".ljs").html(tjHtml);
      this.loadNormalUI();
    },

    /**
     * 加载花头组UI信息
     * @param gpId
     */
    loadCts(gpId) {
      setTimeout(function () {
        $(".cts").show();
      }, 5);
      $(".ljs div[gd=" + gpId + "]").addClass("active");
      let tjHtml = "";
      designInfo.partGroups.filter(function (item) {
        if (gpId == item.id) {
          let i = 0;
          item.parts.filter(function (item1) {
            let classHtml = "";
            if (nowCtIndex) {
              if (i === nowCtIndex) {
                classHtml = 'class="active"';
              }
            } else {
              if (tjHtml == "") {
                classHtml = 'class="active"';
                nowCtIndex = 0;
              }
            }
            let ctcl = item1.gemWeight;
            if (ctcl.indexOf(".") != -1) {
              let dh = ctcl.substring(ctcl.indexOf(".") + 1, ctcl.length);
              if (dh.length > 2) {
                ctcl = ctcl.substring(0, ctcl.indexOf(".") + 2);
              } else if (dh.length == 1) {
                ctcl += "0";
              }
            } else {
              ctcl += ".00";
            }
            tjHtml +=
              '<div pd="' +
              item1.id +
              '" ' +
              classHtml +
              ">" +
              ctcl +
              "ct</div>";
            i++;
          });
        }
      });
      $(".cts").html(tjHtml);
      my3d.switchPart(nowAsType, Number($(".cts .active").attr("pd")));
      $(".cts div").click(function () {
        let loadState = my3d.getLoadModelState();
        if (loadState == 2) {
          $(".cts div").attr("class", "");
          $(this).attr("class", "active");
          let pId = $(this).attr("pd");
          my3d.switchPart(nowAsType, Number(pId));
          nowCtIndex = $(this).index();
        }
      });
    },

    /**
     * 加载贴图信息UI
     */
    loadNormalUI() {
      let normals;
      let layerName;
      if (nowAsType == 1) {
        designInfo.parts.filter(function (item) {
          item.filter(function (item1) {
            if (item1.id == this.nowPartId) {
              item1.layers.filter(function (item2) {
                if (item2.normal.length > 0) {
                  normals = item2.normal;
                  layerName = item2.name;
                }
              });
            }
          });
        });
      } else {
        designInfo.mainParts.filter(function (item) {
          if (item.id == this.nowPartId) {
            item.layers.filter(function (item1) {
              if (item1.normal.length > 0) {
                normals = item1.normal;
                layerName = item1.name;
              }
            });
          }
        });
      }
      if (normals) {
        let tjHtml = "";
        normals.filter(function (item) {
          let imgHtml = "";
          if (item.onOff && item.mapNames) {
            let maps = item.mapNames;
            maps.filter(function (item1) {
              imgHtml +=
                '<div nd="' +
                item.id +
                '"><img src="' +
                normalMapUrl +
                item.id +
                "/" +
                item1.imgName +
                '" crossorigin="anonymous"/></div>\n';
            });
            tjHtml += "<div >\n" + imgHtml + "</div>";
          }
        });
        $(".normals").html(tjHtml);

        if (tjHtml) {
          $(".normals>div div img").click(function () {
            let nd = $(this).parent().attr("nd");
            let normal = normals.filter(function (item) {
              return item.id == nd;
            })[0];
            let imgSrc = $(this).attr("src");
            let defaultMap = imgSrc.substring(imgSrc.lastIndexOf("/") + 1);
            my3d.updateSubLayerMaterialNormalMap(
              nowPartId,
              layerName,
              normal.id,
              normal.sort,
              normal.onOff,
              defaultMap
            );
          });
        }
      }
    },

    /**
     * 记载材质UI
     * @param layerId
     */
    loadCzs(layerId) {
      designInfo.layers.filter(function (item) {
        if (layerId == item.id) {
          let iconUrl,
            czName = "";
          let tjHtml = "";
          if (item.type == 0) {
            if (metals) {
            } else {
              // 获取金属材质列表
              this.$store.dispatch('loadMetalList')
            }
            metals.filter(function (item1) {
              let classHtml = "";
              iconUrl = "RoundMetalIcons/" + item1.id + ".png";
              czName = item1.nameCn;
              if (czName.length > 4) {
                czName = czName.substr(0, 4);
              }
              if (item.metal.id == item1.id) {
                classHtml = 'class="active"';
              }
              tjHtml +=
                '<div md="' +
                item1.id +
                '" ' +
                classHtml +
                '><img src="https://design.bavlo.com/IconRes/' +
                iconUrl +
                '"/><span>' +
                czName +
                "</span></div>";
            });
          } else if (item.type === 1) {
            if (item.ogType === 0) {
              if (gems) {
              } else {
                // 获取宝石材质列表（用于切换材质）
                this.$store.dispatch('loadGemList')
              }
              gems.filter(function (item1) {
                if (item1.faceType == item.gem.faceType) {
                  iconUrl = "GemIcons/" + item1.id + ".png";
                  let classHtml = "";
                  czName = item1.name;
                  if (czName.indexOf("（") != -1) {
                    czName = czName.substring(0, czName.indexOf("（"));
                  }
                  if (czName.length > 4) {
                    czName = czName.substr(0, 4);
                  }
                  if (item.gem.id == item1.id) {
                    classHtml = 'class="active"';
                  }
                  tjHtml +=
                    '<div md="' +
                    item1.id +
                    '" ' +
                    classHtml +
                    '><img src="https://design.bavlo.com/IconRes/' +
                    iconUrl +
                    '"/><span>' +
                    czName +
                    "</span></div>";
                }
              });
            } else if (item.ogType === 1) {
              if (otherGems) {
              } else {
                // 获取其它宝石列表（用于切换材质）
                this.$store.dispatch('loadOtherGemList')
              }
              let otherGemsDetail = otherGems.filter(function (item1) {
                return item1.id == item.otherGem.gemType.id;
              })[0];
              otherGemsDetail.gemDetals.filter(function (item1) {
                let classHtml = "";
                if (item.otherGem.gemType.id === 1) {
                  iconUrl = "ZirconIcons/" + item1.id + ".png";
                } else if (item.otherGem.gemType.id === 2) {
                  iconUrl = "SwarovskiIcons/" + item1.id + item1.name + ".png";
                } else if (item.otherGem.gemType.id === 12) {
                  iconUrl =
                    "CzechCrystalIcons/" + item1.id + item1.name + ".png";
                } else if (item.otherGem.gemType.id === 13) {
                  iconUrl =
                    "ArtificialCrystalIcons/" + item1.id + item1.name + ".png";
                }
                czName = item1.name;
                czName = czName.substr(0, 3);
                if (item.otherGem.id == item1.id) {
                  classHtml = 'class="active"';
                }
                tjHtml +=
                  '<div md="' +
                  item1.id +
                  '" ' +
                  classHtml +
                  '><img src="https://design.bavlo.com/IconRes/' +
                  iconUrl +
                  '"/><span>' +
                  czName +
                  "</span></div>";
              });
            }
          }
          if (item.type >= 2) {
            if (materialWeb) {
            } else {
              // 获取其它材质web材质列表（用于渲染、切换材质）
              this.$store.dispatch('loadMaterialWeb')
            }
            if (materialWeb) {
              materialWeb.filter(function (item1) {
                if (item1.type == item.type) {
                  let classHtml = "";
                  let imgStyle = "background-color:rgb(" + item1.color + ");";
                  if (item1.color == "255,255,255") {
                    imgStyle += "border: 1px #e8e8e8 solid;";
                  }
                  czName = item1.name;
                  if (czName.length > 4) {
                    czName = czName.substr(0, 4);
                  }
                  if (item.metal.id == item1.id) {
                    classHtml = 'class="active"';
                  }
                  tjHtml +=
                    '<div md="' +
                    item1.id +
                    '" ' +
                    classHtml +
                    '><img style="' +
                    imgStyle +
                    '" src="img/none.png"/><span>' +
                    czName +
                    "</span></div>";
                }
              });
            }
          }
          $(".czs").html(tjHtml);
        }
      });
      $(".czs div").click(function () {
        let ld = $(".layers .active").attr("ld");
        let czId = $(this).attr("md");
        $(".czs div").attr("class", "");
        $(this).attr("class", "active");
        let layer = designInfo.layers.filter(function (item) {
          return item.id == ld;
        })[0];
        if (layer.name === "金属图层") {
          // 材质id
          texture_id = czId;
        } else if (layer.name === "配石图层") {
          // 辅钻id
          second_diamond_id = ld;
        }
        if (layer.type == 9) {
          $(".layers .active img").attr(
            "style",
            $(this).children("img").attr("style")
          );
        } else {
          $(".layers .active img").attr(
            "src",
            $(this).children("img").attr("src")
          );
        }
        $(".layers .active span").html($(this).children("span").html());
        this.changeMaterial(ld, czId);
        let nowInfo = my3d.getUserDiyInfo();
        designInfo.layers = nowInfo.layers;
      });
    },

    /**
     * 切换材质
     * @param layerId
     * @param materialId
     */
    changeMaterial(layerId, materialId) {
      let layer = designInfo.layers.filter(function (item) {
        return item.id == layerId;
      })[0];
      if (layer.type === 0) {
        let material = metals.filter(function (item) {
          return item.id == materialId;
        })[0];
        texture_id = materialId;
        texture_text = material.nameCn;
        my3d.customizeMetalClass(layer.name, material);
      }
      if (layer.type === 1) {
        if (layer.ogType == 0) {
          let material = gems.filter(function (item) {
            return item.id == materialId;
          })[0];
          second_diamond_id = materialId;
          second_diamond_text = material.nameCn;
          if (layer.gem.faceType == "faceted") {
            my3d.customizeGemClass(0, layer.name, material);
          } else {
            my3d.changeLayerMaterial(layer.name, material);
          }
        }
        if (layer.ogType == 1) {
          let materials = otherGems.filter(function (item) {
            return item.id == layer.otherGem.gemType.id;
          })[0];
          let material = materials.gemDetals.filter(function (item) {
            return item.id == materialId;
          })[0];
          material.refraction = layer.otherGem.gemType.refraction;
          my3d.customizeGemClass(1, layer.name, material);
        }
      } else if (layer.type >= 2) {
        let material = materialWeb.filter(function (item) {
          return item.id == materialId;
        })[0];
        my3d.changeLayerMaterial(layer.name, material);
      }
    },

    /**
     * 加载图层信息UI
     */
    loadDiy() {
      let tjHtml = "";
      let nowInfo = my3d.getUserDiyInfo();
      let nowPids = nowInfo.partIds.split(",");
      designInfo.layers.filter(function (item) {
        let iconUrl = "https://design.bavlo.com/IconRes/";
        let czName = "";
        let imgStyle = "";
        let hasPart = false;
        item.partLayerIds.filter(function (item1) {
          nowPids.filter(function (item2) {
            if (item1.id == item2) {
              hasPart = true;
              return;
            }
          });
        });
        if (hasPart) {
          if (item.type === -1) {
            iconUrl = "img/none.png";
            czName = item.name;
          } else if (item.type === 0) {
            iconUrl += "RoundMetalIcons/" + item.metal.id + ".png";
            czName = item.metal.nameCn;
            if (czName.length > 4) {
              czName = czName.substr(0, 4);
            }
          } else if (item.type === 1) {
            if (item.ogType === 0) {
              iconUrl += "GemIcons/" + item.gem.id + ".png";
              czName = item.gem.name;
              czName = czName.substr(0, 3);
            } else if (item.ogType === 1) {
              if (item.otherGem.gemType.id === 1) {
                iconUrl += "ZirconIcons/" + item.otherGem.id + ".png";
              } else if (item.otherGem.gemType.id === 2) {
                iconUrl +=
                  "SwarovskiIcons/" +
                  item.otherGem.id +
                  item.otherGem.name +
                  ".png";
              } else if (item.otherGem.gemType.id === 12) {
                iconUrl +=
                  "CzechCrystalIcons/" +
                  item.otherGem.id +
                  item.otherGem.name +
                  ".png";
              } else if (item.otherGem.gemType.id === 13) {
                iconUrl +=
                  "ArtificialCrystalIcons/" +
                  item.otherGem.id +
                  item.otherGem.name +
                  ".png";
              }
              czName = item.otherGem.gemType.name;
              czName = czName.substr(0, 3);
            }
          } else if (item.type >= 2) {
            iconUrl = "img/none.png";
            czName = item.materialWeb.name;
            imgStyle = "background-color:rgb(" + item.materialWeb.color + ");";
            if (item.materialWeb.color == "255,255,255") {
              imgStyle += "border: 1px #e8e8e8 solid;";
            }
            if (czName.length > 4) {
              czName = czName.substr(0, 4);
            }
          }
          if (tjHtml == "") {
            tjHtml +=
              '<div ld="' +
              item.id +
              '" class="active"><img style="' +
              imgStyle +
              '" src="' +
              iconUrl +
              '"/><br/><span>' +
              czName +
              "</span></div>";
          } else {
            tjHtml +=
              '<div ld="' +
              item.id +
              '"><img style="' +
              imgStyle +
              '" src="' +
              iconUrl +
              '"/><br/><span>' +
              czName +
              "</span></div>";
          }
        }
      });
      $(".layers").html(tjHtml);
      $(".layers div").click(function () {
        let ld = $(this).attr("ld");
        nowLayer = designInfo.layers.filter(function (item) {
          return item.id == ld;
        })[0];
        let lt = nowLayer.type;
        if (lt == -1) {
          $(".btns div:eq(3)").click();
        } else {
          this.loadCzs(ld);
          $(".layers div").attr("class", "");
          $(this).attr("class", "active");
        }
      });
    },


  },
};
</script>

<style lang="scss" scoped>
</style>
