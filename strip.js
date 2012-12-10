(function() {

    if (!/^https?:\/\/\w*.google.com(?:\.[a-z]+)?/.test(location.href)) {
        return
    }
    var search = document.getElementById('search')

    if (!search) {
        return
    }
    var entries = search.getElementsByClassName('vsc')
    var len = entries.length

    for (var i = 0; i < len; i++) {
        var e = entries[i]
        var anchors = e.getElementsByTagName('a')

        anchors = Array.prototype.slice.call(anchors, 0)
        anchors.forEach(strip)
    }

    function strip(a, i) {
        if (a.onmousedown) {
            a.onmousedown = null
            a.removeAttribute('onmousedown')
            a.target = '_blank'
        }
    }
})()