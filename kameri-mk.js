function init() {
    var camId = window.location.hash.substr(1);

    var html = "<object data='JarisFLVPlayer.swf' id='JarisFLVPlayer' type='application/x-shockwave-flash' height='" + window.innerHeight + "' width='" + window.innerWidth + "'>" +
            "<param value='false' name='menu'>" +
            "<param value='noScale' name='scale'>" +
            "<param value='true' name='allowFullscreen'>" +
            "<param value='always' name='allowScriptAccess'>" +
            "<param value='#000000' name='bgcolor'>" +
            "<param value='high' name='quality'>" +
            "<param value='opaque' name='wmode'>" +
            "<param value='source=" + camId + ".stream&amp;type=video&amp;streamtype=rtmp&amp;server=rtmp://streamer1.interspace.mk:1935/jpdp&amp;autostart=true&amp;logo=&amp;logoposition=top right&amp;logoalpha=&amp;logowidth=&amp;logolink=&amp;hardwarescaling=false&amp;darkcolor=000000&amp;brightcolor=4c4c4c&amp;controlcolor=FFFFFF&amp;hovercolor=67A8C1&amp;controls=false&amp;controltype=1' name='flashvars'>" +
            "</object>";

    document.getElementById("demo").innerHTML = html;
}