if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/gallery-namespace-with-array/gallery-namespace-with-array.js']) {
   __coverage__['build/gallery-namespace-with-array/gallery-namespace-with-array.js'] = {"path":"build/gallery-namespace-with-array/gallery-namespace-with-array.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":40},"end":{"line":1,"column":59}}},"2":{"name":"namespaceWithArray","line":10,"loc":{"start":{"line":10,"column":0},"end":{"line":10,"column":50}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":40,"column":59}},"2":{"start":{"line":10,"column":0},"end":{"line":34,"column":1}},"3":{"start":{"line":11,"column":4},"end":{"line":15,"column":10}},"4":{"start":{"line":16,"column":4},"end":{"line":32,"column":5}},"5":{"start":{"line":17,"column":8},"end":{"line":17,"column":17}},"6":{"start":{"line":18,"column":8},"end":{"line":30,"column":9}},"7":{"start":{"line":19,"column":12},"end":{"line":23,"column":13}},"8":{"start":{"line":20,"column":16},"end":{"line":20,"column":26}},"9":{"start":{"line":22,"column":16},"end":{"line":22,"column":26}},"10":{"start":{"line":25,"column":12},"end":{"line":27,"column":13}},"11":{"start":{"line":26,"column":16},"end":{"line":26,"column":25}},"12":{"start":{"line":28,"column":15},"end":{"line":30,"column":9}},"13":{"start":{"line":29,"column":12},"end":{"line":29,"column":25}},"14":{"start":{"line":31,"column":8},"end":{"line":31,"column":17}},"15":{"start":{"line":33,"column":4},"end":{"line":33,"column":13}},"16":{"start":{"line":36,"column":0},"end":{"line":36,"column":42}}},"branchMap":{"1":{"line":11,"type":"binary-expr","locations":[{"start":{"line":11,"column":12},"end":{"line":11,"column":18}},{"start":{"line":11,"column":22},"end":{"line":11,"column":26}}]},"2":{"line":18,"type":"if","locations":[{"start":{"line":18,"column":8},"end":{"line":18,"column":8}},{"start":{"line":18,"column":8},"end":{"line":18,"column":8}}]},"3":{"line":18,"type":"binary-expr","locations":[{"start":{"line":18,"column":11},"end":{"line":18,"column":38}},{"start":{"line":18,"column":42},"end":{"line":18,"column":55}}]},"4":{"line":19,"type":"if","locations":[{"start":{"line":19,"column":12},"end":{"line":19,"column":12}},{"start":{"line":19,"column":12},"end":{"line":19,"column":12}}]},"5":{"line":25,"type":"if","locations":[{"start":{"line":25,"column":12},"end":{"line":25,"column":12}},{"start":{"line":25,"column":12},"end":{"line":25,"column":12}}]},"6":{"line":25,"type":"binary-expr","locations":[{"start":{"line":25,"column":16},"end":{"line":25,"column":29}},{"start":{"line":25,"column":34},"end":{"line":25,"column":58}}]},"7":{"line":28,"type":"if","locations":[{"start":{"line":28,"column":15},"end":{"line":28,"column":15}},{"start":{"line":28,"column":15},"end":{"line":28,"column":15}}]}},"code":["(function () { YUI.add('gallery-namespace-with-array', function (Y, NAME) {","","/**"," * 遇到下级为数字则初始为数组"," * @param {String} namespace 字符串，如 a.b.c"," * @param {Object} v"," * @param {Object} parent"," * @return {Object|false} 若遇到非 L.isValue 的值则返回 false"," */","function namespaceWithArray(namespace, v, parent) {","    var p = parent || this,","        n = namespace.split('.'),","        len = n.length,","        i,","        s;","    for(i = 0; i < n.length; i++) {","        s = n[i];","        if(typeof p[s] === 'undefined' || p[s] === null) {","            if( ! isNaN(parseInt(n[i + 1], 10))) {","                p[s] = [];","            } else {","                p[s] = {};","            }","            // last one","            if((i === len - 1) && typeof v !== 'undefined') {","                p[s] = v;","            }","        } else if(typeof p[s] !== 'object') {","            return false;","        }","        p = p[s];","    }","    return p;","}","","Y.namespaceWithArray = namespaceWithArray;","","","","}, 'gallery-2013.03.27-22-06', {\"requires\": [\"yui-base\"]});","","}());"]};
}
var __cov_0e5TUM6PXaE_cDanrZY64Q = __coverage__['build/gallery-namespace-with-array/gallery-namespace-with-array.js'];
__cov_0e5TUM6PXaE_cDanrZY64Q.s['1']++;YUI.add('gallery-namespace-with-array',function(Y,NAME){__cov_0e5TUM6PXaE_cDanrZY64Q.f['1']++;__cov_0e5TUM6PXaE_cDanrZY64Q.s['2']++;function namespaceWithArray(namespace,v,parent){__cov_0e5TUM6PXaE_cDanrZY64Q.f['2']++;__cov_0e5TUM6PXaE_cDanrZY64Q.s['3']++;var p=(__cov_0e5TUM6PXaE_cDanrZY64Q.b['1'][0]++,parent)||(__cov_0e5TUM6PXaE_cDanrZY64Q.b['1'][1]++,this),n=namespace.split('.'),len=n.length,i,s;__cov_0e5TUM6PXaE_cDanrZY64Q.s['4']++;for(i=0;i<n.length;i++){__cov_0e5TUM6PXaE_cDanrZY64Q.s['5']++;s=n[i];__cov_0e5TUM6PXaE_cDanrZY64Q.s['6']++;if((__cov_0e5TUM6PXaE_cDanrZY64Q.b['3'][0]++,typeof p[s]==='undefined')||(__cov_0e5TUM6PXaE_cDanrZY64Q.b['3'][1]++,p[s]===null)){__cov_0e5TUM6PXaE_cDanrZY64Q.b['2'][0]++;__cov_0e5TUM6PXaE_cDanrZY64Q.s['7']++;if(!isNaN(parseInt(n[i+1],10))){__cov_0e5TUM6PXaE_cDanrZY64Q.b['4'][0]++;__cov_0e5TUM6PXaE_cDanrZY64Q.s['8']++;p[s]=[];}else{__cov_0e5TUM6PXaE_cDanrZY64Q.b['4'][1]++;__cov_0e5TUM6PXaE_cDanrZY64Q.s['9']++;p[s]={};}__cov_0e5TUM6PXaE_cDanrZY64Q.s['10']++;if((__cov_0e5TUM6PXaE_cDanrZY64Q.b['6'][0]++,i===len-1)&&(__cov_0e5TUM6PXaE_cDanrZY64Q.b['6'][1]++,typeof v!=='undefined')){__cov_0e5TUM6PXaE_cDanrZY64Q.b['5'][0]++;__cov_0e5TUM6PXaE_cDanrZY64Q.s['11']++;p[s]=v;}else{__cov_0e5TUM6PXaE_cDanrZY64Q.b['5'][1]++;}}else{__cov_0e5TUM6PXaE_cDanrZY64Q.b['2'][1]++;__cov_0e5TUM6PXaE_cDanrZY64Q.s['12']++;if(typeof p[s]!=='object'){__cov_0e5TUM6PXaE_cDanrZY64Q.b['7'][0]++;__cov_0e5TUM6PXaE_cDanrZY64Q.s['13']++;return false;}else{__cov_0e5TUM6PXaE_cDanrZY64Q.b['7'][1]++;}}__cov_0e5TUM6PXaE_cDanrZY64Q.s['14']++;p=p[s];}__cov_0e5TUM6PXaE_cDanrZY64Q.s['15']++;return p;}__cov_0e5TUM6PXaE_cDanrZY64Q.s['16']++;Y.namespaceWithArray=namespaceWithArray;},'gallery-2013.03.27-22-06',{'requires':['yui-base']});