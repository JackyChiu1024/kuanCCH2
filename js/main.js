
function loadScript(url, callback, type)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = type;
    //'text/javascript'
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

loadScript("js/console/console.js", null, 'text/javascript');
loadScript("js/chart/chartDrawer.js", null, 'text/javascript');
loadScript("js/query/queryData.js", null, 'text/javascript');
loadScript("js/parser/chessparser.js", null, 'text/javascript');
loadScript("js/board/chessBoard.js", null, 'text/javascript');
loadScript("js/db/mysql.js", null, 'text/javascript');

