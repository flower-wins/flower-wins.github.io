var posts=["fws/这是一篇新的博文/","fws/这是另一篇新的博文/","fws/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };