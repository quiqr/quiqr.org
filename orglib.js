function getURL() {
  let _arr = window.location.href.split('repo=');
  if (_arr.length > 1 ) {
    const link = _arr[1].split("://");
    window.location.href = "quiqr://"+link;
    document.getElementById("repourl").innerHTML='<p><a href="quiqr://'+link[1]+'?proto='+link[0]+'">Open in Quiqr</a></p>';
  }
  else{
    window.location.href = "https://open.quiqr.org";
  }
}

//addEventListener("load", function(){
//  getURL();
//});
