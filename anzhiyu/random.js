var posts=["fws/HiDNS域名终身免费计划/","fws/WebSSH一键部署/","fws/HexoBlogNo2/","fws/HexoBlogNo1/","fws/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };