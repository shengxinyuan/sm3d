var _0x2df2 = [
  'origin -= centreOffset;',
  'direction.y /= squashFactor;',
  'float A = dot(direction, direction);',
  'float B = 2.0*dot(origin, direction);',
  'float C = dot(origin, origin) - radius * radius;',
  'if(disc > 0.0)',
  'disc = sqrt(disc);',
  'float t2 = (-B - disc)*geometryFactor/A;',
  'float t = (t1 > t2) ? t1 : t2;',
  'return vec3(origin + centreOffset + direction * t);',
  'return vec3(0.0);',
  'vec3 debugBounces(int count) {',
  'vec3 color = vec3(1.,1.,1.);',
  'if(count == 1)',
  'color = vec3(0.0,1.0,0.0);',
  'else if(count == 2)',
  'color = vec3(0.0,0.0,1.0);',
  'else if(count == 3)',
  'else if(count == 4)',
  'color = vec3(0.0,1.0,1.0);',
  'if(count ==0)',
  'color = vec3(1.0,0.0,0.0);',
  'return color;',
  'vec3 traceRay(vec3 origin, vec3 direction, vec3 normal) {',
  '// Reflect/Refract ray entering the diamond',
  'const float n1 = 1.0;',
  'float f0 = (2.4- n1)/(2.4 + n1);',
  'f0 *= f0;',
  'vec3 attenuationFactor = vec3(1.0);',
  'vec3 brdfReflected = BRDF_Specular_GGX_Environment(reflectedDirection, normal, vec3(f0), 0.0);',
  'attenuationFactor *= ( vec3(1.0) - brdfRefracted);',
  'outColor += SampleSpecularReflection(vec4(1.0), reflectedDirection ).rgb * brdfReflected;',
  'int count = 0;',
  'newDirection = (InverseModelMatrix * vec4(newDirection, 0.0)).xyz;',
  'newDirection = normalize(newDirection);',
  'origin = (InverseModelMatrix * vec4(origin, 1.0)).xyz;',
  'vec3 intersectedPos;',
  'intersectedPos = intersectSphere(origin + vec3(epsilon), newDirection);',
  'vec3 dist = intersectedPos - origin;',
  'vec3 d = normalize(intersectedPos - centreOffset);',
  'vec3 mappedNormal = textureCube( tCubeMapNormals, d ).xyz;',
  'mappedNormal = 2. * mappedNormal - 1.;',
  'mappedNormal.y += normalOffset;',
  'mappedNormal = normalize(mappedNormal);',
  'float r = sqrt(dot(dist, dist));',
  'attenuationFactor *= exp(-r*Absorbption);',
  '// refract the ray at first intersection ',
  'vec3 oldOrigin = origin;',
  'origin = intersectedPos - normalize(intersectedPos - centreOffset) * distanceOffset;',
  'vec3 oldDir = newDirection;',
  'newDirection = refract(newDirection, mappedNormal, refractiveIndex/n1);',
  'newDirection = reflect(oldDir, mappedNormal);',
  'if(i == RAY_BOUNCES-1 ) //If the ray got trapped even after max iterations, simply sample along the outgoing refraction! ',
  'vec3 d1 = (modelMatrix * vec4(oldDir, 0.0)).xyz;',
  'outColor += SampleSpecularContribution(vec4(1.0), d1 ).rgb * colorCorrection * attenuationFactor  * boostFactors * (vec3(1.0) - brdfReflected);',
  '//outColor = vec3(1.,0.,0.);',
  '//if(d1.y > 0.95) {',
  '//outColor += d1.y * vec3(1.,0.,0) * attenuationFactor * (vec3(1.0) - brdfReflected) * boostFactors;',
  '//}',
  'vec3 brdfRefracted = BRDF_Specular_GGX_Environment(newDirection, -mappedNormal, vec3(f0), 0.0);',
  '// outgoing(refracted) ray\'s contribution ',
  'vec3 d1 = (modelMatrix * vec4(newDirection, 0.0)).xyz;',
  'vec3 colorG = SampleSpecularContribution(vec4(1.0), d1 ).rgb * ( vec3(1.0) - brdfRefracted);',
  'vec3 dir1 = refract(oldDir, mappedNormal, (refractiveIndex+rIndexDelta)/n1);',
  'vec3 dir2 = refract(oldDir, mappedNormal, (refractiveIndex-rIndexDelta)/n1);',
  'vec3 d2 = (modelMatrix * vec4(dir1, 0.0)).xyz;',
  'vec3 colorR = SampleSpecularContribution(vec4(1.0), d2 ).rgb * ( vec3(1.0) - brdfRefracted);',
  'outColor += vec3(colorR.r, colorG.g, colorB.b) * colorCorrection * attenuationFactor * boostFactors;',
  '//new reflected ray inside the diamond ',
  'attenuationFactor *= brdfReflected * boostFactors;',
  'count++;',
  'if(false)',
  'outColor = debugBounces(count);',
  'return outColor;',
  'vec3 normalizedNormal = normalize(worldNormal);',
  'vec3 viewVector = normalize(vecPos - cameraPosition);',
  'gl_FragColor = vec4(color.rgb,1.);',
  '#include <tonemapping_fragment>',
  '//#include <encodings_fragment>',
  '//gl_FragColor = textureCube(tCubeMapNormals, normalize(Normal));',
  'SparkleShader',
  'varying vec4 sparkleProjectedCentre;',
  'uniform mat4 ModelViewMatrix;',
  'uniform float scale;',
  'uniform float rotation;',
  'void main() { ',
  'vUv = uv; ',
  'vec4 finalPosition;',
  'vec2 alignedPosition = position.xy * scale;',
  'vec2 rotatedPosition;',
  'rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;',
  'rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;',
  'finalPosition = ModelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );',
  'finalPosition.xy += rotatedPosition;',
  'finalPosition = projectionMatrix * finalPosition;',
  'sparkleProjectedCentre = projectionMatrix * ModelViewMatrix * vec4(0.0,0.0,0.0,1.0 );',
  'gl_Position = finalPosition;',
  'uniform sampler2D sparkleTexture;',
  'uniform float intensity;',
  'vec3 ClosestPrimaryColor(vec3 color) {',
  'vec3 diffColor1 = vec3(1.0,0.0,0.0) - color;',
  'vec3 diffColor3 = vec3(0.0,0.0,1.0) - color;',
  'if(dot(diffColor1, diffColor1) < margin)',
  'return vec3(1.0, margin, margin); ',
  'if(dot(diffColor2, diffColor2) < margin)',
  'return vec3(margin, margin, 1.0);',
  'vec2 uv = (sparkleProjectedCentre.xy/sparkleProjectedCentre.w + 1.0)*0.5;',
  'float noise = texture2D( noiseTexture, uv ).r;',
  'screenColor.xyz *= screenColor.xyz;',
  '//float luminance = dot(vec3(0.3, 0.59, 0.11), screenColor.xyz);',
  '//luminance = luminance > 0.0 ? luminance : 0.0;',
  'vec4 spriteColor = vec4(1.) * texture2D( sparkleTexture, vUv ).a * screenColor * noise * intensity;',
  'gl_FragColor = spriteColor;',
  'NormalMapCaptureShader',
  'DiamondShader',
  'Sparkle',
  'PlaneGeometry',
  'depthTest',
  'depthWrite',
  'transparent',
  'side',
  'AdditiveBlending',
  'texture',
  'sparkleTexture',
  'noiseTexture',
  'Mesh',
  'shallowCopy',
  'positionOffset',
  'intensity',
  'screenTexture',
  'ModelViewMatrix',
  'setIntensity',
  'setRotationSpeedFactor',
  'updateMatrix',
  'matrixWorldInverse',
  'modelViewMatrix',
  'applyMatrix4',
  'apply',
  '{}.constructor("return this")( )',
  'console',
  'log',
  'warn',
  'debug',
  'info',
  'error',
  'exception',
  'trace',
  'exports',
  'call',
  'defineProperty',
  '__esModule',
  'default',
  'prototype',
  'hasOwnProperty',
  'traverse',
  'isMesh',
  'name',
  'geometry',
  'transformed',
  'set',
  'getAttribute',
  'array',
  'index',
  'length',
  'sub',
  'cross',
  'add',
  'normalize',
  'computeBoundingBox',
  'computeBoundingSphere',
  'identity',
  'boundingSphere',
  'center',
  'makeTranslation',
  'dot',
  'abs',
  'crossVectors',
  'Matrix4',
  'elements',
  'getInverse',
  'applyMatrix',
  'radius',
  'makeScale',
  'multiply',
  'compose',
  'position',
  'quaternion',
  'Quaternion',
  'Vector3',
  'decompose',
  'copy',
  'prototypeMaterials',
  'toLowerCase',
  'includes',
  'substring',
  'configurationParams',
  'diamondConfiguration',
  'material',
  'uniforms',
  'color',
  'Color',
  'boostFactors',
  'squashFactor',
  'value',
  'rIndexDelta',
  'geometryFactor',
  'refractiveIndex',
  'needsUpdate',
  'DiamondUtils',
  'processScene',
  'quality',
  'medium',
  'DiamondMaterial',
  'updateMatrixWorld',
  'envMap',
  'Diamond',
  'push',
  'setGemstoneConfig',
  'envCubeMap',
  'getMesh',
  'diamond',
  'clone',
  'boundingBox',
  'getCenter',
  'centreOffset',
  'updateDiamond',
  'getCentreOffset',
  'getBoundingRadius',
  'setPosition',
  'rotation',
  'setScale',
  'sparkles',
  'setTransform',
  'matrix',
  'matrixWorld',
  'InverseModelMatrix',
  'syncWithTransform',
  'mesh',
  'setRotation',
  'rotationSpeedFactor',
  'alignWithCamera',
  'CubeCamera',
  'ShaderMaterial',
  'extensions',
  'defines',
  'diamondMaterial',
  'vertexShader',
  'renderTarget',
  'generateMipmaps',
  'magFilter',
  'NearestFilter',
  'minFilter',
  'format',
  'RGBAFormat',
  'normalMapCaptureMaterial',
  'scale',
  'prepareNormalsCubeMap',
  'UniformsUtils',
  'fragmentShader',
  'update',
  'tCubeMapNormals',
  'dispose',
  'varying vec3 vNormal;',
  'void main() {',
  'vNormal = normal;',
  'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
  'join',
  'vec3 color = normalize(vNormal);',
  'color = color * 0.5 + 0.5;',
  'gl_FragColor = vec4( color.x, color.y, color.z, 1.0 );',
  'DoubleSide',
  'varying vec2 vUv;',
  'varying vec3 Normal;',
  'varying vec3 worldNormal;',
  'varying vec3 vecPos;',
  'varying vec3 viewPos;',
  'vUv = uv;',
  'worldNormal = (modelMatrix * vec4(normal,0.0)).xyz;',
  'vecPos = (modelMatrix * vec4(position, 1.0 )).xyz;',
  'viewPos = (modelViewMatrix * vec4(position, 1.0 )).xyz;',
  'uniform samplerCube tCubeMapNormals;',
  'uniform samplerCube envMap;',
  'uniform samplerCube envRefractionMap;',
  'uniform sampler2D sphereMap;',
  'uniform float envMapIntensity;',
  'uniform float tanAngleSqCone;',
  'uniform int maxBounces;',
  'uniform mat4 modelMatrix;',
  'uniform mat4 InverseModelMatrix;',
  'uniform float refractiveIndex;',
  'uniform float radius;',
  'uniform bool bDebugBounces;',
  'uniform float rIndexDelta;',
  'uniform float normalOffset;',
  'uniform float distanceOffset;',
  'uniform vec3 Absorbption;',
  'uniform vec3 colorCorrection;',
  'uniform vec3 boostFactors;',
  'float dotNV = abs( dot( normal, viewDir ) );',
  'const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );',
  'vec4 r = roughness * c0 + c1;',
  'vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;',
  'return specularColor * AB.x + AB.y;',
  'vec4 SampleSpecularReflection(vec4 specularColor, vec3 direction ) {',
  'direction.z *= -1.0;',
  'vec3 tempDir = normalize(vec3(0., 0., 1.) + direction);',
  'vec4 sampleColorRGB = envMapIntensity * envMapTexelToLinear( textureCube( envMap, direction ) );',
  'vec4 sampleColorRefraction = envMapIntensity * ( texture2D( sphereMap, tempDir.xy * 0.5 + 0.5 ) );',
  'vec3 toneMappedColor = pow(toneMapping(sampleColorRGB.rgb),vec3(1./1.));',
  'return vec4(toneMappedColor, 1.0);',
  'vec4 SampleSpecularContribution(vec4 specularColor, vec3 direction ) {',
  'direction = normalize(direction);',
  'float m = 2.8284271247461903 * sqrt( direction.z+1.0 );',
  'vec4 sampleColorRefraction = envMapIntensity * texture2D( sphereMap, clamp(direction.xy / m + 0.45, vec2(0.), vec2(1.)) );',
  'vec3 toneMappedColor = pow(toneMapping( sampleColorRGB.rgb ),vec3(1./1.));',
  'vec3 intersectSphere(vec3 origin, vec3 direction) {'
];
(function (_0x548817, _0x40b2fe) {
  var _0x5a771c = function (_0x33a0be) {
      while (--_0x33a0be) {
          _0x548817.push(_0x548817.shift());
      }
  };
  _0x5a771c(++_0x40b2fe);
}(_0x2df2, 453));
var _0x3028 = function (_0x2b0235, _0x5a4bb8) {
  _0x2b0235 = _0x2b0235 - 0;
  var _0x13d51d = _0x2df2[_0x2b0235];
  return _0x13d51d;
};
!function (_0x2a4370) {
  var _0x18035a = function () {
      var _0x4e5b2a = !![];
      return function (_0x9eac4e, _0x1a1ffd) {
          var _0x1a9f38 = _0x4e5b2a ? function () {
              if (_0x1a1ffd) {
                  var _0x3500f8 = _0x1a1ffd[_0x3028('0x0')](_0x9eac4e, arguments);
                  _0x1a1ffd = null;
                  return _0x3500f8;
              }
          } : function () {
          };
          _0x4e5b2a = ![];
          return _0x1a9f38;
      };
  }();
  var _0x50e468 = {};
  function _0x529400(_0x556abe) {
      var _0x27ee7c = _0x18035a(this, function () {
          var _0x3b3ccb = function () {
          };
          var _0x34c390;
          try {
              var _0x3509a3 = Function('return (function() ' + _0x3028('0x1') + ');');
              _0x34c390 = _0x3509a3();
          } catch (_0x4a3840) {
              _0x34c390 = window;
          }
          // if (!_0x34c390.console) {
          //     _0x34c390[_0x3028('0x2')] = function (_0x3b3ccb) {
          //         var _0x498003 = {};
          //         _0x498003[_0x3028('0x3')] = _0x3b3ccb;
          //         _0x498003[_0x3028('0x4')] = _0x3b3ccb;
          //         _0x498003[_0x3028('0x5')] = _0x3b3ccb;
          //         _0x498003[_0x3028('0x6')] = _0x3b3ccb;
          //         _0x498003[_0x3028('0x7')] = _0x3b3ccb;
          //         _0x498003[_0x3028('0x8')] = _0x3b3ccb;
          //         _0x498003[_0x3028('0x9')] = _0x3b3ccb;
          //         return _0x498003;
          //     }(_0x3b3ccb);
          // } else {
          //     _0x34c390[_0x3028('0x2')][_0x3028('0x3')] = _0x3b3ccb;
          //     _0x34c390[_0x3028('0x2')][_0x3028('0x4')] = _0x3b3ccb;
          //     _0x34c390[_0x3028('0x2')][_0x3028('0x5')] = _0x3b3ccb;
          //     _0x34c390[_0x3028('0x2')][_0x3028('0x6')] = _0x3b3ccb;
          //     _0x34c390[_0x3028('0x2')][_0x3028('0x7')] = _0x3b3ccb;
          //     _0x34c390[_0x3028('0x2')].exception = _0x3b3ccb;
          //     _0x34c390.console[_0x3028('0x9')] = _0x3b3ccb;
          // }
      });
      _0x27ee7c();
      if (_0x50e468[_0x556abe])
          return _0x50e468[_0x556abe][_0x3028('0xa')];
      var _0x4cd010 = _0x50e468[_0x556abe] = {
          'i': _0x556abe,
          'l': !1,
          'exports': {}
      };
      return _0x2a4370[_0x556abe][_0x3028('0xb')](_0x4cd010[_0x3028('0xa')], _0x4cd010, _0x4cd010[_0x3028('0xa')], _0x529400), _0x4cd010.l = !0, _0x4cd010[_0x3028('0xa')];
  }
  _0x529400.m = _0x2a4370, _0x529400.c = _0x50e468, _0x529400.d = function (_0x2a4370, _0x50e468, _0x5e6aa6) {
      _0x529400.o(_0x2a4370, _0x50e468) || Object[_0x3028('0xc')](_0x2a4370, _0x50e468, {
          'configurable': !1,
          'enumerable': !0,
          'get': _0x5e6aa6
      });
  }, _0x529400.n = function (_0x2a4370) {
      var _0x50e468 = _0x2a4370 && _0x2a4370[_0x3028('0xd')] ? function () {
          return _0x2a4370[_0x3028('0xe')];
      } : function () {
          return _0x2a4370;
      };
      return _0x529400.d(_0x50e468, 'a', _0x50e468), _0x50e468;
  }, _0x529400.o = function (_0x2a4370, _0x50e468) {
      return Object[_0x3028('0xf')][_0x3028('0x10')].call(_0x2a4370, _0x50e468);
  }, _0x529400.p = '', _0x529400(_0x529400.s = 0);
}([
  function (_0x13619a, _0x40443c, _0x812055) {
      _0x13619a[_0x3028('0xa')] = IJEWEL = {}, _0x812055(1), _0x812055(2);
  },
  function (_0x1bd397, _0x1b4840) {
      function _0x19943f(_0x1bd397, _0x1b4840) {
          _0x1bd397[_0x3028('0x11')](_0x1bd397 => {
              if (_0x1bd397[_0x3028('0x12')]) {
                  const _0x19943f = _0x36ea18(_0x1bd397, _0x1b4840) || _0x4484a1(_0x1bd397, _0x1b4840);
                  let _0x41103f = _0x19943f && _0x19943f[_0x3028('0x13')];
                  _0x41103f || (_0x41103f = _0x1bd397[_0x3028('0x13')].toLowerCase().includes('diamond') ? 'diamond' : void 0), _0x41103f && (!function (_0x1bd397) {
                      let _0x1b4840 = _0x1bd397[_0x3028('0x14')];
                      if (_0x1b4840[_0x3028('0x15')])
                          return;
                      _0x205a9c[_0x3028('0x16')](0, 0, 0);
                      let _0x19943f = _0x1b4840[_0x3028('0x17')]('position')[_0x3028('0x18')], _0x152f0a = _0x1b4840[_0x3028('0x19')];
                      if (_0x152f0a) {
                          let _0x1bd397 = _0x152f0a.array;
                          for (let _0x1b4840 = 0; _0x1b4840 < _0x1bd397[_0x3028('0x1a')] / 3; _0x1b4840 += 3) {
                              let _0x152f0a = 3 * _0x1bd397[_0x1b4840], _0x8d7925 = 3 * _0x1bd397[_0x1b4840 + 1], _0x41103f = 3 * _0x1bd397[_0x1b4840 + 2];
                              _0x40861b[_0x3028('0x16')](_0x19943f[_0x152f0a], _0x19943f[_0x152f0a + 1], _0x19943f[_0x152f0a + 2]), _0x41d085[_0x3028('0x16')](_0x19943f[_0x8d7925], _0x19943f[_0x8d7925 + 1], _0x19943f[_0x8d7925 + 2]), _0x5c0c6b[_0x3028('0x16')](_0x19943f[_0x41103f], _0x19943f[_0x41103f + 1], _0x19943f[_0x41103f + 2]), _0x41d085.sub(_0x40861b), _0x5c0c6b[_0x3028('0x1b')](_0x40861b), _0x5c0c6b[_0x3028('0x1c')](_0x41d085), _0x205a9c[_0x3028('0x1d')](_0x5c0c6b);
                          }
                      } else
                          for (let _0x1bd397 = 0; _0x1bd397 < _0x19943f[_0x3028('0x1a')]; _0x1bd397 += 9)
                              _0x40861b[_0x3028('0x16')](_0x19943f[_0x1bd397], _0x19943f[_0x1bd397 + 1], _0x19943f[_0x1bd397 + 2]), _0x41d085.set(_0x19943f[_0x1bd397 + 3], _0x19943f[_0x1bd397 + 4], _0x19943f[_0x1bd397 + 5]), _0x5c0c6b[_0x3028('0x16')](_0x19943f[_0x1bd397 + 6], _0x19943f[_0x1bd397 + 7], _0x19943f[_0x1bd397 + 8]), _0x41d085.sub(_0x40861b), _0x5c0c6b[_0x3028('0x1b')](_0x40861b), _0x5c0c6b[_0x3028('0x1c')](_0x41d085), _0x5c0c6b[_0x3028('0x1e')](), _0x205a9c[_0x3028('0x1d')](_0x5c0c6b);
                      _0x205a9c.normalize(), _0x1b4840[_0x3028('0x1f')](), _0x1b4840[_0x3028('0x20')]();
                      let _0x19ba39 = new THREE.Matrix4();
                      _0x19ba39[_0x3028('0x21')]();
                      let _0x41103f = _0x1b4840[_0x3028('0x22')][_0x3028('0x23')];
                      _0x19ba39[_0x3028('0x24')](_0x41103f.x, _0x41103f.y, _0x41103f.z), _0x1b4840.center();
                      let _0x4707c8 = !1, _0x54c1e = 0;
                      for (; !_0x4707c8;) {
                          _0x40861b[_0x3028('0x16')](_0x19943f[_0x54c1e], _0x19943f[_0x54c1e + 1], _0x19943f[_0x54c1e + 2]), _0x40861b[_0x3028('0x1e')]();
                          let _0x1bd397 = _0x205a9c[_0x3028('0x25')](_0x40861b);
                          Math[_0x3028('0x26')](_0x1bd397 - 1) > 0.001 && (_0x4707c8 = !0), _0x54c1e += 3;
                      }
                      _0x41d085.crossVectors(_0x40861b, _0x205a9c), _0x41d085.normalize();
                      let _0x2c8524 = _0x205a9c[_0x3028('0x25')](_0x41d085);
                      _0x40861b[_0x3028('0x27')](_0x205a9c, _0x41d085), _0x40861b[_0x3028('0x1e')](), _0x2c8524 = _0x205a9c[_0x3028('0x25')](_0x40861b), _0x2c8524 = _0x41d085[_0x3028('0x25')](_0x40861b);
                      let _0x4edc95 = new THREE[(_0x3028('0x28'))]();
                      _0x4edc95[_0x3028('0x29')][0] = _0x40861b.x, _0x4edc95[_0x3028('0x29')][1] = _0x40861b.y, _0x4edc95.elements[2] = _0x40861b.z, _0x4edc95[_0x3028('0x29')][3] = 0, _0x4edc95[_0x3028('0x29')][4] = _0x205a9c.x, _0x4edc95.elements[5] = _0x205a9c.y, _0x4edc95.elements[6] = _0x205a9c.z, _0x4edc95[_0x3028('0x29')][7] = 0, _0x4edc95[_0x3028('0x29')][8] = _0x41d085.x, _0x4edc95[_0x3028('0x29')][9] = _0x41d085.y, _0x4edc95[_0x3028('0x29')][10] = _0x41d085.z, _0x4edc95[_0x3028('0x29')][11] = 0, _0x4edc95[_0x3028('0x29')][12] = 0, _0x4edc95[_0x3028('0x29')][13] = 0, _0x4edc95[_0x3028('0x29')][14] = 0, _0x4edc95[_0x3028('0x29')][15] = 1;
                      let _0x5d8cc0 = new THREE[(_0x3028('0x28'))]();
                      _0x5d8cc0[_0x3028('0x2a')](_0x4edc95), _0x1b4840[_0x3028('0x2b')](_0x5d8cc0), _0x1b4840[_0x3028('0x20')]();
                      let _0x4a1319 = _0x1b4840[_0x3028('0x22')][_0x3028('0x2c')], _0xe7ce2b = new THREE[(_0x3028('0x28'))]();
                      _0xe7ce2b[_0x3028('0x21')](), _0xe7ce2b[_0x3028('0x2d')](_0x4a1319, _0x4a1319, _0x4a1319);
                      let _0x56b89f = new THREE[(_0x3028('0x28'))]();
                      _0x56b89f[_0x3028('0x2a')](_0xe7ce2b), _0x1b4840[_0x3028('0x2b')](_0x56b89f), _0x4edc95[_0x3028('0x2e')](_0xe7ce2b), _0x19ba39.multiply(_0x4edc95);
                      let _0x554b50 = new THREE[(_0x3028('0x28'))]();
                      _0x554b50[_0x3028('0x2f')](_0x1bd397[_0x3028('0x30')], _0x1bd397[_0x3028('0x31')], _0x1bd397.scale), _0x554b50[_0x3028('0x2e')](_0x19ba39);
                      let _0x768566 = new THREE.Vector3(), _0x2136bc = new THREE[(_0x3028('0x32'))](), _0x1d6e7a = new THREE[(_0x3028('0x33'))]();
                      _0x554b50[_0x3028('0x34')](_0x768566, _0x2136bc, _0x1d6e7a), _0x1bd397[_0x3028('0x30')][_0x3028('0x35')](_0x768566), _0x1bd397[_0x3028('0x31')].copy(_0x2136bc), _0x1bd397.scale[_0x3028('0x35')](_0x1d6e7a), _0x1b4840[_0x3028('0x15')] = !0;
                  }(_0x1bd397), IJEWEL.DiamondUtils[_0x3028('0x36')][_0x41103f] || (IJEWEL.DiamondUtils[_0x3028('0x36')][_0x41103f] = _0x1bd397));
              }
          });
      }
      function _0x4484a1(_0x1bd397, _0x1b4840) {
          let _0x19943f;
          const _0x4484a1 = _0x1bd397[_0x3028('0x13')][_0x3028('0x37')]();
          if (_0x1b4840 && _0x1b4840.diamondClass) {
              const _0x1bd397 = _0x1b4840.diamondClass;
              for (let _0x1b4840 in _0x1bd397) {
                  let _0x19943f = _0x1bd397[_0x1b4840];
                  if (_0x19943f[_0x3028('0x13')] && _0x4484a1[_0x3028('0x38')](_0x19943f[_0x3028('0x13')].toLowerCase()))
                      return _0x19943f;
              }
          } else
              _0x1b4840 && !_0x1b4840.diamondConfiguration && _0x4484a1[_0x3028('0x38')]('diamond') && (_0x19943f = { 'name': _0x1bd397[_0x3028('0x13')][_0x3028('0x39')](0, 8) });
          return _0x19943f;
      }
      function _0x36ea18(_0x1bd397, _0x1b4840) {
          _0x1b4840 = _0x1b4840 || this[_0x3028('0x3a')];
          const _0x19943f = _0x1bd397.name[_0x3028('0x37')]();
          if (_0x1b4840 && _0x1b4840.diamondConfiguration) {
              const _0x1bd397 = _0x1b4840[_0x3028('0x3b')];
              for (let _0x1b4840 in _0x1bd397) {
                  let _0x4484a1 = _0x1bd397[_0x1b4840];
                  if (_0x4484a1[_0x3028('0x13')] && _0x19943f === _0x4484a1[_0x3028('0x13')][_0x3028('0x37')]())
                      return _0x4484a1;
              }
          } else
              _0x19943f[_0x3028('0x38')]('diamond');
      }
      function _0x5ce20e(_0x1bd397, _0x1b4840) {
          const _0x19943f = _0x1bd397[_0x3028('0x3c')], _0x4484a1 = _0x19943f[_0x3028('0x3d')].Absorbption.value;
          if (void 0 !== _0x1b4840[_0x3028('0x3e')]) {
              const _0x1bd397 = new THREE[(_0x3028('0x3f'))](_0x1b4840[_0x3028('0x3e')]);
              _0x4484a1.x = 1 - _0x1bd397.r, _0x4484a1.y = 1 - _0x1bd397.g, _0x4484a1.z = 1 - _0x1bd397.b;
          }
          const _0x36ea18 = _0x19943f.uniforms[_0x3028('0x40')].value;
          if (void 0 !== _0x1b4840[_0x3028('0x40')]) {
              new THREE[(_0x3028('0x3f'))](_0x1b4840.boostFactors);
              _0x36ea18.x = _0x1b4840[_0x3028('0x40')].x, _0x36ea18.y = _0x1b4840[_0x3028('0x40')].y, _0x36ea18.z = _0x1b4840[_0x3028('0x40')].z;
          }
          void 0 !== _0x1b4840[_0x3028('0x41')] && (_0x19943f[_0x3028('0x3d')][_0x3028('0x41')][_0x3028('0x42')] = _0x1b4840[_0x3028('0x41')]), void 0 !== _0x1b4840[_0x3028('0x43')] && (_0x19943f[_0x3028('0x3d')][_0x3028('0x43')][_0x3028('0x42')] = _0x1b4840[_0x3028('0x43')]), void 0 !== _0x1b4840[_0x3028('0x44')] && (_0x19943f[_0x3028('0x3d')][_0x3028('0x44')][_0x3028('0x42')] = _0x1b4840[_0x3028('0x44')]), void 0 !== _0x1b4840[_0x3028('0x45')] && (_0x19943f[_0x3028('0x3d')].refractiveIndex[_0x3028('0x42')] = _0x1b4840[_0x3028('0x45')]), _0x19943f[_0x3028('0x46')] = !0;
      }
      const _0x40861b = new THREE[(_0x3028('0x33'))](), _0x41d085 = new THREE.Vector3(), _0x5c0c6b = new THREE[(_0x3028('0x33'))](), _0x205a9c = new THREE[(_0x3028('0x33'))]();
      IJEWEL[_0x3028('0x47')] = {}, _0x1bd397[_0x3028('0xa')] = IJEWEL[_0x3028('0x47')][_0x3028('0x48')] = function (_0x1bd397, _0x1b4840, _0x40861b) {
          return IJEWEL[_0x3028('0x47')].prototypeMaterials = [], _0x19943f(_0x1b4840, _0x40861b), function (_0x1bd397, _0x1b4840, _0x19943f) {
              let _0x40861b = [], _0x41d085 = _0x19943f && _0x19943f.envCubeMap;
              for (var _0x5c0c6b in IJEWEL[_0x3028('0x47')][_0x3028('0x36')]) {
                  const _0x1b4840 = IJEWEL[_0x3028('0x47')].prototypeMaterials[_0x5c0c6b];
                  let _0x4484a1;
                  _0x4484a1 = _0x19943f && _0x19943f[_0x3028('0x49')] ? 'low' === _0x19943f[_0x3028('0x49')] ? 64 : _0x3028('0x4a') === _0x19943f[_0x3028('0x49')] ? 256 : 'high' === _0x19943f.quality ? 1024 : 256 : 256;
                  const _0x36ea18 = new IJEWEL[(_0x3028('0x4b'))](_0x1b4840, _0x41d085, _0x1bd397, _0x4484a1);
                  IJEWEL[_0x3028('0x47')].prototypeMaterials[_0x5c0c6b] = _0x36ea18;
              }
              return _0x1b4840[_0x3028('0x4c')](), _0x1b4840.traverse(_0x1bd397 => {
                  if (_0x1bd397[_0x3028('0x12')]) {
                      _0x1bd397[_0x3028('0x3c')] && (_0x1bd397.material[_0x3028('0x4d')] = _0x41d085);
                      const _0x1b4840 = _0x4484a1(_0x1bd397, _0x19943f), _0x5c0c6b = _0x36ea18(_0x1bd397, _0x19943f);
                      let _0x205a9c = _0x5c0c6b && _0x5c0c6b.name;
                      if ((_0x205a9c = _0x205a9c || _0x1b4840 && _0x1b4840.name) || (_0x205a9c = _0x1bd397[_0x3028('0x13')][_0x3028('0x37')]()[_0x3028('0x38')]('diamond') ? 'diamond' : void 0), _0x205a9c && IJEWEL[_0x3028('0x47')][_0x3028('0x36')][_0x205a9c]) {
                          let _0x19943f = IJEWEL[_0x3028('0x47')][_0x3028('0x36')][_0x205a9c];
                          const _0x4484a1 = new IJEWEL[(_0x3028('0x4e'))](_0x1bd397, _0x19943f);
                          _0x5ce20e(_0x1bd397, _0x5c0c6b || _0x1b4840 || { 'name': _0x205a9c }), _0x40861b[_0x3028('0x4f')](_0x4484a1);
                      }
                  }
              }), _0x40861b;
          }(_0x1bd397, _0x1b4840, _0x40861b);
      }, _0x1bd397.exports = IJEWEL[_0x3028('0x47')][_0x3028('0x50')] = function (_0x1bd397, _0x1b4840) {
          let _0x19943f = _0x1b4840 && _0x1b4840[_0x3028('0x51')];
          _0x1bd397.forEach(_0x1bd397 => {
              const _0x40861b = _0x1bd397[_0x3028('0x52')]();
              if (_0x40861b[_0x3028('0x12')]) {
                  _0x40861b.material && _0x19943f && (_0x40861b[_0x3028('0x3c')][_0x3028('0x3d')].envMap[_0x3028('0x42')] = _0x19943f, _0x40861b[_0x3028('0x3c')][_0x3028('0x4d')] = _0x19943f);
                  const _0x1bd397 = _0x4484a1(_0x40861b, _0x1b4840), _0x41d085 = _0x36ea18(_0x40861b, _0x1b4840);
                  let _0x5c0c6b = _0x1bd397 && _0x1bd397[_0x3028('0x13')];
                  if (_0x5c0c6b = _0x5c0c6b || _0x41d085 && _0x41d085[_0x3028('0x13')] || _0x3028('0x53')) {
                      _0x5ce20e(_0x40861b, _0x41d085 || _0x1bd397 || { 'name': _0x5c0c6b });
                  }
              }
          });
      };
  },
  function (_0x9e2626, _0x5df325, _0x467a9e) {
      _0x467a9e(3), _0x467a9e(4), _0x9e2626[_0x3028('0xa')] = IJEWEL[_0x3028('0x4e')] = class {
          constructor(_0x9e2626, _0x5df325) {
              this.t = _0x9e2626, this.t[_0x3028('0x3c')] = _0x5df325[_0x3028('0x54')](), this.v = [], this.t[_0x3028('0x14')][_0x3028('0x1f')](), this.u = new THREE[(_0x3028('0x33'))](), this.t[_0x3028('0x14')][_0x3028('0x55')][_0x3028('0x56')](this.u), this.t[_0x3028('0x3c')][_0x3028('0x3d')][_0x3028('0x57')][_0x3028('0x42')].copy(this.u), this.t.geometry[_0x3028('0x20')](), this.h = this.t[_0x3028('0x14')][_0x3028('0x22')].radius, this.t[_0x3028('0x3c')][_0x3028('0x3d')][_0x3028('0x2c')][_0x3028('0x42')] = this.h;
              let _0x467a9e = this;
              this.t.onBeforeRender = function (_0x9e2626, _0x5df325, _0x3c1e1c) {
                  _0x467a9e[_0x3028('0x58')](_0x3c1e1c);
              };
          }
          [_0x3028('0x59')]() {
              return this.u;
          }
          [_0x3028('0x5a')]() {
              return this.h;
          }
          [_0x3028('0x52')]() {
              return this.t;
          }
          [_0x3028('0x5b')](_0x9e2626, _0x5df325, _0x467a9e) {
              this.t[_0x3028('0x30')][_0x3028('0x16')](_0x9e2626, _0x5df325, _0x467a9e);
          }
          ['setRotation'](_0x9e2626, _0x5df325, _0x467a9e) {
              this.t[_0x3028('0x5c')][_0x3028('0x16')](_0x9e2626, _0x5df325, _0x467a9e);
          }
          ['setQuaternion'](_0x9e2626, _0x5df325, _0x467a9e, _0x95162e) {
              this.t[_0x3028('0x31')][_0x3028('0x16')](_0x9e2626, _0x5df325, _0x467a9e, _0x95162e);
          }
          [_0x3028('0x5d')](_0x9e2626, _0x5df325, _0x467a9e) {
              this.t.scale[_0x3028('0x16')](_0x9e2626, _0x5df325, _0x467a9e);
              for (var _0xbbbe1 = 0; _0xbbbe1 < this[_0x3028('0x5e')][_0x3028('0x1a')]; _0xbbbe1++)
                  this.v[_0xbbbe1][_0x3028('0x5d')](_0x9e2626);
          }
          [_0x3028('0x5f')](_0x9e2626) {
              this.t[_0x3028('0x60')][_0x3028('0x35')](_0x9e2626);
          }
          [_0x3028('0x58')](_0x9e2626) {
              let _0x5df325 = new THREE[(_0x3028('0x33'))]();
              this.t[_0x3028('0x4c')]();
              let _0x467a9e = this.t[_0x3028('0x61')], _0x4cfe3b = this.t[_0x3028('0x3c')][_0x3028('0x3d')][_0x3028('0x62')];
              if (_0x4cfe3b) {
                  _0x4cfe3b[_0x3028('0x42')][_0x3028('0x2a')](_0x467a9e);
              }
              for (var _0x1e1228 = 0; _0x1e1228 < this.v[_0x3028('0x1a')]; _0x1e1228++) {
                  this.v[_0x1e1228][_0x3028('0x63')](this.t[_0x3028('0x61')]), _0x5df325[_0x3028('0x35')](_0x9e2626[_0x3028('0x30')]), _0x5df325[_0x3028('0x1b')](this.v[_0x1e1228][_0x3028('0x64')].position), _0x5df325[_0x3028('0x1e')]();
                  var _0xf6b95d = _0x5df325.x + _0x5df325.y + _0x5df325.z;
                  this.v[_0x1e1228][_0x3028('0x65')](_0xf6b95d * this.v[_0x1e1228][_0x3028('0x66')]), this.v[_0x1e1228][_0x3028('0x67')](_0x9e2626);
              }
          }
          ['addSparkle'](_0x9e2626) {
              this.v[_0x3028('0x4f')](_0x9e2626);
          }
      }, _0x9e2626[_0x3028('0xa')] = IJEWEL[_0x3028('0x4b')] = class {
          constructor(_0x9e2626, _0x5df325, _0x467a9e, _0xbcbfb) {
              this.C = null, this.t = null, this.R = null, _0xbcbfb = _0xbcbfb || 1024, this.M = _0x5df325, this.T = new THREE[(_0x3028('0x68'))](0.0001, 100, _0xbcbfb), this.I = new THREE.Scene(), this.I[_0x3028('0x1d')](this.T), this.D = new THREE[(_0x3028('0x69'))](), this.D[_0x3028('0x6a')] = IJEWEL.diamondMaterial[_0x3028('0x6a')], this.D[_0x3028('0x6b')] = IJEWEL[_0x3028('0x6c')][_0x3028('0x6b')], this.D[_0x3028('0x3d')] = THREE.UniformsUtils[_0x3028('0x54')](IJEWEL[_0x3028('0x6c')].uniforms), this.D[_0x3028('0x3d')][_0x3028('0x4d')][_0x3028('0x42')] = this.M, this.D[_0x3028('0x6d')] = IJEWEL[_0x3028('0x6c')][_0x3028('0x6d')], this.D.fragmentShader = IJEWEL[_0x3028('0x6c')].fragmentShader, this.T[_0x3028('0x6e')].texture[_0x3028('0x6f')] = !1, this.T[_0x3028('0x6e')].texture[_0x3028('0x70')] = THREE[_0x3028('0x71')], this.T[_0x3028('0x6e')].texture[_0x3028('0x72')] = THREE.NearestFilter, this.T.renderTarget.texture[_0x3028('0x73')] = THREE[_0x3028('0x74')], this.H = !0, this.t = _0x9e2626, this.R = this.t[_0x3028('0x54')](), this.R[_0x3028('0x3c')] = IJEWEL[_0x3028('0x75')], this.R[_0x3028('0x14')] = _0x9e2626[_0x3028('0x14')].clone(), this.R.geometry[_0x3028('0x23')](), this.C = _0x9e2626[_0x3028('0x14')], this.C[_0x3028('0x1f')](), this.u = new THREE[(_0x3028('0x33'))](), this.C[_0x3028('0x55')][_0x3028('0x56')](this.u), this.C.computeBoundingSphere(), this.R[_0x3028('0x30')].set(0, 0, 0), this.R[_0x3028('0x5c')][_0x3028('0x16')](0, 0, 0), this.R[_0x3028('0x31')][_0x3028('0x16')](0, 0, 0, 1), this.R[_0x3028('0x76')][_0x3028('0x16')](1, 1, 1), this.I[_0x3028('0x1d')](this.R), this[_0x3028('0x77')](_0x467a9e), this.v = [];
          }
          [_0x3028('0x54')]() {
              const _0x9e2626 = new THREE[(_0x3028('0x69'))]();
              return _0x9e2626.uniforms = THREE[_0x3028('0x78')][_0x3028('0x54')](this.D[_0x3028('0x3d')]), _0x9e2626[_0x3028('0x6a')] = this.D[_0x3028('0x6a')], _0x9e2626[_0x3028('0x6b')] = this.D[_0x3028('0x6b')], _0x9e2626[_0x3028('0x3d')].tCubeMapNormals[_0x3028('0x42')] = this.T.renderTarget.texture, _0x9e2626[_0x3028('0x3d')].envMap[_0x3028('0x42')] = this.M, _0x9e2626[_0x3028('0x4d')] = this.M, _0x9e2626[_0x3028('0x6d')] = this.D[_0x3028('0x6d')], _0x9e2626[_0x3028('0x79')] = this.D[_0x3028('0x79')], _0x9e2626;
          }
          ['prepareNormalsCubeMap'](_0x9e2626) {
              this.H && (this.T[_0x3028('0x7a')](_0x9e2626, this.I), this.D[_0x3028('0x3d')][_0x3028('0x7b')][_0x3028('0x42')] = this.T[_0x3028('0x6e')], this.H = !1);
          }
          [_0x3028('0x7c')]() {
              this.T[_0x3028('0x6e')].dispose(), this.R[_0x3028('0x14')][_0x3028('0x7c')](), this.D[_0x3028('0x7c')]();
          }
      };
  },
  function (_0x198e27, _0x21b4a2) {
      _0x198e27.exports = IJEWEL.NormalMapCaptureShader = {
          'vertexShader': [
              _0x3028('0x7d'),
              _0x3028('0x7e'),
              _0x3028('0x7f'),
              _0x3028('0x80'),
              '}'
          ][_0x3028('0x81')]('\n'),
          'fragmentShader': [
              _0x3028('0x7d'),
              _0x3028('0x7e'),
              _0x3028('0x82'),
              _0x3028('0x83'),
              _0x3028('0x84'),
              '}'
          ][_0x3028('0x81')]('\n'),
          'side': THREE[_0x3028('0x85')]
      }, _0x198e27[_0x3028('0xa')] = IJEWEL.DiamondShader = {
          'defines': { 'RAY_BOUNCES': 5 },
          'vertexShader': [
              _0x3028('0x86'),
              _0x3028('0x87'),
              _0x3028('0x88'),
              _0x3028('0x89'),
              _0x3028('0x8a'),
              _0x3028('0x7e'),
              _0x3028('0x8b'),
              'Normal =  normal;',
              _0x3028('0x8c'),
              _0x3028('0x8d'),
              _0x3028('0x8e'),
              'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
              '}'
          ].join('\n'),
          'fragmentShader': [
              _0x3028('0x86'),
              _0x3028('0x87'),
              _0x3028('0x88'),
              _0x3028('0x89'),
              _0x3028('0x8a'),
              _0x3028('0x8f'),
              _0x3028('0x90'),
              _0x3028('0x91'),
              _0x3028('0x92'),
              _0x3028('0x93'),
              _0x3028('0x94'),
              'uniform float coneHeight;',
              _0x3028('0x95'),
              _0x3028('0x96'),
              _0x3028('0x97'),
              _0x3028('0x98'),
              _0x3028('0x99'),
              _0x3028('0x9a'),
              _0x3028('0x9b'),
              _0x3028('0x9c'),
              'uniform float squashFactor;',
              _0x3028('0x9d'),
              'uniform float geometryFactor;',
              _0x3028('0x9e'),
              _0x3028('0x9f'),
              _0x3028('0xa0'),
              'uniform vec3 centreOffset;',
              'vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {',
              _0x3028('0xa1'),
              'const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );',
              _0x3028('0xa2'),
              _0x3028('0xa3'),
              'float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;',
              _0x3028('0xa4'),
              _0x3028('0xa5'),
              '}',
              _0x3028('0xa6'),
              'direction.x *= -1.0;',
              _0x3028('0xa7'),
              _0x3028('0xa8'),
              _0x3028('0xa9'),
              _0x3028('0xaa'),
              _0x3028('0xab'),
              _0x3028('0xac'),
              '}',
              _0x3028('0xad'),
              _0x3028('0xae'),
              'direction.x *= -1.0;',
              _0x3028('0xa7'),
              _0x3028('0xa9'),
              _0x3028('0xa8'),
              _0x3028('0xaf'),
              _0x3028('0xb0'),
              _0x3028('0xb1'),
              _0x3028('0xac'),
              '}',
              _0x3028('0xb2'),
              _0x3028('0xb3'),
              _0x3028('0xb4'),
              _0x3028('0xb5'),
              _0x3028('0xb6'),
              _0x3028('0xb7'),
              'float disc = B*B - 4.0 * A * C;',
              _0x3028('0xb8'),
              '{',
              _0x3028('0xb9'),
              'float t1 = (-B + disc)*geometryFactor/A;',
              _0x3028('0xba'),
              _0x3028('0xbb'),
              'direction.y *= squashFactor;',
              _0x3028('0xbc'),
              '}',
              _0x3028('0xbd'),
              '}',
              _0x3028('0xbe'),
              _0x3028('0xbf'),
              _0x3028('0xc0'),
              _0x3028('0xc1'),
              _0x3028('0xc2'),
              _0x3028('0xc3'),
              _0x3028('0xc4'),
              'color = vec3(1.0,1.0,0.0);',
              _0x3028('0xc5'),
              _0x3028('0xc6'),
              'else',
              _0x3028('0xc1'),
              _0x3028('0xc7'),
              _0x3028('0xc8'),
              _0x3028('0xc9'),
              '}',
              _0x3028('0xca'),
              'vec3 outColor = vec3(0.0);',
              _0x3028('0xcb'),
              _0x3028('0xcc'),
              'const float epsilon = 1e-4;',
              _0x3028('0xcd'),
              _0x3028('0xce'),
              _0x3028('0xcf'),
              'vec3 newDirection = refract(direction, normal, n1/refractiveIndex);',
              'vec3 reflectedDirection = reflect(direction, normal);',
              _0x3028('0xd0'),
              'vec3 brdfRefracted = BRDF_Specular_GGX_Environment(newDirection, -normal, vec3(f0), 0.0);',
              _0x3028('0xd1'),
              _0x3028('0xd2'),
              _0x3028('0xd3'),
              _0x3028('0xd4'),
              _0x3028('0xd5'),
              _0x3028('0xd6'),
              '// ray bounces ',
              'for( int i=0; i<RAY_BOUNCES; i++) { ',
              _0x3028('0xd7'),
              _0x3028('0xd8'),
              _0x3028('0xd9'),
              _0x3028('0xda'),
              _0x3028('0xdb'),
              _0x3028('0xdc'),
              _0x3028('0xdd'),
              _0x3028('0xde'),
              '//dist = (modelMatrix * vec4(dist, 1.)).xyz;',
              _0x3028('0xdf'),
              _0x3028('0xe0'),
              _0x3028('0xe1'),
              _0x3028('0xe2'),
              _0x3028('0xe3'),
              _0x3028('0xe4'),
              _0x3028('0xe5'),
              'if( dot(newDirection, newDirection) == 0.0) { // Total Internal Reflection. Continue inside the diamond ',
              _0x3028('0xe6'),
              _0x3028('0xe7'),
              '{',
              'vec3 brdfReflected = BRDF_Specular_GGX_Environment(-oldDir, mappedNormal, vec3(f0), 0.0);',
              _0x3028('0xe8'),
              _0x3028('0xe9'),
              _0x3028('0xea'),
              _0x3028('0xeb'),
              _0x3028('0xec'),
              _0x3028('0xed'),
              '}',
              '} else { // Add the contribution from outgoing ray, and continue the reflected ray inside the diamond ',
              _0x3028('0xee'),
              _0x3028('0xef'),
              _0x3028('0xf0'),
              _0x3028('0xf1'),
              _0x3028('0xf2'),
              _0x3028('0xf3'),
              _0x3028('0xf4'),
              'vec3 d3 = (modelMatrix * vec4(dir2, 0.0)).xyz;',
              _0x3028('0xf5'),
              'vec3 colorB = SampleSpecularContribution(vec4(1.0), d3 ).rgb * ( vec3(1.0) - brdfRefracted);',
              _0x3028('0xf6'),
              '//outColor = oldDir;',
              _0x3028('0xf7'),
              _0x3028('0xe6'),
              'vec3 brdfReflected = BRDF_Specular_GGX_Environment(newDirection, mappedNormal, vec3(f0), 0.0);',
              _0x3028('0xf8'),
              _0x3028('0xf9'),
              '}',
              '}',
              _0x3028('0xfa'),
              _0x3028('0xfb'),
              _0x3028('0xfc'),
              '}',
              'void main() {',
              _0x3028('0xfd'),
              _0x3028('0xfe'),
              'vec3 color = traceRay(vecPos, viewVector, normalizedNormal);',
              _0x3028('0xff'),
              _0x3028('0x100'),
              _0x3028('0x101'),
              _0x3028('0x102'),
              '}'
          ][_0x3028('0x81')]('\n'),
          'uniforms': {
              'tCubeMapNormals': {
                  'type': 't',
                  'value': null
              },
              'envMap': {
                  'type': 't',
                  'value': null
              },
              'envRefractionMap': {
                  'type': 't',
                  'value': null
              },
              'sphereMap': {
                  'type': 't',
                  'value': null
              },
              'envMapIntensity': {
                  'type': 'f',
                  'value': 1
              },
              'maxBounces': {
                  'type': 'i',
                  'value': 1
              },
              'tanAngleSqCone': {
                  'type': 'f',
                  'value': 0
              },
              'coneHeight': {
                  'type': 'f',
                  'value': 0
              },
              'bDebugBounces': {
                  'type': 'i',
                  'value': !1
              },
              'rIndexDelta': {
                  'type': 'f',
                  'value': 0.012
              },
              'refractiveIndex': {
                  'type': 'f',
                  'value': 2.4
              },
              'radius': {
                  'type': 'f',
                  'value': 1
              },
              'normalOffset': {
                  'type': 'f',
                  'value': 0
              },
              'squashFactor': {
                  'type': 'f',
                  'value': 0.98
              },
              'distanceOffset': {
                  'type': 'f',
                  'value': 0
              },
              'geometryFactor': {
                  'type': 'f',
                  'value': 0.28
              },
              'Absorbption': {
                  'type': 'v3',
                  'value': new THREE[(_0x3028('0x33'))](0, 0, 0)
              },
              'colorCorrection': {
                  'type': 'v3',
                  'value': new THREE.Vector3(1, 1, 1)
              },
              'boostFactors': {
                  'type': 'v3',
                  'value': new THREE[(_0x3028('0x33'))](0.892, 0.892, 0.98595025)
              },
              'centreOffset': {
                  'type': 'v3',
                  'value': new THREE[(_0x3028('0x33'))](0, 0, 0)
              },
              'InverseModelMatrix': {
                  'type': 'm4',
                  'value': new THREE[(_0x3028('0x28'))]()[_0x3028('0x21')]()
              }
          },
          'side': THREE[_0x3028('0x85')]
      }, _0x198e27[_0x3028('0xa')] = IJEWEL[_0x3028('0x103')] = {
          'vertexShader': [
              _0x3028('0x86'),
              _0x3028('0x104'),
              _0x3028('0x105'),
              _0x3028('0x106'),
              _0x3028('0x107'),
              _0x3028('0x108'),
              _0x3028('0x109'),
              _0x3028('0x10a'),
              _0x3028('0x10b'),
              _0x3028('0x10c'),
              _0x3028('0x10d'),
              _0x3028('0x10e'),
              _0x3028('0x10f'),
              _0x3028('0x110'),
              _0x3028('0x111'),
              _0x3028('0x112'),
              _0x3028('0x113'),
              '}'
          ].join('\n'),
          'fragmentShader': [
              _0x3028('0x86'),
              _0x3028('0x104'),
              _0x3028('0x114'),
              'uniform sampler2D screenTexture;',
              'uniform sampler2D noiseTexture;',
              _0x3028('0x115'),
              _0x3028('0x116'),
              _0x3028('0x117'),
              'vec3 diffColor2 = vec3(0.0,1.0,0.0) - color;',
              _0x3028('0x118'),
              'const float margin = 0.5; ',
              _0x3028('0x119'),
              _0x3028('0x11a'),
              _0x3028('0x11b'),
              'return vec3(margin, 1.0, margin);',
              'if(dot(diffColor3, diffColor3) < margin)',
              _0x3028('0x11c'),
              _0x3028('0xc9'),
              '}',
              _0x3028('0x7e'),
              _0x3028('0x11d'),
              'vec4 screenColor = texture2D( screenTexture, uv );',
              '//screenColor.rgb = ClosestPrimaryColor(screenColor.rgb);',
              _0x3028('0x11e'),
              _0x3028('0x11f'),
              'screenColor.xyz *= screenColor.xyz;',
              _0x3028('0x11f'),
              _0x3028('0x120'),
              _0x3028('0x121'),
              _0x3028('0x122'),
              _0x3028('0x123'),
              '}'
          ][_0x3028('0x81')]('\n'),
          'uniforms': {
              'ModelViewMatrix': {
                  'type': 'm4',
                  'value': new THREE.Matrix4()[_0x3028('0x21')]()
              },
              'sparkleTexture': {
                  'type': 't',
                  'value': null
              },
              'screenTexture': {
                  'type': 't',
                  'value': null
              },
              'noiseTexture': {
                  'type': 't',
                  'value': null
              },
              'scale': {
                  'type': 'f',
                  'value': 1
              },
              'rotation': {
                  'type': 'f',
                  'value': 0
              },
              'intensity': {
                  'type': 'f',
                  'value': 1
              }
          },
          'side': THREE[_0x3028('0x85')]
      }, _0x198e27[_0x3028('0xa')] = IJEWEL[_0x3028('0x75')] = new THREE[(_0x3028('0x69'))](IJEWEL[_0x3028('0x124')]), _0x198e27[_0x3028('0xa')] = IJEWEL[_0x3028('0x6c')] = new THREE[(_0x3028('0x69'))](IJEWEL[_0x3028('0x125')]);
  },
  function (_0x169cec, _0x3baabe) {
      _0x169cec.exports = IJEWEL[_0x3028('0x126')] = class _0x169cec {
          constructor(_0x169cec, _0x3baabe) {
              this.texture = _0x169cec, this.noiseTexture = _0x3baabe, this.geometry = new THREE[(_0x3028('0x127'))](1, 1, 0), this[_0x3028('0x3c')] = new THREE[(_0x3028('0x69'))](), this.material[_0x3028('0x128')] = !1, this[_0x3028('0x3c')][_0x3028('0x129')] = !1, this.material[_0x3028('0x12a')] = !0, this[_0x3028('0x3c')][_0x3028('0x12b')] = THREE[_0x3028('0x85')], this[_0x3028('0x3c')].blending = THREE[_0x3028('0x12c')], this[_0x3028('0x3c')][_0x3028('0x6d')] = IJEWEL.SparkleShader[_0x3028('0x6d')], this[_0x3028('0x3c')].fragmentShader = IJEWEL[_0x3028('0x103')][_0x3028('0x79')], this[_0x3028('0x3c')][_0x3028('0x3d')] = THREE[_0x3028('0x78')][_0x3028('0x54')](IJEWEL[_0x3028('0x103')][_0x3028('0x3d')]), void 0 !== this[_0x3028('0x12d')] && (this[_0x3028('0x3c')].uniforms[_0x3028('0x12e')].value = _0x169cec), void 0 !== this[_0x3028('0x12f')] && (this[_0x3028('0x3c')][_0x3028('0x3d')][_0x3028('0x12f')][_0x3028('0x42')] = _0x3baabe), this[_0x3028('0x64')] = new THREE[(_0x3028('0x130'))](this[_0x3028('0x14')], this.material), this.mesh.positionOffset = new THREE[(_0x3028('0x33'))](), this.rotationSpeedFactor = 5;
          }
          [_0x3028('0x131')]() {
              var _0x3baabe = new _0x169cec(this[_0x3028('0x12d')], this[_0x3028('0x12f')]);
              return _0x3baabe.mesh[_0x3028('0x132')] = new THREE[(_0x3028('0x33'))](), _0x3baabe.mesh[_0x3028('0x132')][_0x3028('0x35')](this[_0x3028('0x64')][_0x3028('0x132')]), _0x3baabe.material[_0x3028('0x3d')][_0x3028('0x76')][_0x3028('0x42')] = this[_0x3028('0x3c')].uniforms[_0x3028('0x76')].value, _0x3baabe[_0x3028('0x3c')][_0x3028('0x3d')].rotation[_0x3028('0x42')] = this[_0x3028('0x3c')][_0x3028('0x3d')].rotation[_0x3028('0x42')], _0x3baabe[_0x3028('0x3c')][_0x3028('0x3d')][_0x3028('0x133')][_0x3028('0x42')] = this[_0x3028('0x3c')][_0x3028('0x3d')].intensity[_0x3028('0x42')], _0x3baabe.material[_0x3028('0x3d')][_0x3028('0x134')][_0x3028('0x42')] = this[_0x3028('0x3c')][_0x3028('0x3d')][_0x3028('0x134')][_0x3028('0x42')], _0x3baabe.material[_0x3028('0x3d')][_0x3028('0x12f')].value = this.material[_0x3028('0x3d')].noiseTexture.value, _0x3baabe[_0x3028('0x3c')][_0x3028('0x3d')].ModelViewMatrix[_0x3028('0x42')].copy(this[_0x3028('0x3c')].uniforms[_0x3028('0x135')].value), _0x3baabe.rotationSpeedFactor = this.rotationSpeedFactor, _0x3baabe;
          }
          [_0x3028('0x5d')](_0x169cec) {
              this.material[_0x3028('0x3d')][_0x3028('0x76')].value = _0x169cec;
          }
          [_0x3028('0x136')](_0x169cec) {
              this[_0x3028('0x3c')][_0x3028('0x3d')][_0x3028('0x133')][_0x3028('0x42')] = _0x169cec;
          }
          [_0x3028('0x65')](_0x169cec) {
              this[_0x3028('0x3c')].uniforms.rotation[_0x3028('0x42')] = _0x169cec;
          }
          [_0x3028('0x137')](_0x169cec) {
              this[_0x3028('0x66')] = _0x169cec;
          }
          ['setPositionOffset'](_0x169cec, _0x3baabe, _0x55bfa8) {
              this.mesh[_0x3028('0x132')].x = _0x169cec, this[_0x3028('0x64')][_0x3028('0x132')].y = _0x3baabe, this.mesh[_0x3028('0x132')].z = _0x55bfa8, this[_0x3028('0x64')][_0x3028('0x30')][_0x3028('0x35')](this.mesh.positionOffset), this[_0x3028('0x64')][_0x3028('0x138')]();
          }
          ['alignWithCamera'](_0x169cec) {
              this[_0x3028('0x64')].modelViewMatrix.multiplyMatrices(_0x169cec[_0x3028('0x139')], this[_0x3028('0x64')].matrix), this[_0x3028('0x3c')].uniforms[_0x3028('0x135')][_0x3028('0x42')][_0x3028('0x35')](this[_0x3028('0x64')][_0x3028('0x13a')]);
          }
          [_0x3028('0x63')](_0x169cec, _0x3baabe) {
              this.mesh[_0x3028('0x30')][_0x3028('0x35')](this[_0x3028('0x64')].positionOffset), _0x3baabe && this.mesh[_0x3028('0x30')].add(_0x3baabe), this[_0x3028('0x64')].position[_0x3028('0x13b')](_0x169cec), this[_0x3028('0x64')][_0x3028('0x138')]();
          }
      };
  }
]);