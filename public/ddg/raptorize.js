function easterEggRaptorize() {
  $getMinScript = document.createElement("script");
  $getMinScript.src = 'http://yui.yahooapis.com/2.9.0/build/get/get-min.js';
  document.getElementsByTagName('body')[0].appendChild($getMinScript);
  YAHOO.util.Get.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js", {
    onSuccess: function() {
      $(function($){
        $.getScript("http://cdn.easteregg.in/outcomes/raptorize/jquery.raptorize.1.0.js", function() {
          $("body").raptorize({delayTime: 0});
        });
      });
      $.noConflict();
    }
  });
}
YAHOO.util.Event.onDOMReady(easterEggRaptorize);