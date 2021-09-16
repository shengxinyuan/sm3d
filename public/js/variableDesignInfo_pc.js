//------------------------------------变量------------------------------------
let designInfo, partsGroupByType, desNo
let nowAsType, nowPartTypeIndex, nowPjIndex, nowCtIndex, nowJbIndex, nowLayer;
let metals, gems, otherGems, metalWebDefault, metalWeb, gemWebDefault, gemWeb, webModelPics, materialWebDefault, materialWeb
let my3d, atop
let userInfo, nowPartId
let orderDetailMetals, orderDetailGems
let uNo

//插件根目录
let baseUrl = ''
let resourceDomainName = 'https://design.bavlo.com/'
let normalMapUrl = resourceDomainName + 'NormalFiles/'
let apiUrl = 'https://jcd.bavlo.com/manage/'

// 传输数据
// 戒臂id
// 花头Id
// 材质id
// 材质文本
// 刻字
// 辅钻id
// 辅钻文本
let ring_arm_id
let flower_head_id
let texture_id
let texture_text
let ring_print
let second_diamond_id
let second_diamond_text

//------------------------------------函数------------------------------------
// done 1 加载账号信息
function loadUserInfo() {}

// done 2 获取金属材质列表（用于切换材质）
function loadMetalList() {}

// done 3 加载款式信息
function loadDesignInfo() {}

// done 4 获取宝石材质列表（用于切换材质）
function loadGemList() {}

// done 5 获取其它宝石列表（用于切换材质）
function loadOtherGemList() {}

// done 6 获取金属web材质参数（用于渲染）
function loadMetalWeb() {}

// done 7 获取宝石web材质列表（用于渲染）
function loadGemWeb() {}

// done 8 获取其它材质web材质列表（用于渲染、切换材质）
function loadMaterialWeb() {}

// done 9 获取试戴背景图列表
function loadModelPicList() {}

/**
 * 加载花头组UI信息
 * @param gpId
 */
function loadCts(gpId) {
    setTimeout(function () {
        $('.cts').show()
    }, 5)
    $('.ljs div[gd=' + gpId + ']').addClass('active')
    let tjHtml = ''
    designInfo.partGroups.filter(function (item) {
        if (gpId == item.id) {
            let i = 0
            item.parts.filter(function (item1) {
                let classHtml = ''
                if (nowCtIndex) {
                    if (i === nowCtIndex) {
                        classHtml = 'class="active"'
                    }
                } else {
                    if (tjHtml == '') {
                        classHtml = 'class="active"'
                        nowCtIndex = 0
                    }
                }
                let ctcl = item1.gemWeight
                if (ctcl.indexOf('.') != -1) {
                    let dh = ctcl.substring(ctcl.indexOf('.') + 1, ctcl.length)
                    if (dh.length > 2) {
                        ctcl = ctcl.substring(0, ctcl.indexOf('.') + 2)
                    } else if (dh.length == 1) {
                        ctcl += '0'
                    }
                } else {
                    ctcl += '.00'
                }
                tjHtml += '<div pd="' + item1.id + '" ' + classHtml + '>' + ctcl + 'ct</div>'
                i++
            })
        }
    })
    $('.cts').html(tjHtml)
    my3d.switchPart(nowAsType, Number($('.cts .active').attr('pd')))
    $('.cts div').click(function () {
        let loadState = my3d.getLoadModelState()
        if (loadState == 2) {
            $('.cts div').attr('class', '');
            $(this).attr('class', 'active');
            let pId = $(this).attr('pd')
            my3d.switchPart(nowAsType, Number(pId))
            nowCtIndex = $(this).index()
        }
    })
}

/**
 * 根据零件类型加载配件
 * @param ptId
 */
function loadPj(ptId) {
    let tjHtml = ''
    let i = 0
    let parts = partsGroupByType.filter(function (item) {
        return item.id == ptId
    })[0]

    parts.data.filter(function (item) {
        let classHtml = ''
        if (nowPjIndex) {
            if (i === nowPjIndex) {
                classHtml = 'class="active"'
                nowPartId = item.id
            }
        } else {
            if (tjHtml == '') {
                classHtml = 'class="active"'
                nowPartId = item.id
            }
        }
        tjHtml += '<div ' + classHtml + ' pd="' + item.id + '" type="0"><img src="https://design.bavlo.com/PartRes/webImg/' + item.defaultImg + '!250"></div>'
        i++
    })
    $('.ljs').html(tjHtml)
    loadNormalUI()
}

/**
 * 加载主件UI或配件类型UI
 * @param asType
 */
function loadLjs(asType) {
    nowAsType = asType
    let tjHtml = ''
    if (asType == 1) {
        let i = 0
        if (partsGroupByType) {
            partsGroupByType.filter(function (item) {
                let classHtml = ''
                if (nowPartTypeIndex) {
                    if (i === nowPartTypeIndex) {
                        classHtml = 'class="active"'
                    }
                } else {
                    if (tjHtml == '') {
                        classHtml = 'class="active"'
                    }
                }
                tjHtml += '<div ' + classHtml + ' pt="' + item.id + '" >' + item.name + '</div>'
                i++
            })
        }
        $('.partTypes').html(tjHtml)
        loadPj(partsGroupByType[0].id)
        $('.partTypes div').click(function () {
            $('.partTypes div').attr('class', '');
            $(this).attr('class', 'active');
            let pt = $(this).attr('pt')
            nowPartTypeIndex = $(this).index()
            loadPj(pt)
        })
    } else if (asType == 2) {
        let i = 0
        designInfo.mainParts.filter(function (item) {
            let classHtml = ''
            if (nowJbIndex) {
                if (i === nowJbIndex) {
                    classHtml = 'class="active"'
                    nowPartId = item.id
                }
            } else {
                if (tjHtml == '') {
                    classHtml = 'class="active"'
                    nowPartId = item.id
                }
            }
            tjHtml += '<div type="2" pd="' + item.id + '" ' + classHtml + '><img src="https://design.bavlo.com/PartRes/webImg/' + item.defaultImg + '!250"></div>'
            i++
        })
        $('.cts').hide()
        $('.ljs').html(tjHtml)
        loadNormalUI()
    }
}

/**
 * 记载材质UI
 * @param layerId
 */
function loadCzs(layerId) {
    designInfo.layers.filter(function (item) {
        if (layerId == item.id) {
            let iconUrl, czName = ''
            let tjHtml = ''
            if (item.type == 0) {
                if (metals) { } else {
                    loadMetalList(uNo)
                }
                metals.filter(function (item1) {
                    let classHtml = ''
                    iconUrl = 'RoundMetalIcons/' + item1.id + '.png'
                    czName = item1.nameCn
                    if (czName.length > 4) {
                        czName = czName.substr(0, 4)
                    }
                    if (item.metal.id == item1.id) {
                        classHtml = 'class="active"'
                    }
                    tjHtml += '<div md="' + item1.id + '" ' + classHtml + '><img src="https://design.bavlo.com/IconRes/' + iconUrl + '"/><span>' + czName + '</span></div>'
                })
            } else if (item.type === 1) {
                if (item.ogType === 0) {
                    if (gems) { } else {
                        loadGemList(uNo)
                    }
                    gems.filter(function (item1) {
                        if (item1.faceType == item.gem.faceType) {
                            iconUrl = 'GemIcons/' + item1.id + '.png'
                            let classHtml = ''
                            czName = item1.name
                            if (czName.indexOf('（') != -1) {
                                czName = czName.substring(0, czName.indexOf('（'))
                            }
                            if (czName.length > 4) {
                                czName = czName.substr(0, 4)
                            }
                            if (item.gem.id == item1.id) {
                                classHtml = 'class="active"'
                            }
                            tjHtml += '<div md="' + item1.id + '" ' + classHtml + '><img src="https://design.bavlo.com/IconRes/' + iconUrl + '"/><span>' + czName + '</span></div>'
                        }
                    })
                } else if (item.ogType === 1) {
                    if (otherGems) { } else {
                        loadOtherGemList()
                    }
                    let otherGemsDetail = otherGems.filter(function (item1) {
                        return item1.id == item.otherGem.gemType.id
                    })[0]
                    otherGemsDetail.gemDetals.filter(function (item1) {
                        let classHtml = ''
                        if (item.otherGem.gemType.id === 1) {
                            iconUrl = 'ZirconIcons/' + item1.id + '.png'
                        } else if (item.otherGem.gemType.id === 2) {
                            iconUrl = 'SwarovskiIcons/' + item1.id + item1.name + '.png'
                        } else if (item.otherGem.gemType.id === 12) {
                            iconUrl = 'CzechCrystalIcons/' + item1.id + item1.name + '.png'
                        } else if (item.otherGem.gemType.id === 13) {
                            iconUrl = 'ArtificialCrystalIcons/' + item1.id + item1.name + '.png'
                        }
                        czName = item1.name
                        czName = czName.substr(0, 3)
                        if (item.otherGem.id == item1.id) {
                            classHtml = 'class="active"'
                        }
                        tjHtml += '<div md="' + item1.id + '" ' + classHtml + '><img src="https://design.bavlo.com/IconRes/' + iconUrl + '"/><span>' + czName + '</span></div>'
                    })
                }

            } if (item.type >= 2) {
                if (materialWeb) { } else {
                    loadMaterialWeb(uNo)
                }
                if (materialWeb) {
                    materialWeb.filter(function (item1) {
                        if (item1.type == item.type) {
                            let classHtml = ''
                            let imgStyle = 'background-color:rgb(' + item1.color + ');'
                            if (item1.color == '255,255,255') {
                                imgStyle += 'border: 1px #e8e8e8 solid;'
                            }
                            czName = item1.name
                            if (czName.length > 4) {
                                czName = czName.substr(0, 4)
                            }
                            if (item.metal.id == item1.id) {
                                classHtml = 'class="active"'
                            }
                            tjHtml += '<div md="' + item1.id + '" ' + classHtml + '><img style="' + imgStyle + '" src="img/none.png"/><span>' + czName + '</span></div>'
                        }
                    })
                }

            }
            $('.czs').html(tjHtml)
        }
    })
    $('.czs div').click(function () {
        let ld = $('.layers .active').attr('ld')
        let czId = $(this).attr('md')
        $('.czs div').attr('class', '');
        $(this).attr('class', 'active');
        let layer = designInfo.layers.filter(function (item) {
            return item.id == ld
        })[0]
        if (layer.name === '金属图层') {
            // 材质id
            texture_id = czId
        } else if (layer.name === '配石图层') {
            // 辅钻id
            second_diamond_id = ld
        }
        if (layer.type == 9) {
            $('.layers .active img').attr('style', $(this).children('img').attr('style'))
        } else {
            $('.layers .active img').attr('src', $(this).children('img').attr('src'))
        }
        $('.layers .active span').html($(this).children('span').html())
        changeMaterial(ld, czId)
        let nowInfo = my3d.getUserDiyInfo()
        designInfo.layers = nowInfo.layers
    })
}

/**
 * 切换材质
 * @param layerId
 * @param materialId
 */
function changeMaterial(layerId, materialId) {
    let layer = designInfo.layers.filter(function (item) {
        return item.id == layerId
    })[0]
    if (layer.type === 0) {
        let material = metals.filter(function (item) {
            return item.id == materialId
        })[0]
        texture_id = materialId
        texture_text = material.nameCn
        my3d.customizeMetalClass(layer.name, material);
    } if (layer.type === 1) {
        if (layer.ogType == 0) {
            let material = gems.filter(function (item) {
                return item.id == materialId
            })[0]
            second_diamond_id = materialId
            second_diamond_text = material.nameCn
            if (layer.gem.faceType == 'faceted') {
                my3d.customizeGemClass(0, layer.name, material);
            } else {
                my3d.changeLayerMaterial(layer.name, material);
            }
        } if (layer.ogType == 1) {
            let materials = otherGems.filter(function (item) {
                return item.id == layer.otherGem.gemType.id
            })[0]
            let material = materials.gemDetals.filter(function (item) {
                return item.id == materialId
            })[0]
            material.refraction = layer.otherGem.gemType.refraction
            my3d.customizeGemClass(1, layer.name, material);
        }
    } else if (layer.type >= 2) {
        let material = materialWeb.filter(function (item) {
            return item.id == materialId
        })[0]
        my3d.changeLayerMaterial(layer.name, material);
    }
}

/**
 * 加载图层信息UI
 */
function loadDiy() {
    let tjHtml = ''
    let nowInfo = my3d.getUserDiyInfo()
    let nowPids = nowInfo.partIds.split(',')
    designInfo.layers.filter(function (item) {
        let iconUrl = 'https://design.bavlo.com/IconRes/'
        let czName = ''
        let imgStyle = ''
        let hasPart = false
        item.partLayerIds.filter(function (item1) {
            nowPids.filter(function (item2) {
                if (item1.id == item2) {
                    hasPart = true
                    return
                }
            })
        })
        if (hasPart) {
            if (item.type === -1) {
                iconUrl = 'img/none.png'
                czName = item.name
            } else if (item.type === 0) {
                iconUrl += 'RoundMetalIcons/' + item.metal.id + '.png'
                czName = item.metal.nameCn
                if (czName.length > 4) {
                    czName = czName.substr(0, 4)
                }
            } else if (item.type === 1) {
                if (item.ogType === 0) {
                    iconUrl += 'GemIcons/' + item.gem.id + '.png'
                    czName = item.gem.name
                    czName = czName.substr(0, 3)
                } else if (item.ogType === 1) {
                    if (item.otherGem.gemType.id === 1) {
                        iconUrl += 'ZirconIcons/' + item.otherGem.id + '.png'
                    } else if (item.otherGem.gemType.id === 2) {
                        iconUrl += 'SwarovskiIcons/' + item.otherGem.id + item.otherGem.name + '.png'
                    } else if (item.otherGem.gemType.id === 12) {
                        iconUrl += 'CzechCrystalIcons/' + item.otherGem.id + item.otherGem.name + '.png'
                    } else if (item.otherGem.gemType.id === 13) {
                        iconUrl += 'ArtificialCrystalIcons/' + item.otherGem.id + item.otherGem.name + '.png'
                    }
                    czName = item.otherGem.gemType.name
                    czName = czName.substr(0, 3)
                }
            } else if (item.type >= 2) {
                iconUrl = 'img/none.png'
                czName = item.materialWeb.name
                imgStyle = 'background-color:rgb(' + item.materialWeb.color + ');'
                if (item.materialWeb.color == '255,255,255') {
                    imgStyle += 'border: 1px #e8e8e8 solid;'
                }
                if (czName.length > 4) {
                    czName = czName.substr(0, 4)
                }
            }
            if (tjHtml == '') {
                tjHtml += '<div ld="' + item.id + '" class="active"><img style="' + imgStyle + '" src="' + iconUrl + '"/><br/><span>' + czName + '</span></div>'
            } else {
                tjHtml += '<div ld="' + item.id + '"><img style="' + imgStyle + '" src="' + iconUrl + '"/><br/><span>' + czName + '</span></div>'
            }
        }
    })
    $('.layers').html(tjHtml)
    $('.layers div').click(function () {
        let ld = $(this).attr('ld')
        nowLayer = designInfo.layers.filter(function (item) {
            return item.id == ld
        })[0]
        let lt = nowLayer.type
        if (lt == -1) {
            $('.btns div:eq(3)').click()
        } else {
            loadCzs(ld)
            $('.layers div').attr('class', '');
            $(this).attr('class', 'active');
        }
    })
}


/**
 * 加载贴图信息UI
 */
function loadNormalUI() {
    let normals;
    let layerName;
    if (nowAsType == 1) {
        designInfo.parts.filter(function (item) {
            item.filter(function (item1) {
                if (item1.id == nowPartId) {
                    item1.layers.filter(function (item2) {
                        if (item2.normal.length > 0) {
                            normals = item2.normal
                            layerName = item2.name
                        }
                    })
                }
            })
        })
    } else {
        designInfo.mainParts.filter(function (item) {
            if (item.id == nowPartId) {
                item.layers.filter(function (item1) {
                    if (item1.normal.length > 0) {
                        normals = item1.normal
                        layerName = item1.name
                    }
                })
            }
        })
    }
    if (normals) {
        let tjHtml = ''
        normals.filter(function (item) {
            let imgHtml = ''
            if (item.onOff && item.mapNames) {
                let maps = item.mapNames
                maps.filter(function (item1) {
                    imgHtml += '<div nd="' + item.id + '"><img src="' + normalMapUrl + item.id + '/' + item1.imgName + '" crossorigin="anonymous"/></div>\n'
                })
                tjHtml += '<div >\n' + imgHtml + '</div>'
            }
        })
        $('.normals').html(tjHtml)

        if (tjHtml) {
            $('.normals>div div img').click(function () {
                let nd = $(this).parent().attr('nd')
                let normal = normals.filter(function (item) {
                    return item.id == nd
                })[0]
                let imgSrc = $(this).attr('src')
                let defaultMap = imgSrc.substring(imgSrc.lastIndexOf('/') + 1)
                my3d.updateSubLayerMaterialNormalMap(nowPartId, layerName, normal.id, normal.sort, normal.onOff, defaultMap)
            })
        }
    }

}

//------------------------------------页面初始化------------------------------------
//获取ID信息
uNo = 20230;
desNo = 30163;
loadUserInfo(uNo)

//初始化
$(document).ready(function () {
    //加载3D第一步：初始化3D场景
    my3d = Bavlo.initWeb3D(baseUrl, 'web3d', false, resourceDomainName, false)
    //加载3D第二步：定义3D窗口尺寸
    my3d.onWindowResize(2);
    //加载3D第三步：初始化web材质
    loadMetalWeb(uNo)
    loadGemWeb(uNo)
    my3d.initUserMatInfo(metalWebDefault, metalWeb, gemWebDefault, gemWeb)
    //记载3D第四步：设置3D场景背景色
    if (userInfo.webBackgroundColor) {
        my3d.changeBackground(userInfo.webBackgroundColor)
    }
    //记载3D第五步：加载款式3D
    loadDesignInfo()
    let partIds = ""
    let parts = [];
    designInfo.parts.filter(function (item) {
        parts.push.apply(parts, item);
        partIds += item[0].id + ","
    })
    partIds = partIds.substring(0, partIds.length - 1)
    iframeWindow.console.log(designInfo, designInfo.mainParts[0].id, partIds);
    my3d.loadVarDesign(designInfo, designInfo.mainParts[0].id, partIds);


    //处理配件按类型分组
    var map = {},
        dest = [];
    for (var i = 0; i < parts.length; i++) {
        var ai = parts[i];
        if (!map[ai.partType.id]) {
            dest.push({
                id: ai.partType.id,
                name: ai.partType.name,
                data: [ai]
            });
            map[ai.partType.id] = ai;
        } else {
            for (var j = 0; j < dest.length; j++) {
                var dj = dest[j];
                if (dj.id == ai.partType.id) {
                    dj.data.push(ai);
                    break;
                }
            }
        }
    }
    partsGroupByType = dest


    //当前零件ID
    nowPartId = designInfo.mainParts[0].id
    setTimeout(loadNormalUI(), 500)
    loadLjs(2)

});



//------------------------------------事件处理------------------------------------
//操作提示展示
$('.topBtn img:eq(0)').click(function () {
    $('.helpDetail').show();
})
//关闭操作提示
$('.helpDetail div:last').click(function () {
    $('.helpDetail').hide();
})

//款式复位
$('.topBtn img:eq(2)').click(function () {
    my3d.postureReset();
})
//款式自转设置
let rotate = true;
$('.topBtn img:eq(3)').click(function () {
    rotate = !rotate;
    my3d.setRotationState(rotate);
    if (rotate) {
        $('.topBtn img:eq(3)').attr('src', 'img/stop.png');
    } else {
        $('.topBtn img:eq(3)').attr('src', 'img/play.png');
    }
})
//跳转首页
$('.topBtn img:eq(4)').click(function () {
    /*let hcid = localStorage.getItem('userInfo');
    if(hcid){
        window.close();
    }else {*/
    window.location.href = 'index_pc.html?l=1&v=' + usNo;
    //}
})

//加载主体UI
$('.btns div:eq(0)').click(function () {
    loadLjs(2)
    $('.layers').hide()
    $('.czs').hide()
    $('.ky').hide()
    $('.partTypes').hide()
    $('.ljs').show()
})
//加载主体配件UI
$('.btns div:eq(1)').click(function () {
    loadLjs(1)
    $('.layers').hide()
    $('.czs').hide()
    $('.ky').hide()
    $('.partTypes').show()
    $('.ljs').show()
})
//加载图层信息和材质信息
$('.btns div:eq(2)').click(function () {
    loadDiy()
    loadCzs(designInfo.layers[0].id)
    $('.cts').hide()
    $('.ljs').hide()
    $('.ky').hide()
    $('.partTypes').hide()
    $('.layers').show()
    $('.czs').show()
})
//刻字
$('.btns div:eq(3)').click(function () {
    let state = my3d.getTryOnState();
    if (state === 0) {
        $('.cts').hide()
        $('.ljs').hide()
        $('.layers').hide()
        $('.czs').hide()
        $('.partTypes').hide()
        $('.ky').show()
    }
})
$('.ky input').bind('keyup', function (event) {
    if (event.keyCode == "13") {
        //回车执行查询
        $('.ky button').click();
    }
});
$('.ky button').click(function () {
    let kyText = $('.ky input').val()
    if (kyText.length <= 16) {
        // 刻字
        ring_print = kyText
        my3d.printUserTextOfLayer(nowLayer.id, kyText)
        rotate = false;
        my3d.setRotationState(rotate);
        $('.topBtn img:eq(3)').attr('src', 'img/play.png');
    } else {
        alert('刻字内容不可超过16个字符！')
    }
})
//图片试戴
$('.btns div:eq(4)').click(function () {
    if (webModelPics) { } else {
        loadModelPicList()
    }
    let state = my3d.getTryOnState();
    if (state === 0) {
        let dheight = $('.show').height();
        $('.show').css('width', (dheight / 4 * 3) + 'px')
        my3d.onWindowResize(0)
        $('.tbbts').css('width', (dheight * 0.7) + 'px')
        let nowWebModelPic = webModelPics[0]
        nowWebModelPic.imgUrl = 'https://design.bavlo.com/WebModelPics/' + uNo + '/' + nowWebModelPic.name;
        my3d.setModelTryonMode(true, nowWebModelPic)
        //$(this).attr('src', 'img/img_closeTry.png');
        $('.topBtn').hide()
        $('.partTypes').hide()
        $('.tbbts input').show()
        $('.ky').hide()
    } else {
        my3d.setModelTryonMode(false, null)
        $('.show').css('width', '')
        my3d.onWindowResize(2)
        $('.topBtn').show()
        $('.tbbts input').hide()
        $('.tbbts input').val(1)
        //$(this).attr('src', 'img/img_try.png');
        if ($('.ljs').css('display') == 'none' && $('.layers').css('display') == 'none') {
            $('.btns div:eq(0)').click()
        }
    }
    //alert("模特试戴即将开放！");
})
$('.tbbts input').bind('input propertychange', function () {
    my3d.zoomCamera($('.tbbts input').val());
});

//定位到底部信息部分
$('.btns div:eq(5)').click(function () {
    location.href = "#bottom";
})

//零件点击
$('.ljs').on('click', 'div', function () {
    let loadState = 2;//my3d.getLoadModelState()
    if (loadState == 2) {
        if (nowAsType == 1) {
            nowPjIndex = $(this).index()
        } else {
            nowJbIndex = $(this).index()
        }
        $('.ljs .active').removeClass('active');
        let type = $(this).attr('type');
        let pId = $(this).attr('pd');
        nowAsType
        nowPartId = pId
        // 戒臂id
        // 花头Id
        if (nowAsType == 1) {
            flower_head_id = pId
        } else {
            ring_arm_id = pId
        }
        if (type == 1) {
            let gpId = $(this).attr('gd')
            nowCtIndex = null
            loadCts(gpId)
            $('.mgw').remove()
        } else {
            $(this).addClass('active');
            $('.cts').hide()
            my3d.switchPart(nowAsType, Number(pId))
        }
        loadNormalUI()
    }
})

//零件旋转
$('.rotate button').click(function () {
    let jd = 30
    my3d.setPartRotation(nowPartId, 'y', jd)
})

let a = false

$('.bag-list__btn--buy').click(function () {
    // 输出当前的图片
    iframeWindow.console.log(my3d.getDesignImage());
    // 输出当前的配置信息
    iframeWindow.console.log(my3d.getUserDiyInfo());
    // 配合上面的boolean a实现每两次记载一下设计信息
    if (a) {
        my3d.loadVarDesign(designInfo, ring_arm_id, flower_head_id);
        a = !a
    } else {
        a = !a
    }
})