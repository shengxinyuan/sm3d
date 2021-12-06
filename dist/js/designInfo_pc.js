
    //-------------------------变量-------------------------
    let designInfo, collocations, nowCollocation;
    let metalWebDefault, gemWebDefault, webModelPics;
    let my3d, atop;
	
	
    //core根目录
	let baseUrl = ''
	let resourceDomainName = 'https://design.bavlo.com/'
	let normalMapUrl = resourceDomainName + 'NormalFiles/'
	let apiUrl = 'https://jcd.bavlo.com/manage/'


    //-------------------------函数-------------------------
    /**
     * 获取url参数
     * @param variable 参数名称
     * @returns {string|boolean}
     */
    function getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }

    /**
     * 获取金属web材质
     * @param userId 账号ID
     */
    function loadMetalWeb(userId){
        $.ajax({
            url: apiUrl+"app/findMetalWebsByUser",
            type: "POST",
            data: {userId: userId},
            crossDomain: true,
            async: false,
            success: function (data) {
                data = $.parseJSON(data);
                if(data.code === 0){
                    if(userId == 0){
                        metalWebDefault = data.list
                    }else{
                        metalWeb = data.list
                    }
                }else{
                    myAlert('数据加载失败！', 'alert-danger')
                }
            }
        });
    }

    /**
     * 获取宝石web材质
     * @param userId 账号ID
     */
    function loadGemWeb(userId){
        $.ajax({
            url: apiUrl+"app/findGemWebsByUser",
            type: "POST",
            data: {userId: userId},
            async: false,
            crossDomain: true,
            success: function (data) {
                data = $.parseJSON(data);
                if(data.code === 0){
                    if(userId == 0){
                        gemWebDefault = data.list
                    }else{
                        gemWeb = data.list
                    }
                }else{
                    myAlert('数据加载失败！', 'alert-danger')
                }
            }
        });
    }

    /**
     * 获取试戴图
     */
    function  loadModelPicList(){
        $.ajax({
            url: apiUrl + "app/webModelPicList",
            type: "POST",
            data: {userId : uNo, desTypeId : designInfo.type.id},
            crossDomain: true,
            async: false,
            success: function (data) {
                data = $.parseJSON(data);
                if(data.code === 0){
                    webModelPics = data.list
                }else{
                    myAlert('数据加载失败！', 'alert-danger')
                }
            }
        });
    }

    /**
     * 获取账号信息
     */
    function loadUserInfo(){
        let userNo = getQueryVariable('userNo')
        $.ajax({
            url: apiUrl+"app/userInfo",
            type: "POST",
            data: {id:userNo},
            crossDomain: true,
            async: false,
            success: function (data) {
                data = $.parseJSON(data);
                if(data.code === 0){
                    uInfo = data.user;
                }else{
                    alert("数据加载失败！");
                }
            }
        });
    }

    /**
     * 获取款式信息
     */
    function loadDesignInfo(){
        $.ajax({
            url: apiUrl + "app/designLayerInfo",
            type: "POST",
            data: {designId : desNo},
            crossDomain: true,
            async: false,
            success: function (data) {
                data = $.parseJSON(data);
                if (data.code === 0) {
                    designInfo = data.designInfo;
                }else{
                    alert("数据加载失败！");
                }
            }
        })
    }

    /**
     * 显示搭配信息
     */
    function showLayerInfo(){
        let layerInfo = '';
        for (let i = 0; i < designInfo.layers.length ; i++) {
            let layInfo = designInfo.layers[i];
            let lweight = Number(layInfo.weight);
            lweight = lweight.toFixed(3);
            for (let j = 0; j < nowCollocation.details.length; j++) {
                let colloLayerInfo = nowCollocation.details[j]
                if(layInfo.id === colloLayerInfo.layerId){
                    if(layInfo.type === 0){
                        layerInfo += '<div class="row">'+colloLayerInfo.metal.nameCn+'</div>\n';
                    }else if(layInfo.type === 1){
                        if(colloLayerInfo.ogType === 0){
                            layerInfo += '<div class="row">'+colloLayerInfo.gem.name+'：'+layInfo.num+'颗</div>\n';
                        }else if(colloLayerInfo.ogType === 1){
                            layerInfo += '<div class="row">'+colloLayerInfo.otherGem.gemType.name+'（'+colloLayerInfo.otherGem.name+'） ：'+layInfo.num+'颗</div>\n';
                        }else if(colloLayerInfo.ogType === 2){
                            layerInfo += '<div class="row">'+colloLayerInfo.customGem.name+'：'+layInfo.num+'颗</div>\n';
                        }
                    }else if(layInfo.type === 2){
                        layerInfo += '<div class="row">滴胶：'+colloLayerInfo.lacquer.name+'</div>\n';
                    }else if(layInfo.type === 3){
                        if(layInfo.ogType === 0){
                            layerInfo += '<div class="row">玻璃：'+colloLayerInfo.glass.nameCn+'</div>\n';
                        }else if(layInfo.ogType === 1){
                            layerInfo += '<div class="row">毛玻璃：'+colloLayerInfo.glass.nameCn+'</div>\n';
                        }
                    }else if(layInfo.type === 4){
                        if(colloLayerInfo.otherMaterials.mType === 4){
                            layerInfo += '<div class="row">纤维：'+colloLayerInfo.otherMaterials.name+'</div>\n';
                        }else if(colloLayerInfo.otherMaterials.mType === 5){
                            layerInfo += '<div class="row">皮革：'+colloLayerInfo.otherMaterials.name+'</div>\n';
                        }else if(colloLayerInfo.otherMaterials.mType === 6){
                            layerInfo += '<div class="row">车漆：'+colloLayerInfo.otherMaterials.name+'</div>\n';
                        }else if(colloLayerInfo.otherMaterials.mType === 7){
                            layerInfo += '<div class="row">塑料：'+colloLayerInfo.otherMaterials.name+'</div>\n';
                        }else if(colloLayerInfo.otherMaterials.mType === 8){
                            layerInfo += '<div class="row">木质：'+colloLayerInfo.otherMaterials.name+'</div>\n';
                        }
                    }
                    break
                }
            }

        }

        if(nowCollocation.price !== 0){
            $('.price').html(nowCollocation.price+'元');
        }else{
            $('.price').html('');
        }

        $('.layInfo').html(layerInfo)
    }

    /**
     * 加载搭配列表
     */
    function loadCollocationList(){
        $.ajax({
            url: apiUrl + "app/findCollocationsByDesignId",
            type: "POST",
            data: {designId : designInfo.id},
            crossDomain: true,
            async: false,
            success: function (data) {
                data = $.parseJSON(data);
                if(data.code === 0){
                    if(data.list.length > 1){
                        $('.collocations').css('display', 'block')
                    }else{
                        $('.top').css('border-bottom', '2px solid rgba(0,0,0,0.2)')
                    }
                    collocations = data.list
                    let listHtml = ''
                    for (let i = 0; i < data.list.length; i++) {
                        let collocation = data.list[i]
                        let className = 'carousel-item'
                        if(i === 0){
                            className = 'carousel-item active'
                        }
                        let dpList = ''
                        for (let j = 0; j < collocation.details.length; j++) {
                            let dpDetail = collocation.details[j]
                            designInfo.layers.filter(function(item){
                                let iconUrl = ''
                                let czName = ''
                                if(dpDetail.layerId == item.id){
                                    if(item.type === 0){
                                        iconUrl = 'RoundMetalIcons/'+dpDetail.metal.id+'.png'
                                        czName = dpDetail.metal.nameCn
                                        if(czName.length > 4){
                                            czName = czName.substr(0, 4)
                                        }
                                        dpList += '<div align="center"><img src="https://design.bavlo.com/IconRes/'+iconUrl+'"/><br/>'+czName+'</div>'
                                    }
                                }
                            })
                        }
                        for (let j = 0; j < collocation.details.length; j++) {
                            let dpDetail = collocation.details[j]

                            designInfo.layers.filter(function(item){
                                let iconUrl = ''
                                let czName = ''
                                if(dpDetail.layerId == item.id && item.isMain == 1){
                                    if(item.type === 1){
                                        if(dpDetail.ogType === 0){
                                            iconUrl = 'GemIcons/'+dpDetail.gem.id+'.png'
                                            czName = dpDetail.gem.name
                                            czName = czName.substr(0, 3)
                                            dpList += '<div align="center"><img src="https://design.bavlo.com/IconRes/'+iconUrl+'"/><br/>'+czName+'</div>'
                                        }else if(dpDetail.ogType === 1){
                                            if(dpDetail.otherGem.gemType.id === 1){
                                                iconUrl = 'ZirconIcons/'+dpDetail.otherGem.id+'.png'
                                            }else if(dpDetail.otherGem.gemType.id === 2){
                                                iconUrl = 'SwarovskiIcons/'+dpDetail.otherGem.id+dpDetail.otherGem.name+'.png'
                                            }else if(dpDetail.otherGem.gemType.id === 12){
                                                iconUrl = 'CzechCrystalIcons/'+dpDetail.otherGem.id+dpDetail.otherGem.name+'.png'
                                            }else if(dpDetail.otherGem.gemType.id === 13){
                                                iconUrl = 'ArtificialCrystalIcons/'+dpDetail.otherGem.id+dpDetail.otherGem.name+'.png'
                                            }
                                            czName = dpDetail.otherGem.gemType.name//+'（'+dpDetail.otherGem.name+'）'
                                            czName = czName.substr(0, 3)
                                            dpList += '<div align="center"><img src="https://design.bavlo.com/IconRes/'+iconUrl+'"/><br/>'+czName+'</div>'
                                        }
                                    }
                                }
                            })
                        }
                        for (let j = 0; j < collocation.details.length; j++) {
                            let dpDetail = collocation.details[j]

                            designInfo.layers.filter(function(item){
                                let iconUrl = ''
                                let czName = ''
                                if(dpDetail.layerId == item.id && item.isMain == 0){
                                    if(item.type === 1){
                                        if(dpDetail.ogType === 0){
                                            iconUrl = 'GemIcons/'+dpDetail.gem.id+'.png'
                                            czName = dpDetail.gem.name
                                            czName = czName.substr(0, 3)
                                            dpList += '<div align="center"><img src="https://design.bavlo.com/IconRes/'+iconUrl+'"/><br/>'+czName+'</div>'
                                        }else if(dpDetail.ogType === 1){
                                            if(dpDetail.otherGem.gemType.id === 1){
                                                iconUrl = 'ZirconIcons/'+dpDetail.otherGem.id+'.png'
                                            }else if(dpDetail.otherGem.gemType.id === 2){
                                                iconUrl = 'SwarovskiIcons/'+dpDetail.otherGem.id+dpDetail.otherGem.name+'.png'
                                            }else if(dpDetail.otherGem.gemType.id === 12){
                                                iconUrl = 'CzechCrystalIcons/'+dpDetail.otherGem.id+dpDetail.otherGem.name+'.png'
                                            }else if(dpDetail.otherGem.gemType.id === 13){
                                                iconUrl = 'ArtificialCrystal/'+dpDetail.otherGem.id+dpDetail.otherGem.name+'.png'
                                            }
                                            czName = dpDetail.otherGem.gemType.name//+'（'+dpDetail.otherGem.name+'）'
                                            czName = czName.substr(0, 3)
                                            dpList += '<div align="center"><img src="https://design.bavlo.com/IconRes/'+iconUrl+'"/><br/>'+czName+'</div>'
                                        }
                                    }
                                }
                            })
                        }
                        listHtml += '<div class="'+className+'" type="'+collocation.id+'">\n' +
                            '                <div class="row justify-content-center">\n' +dpList+
                            '                </div>\n' +
                            '            </div>'
                    }
                    $('.carousel-inner').html(listHtml)
                }else{
                    myAlert('数据加载失败！', 'alert-danger')
                }
            }
        });
    }

    /**
     * 加载搭配信息
     * @param collId 搭配ID
     */
    function loadCollocation(collId){
        nowCollocation = collocations.filter(function (item) {
            return item.id == collId;
        })[0]

        showLayerInfo()
        for (let i = 0; i < nowCollocation.details.length; i++) {
            let collLayer = nowCollocation.details[i]
            for (let j = 0; j < designInfo.layers.length; j++) {
                let layer = designInfo.layers[j]
                if(collLayer.layerId == layer.id){
                    if(layer.type === 0){
                        my3d.customizeMetalClass(layer.name, collLayer.metal);
                    }if(layer.type === 1){
                        if(collLayer.ogType == 0){
                            if(collLayer.gem.faceType == 'faceted'){
                                my3d.customizeGemClass(0, layer.name, collLayer.gem);
                            }else{
                                my3d.changeLayerMaterial(layer.name, collLayer.gem);
                            }
                        }if(collLayer.ogType == 1){
                            collLayer.otherGem.refraction = collLayer.otherGem.gemType.refraction
                            my3d.customizeGemClass(1, layer.name, collLayer.otherGem);
                        }
                    }
                    break
                }
            }
        }
    }

    //-------------------------3D加载-------------------------
    let uInfo;
    let desNo = 40493;
    //获取账号信息和款式信息
    loadDesignInfo()
    // loadUserInfo()
    let uNo = '20230';

    //初始化
    $(document).ready(function(){
        //web3D第一步：初始化3D场景
		my3d = Bavlo.initWeb3D(baseUrl, 'web3d', false, resourceDomainName, true)
        //web3D第二步：初始化材质信息
        loadMetalWeb(0)
        loadGemWeb(0)
        my3d.initUserMatInfo(metalWebDefault, null, gemWebDefault, null)
        //web3D第三步：初始化3D窗口布局
        my3d.onWindowResize(2);

        //web3D第四步：初始化3D场景背景色 背景色在从账号信息中获取
        // my3d.changeBackground()
        //web3D第五步：加载款式3D
        my3d.loadDesign(designInfo);

        //以下为页面信息处理
        atop = $("#web3d").height();
        $('.tbbts').css('top', (atop-70)+'px');
        $('.helpDetail').css('height', atop+'px');

        let layerInfo = '';
        loadModelPicList()
        if(webModelPics){
            if(webModelPics.length > 0){
                $('.tbbts .col-4 img').show()

            }
        }

        loadCollocationList()
        $('#myCarousel').on('slid.bs.carousel', function () {
            let colloId = $('.active').attr('type')
            loadCollocation(colloId)
        });

        if(collocations && collocations.length > 0){
            loadCollocation(collocations[0].id)
        }else{
            $('.layInfo').html(layerInfo)
        }

        let stateJt = setInterval(function(){
            let loadState = my3d.getLoadModelState();
            if(loadState == 2){
                clearInterval(stateJt)
            }
        }, 100);

    });

    //-------------------------事件处理-------------------------
    let hammerDom = new Hammer(document.getElementById('myCarousel'))
    hammerDom.on('panright', function () {
        $('#myCarousel').carousel('prev');
    });
    hammerDom.on('panleft', function () {
        $('#myCarousel').carousel('next');
    });

    //姿态重置
    $('.topBtn img:eq(0)').click(function () {
        my3d.postureReset();
    })
    //旋转控制
    let rotate = true;
    $('.topBtn img:eq(1)').click(function () {
        rotate = !rotate;
        my3d.setRotationState(rotate);
        if(rotate){
            $('.topBtn img:eq(2)').attr('src', 'img/stop.png');
        }else{
            $('.topBtn img:eq(2)').attr('src', 'img/play.png');
        }
    })
    //跳转信息部分
    $('.tbbts .col-4 a').click(function () {
        location.href="#bottom";
    })
    //试戴
    $('.tbbts .col-4 img').click(function () {
        let state = my3d.getTryOnState();
        if(state === 0){
            let nowWebModelPic = webModelPics[0]
            nowWebModelPic.imgUrl = 'https://design.bavlo.com/WebModelPics/'+uNo+'/'+nowWebModelPic.name;
            my3d.setModelTryonMode(true, nowWebModelPic)
            $(this).attr('src', 'img/img_closeTry.png');
            $('.topBtn').hide()
            $('.tbbts .col-8 img').hide()
            $('.tbbts .col-8 input').show()
        }else{
            my3d.setModelTryonMode(false, null)
            $('.tbbts input').val(1)
            $(this).attr('src', 'img/img_try.png');
            $('.topBtn').show()
            $('.tbbts .col-8 img').show()
            $('.tbbts .col-8 input').hide()
        }
    })

    $('.helpDetail div:last').click(function () {
        $('.helpDetail').hide();
    })

    $('.tbbts img:eq(0)').click(function () {
    })

    $('.tbbts img:eq(1)').click(function () {
        $('.helpDetail').show();
    })
    //试戴缩放
    $('.tbbts input').bind('input propertychange', function() {
        my3d.zoomCamera($('.tbbts input').val());
    });
