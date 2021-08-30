<template>
  <div>
    <body>
      <div id="appp">
        <div class="hide sc-gqjmRU fZBwie">
          <div class="vertical sc-bZQynM bSFpTD">
            <div>
              <div
                class="sc-iwsKbI qiaZS"
                id="ProgressContent"
                style="transform: rotateY(180deg);"
              >
                <div id="container" style="position: relative;">
                  <svg
                    viewBox="0 0 100 100"
                    style="display: block; width: 100%;"
                  >
                    <path
                      d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97"
                      stroke="transparent"
                      stroke-width="0.3"
                      fill-opacity="0"
                    ></path>
                    <path
                      d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97"
                      stroke="rgb(193,177,138)"
                      stroke-width="3"
                      fill-opacity="0"
                      style="stroke-dasharray: 304.844, 304.844; stroke-dashoffset: 304.844;"
                    ></path>
                  </svg>
                  <div
                    class="progressbar-text"
                    style="position: absolute; left: 50%; top: 50%; padding: 0px; margin: 0px; transform: translate(-50%, -50%); color: rgb(85, 85, 85);"
                  ></div>
                </div>
                <div
                  id="content"
                  style="transform: rotateY(-180deg) translate(50%, -50%); opacity: 1e-06;"
                >
                  <div class="vertical sc-bZQynM bSFpTD">
                    <div style="color: rgb(193, 177, 138); text-align: center;">
                      <div style="font-size: 18px; margin-bottom: 8px;">
                        100%
                      </div>
                      <div style="font-size: 14px;">loading</div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="sc-gZMcBi imjaHs" id="Slogan" style="opacity: 1e-06;">
                没有一枚钻戒，比亲手设计更有价值和意义。
              </p>
            </div>
          </div>
        </div>
        <div class="sc-iQNlJl hGaEO">
          <router-link to="/home">
            <div class="sc-esOvli becSTf" style="left: 15px; top: 15px;">
              <i class="iconfont-home"></i>
            </div>
          </router-link>
          <div class="sc-hZSUBg hbJOWQ">
            <a href="javascript:;" class="active"><span>女戒</span></a
            ><a href="javascript:;" class="false"><span>对戒</span></a>
          </div>
          <div class="sc-bsbRJL cLztxm" style="bottom: 50px; height: 812px;">
            <div class="hide sc-gwVKww huMFpR">
              <table style="table-layout: fixed;">
                <tbody>
                  <tr>
                    <td>
                      <i class="iconfont-save" style="font-size: 6rem;"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="sc-fjdhpX kKbZfL" id="xk-engine">
              <canvas
                width="1125"
                height="2436"
                style="display: block; width: 375px; height: 812px;"
              ></canvas>
            </div>
            <div class="sc-VigVT hHamDm">
              <div class="sc-jTzLTM jrEdAq">
                <div class="active closed"></div>
                <div class="active closed"></div>
              </div>
            </div>
          </div>
          <div class="sc-fMiknA loEfjx">
            <i
              class="iconfont-d-08 sc-fBuWsC cmLgUD"
              style="bottom: 100px;"
            ></i>
            <div class="sc-dVhcbM gjSLoM" style="bottom: 0px;">
              <a class="iconfont-list" style="margin-right: 20px;"></a
              ><a class="iconfont-delete-2" style="margin-left: 20px;"></a>
            </div>
            <div
              class="closed sc-hXRMBi gXOWxm"
              style="bottom: -160px; height: 160px; pointer-events: all;"
            >
              <div class="sc-kkGfuU gymnxY">
                <a class="sc-gzVnrw jNYUwY"
                  ><i class="iconfont-houtui-08"></i
                ></a>
                <div class="sc-iAyFgw jXwbiu">
                  <div class="sc-bZQynM bSFpTD">
                    <div class="sc-htoDjs isAtxK">
                      <span class="active-button">手型</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sc-kEYyzF hdreLp">
                <div class="vertical sc-bZQynM bSFpTD">
                  <div class="sc-bxivhb laZSDG">
                    <div class="hand-list" style="width: 375px;">
                      <ul>
                        <li class="active">
                          <div class="imageContent">
                            <img
                              src="assets/images/thumbnail/hand-slim.png"
                              style="display: inline-block; width: auto; height: 48px;"
                            />
                          </div>
                          <p>修长型</p>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="assets/images/thumbnail/hand-full.png"
                              style="display: inline-block; width: auto; height: 48px;"
                            />
                          </div>
                          <p>圆润型</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sc-epnACN bejszL" style="bottom: 115px;">
            <table style="height: 100%;">
              <tbody>
                <tr>
                  <td class="sc-jhAzac cGbrQP">
                    <a
                      ><span><i class="iconfont-op-9"></i></span>
                      <div>设计</div></a
                    >
                  </td>
                  <td class="sc-jhAzac cGbrQP">
                    <a
                      ><span><i class="iconfont-diamond-7"></i></span>
                      <div>选钻</div></a
                    >
                  </td>
                  <td class="sc-jhAzac cGbrQP">
                    <a
                      ><span><i class="iconfont-edit-9"></i></span>
                      <div>印记</div></a
                    >
                  </td>
                  <td class="sc-jhAzac cGbrQP">
                    <a
                      ><span><i class="iconfont-gh-10"></i></span>
                      <div>试戴</div></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="sc-bwCtUz iRwkCO" style="bottom: 0px;">
            <div class="sc-bZQynM bSFpTD">
              <div
                class="sc-htoDjs isAtxK"
                style="max-width: 40px; margin-right: 12px;"
              >
                <a class="sc-iQKALj gzOLAp"><i class="iconfont-bag-8"></i></a>
              </div>
              <div
                class="sc-htoDjs isAtxK"
                style="max-width: 40px; margin-right: 12px;"
              >
                <a class="sc-iQKALj gzOLAp"
                  ><i class="iconfont-service-8"></i
                ></a>
              </div>
              <div class="sc-htoDjs isAtxK" style="text-align: left;">
                <span class="save sc-RefOD bykObv">￥13,577</span>
              </div>
              <div class="sc-htoDjs isAtxK" style="text-align: right;">
                <a class="confirm   sc-iQKALj gzOLAp">确认设计</a>
              </div>
            </div>
          </div>
          <div
            class="sc-cmthru eNUnKG"
            style="height: 712px; bottom: 812px; opacity: 0;"
          ></div>
          <div
            class="sc-cmthru eNUnKG"
            style="height: 812px; z-index: 23; bottom: 812px; opacity: 0;"
          >
            <div class="sc-frDJqD dyekQu">
              <div class="sc-hqyNC faUNYS"><h3>如何采集指纹头像？</h3></div>
              <div class="sc-kvZOFW eocXIn">
                <div class="text">
                  <h3>图纹定制三步骤</h3>
                  <div style="margin: 20px 0px;">
                    <div
                      class="am-steps am-steps-horizontal am-steps-label-vertical"
                    >
                      <div
                        class="am-steps-item am-steps-item-process am-steps-item-custom"
                      >
                        <div class="am-steps-item-tail"></div>
                        <div class="am-steps-item-icon">
                          <span class="am-steps-icon"
                            ><div class="sc-hmzhuo bOADNY">1</div></span
                          >
                        </div>
                        <div class="am-steps-item-content">
                          <div class="am-steps-item-title">
                            <div>
                              <p style="margin: 0px 0px 5px; font-size: 12px;">
                                选择
                              </p>
                              <p style="margin: 0px; font-size: 12px;">
                                图纹定制方案
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="am-steps-item am-steps-item-process am-steps-item-custom"
                      >
                        <div class="am-steps-item-tail"></div>
                        <div class="am-steps-item-icon">
                          <span class="am-steps-icon"
                            ><div class="sc-hmzhuo bOADNY">2</div></span
                          >
                        </div>
                        <div class="am-steps-item-content">
                          <div class="am-steps-item-title">
                            <div>
                              <p style="margin: 0px 0px 5px; font-size: 12px;">
                                上传
                              </p>
                              <p style="margin: 0px; font-size: 12px;">
                                个人定制图纹
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="am-steps-item am-steps-item-process am-steps-item-custom"
                      >
                        <div class="am-steps-item-tail"></div>
                        <div class="am-steps-item-icon">
                          <span class="am-steps-icon"
                            ><div class="sc-hmzhuo bOADNY">3</div></span
                          >
                        </div>
                        <div class="am-steps-item-content">
                          <div class="am-steps-item-title">
                            <div>
                              <p style="margin: 0px 0px 5px; font-size: 12px;">
                                设计师处理
                              </p>
                              <p style="margin: 0px; font-size: 12px;">
                                订单图纹
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    style="color: red; line-height: 1.5; font-size: 12px; display: flex;"
                  >
                    <span
                      style="flex: 1 1 0%; max-width: 15px; margin-right: 5px;"
                      ><img
                        src="assets/warning.png"
                        alt=""
                        style="width: 15px;"/></span
                    ><span style="flex: 1 1 0%;"
                      >如上传图纹不清晰或不能满足生产条件，客服会第一时间联络您，除此之外，按照订单所选方案处理后直接进行生产。</span
                    >
                  </p>
                  <div class="icons"><i class="iconfont-list-12"></i></div>
                  <h3>指纹</h3>
                  <p>指纹印刻，需提供纹理清晰，指纹完成的图片。</p>
                  <div class="icons"><i class="iconfont-zhiwen-12"></i></div>
                  <h3>头像</h3>
                  <p>
                    头像印刻，需提供脖子以上正面脸部清晰照片，设计师会为您设计定制相应Q版头像。
                  </p>
                  <div class="icons"><i class="iconfont-ent-12"></i></div>
                </div>
              </div>
              <a class="sc-ksYbfQ vmWqN">返回</a>
            </div>
          </div>
          <div
            class="closed sc-hXRMBi gXOWxm"
            style="bottom: -260px; height: 260px;"
          >
            <div class="sc-eXEjpC wbMvM">
              <div class="sc-kkGfuU gymnxY">
                <a class="sc-gzVnrw jNYUwY"
                  ><i class="iconfont-houtui-08"></i
                ></a>
                <div class="sc-iAyFgw jXwbiu">
                  <div class="sc-bZQynM bSFpTD">
                    <div class="sc-htoDjs isAtxK">
                      <span class="active-button">款式</span>
                    </div>
                    <div class="sc-htoDjs isAtxK">
                      <span class="false">材质</span>
                    </div>
                    <div class="sc-htoDjs isAtxK">
                      <span class="false">风格</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sc-kEYyzF hdreLp">
                <div class="vertical sc-bZQynM bSFpTD">
                  <div class="sc-bxivhb laZSDG">
                    <div class="ring-list" style="width: 375px;">
                      <ul>
                        <li class="active">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/bxHSofh5zqvPsF5YjY3OjRSl7OrOf885euVynMCz-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">01</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/rVDgsyn6HWGtT5bgkMe6vhSn9rUjNhx7N9kdv0so-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">02</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/28q8RWSHwuDPROJUlJJxcvXfjaKn6ItESxNdUfJt-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">03</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/aYkxFcxleGo0SGkZmBbW1rJQ9rmTVV8bDxLeBAXG-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">04</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/6oFH5Y4Vefeo1H8mYyabSyfZkcY3HuCWL9MXcXbh-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">05</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/Ppmcrc5jIwOoq6L8d2aypsq4PPFMYXuMQKEmQZ42-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">06</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/03/06/xBU2dtYZWJpSqmwCHsyTh49ynau0yTFYj1ndcggN-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">07</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/06/16/S3iQnpwb6gNUHkvPxsbNZtqQRVrBXTEgX773P0Oa-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">08</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/03/06/ut1y7SI3BX8SFiSgHJRClwRvtSrmNuubmP6G5GTR-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">09</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/06/16/80WP2aK3knlmw05NF2JJ1ZWg7TqpKDdcI9YuPzZ8-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">10</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/05/21/w61efg5mfTjo26xSCA5SAojORThoGi2xTUK2vfC9-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">11</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/05/21/nRWWZNXYBwufvC6wOUqS1BGK6uwippQm8bu39uFA-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">12</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/05/21/IUISsU2qS5xWVSTV3UJM1f39JKjpicQzZgfwsqny-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">13</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/05/21/CSgdHU7K38qZvUSFNGWMKBsbo99upR2sMkEJwucJ-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">14</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/05/21/U3tXwJUEv5t2MukB0atdHZpLAz9KTW5Pi62YPW8j-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">15</p>
                          </div>
                        </li>
                        <li>
                          <div class="imageContent">
                            <img src="assets/add.png" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="sc-dnqmqq gjczMv"></div>
                  <div class="sc-bxivhb laZSDG">
                    <div class="ring-list" style="width: 375px;">
                      <ul>
                        <li class="active">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/02/23/zQgSoHJeTaUzRTYecG5e93IuIWXrgxkWn2k8qhib-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">01</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/05/21/j0A0Z9IiTPwfdwtgkmU4G3vqZGAZQNSKVTHrMEmn-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">02</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/Q9Yg7h4rcoFURuSoIGb03rnKB93ihDMLc42wBiPs-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">03</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/02/23/bQF2J3VH1SAfkMeUwsCcyyOWnusK1WbVVbbzacAF-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">04</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/29/X3AZUxlAhqwwkDCCrJ4xCm02HHZR3KyfSadW0kdf-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">05</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/tnBduzDVuBv8hliYPLt7OLJcgUpDRMkehCT7Z1dt-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">06</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/vGc4WfHFHJF2fz6wSWl8ONJ3hBvjl2jjpqRGPFKW-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">07</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/8SgDlvdno14wqav1fxWHoKvNjhtUg2evRJRqAKSj-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">08</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/MwA46QxvE9g0D2uFfI9qY5egpAOPV08U8z9vREjB-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">09</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/gmbAaMPOTayt805YFCQsKjNynRmal2tGFZq5U73A-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">10</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/POZf18d4MlHwbSHNrLTnvmmggWSpOxZzCraypbdw-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">11</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/7spfa9BdCQf8jkSWRxSrJHH15elbaWYBqxI2ucxT-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">12</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/01/26/ai9uXxYcwWH1pMsFzkvnljNYdagn3BLwWfAldfzT-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">13</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/08/05/sqs5n4MKUa5Czh76qLMOqcQjUiG49vTagqLGcY10-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">14</p>
                          </div>
                        </li>
                        <li class="">
                          <div class="imageContent">
                            <img
                              src="https://imgcdn.zbird.com/storage/crops/uploads/images/2021/08/05/KVzHXqk159PWDpNAROQFehqFY9cn76fgx38rJkzD-150x150.png"
                              width="100%"
                              height="100%"
                              alt=""
                            />
                            <p class="index">15</p>
                          </div>
                        </li>
                        <li>
                          <div class="imageContent">
                            <img src="assets/add.png" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sc-Rmtcm EflSd">
              <div class="sc-kkGfuU gymnxY">
                <a class="sc-gzVnrw jNYUwY"
                  ><i class="iconfont-houtui-08"></i
                ></a>
                <div class="sc-iAyFgw jXwbiu">
                  <div class="sc-bZQynM bSFpTD">
                    <div class="sc-htoDjs isAtxK">
                      <span class="active-button">主钻及辅钻</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sc-kEYyzF hdreLp">
                <div class="vertical sc-bZQynM bSFpTD">
                  <div class="sc-gipzik IZKIX">
                    <a class="btn"
                      ><span class="plus"><i class="iconfont-tjsx-08"></i></span
                      ><span style="vertical-align: super;">添加钻石</span></a
                    >
                  </div>
                  <div class="sc-dnqmqq gjczMv"></div>
                  <div class="sc-bxivhb laZSDG">
                    <div class="ring-list" style="width: 375px;">
                      <ul>
                        <li class="active" style="padding: 0px 5px;">
                          <div class="imageContent">
                            <img
                              src="assets/stone/bai.png"
                              style="padding: 8px;"
                            />
                          </div>
                          <p class="name" style="margin-top: 5px;">
                            天然钻石<br />（白）
                          </p>
                        </li>
                        <li class="" style="padding: 0px 5px;">
                          <div class="imageContent">
                            <img
                              src="assets/stone/zi.png"
                              style="padding: 8px;"
                            />
                          </div>
                          <p class="name" style="margin-top: 5px;">
                            天然蓝宝石<br />（紫）
                          </p>
                        </li>
                        <li class="" style="padding: 0px 5px;">
                          <div class="imageContent">
                            <img
                              src="assets/stone/fen.png"
                              style="padding: 8px;"
                            />
                          </div>
                          <p class="name" style="margin-top: 5px;">
                            天然蓝宝石<br />（粉）
                          </p>
                        </li>
                        <li class="" style="padding: 0px 5px;">
                          <div class="imageContent">
                            <img
                              src="assets/stone/huang.png"
                              style="padding: 8px;"
                            />
                          </div>
                          <p class="name" style="margin-top: 5px;">
                            天然蓝宝石<br />（黄）
                          </p>
                        </li>
                        <li class="" style="padding: 0px 5px;">
                          <div class="imageContent">
                            <img
                              src="assets/stone/xuan.png"
                              style="padding: 8px;"
                            />
                          </div>
                          <p class="name" style="margin-top: 5px;">
                            天然蓝宝石<br />（黑）
                          </p>
                        </li>
                        <li class="" style="padding: 0px 5px;">
                          <div class="imageContent">
                            <img
                              src="assets/stone/he.png"
                              style="padding: 8px;"
                            />
                          </div>
                          <p class="name" style="margin-top: 5px;">
                            天然蓝宝石<br />（褐）
                          </p>
                        </li>
                        <li class="" style="padding: 0px 5px;">
                          <div class="imageContent">
                            <img
                              src="assets/stone/lv.png"
                              style="padding: 8px;"
                            />
                          </div>
                          <p class="name" style="margin-top: 5px;">
                            天然沙弗莱石<br />（绿）
                          </p>
                        </li>
                        <li class="" style="padding: 0px 5px;">
                          <div class="imageContent">
                            <img
                              src="assets/stone/cheng.png"
                              style="padding: 8px;"
                            />
                          </div>
                          <p class="name" style="margin-top: 5px;">
                            天然蓝宝石<br />（橙）
                          </p>
                        </li>
                        <li class="" style="padding: 0px 5px;">
                          <div class="imageContent">
                            <img
                              src="assets/stone/lan.png"
                              style="padding: 8px;"
                            />
                          </div>
                          <p class="name" style="margin-top: 5px;">
                            天然蓝宝石<br />（蓝）
                          </p>
                        </li>
                        <li class="" style="padding: 0px 5px;">
                          <div class="imageContent">
                            <img
                              src="assets/stone/qing.png"
                              style="padding: 8px;"
                            />
                          </div>
                          <p class="name" style="margin-top: 5px;">
                            天然蓝宝石<br />（青）
                          </p>
                        </li>
                        <li class="" style="padding: 0px 5px;">
                          <div class="imageContent">
                            <img
                              src="assets/stone/hong.png"
                              style="padding: 8px;"
                            />
                          </div>
                          <p class="name" style="margin-top: 5px;">
                            天然蓝宝石<br />（红）
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sc-cHGsZl kStZYu">
              <div class="sc-kkGfuU gymnxY">
                <a class="sc-gzVnrw jNYUwY"
                  ><i class="iconfont-houtui-08"></i
                ></a>
                <div class="sc-iAyFgw jXwbiu">
                  <div class="sc-bZQynM bSFpTD">
                    <div class="sc-htoDjs isAtxK">
                      <span class="active-button">文字</span>
                    </div>
                    <div class="sc-htoDjs isAtxK">
                      <span class="false">自定义图案</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sc-kEYyzF hdreLp">
                <div class="vertical sc-bZQynM bSFpTD">
                  <div class="sc-kjoXOD fVSnDo">
                    <div class="text">
                      <div class="text-content">
                        <input
                          id="input"
                          placeholder="印刻彼此名字或誓言"
                          type="text"
                          value=""
                          style="font-family: zbird-iconfont; padding: 10px;"
                        />
                      </div>
                      <a class="text-update">刻印</a>
                    </div>
                    <div class="symbols">
                      <ul>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                        <li>
                          <span
                            class="icon"
                            style="font-family: zbird-iconfont;"
                            ></span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sc-kgAjT jVFDEF">
              <a
                class="sc-bwzfXH fzzpmF"
                href="javascript:;"
                style="right: 15px; bottom: 150px;"
                ><span>如何测量 </span
                ><img
                  src="assets/wenhao.png"
                  alt=""
                  style="display: inline-block; width: 22px;"
              /></a>
              <div class="sc-TOsTZ hXWtzY">
                <span class="size-num">12</span>
                <div style="margin-top: 15px;">
                  <div class="slide-ruler_box_2oh">
                    <canvas
                      width="750"
                      height="166"
                      class="slide-ruler_canvas_2da"
                      style="width: 375px; height: 83px;"
                    ></canvas>
                  </div>
                </div>
                <span class="size-mm">51.2mm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#custom {
  display: flex;
  flex: 1;
}
#diamond {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: #fff;
  display: none;
  flex-direction: column;
}
#navbar {
  height: 50px;
  background: #f3f3f3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#navbar span {
  padding-right: 15px;
  font-size: 16px;
  color: #000000;
  cursor: pointer;
}
#iframe {
  flex: 1;
  border: none;
}
#tools {
  position: fixed;
  display: flex;
  display: none;
  flex-direction: row;
  justify-content: space-around;
  top: 50px;
  left: 0;
  right: 0;
  height: 30px;
  z-index: 1;
}
#appp {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f9fafc;
  color: #34343c;
  letter-spacing: 0.5px;
}
.fZBwie {
  position: fixed;
  inset: 0px;
  z-index: 10001;
  background-color: rgb(66, 66, 75);
  background-image: url(/src/assets/bg.jpeg);
  background-size: cover;
  pointer-events: all;
}
.fZBwie.hide {
  pointer-events: none;
  opacity: 0;
  transition: all 0.8s ease-in-out 0s;
}
.bSFpTD {
  display: flex;
}
.bSFpTD.vertical {
  height: 100%;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
.qiaZS {
  position: relative;
  height: 200px;
  margin-bottom: 60px;
}
.fZBwie #container {
  width: 200px;
  height: 200px;
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
}
.imjaHs {
  margin: 0px;
  font-size: 14px;
  color: rgb(255, 255, 255);
}
svg:not(:root) {
  overflow: hidden;
}
.fZBwie #content {
  width: 200px;
  height: 200px;
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
}
.bSFpTD {
  display: flex;
}
.bSFpTD.vertical {
  height: 100%;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
.hGaEO {
  position: absolute;
  inset: 0px;
}
.becSTf {
  position: absolute;
  top: 15px;
  z-index: 10;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: rgb(72, 72, 79);
  color: rgb(193, 177, 138);
  text-align: center;
  transition: all 0.3s ease-in-out 0s;
}
.becSTf i {
  font-size: 20px;
  line-height: 35px;
}
.iconfont-home:before {
  content: "\e926";
}
.hbJOWQ {
  position: absolute;
  top: 20px;
  right: 15px;
  background-color: rgb(72, 72, 79);
  border-radius: 50px;
  z-index: 10;
  pointer-events: all;
  color: rgb(193, 177, 138);
  text-align: center;
  transition: all 0.3s ease-in-out 0s;
}
.hbJOWQ a {
  display: inline-block;
  padding: 2px 15px;
  height: 27px;
  font-size: 12px;
  color: rgb(191, 191, 192);
}
.hbJOWQ a.active {
  border-radius: 50px;
  background-color: rgb(193, 177, 138);
  color: rgb(52, 52, 60);
}
.hbJOWQ a span {
  line-height: 23px;
  vertical-align: super;
}
.cLztxm {
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 8;
  transition: bottom 0.3s ease-in-out 0s;
}
.huMFpR {
  position: absolute;
  text-align: center;
  color: rgb(193, 177, 138);
  inset: 0px;
  z-index: 2;
  transition: all 0.3s ease-in-out 0s;
  pointer-events: none;
  background-color: rgb(72, 72, 79);
}
.huMFpR.hide {
  opacity: 0;
}
iframe,
table {
  width: 100%;
  height: 100%;
  border: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td {
  padding: 0;
}
[class*=" iconfont-"],
[class^="iconfont-"] {
  speak: none;
  font-family: zbird-iconfont !important;
  speak: never;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.iconfont-save:before {
  content: "\e92c";
}
.kKbZfL {
  position: absolute;
  inset: 0px;
  z-index: 1;
  background-color: transparent;
}
canvas {
  display: inline-block;
}
.kKbZfL canvas {
  position: absolute;
  inset: 0px;
}
.hHamDm {
  position: absolute;
  inset: 0px;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out 0s;
}
.jrEdAq {
  position: absolute;
  inset: 0px;
  z-index: 1;
}
.jrEdAq div {
  position: absolute;
  inset: 0px;
  z-index: 1;
}
.jrEdAq div.active {
  opacity: 1;
  z-index: 0;
}
.jrEdAq div.closed {
  transition: opacity 0.3s ease-in-out 0s;
  opacity: 0;
}
.loEfjx {
  position: absolute;
  inset: 0px;
  z-index: -1;
  pointer-events: none;
  opacity: 0;
  transition: all 0.3s ease-in-out 0s;
}
.cmLgUD {
  position: absolute;
  left: 50%;
  bottom: 95px;
  pointer-events: none;
  width: 36px;
  transition: all 0.3s ease-in-out 0s;
  margin-left: -18px;
  text-align: center;
  font-size: 26px;
  color: rgb(193, 177, 138);
}
.iconfont-d-08:before {
  content: "\e9ed";
}
*,
:after,
:before {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.gjSLoM {
  position: absolute;
  height: 80px;
  left: 0px;
  right: 0px;
  z-index: 10;
  transition: all 0.3s ease-in-out 0s;
  text-align: center;
}
.gjSLoM a {
  display: inline-block;
  height: 35px;
  font-size: 22px;
  background-color: rgb(72, 72, 79);
  color: rgb(193, 177, 138);
  line-height: 35px;
  width: 35px;
  border-radius: 50%;
  pointer-events: all;
}
.iconfont-list:before {
  content: "\e959";
}
.iconfont-delete-2:before {
  content: "\e957";
}
.gXOWxm {
  position: absolute;
  left: 0px;
  right: 0px;
  z-index: 10;
  height: 260px;
  background-color: rgb(60, 60, 68);
  transition: all 0.3s ease-in-out 0s;
  pointer-events: none;
}
.gymnxY {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  height: 50px;
  background-color: rgb(72, 72, 79);
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  text-align: center;
  vertical-align: middle;
}
.gXOWxm.closed * {
  pointer-events: none;
}
.jNYUwY {
  position: absolute;
  color: rgb(157, 157, 157);
  font-size: 24px;
  left: 0px;
  top: 0px;
  height: 50px;
  width: 50px;
  line-height: 50px;
  background-color: rgb(84, 84, 91);
}
:focus,
a {
  outline: none;
}
a {
  background: transparent;
  text-decoration: none;
}
.gXOWxm.closed * {
  pointer-events: none;
}
.iconfont-houtui-08:before {
  content: "\e9ee";
}
.jXwbiu {
  position: absolute;
  left: 50px;
  right: 0px;
  top: 0px;
  height: 50px;
  line-height: 50px;
  padding: 0px;
  color: rgb(193, 177, 138);
  background-color: rgb(72, 72, 79);
}
.gXOWxm.closed * {
  pointer-events: none;
}
.bSFpTD {
  display: flex;
}
.gXOWxm.closed * {
  pointer-events: none;
}
.isAtxK {
  flex: 1 1 0%;
}
.gXOWxm.closed * {
  pointer-events: none;
}
.jXwbiu span {
  height: 28px;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  font-size: 14px;
  color: rgb(157, 157, 157);
  opacity: 0.65;
}
.gXOWxm.closed * {
  pointer-events: none;
}
.jXwbiu span.active-button {
  color: rgb(193, 177, 138);
  opacity: 1;
  position: relative;
}
.jXwbiu span.active-button::after {
  content: " ";
  position: absolute;
  bottom: -3px;
  right: 50%;
  margin-right: -4px;
  width: 10px;
  height: 2px;
  background-color: rgb(193, 177, 138);
}
.hdreLp {
  position: absolute;
  inset: 50px 0px 0px;
}
.gXOWxm.closed * {
  pointer-events: none;
}
.bSFpTD {
  display: flex;
}
.bSFpTD.vertical {
  height: 100%;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
.gXOWxm.closed * {
  pointer-events: none;
}
.laZSDG .hand-list {
  width: 100%;
  overflow: hidden;
  text-align: left;
  padding: 0px 5px;
}
.laZSDG .hand-list ul {
  display: flex;
  width: auto;
  height: 100%;
  overflow: auto hidden;
  white-space: nowrap;
}
.laZSDG .hand-list ul li {
  display: block;
  -webkit-box-flex: 1;
  margin: 0px;
  flex: 0 0 auto;
  padding: 0px 10px;
  width: 25%;
}
.laZSDG .hand-list ul li .imageContent {
  margin: 0px auto;
  border: 1px solid transparent;
  border-radius: 50%;
  text-align: center;
  padding: 4px;
  width: 60px;
  height: 60px;
}
.laZSDG .hand-list ul li.active .imageContent {
  border-color: rgb(193, 177, 138);
}
.laZSDG .hand-list ul li img {
  background-color: transparent;
  width: 100%;
}
.bejszL {
  background: transparent;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 10;
  transition: all 0.3s ease-in-out 0s;
}
.cGbrQP {
  text-align: center;
}
.cGbrQP a {
  display: inline-block;
}
.cGbrQP span {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  font-size: 24px;
  display: block;
  line-height: 40px;
}
.cGbrQP i {
  color: rgb(193, 177, 138);
}
.iconfont-op-9:before {
  content: "\e9b1";
}
.iconfont-diamond-7:before {
  content: "\e990";
}
.iconfont-edit-9:before {
  content: "\e998";
}
.iconfont-gh-10:before {
  content: "\e99f";
}
.iRwkCO {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 100px;
  background-color: rgb(72, 72, 79);
  z-index: 23;
  padding: 16px 10px 0px;
  transition: all 0.3s ease-in-out 0s;
  text-align: center;
  font-size: 14px;
}
.bSFpTD {
  display: flex;
}
.gzOLAp {
  width: 40px;
  display: inline-block;
  border-radius: 20px;
  background-color: rgb(84, 84, 91);
  text-align: center;
  color: rgb(193, 177, 138);
}
.gzOLAp i {
  font-size: 18px;
  line-height: 40px;
}
.iconfont-bag-8:before {
  content: "\e991";
}
.iconfont-service-8:before {
  content: "\e9b4";
}
.bykObv {
  display: inline-block;
  line-height: 40px;
  color: rgb(193, 177, 138);
}
.gzOLAp {
  width: 40px;
  display: inline-block;
  border-radius: 20px;
  background-color: rgb(84, 84, 91);
  text-align: center;
  color: rgb(193, 177, 138);
}
.gzOLAp.confirm {
  width: 150px;
  background-color: rgb(193, 177, 138);
  border: 1px solid transparent;
  color: rgb(52, 52, 60);
  line-height: 40px;
}
.eNUnKG {
  position: fixed;
  right: 0px;
  left: 0px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  z-index: 22;
  transition: all 0.3s ease-in-out 0s;
}
.dyekQu {
  position: absolute;
  inset: 0px;
}
.faUNYS {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 50px;
  color: rgb(255, 255, 255);
  text-align: center;
  background-color: rgb(0, 0, 0);
}
element.style {
}
.faUNYS h3 {
  line-height: 50px;
}
.faUNYS h3 {
  line-height: 50px;
}
.eocXIn {
  position: absolute;
  top: 50px;
  overflow: hidden auto;
  width: 100%;
  bottom: 0px;
}
.dyekQu .text {
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
}
.dyekQu .text h3,
.dyekQu .text p {
  margin-bottom: 10px;
}
body,
h3,
html {
  font-size: 14px;
}
.am-steps {
  font-size: 0;
  width: 100%;
  line-height: 1.5;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.am-steps,
.am-steps * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.am-steps-label-vertical .am-steps-item {
  overflow: visible;
}
.am-steps-item-tail {
  position: absolute;
  left: 0;
  width: 100%;
  top: 12px;
  padding: 0 10px;
}
.am-steps-label-vertical .am-steps-item-tail {
  padding: 0 24px;
  margin-left: 48px;
}
.am-steps-item-tail:after {
  content: "";
  display: inline-block;
  background: #ddd;
  height: 1px;
  border-radius: 1px;
  width: 100%;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  position: relative;
  left: -2px;
}
.am-steps-item-process .am-steps-item-tail:after {
  background-color: #ddd;
}
.am-steps-item-content,
.am-steps-item-icon {
  display: inline-block;
  vertical-align: top;
}
.am-steps-item-icon {
  border: 1px solid #bbb;
  width: 22px;
  height: 22px;
  line-height: 22px;
  border-radius: 22px;
  text-align: center;
  font-size: 14px;
  margin-right: 8px;
  -webkit-transition: background-color 0.3s, border-color 0.3s;
  transition: background-color 0.3s, border-color 0.3s;
}
.am-steps-item-process .am-steps-item-icon {
  border-color: #108ee9;
  background-color: #fff;
}
.am-steps-item-process .am-steps-item-icon {
  background: #108ee9;
}
.am-steps-item-custom .am-steps-item-icon {
  background: none;
  border: 0;
  width: auto;
  height: auto;
}
.am-steps-label-vertical .am-steps-item-icon {
  display: inline-block;
  margin-left: 36px;
}
.am-steps-item-icon > .am-steps-icon {
  line-height: 1;
  top: -1px;
  color: #108ee9;
  position: relative;
}
.am-steps-item-process .am-steps-item-icon > .am-steps-icon {
  color: #108ee9;
}
.am-steps-item-process .am-steps-item-icon > .am-steps-icon {
  color: #fff;
}
.am-steps-item-custom .am-steps-item-icon > .am-steps-icon {
  font-size: 22px;
  top: 1px;
  width: 22px;
  height: 22px;
}
.am-steps-item-custom.am-steps-item-process
  .am-steps-item-icon
  > .am-steps-icon {
  color: #108ee9;
}
.bOADNY {
  width: 25px;
  height: 25px;
  line-height: 25px;
  border-radius: 50%;
  color: rgb(255, 255, 255);
  background-color: rgb(193, 177, 138);
}
.am-steps-item-content,
.am-steps-item-icon {
  display: inline-block;
  vertical-align: top;
}
.am-steps-item-content {
  margin-top: 3px;
}
.am-steps-label-vertical .am-steps-item-content {
  display: block;
  text-align: center;
  margin-top: 8px;
  width: 100px;
}
.am-steps-item-title {
  font-size: 16px;
  margin-bottom: 4px;
  color: #000;
  font-weight: 700;
  display: inline-block;
  padding-right: 10px;
  position: relative;
}
.am-steps-item-process .am-steps-item-title {
  color: #000;
}
.am-steps-label-vertical .am-steps-item-title {
  padding-right: 0;
}
.am-steps,
.am-steps * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.eocXIn p {
  line-height: 1.5;
}
.dyekQu .text h3,
.dyekQu .text p {
  margin-bottom: 10px;
}
.dyekQu .text p {
  color: rgb(68, 68, 68);
}
img {
  border-style: none;
}
.eocXIn div.icons {
  text-align: center;
  margin-bottom: 15px;
}
.eocXIn div.icons i {
  font-size: 5rem;
}
.iconfont-list-12:before {
  content: "\e9cc";
  color: #626262;
}
.iconfont-ent-12:before {
  content: "\e9ca";
  color: #626262;
}
.vmWqN {
  position: absolute;
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  color: rgb(68, 68, 68);
  bottom: 30px;
  left: 30px;
  font-weight: bold;
  // box-shadow: rgb(221 221 221) 0px 0px 6px;
  border: 1px solid rgb(68, 68, 68);
}
.gXOWxm {
  position: absolute;
  left: 0px;
  right: 0px;
  z-index: 10;
  height: 260px;
  background-color: rgb(60, 60, 68);
  transition: all 0.3s ease-in-out 0s;
  pointer-events: none;
}
.wbMvM {
  position: absolute;
  inset: 0px;
  text-align: center;
  opacity: 0;
  z-index: -1;
  pointer-events: none;
}
.gXOWxm.closed * {
  pointer-events: none;
}
.gymnxY {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  height: 50px;
  background-color: rgb(72, 72, 79);
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  text-align: center;
  vertical-align: middle;
}
.gXOWxm.closed * {
  pointer-events: none;
}
.jNYUwY {
  position: absolute;
  color: rgb(157, 157, 157);
  font-size: 24px;
  left: 0px;
  top: 0px;
  height: 50px;
  width: 50px;
  line-height: 50px;
  background-color: rgb(84, 84, 91);
}
.gXOWxm.closed * {
  pointer-events: none;
}
.iconfont-houtui-08:before {
  content: "\e9ee";
}
.jXwbiu {
  position: absolute;
  left: 50px;
  right: 0px;
  top: 0px;
  height: 50px;
  line-height: 50px;
  padding: 0px;
  color: rgb(193, 177, 138);
  background-color: rgb(72, 72, 79);
}
.gXOWxm.closed * {
  pointer-events: none;
}
.bSFpTD {
  display: flex;
}
.jXwbiu span {
  height: 28px;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  font-size: 14px;
  color: rgb(157, 157, 157);
  opacity: 0.65;
}
.jXwbiu span.active-button {
  color: rgb(193, 177, 138);
  opacity: 1;
  position: relative;
}
.jXwbiu span.active-button::after {
  content: " ";
  position: absolute;
  bottom: -3px;
  right: 50%;
  margin-right: -4px;
  width: 10px;
  height: 2px;
  background-color: rgb(193, 177, 138);
}
.laZSDG .ring-list {
  width: 100%;
  overflow: hidden;
  text-align: left;
  padding: 0px 5px;
}
.laZSDG .ring-list ul {
  display: flex;
  width: auto;
  height: 100%;
  overflow: auto hidden;
  white-space: nowrap;
}
.laZSDG .ring-list ul li {
  display: block;
  -webkit-box-flex: 1;
  margin: 0px;
  flex: 0 0 auto;
  padding: 10px 5px;
  width: 20%;
}
.laZSDG .ring-list ul li .imageContent {
  margin: 0px auto;
  position: relative;
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: transparent;
}
.laZSDG .ring-list ul li.active .imageContent {
  border-color: rgb(193, 177, 138);
}
.laZSDG .ring-list ul li img {
  border-radius: 50%;
  width: 100%;
  padding: 4px;
}
.laZSDG .index {
  margin-top: 10px;
}
.laZSDG p {
  text-align: center;
  color: rgb(193, 177, 138);
  font-size: 12px;
}
.laZSDG .ring-list ul li .imageContent p.index {
  position: absolute;
  top: -8px;
  right: -12px;
  margin: 0px;
  padding: 1px 10px;
  line-height: 100%;
  border-radius: 6px;
  color: rgb(193, 177, 138);
  background-color: rgb(84, 84, 91);
}
.laZSDG .ring-list ul li.active .imageContent p.index {
  background-color: rgb(193, 177, 138);
  color: rgb(52, 52, 60);
}
.gjczMv {
  border-top: 1px solid rgb(52, 52, 60);
  width: 100%;
}
.laZSDG .ring-list {
  width: 100%;
  overflow: hidden;
  text-align: left;
  padding: 0px 5px;
}
.EflSd {
  position: absolute;
  inset: 0px;
  text-align: center;
  opacity: 0;
  z-index: -1;
  pointer-events: none;
}
.iconfont-houtui-08:before {
  content: "\e9ee";
}
.IZKIX {
  height: 90px;
  display: block;
  width: 100%;
  padding: 0px 16px;
}
.IZKIX a.btn {
  height: 100%;
  display: block;
  line-height: 90px;
  font-size: 14px;
  color: rgb(193, 177, 138);
  border-radius: 10px;
  border: 1px dashed rgb(193, 177, 138);
}
.IZKIX a.btn span {
  margin: 0px 4px;
}
.IZKIX a.btn span.plus {
  font-size: 24px;
}
.iconfont-tjsx-08:before {
  content: "\e9f0";
}
.gjczMv {
  border-top: 1px solid rgb(52, 52, 60);
  width: 100%;
}
.laZSDG .ring-list {
  width: 100%;
  overflow: hidden;
  text-align: left;
  padding: 0px 5px;
}
.laZSDG .ring-list ul {
  display: flex;
  width: auto;
  height: 100%;
  overflow: auto hidden;
  white-space: nowrap;
}
.laZSDG .ring-list ul li.active p.name {
  color: rgb(193, 177, 138);
}
.kStZYu {
  position: absolute;
  inset: 0px;
  z-index: -1;
  pointer-events: none;
  opacity: 0;
}
.fVSnDo {
  width: 100%;
  font-size: 12px;
  color: rgb(0, 0, 0);
  border: transparent;
}
.fVSnDo .text {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  max-width: 360px;
  margin: 0px auto;
}
.fVSnDo .text div.text-content {
  position: relative;
  width: 285px;
  margin-left: 5px;
  margin-right: 10px;
}
.fVSnDo .text div.text-content input {
  border: 1px solid rgb(72, 72, 79);
  background-color: rgb(72, 72, 79);
  border-radius: 50px;
  height: 35px;
  width: 100%;
  color: rgb(255, 255, 255);
  appearance: none;
}
.fVSnDo .text a.text-update {
  width: 60px;
  color: rgb(0, 0, 0);
  font-size: 16px;
  padding: 9px 8px;
  border-radius: 50px;
  background-color: rgb(193, 177, 138);
  text-align: center;
  margin-right: 5px;
  height: 35px;
}
.fVSnDo .symbols {
  margin: 30px auto 0px;
  overflow: auto hidden;
  height: 100px;
  transition: all 0.5s ease 0s;
  max-width: 360px;
}
.fVSnDo .symbols ul {
  display: inline-flex;
  margin: 0px auto;
  overflow: hidden;
  text-align: left;
}
.fVSnDo .symbols ul li {
  display: inline-block;
  margin: 5px;
  border-radius: 50%;
  background-color: rgb(72, 72, 79);
  border: 1px solid rgb(193, 177, 138);
  color: rgb(193, 177, 138);
  text-align: center;
}
.fVSnDo .symbols ul li .icon {
  display: inline-block;
  text-align: center;
  width: 33px;
  height: 33px;
  line-height: 35px;
  vertical-align: -webkit-baseline-middle;
  font-size: 16px;
  box-sizing: border-box;
}
.jVFDEF {
  position: absolute;
  inset: 0px;
  text-align: center;
  opacity: 0;
  z-index: -1;
  pointer-events: none;
}
.fzzpmF {
  display: inline-block;
  text-align: center;
  position: absolute;
  z-index: 3;
  font-size: 12px;
}
.hXWtzY {
  position: absolute;
  bottom: 0px;
  height: 150px;
  text-align: center;
}
.hXWtzY .size-num {
  display: block;
  margin-top: 5px;
  color: rgb(193, 177, 138);
  font-size: 35px;
  font-weight: 700;
}
.slide-ruler_box_2oh {
  overflow: hidden !important;
}
.slide-ruler_box_2oh {
  position: relative;
}
.hXWtzY .slide-ruler_box_2oh {
  overflow: hidden;
}
.slide-ruler_box_2oh:before {
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  content: "";
  width: 3px;
  height: 35px;
  background-color: #00b0ab;
}
.jVFDEF .slide-ruler_box_2oh::before {
  background-color: rgb(193, 177, 138);
}
.slide-ruler_canvas_2da {
  display: block;
  margin: 0 auto;
  transition-duration: 300ms;
}
canvas {
  display: inline-block;
}
.hXWtzY .size-mm {
  display: block;
  margin-top: -15px;
  color: rgb(193, 177, 138);
  font-size: 12px;
  font-weight: 700;
}
</style>
