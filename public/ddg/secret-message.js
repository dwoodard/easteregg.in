function easterEggSecretMessage() {
  YAHOO.util.Get.script("http://yui.yahooapis.com/combo?2.7.0/build/yahoo-dom-event/yahoo-dom-event.js&2.7.0/build/animation/animation-min.js", {
    onSuccess: function() {
      YAHOO.util.Get.script("http://cdn.easteregg.in/outcomes/secret-msg/secret.js", {
        onSuccess: function() {
          Secret.fnMessage("yegg was here");
        }
      });
    }
  });
}
var $getMinScript = document.createElement("script");
$getMinScript.type = 'text/javascript';
if($getMinScript.readyState === 'loaded' || $getMinScript.readyState === 'complete') {
  $getMinScript.onreadystatechange = null;
    YAHOO.util.Event.onDOMReady(easterEggSecretMessage);
} else {
  $getMinScript.onload = function() {
    YAHOO.util.Event.onDOMReady(easterEggSecretMessage);
  };
}
$getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
document.getElementsByTagName("head")[0].appendChild($getMinScript);
// Keep the user clicking
var $moreEggs = document.createElement('p');
$moreEggs.innerHTML = '<p style="text-align: center;">Have you searched for the '
  + 'other "outcomes" of <img src="http://easteregg.in/img/favicon.png" '
  + 'alt="eggs" style="display:inline;">\'s at <a href="http://easteregg.in" '
  + ' target="_blank">eastereggin.com</a> yet?</p>';
var $c2 = document.getElementById('c2');
$c2.insertBefore($moreEggs, $c2.firstChild);
