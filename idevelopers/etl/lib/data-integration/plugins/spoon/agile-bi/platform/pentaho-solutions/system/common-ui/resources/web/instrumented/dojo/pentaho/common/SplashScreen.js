/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['dojo/pentaho/common/SplashScreen.js']) {
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'] = [];
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][1] = 0;
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][2] = 0;
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][3] = 0;
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][4] = 0;
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][5] = 0;
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][6] = 0;
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][17] = 0;
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][21] = 0;
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][25] = 0;
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][26] = 0;
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][32] = 0;
}
_$jscoverage['dojo/pentaho/common/SplashScreen.js'].source = ["dojo<span class=\"k\">.</span>provide<span class=\"k\">(</span><span class=\"s\">'pentaho.common.SplashScreen'</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">'dijit._Widget'</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">'dijit._Templated'</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">'pentaho.common.button'</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">'pentaho.common.Dialog'</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>declare<span class=\"k\">(</span>","     <span class=\"s\">'pentaho.common.SplashScreen'</span><span class=\"k\">,</span>","     <span class=\"k\">[</span>pentaho<span class=\"k\">.</span>common<span class=\"k\">.</span>Dialog<span class=\"k\">],</span>","     <span class=\"k\">{</span>","        buttons<span class=\"k\">:</span> <span class=\"k\">[</span><span class=\"s\">'ok'</span><span class=\"k\">],</span>","        ","        imagePath<span class=\"k\">:</span> <span class=\"s\">''</span><span class=\"k\">,</span>","        ","        hasTitleBar<span class=\"k\">:</span> <span class=\"k\">false</span><span class=\"k\">,</span>","        ","        setTitle<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>title<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>splashtitle<span class=\"k\">.</span>innerHTML <span class=\"k\">=</span> title<span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","","        setText<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>text<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>splashmessage<span class=\"k\">.</span>innerHTML <span class=\"k\">=</span> text<span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","    ","        setButtonText<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>text<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>buttons<span class=\"k\">[</span><span class=\"s\">0</span><span class=\"k\">]</span> <span class=\"k\">=</span> text<span class=\"k\">;</span>","            dojo<span class=\"k\">.</span>query<span class=\"k\">(</span><span class=\"s\">\"#button\"</span><span class=\"k\">+</span><span class=\"s\">0</span><span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">.</span>domNode<span class=\"k\">).</span>innerHTML <span class=\"k\">=</span> text<span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","    ","        templatePath<span class=\"k\">:</span> dojo<span class=\"k\">.</span>moduleUrl<span class=\"k\">(</span><span class=\"s\">'pentaho.common'</span><span class=\"k\">,</span> <span class=\"s\">'SplashScreen.html'</span><span class=\"k\">),</span>","      ","       postCreate<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","           <span class=\"k\">this</span><span class=\"k\">.</span>inherited<span class=\"k\">(</span>arguments<span class=\"k\">);</span>","       <span class=\"k\">}</span>","       ","    <span class=\"k\">}</span>","<span class=\"k\">);</span>"];
_$jscoverage['dojo/pentaho/common/SplashScreen.js'][1]++;
dojo.provide("pentaho.common.SplashScreen");
_$jscoverage['dojo/pentaho/common/SplashScreen.js'][2]++;
dojo.require("dijit._Widget");
_$jscoverage['dojo/pentaho/common/SplashScreen.js'][3]++;
dojo.require("dijit._Templated");
_$jscoverage['dojo/pentaho/common/SplashScreen.js'][4]++;
dojo.require("pentaho.common.button");
_$jscoverage['dojo/pentaho/common/SplashScreen.js'][5]++;
dojo.require("pentaho.common.Dialog");
_$jscoverage['dojo/pentaho/common/SplashScreen.js'][6]++;
dojo.declare("pentaho.common.SplashScreen", [pentaho.common.Dialog], {buttons: ["ok"], imagePath: "", hasTitleBar: false, setTitle: (function (title) {
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][17]++;
  this.splashtitle.innerHTML = title;
}), setText: (function (text) {
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][21]++;
  this.splashmessage.innerHTML = text;
}), setButtonText: (function (text) {
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][25]++;
  this.buttons[0] = text;
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][26]++;
  dojo.query("#button0", this.domNode).innerHTML = text;
}), templatePath: dojo.moduleUrl("pentaho.common", "SplashScreen.html"), postCreate: (function () {
  _$jscoverage['dojo/pentaho/common/SplashScreen.js'][32]++;
  this.inherited(arguments);
})});
