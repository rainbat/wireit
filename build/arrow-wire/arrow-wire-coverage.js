if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/arrow-wire/arrow-wire.js']) {
   __coverage__['build/arrow-wire/arrow-wire.js'] = {"path":"build/arrow-wire/arrow-wire.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":22},"end":{"line":1,"column":41}}},"2":{"name":"(anonymous_2)","line":16,"loc":{"start":{"line":16,"column":14},"end":{"line":16,"column":32}}},"3":{"name":"(anonymous_3)","line":24,"loc":{"start":{"line":24,"column":15},"end":{"line":24,"column":34}}},"4":{"name":"(anonymous_4)","line":100,"loc":{"start":{"line":100,"column":10},"end":{"line":100,"column":22}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":120,"column":45}},"2":{"start":{"line":16,"column":0},"end":{"line":18,"column":2}},"3":{"start":{"line":17,"column":3},"end":{"line":17,"column":61}},"4":{"start":{"line":20,"column":0},"end":{"line":20,"column":31}},"5":{"start":{"line":22,"column":0},"end":{"line":115,"column":3}},"6":{"start":{"line":27,"column":6},"end":{"line":48,"column":12}},"7":{"start":{"line":50,"column":6},"end":{"line":56,"column":7}},"8":{"start":{"line":51,"column":9},"end":{"line":51,"column":20}},"9":{"start":{"line":52,"column":9},"end":{"line":52,"column":20}},"10":{"start":{"line":55,"column":9},"end":{"line":55,"column":15}},"11":{"start":{"line":59,"column":6},"end":{"line":64,"column":7}},"12":{"start":{"line":60,"column":9},"end":{"line":60,"column":20}},"13":{"start":{"line":63,"column":9},"end":{"line":63,"column":25}},"14":{"start":{"line":65,"column":6},"end":{"line":65,"column":36}},"15":{"start":{"line":68,"column":6},"end":{"line":68,"column":34}},"16":{"start":{"line":69,"column":6},"end":{"line":69,"column":61}},"17":{"start":{"line":70,"column":6},"end":{"line":70,"column":108}},"18":{"start":{"line":72,"column":6},"end":{"line":72,"column":41}},"19":{"start":{"line":73,"column":6},"end":{"line":73,"column":32}},"20":{"start":{"line":73,"column":23},"end":{"line":73,"column":30}},"21":{"start":{"line":75,"column":6},"end":{"line":75,"column":45}},"22":{"start":{"line":76,"column":6},"end":{"line":76,"column":45}},"23":{"start":{"line":77,"column":6},"end":{"line":77,"column":32}},"24":{"start":{"line":78,"column":6},"end":{"line":78,"column":32}},"25":{"start":{"line":80,"column":6},"end":{"line":86,"column":7}},"26":{"start":{"line":81,"column":9},"end":{"line":81,"column":40}},"27":{"start":{"line":82,"column":9},"end":{"line":82,"column":32}},"28":{"start":{"line":83,"column":9},"end":{"line":83,"column":17}},"29":{"start":{"line":84,"column":9},"end":{"line":84,"column":17}},"30":{"start":{"line":85,"column":9},"end":{"line":85,"column":17}},"31":{"start":{"line":89,"column":6},"end":{"line":89,"column":42}},"32":{"start":{"line":90,"column":6},"end":{"line":90,"column":34}},"33":{"start":{"line":91,"column":6},"end":{"line":91,"column":42}},"34":{"start":{"line":92,"column":6},"end":{"line":92,"column":34}},"35":{"start":{"line":102,"column":6},"end":{"line":102,"column":19}},"36":{"start":{"line":104,"column":6},"end":{"line":105,"column":40}},"37":{"start":{"line":108,"column":6},"end":{"line":108,"column":46}},"38":{"start":{"line":109,"column":6},"end":{"line":109,"column":46}},"39":{"start":{"line":111,"column":6},"end":{"line":111,"column":32}},"40":{"start":{"line":113,"column":6},"end":{"line":113,"column":17}},"41":{"start":{"line":117,"column":0},"end":{"line":117,"column":50}}},"branchMap":{"1":{"line":30,"type":"cond-expr","locations":[{"start":{"line":30,"column":33},"end":{"line":30,"column":34}},{"start":{"line":30,"column":37},"end":{"line":30,"column":56}}]},"2":{"line":50,"type":"if","locations":[{"start":{"line":50,"column":6},"end":{"line":50,"column":6}},{"start":{"line":50,"column":6},"end":{"line":50,"column":6}}]},"3":{"line":59,"type":"if","locations":[{"start":{"line":59,"column":6},"end":{"line":59,"column":6}},{"start":{"line":59,"column":6},"end":{"line":59,"column":6}}]},"4":{"line":73,"type":"if","locations":[{"start":{"line":73,"column":6},"end":{"line":73,"column":6}},{"start":{"line":73,"column":6},"end":{"line":73,"column":6}}]},"5":{"line":80,"type":"if","locations":[{"start":{"line":80,"column":6},"end":{"line":80,"column":6}},{"start":{"line":80,"column":6},"end":{"line":80,"column":6}}]},"6":{"line":81,"type":"cond-expr","locations":[{"start":{"line":81,"column":33},"end":{"line":81,"column":34}},{"start":{"line":81,"column":37},"end":{"line":81,"column":39}}]}},"code":["(function () { YUI.add('arrow-wire', function (Y, NAME) {","","'use strict';","","/**"," * @module arrow-wire"," */","","/**"," * Extend CanvasWire to draw an arrow wire"," * @class ArrowWire"," * @extends WireBase"," * @constructor"," * @param {Object} config the configuration for the ArrowWire attributes"," */","Y.ArrowWire = function (config) {","   Y.ArrowWire.superclass.constructor.apply(this, arguments);","};","","Y.ArrowWire.NAME = \"arrowwire\";","","Y.extend(Y.ArrowWire, Y.WireBase, {","","   _drawArrow: function(src, tgt) {","","","      var d = 7, // arrow width/2","          distance = Math.sqrt(Math.pow(src[0]-tgt[0],2) + Math.pow(src[1]-tgt[1],2)),","          dlug = 20, //arrow length","          t = (distance === 0) ? 0 : 1 - (dlug/distance),","","          //point on the wire with constant distance (dlug) from terminal2","          z = [","            Math.abs( src[0] + t * (tgt[0] - src[0]) ),","            Math.abs( src[1] + t * (tgt[1] - src[1]) )","          ],","","      // start drawing arrows","","      // line which connects the terminals: y=ax+b","          W = src[0] - tgt[0],","          Wa = src[1] - tgt[1],","          Wb = src[0] * tgt[1] - src[1] * tgt[0],","          a, b, aProst, bProst,","          A,B,C,","          delta,","          x1,x2,y1,y2,","          o;","","      if (W !== 0) {","         a = Wa / W;","         b = Wb / W;","      }","      else {","         a = 0;","      }","      ","      // line perpendicular to the main line: y = aProst*x + b","      if (a === 0) {","         aProst = 0;","      }","      else {","         aProst = -1 / a;","      }","      bProst = z[1] - aProst * z[0]; //point z lays on this line","        ","      // we have to calculate coordinates of 2 points, which lay on perpendicular line and have the same distance (d) from point z","      A = 1 + Math.pow(aProst, 2);","      B = 2 * aProst * bProst - 2 * z[0] - 2 * z[1] * aProst;","      C = -2 * z[1] * bProst + Math.pow(z[0], 2) + Math.pow(z[1], 2) - Math.pow(d, 2) + Math.pow(bProst, 2);","","      delta = Math.pow(B, 2) - 4 * A * C;","      if (delta < 0) { return; }","        ","      x1 = (-B + Math.sqrt(delta)) / (2 * A);","      x2 = (-B - Math.sqrt(delta)) / (2 * A);","      y1 = aProst * x1 + bProst;","      y2 = aProst * x2 + bProst;","        ","      if (src[1] === tgt[1]) {","         o = (src[0] > tgt[0]) ? 1 : -1;","         x1 = tgt[0] + o * dlug;","         x2 = x1;","         y1 -= d;","         y2 += d;","      }","","      // triangle border","      this.moveTo(tgt[0] + 6, tgt[1] + 6);","      this.lineTo(x1 + 6, y1 + 6);","      this.moveTo(tgt[0] + 6, tgt[1] + 6);","      this.lineTo(x2 + 6, y2 + 6);","","   },","","   /**","    * @method _draw","    * @private","    */","   _draw: function () {","","      this.clear();","","      var src = this.get('src').getXY(),","          tgt = this.get('tgt').getXY();","","","      this.moveTo((src[0] + 6), (src[1] + 6));","      this.lineTo((tgt[0] + 6), (tgt[1] + 6));","","      this._drawArrow(src, tgt);","","      this.end();","   }","});","","Y.ArrowWire.ATTRS = Y.merge(Y.WireBase.ATTRS, {});","","","}, '@VERSION@', {\"requires\": [\"wire-base\"]});","","}());"]};
}
var __cov_P1EMirEsrXfnsnUFvBse9w = __coverage__['build/arrow-wire/arrow-wire.js'];
__cov_P1EMirEsrXfnsnUFvBse9w.s['1']++;YUI.add('arrow-wire',function(Y,NAME){'use strict';__cov_P1EMirEsrXfnsnUFvBse9w.f['1']++;__cov_P1EMirEsrXfnsnUFvBse9w.s['2']++;Y.ArrowWire=function(config){__cov_P1EMirEsrXfnsnUFvBse9w.f['2']++;__cov_P1EMirEsrXfnsnUFvBse9w.s['3']++;Y.ArrowWire.superclass.constructor.apply(this,arguments);};__cov_P1EMirEsrXfnsnUFvBse9w.s['4']++;Y.ArrowWire.NAME='arrowwire';__cov_P1EMirEsrXfnsnUFvBse9w.s['5']++;Y.extend(Y.ArrowWire,Y.WireBase,{_drawArrow:function(src,tgt){__cov_P1EMirEsrXfnsnUFvBse9w.f['3']++;__cov_P1EMirEsrXfnsnUFvBse9w.s['6']++;var d=7,distance=Math.sqrt(Math.pow(src[0]-tgt[0],2)+Math.pow(src[1]-tgt[1],2)),dlug=20,t=distance===0?(__cov_P1EMirEsrXfnsnUFvBse9w.b['1'][0]++,0):(__cov_P1EMirEsrXfnsnUFvBse9w.b['1'][1]++,1-dlug/distance),z=[Math.abs(src[0]+t*(tgt[0]-src[0])),Math.abs(src[1]+t*(tgt[1]-src[1]))],W=src[0]-tgt[0],Wa=src[1]-tgt[1],Wb=src[0]*tgt[1]-src[1]*tgt[0],a,b,aProst,bProst,A,B,C,delta,x1,x2,y1,y2,o;__cov_P1EMirEsrXfnsnUFvBse9w.s['7']++;if(W!==0){__cov_P1EMirEsrXfnsnUFvBse9w.b['2'][0]++;__cov_P1EMirEsrXfnsnUFvBse9w.s['8']++;a=Wa/W;__cov_P1EMirEsrXfnsnUFvBse9w.s['9']++;b=Wb/W;}else{__cov_P1EMirEsrXfnsnUFvBse9w.b['2'][1]++;__cov_P1EMirEsrXfnsnUFvBse9w.s['10']++;a=0;}__cov_P1EMirEsrXfnsnUFvBse9w.s['11']++;if(a===0){__cov_P1EMirEsrXfnsnUFvBse9w.b['3'][0]++;__cov_P1EMirEsrXfnsnUFvBse9w.s['12']++;aProst=0;}else{__cov_P1EMirEsrXfnsnUFvBse9w.b['3'][1]++;__cov_P1EMirEsrXfnsnUFvBse9w.s['13']++;aProst=-1/a;}__cov_P1EMirEsrXfnsnUFvBse9w.s['14']++;bProst=z[1]-aProst*z[0];__cov_P1EMirEsrXfnsnUFvBse9w.s['15']++;A=1+Math.pow(aProst,2);__cov_P1EMirEsrXfnsnUFvBse9w.s['16']++;B=2*aProst*bProst-2*z[0]-2*z[1]*aProst;__cov_P1EMirEsrXfnsnUFvBse9w.s['17']++;C=-2*z[1]*bProst+Math.pow(z[0],2)+Math.pow(z[1],2)-Math.pow(d,2)+Math.pow(bProst,2);__cov_P1EMirEsrXfnsnUFvBse9w.s['18']++;delta=Math.pow(B,2)-4*A*C;__cov_P1EMirEsrXfnsnUFvBse9w.s['19']++;if(delta<0){__cov_P1EMirEsrXfnsnUFvBse9w.b['4'][0]++;__cov_P1EMirEsrXfnsnUFvBse9w.s['20']++;return;}else{__cov_P1EMirEsrXfnsnUFvBse9w.b['4'][1]++;}__cov_P1EMirEsrXfnsnUFvBse9w.s['21']++;x1=(-B+Math.sqrt(delta))/(2*A);__cov_P1EMirEsrXfnsnUFvBse9w.s['22']++;x2=(-B-Math.sqrt(delta))/(2*A);__cov_P1EMirEsrXfnsnUFvBse9w.s['23']++;y1=aProst*x1+bProst;__cov_P1EMirEsrXfnsnUFvBse9w.s['24']++;y2=aProst*x2+bProst;__cov_P1EMirEsrXfnsnUFvBse9w.s['25']++;if(src[1]===tgt[1]){__cov_P1EMirEsrXfnsnUFvBse9w.b['5'][0]++;__cov_P1EMirEsrXfnsnUFvBse9w.s['26']++;o=src[0]>tgt[0]?(__cov_P1EMirEsrXfnsnUFvBse9w.b['6'][0]++,1):(__cov_P1EMirEsrXfnsnUFvBse9w.b['6'][1]++,-1);__cov_P1EMirEsrXfnsnUFvBse9w.s['27']++;x1=tgt[0]+o*dlug;__cov_P1EMirEsrXfnsnUFvBse9w.s['28']++;x2=x1;__cov_P1EMirEsrXfnsnUFvBse9w.s['29']++;y1-=d;__cov_P1EMirEsrXfnsnUFvBse9w.s['30']++;y2+=d;}else{__cov_P1EMirEsrXfnsnUFvBse9w.b['5'][1]++;}__cov_P1EMirEsrXfnsnUFvBse9w.s['31']++;this.moveTo(tgt[0]+6,tgt[1]+6);__cov_P1EMirEsrXfnsnUFvBse9w.s['32']++;this.lineTo(x1+6,y1+6);__cov_P1EMirEsrXfnsnUFvBse9w.s['33']++;this.moveTo(tgt[0]+6,tgt[1]+6);__cov_P1EMirEsrXfnsnUFvBse9w.s['34']++;this.lineTo(x2+6,y2+6);},_draw:function(){__cov_P1EMirEsrXfnsnUFvBse9w.f['4']++;__cov_P1EMirEsrXfnsnUFvBse9w.s['35']++;this.clear();__cov_P1EMirEsrXfnsnUFvBse9w.s['36']++;var src=this.get('src').getXY(),tgt=this.get('tgt').getXY();__cov_P1EMirEsrXfnsnUFvBse9w.s['37']++;this.moveTo(src[0]+6,src[1]+6);__cov_P1EMirEsrXfnsnUFvBse9w.s['38']++;this.lineTo(tgt[0]+6,tgt[1]+6);__cov_P1EMirEsrXfnsnUFvBse9w.s['39']++;this._drawArrow(src,tgt);__cov_P1EMirEsrXfnsnUFvBse9w.s['40']++;this.end();}});__cov_P1EMirEsrXfnsnUFvBse9w.s['41']++;Y.ArrowWire.ATTRS=Y.merge(Y.WireBase.ATTRS,{});},'@VERSION@',{'requires':['wire-base']});
