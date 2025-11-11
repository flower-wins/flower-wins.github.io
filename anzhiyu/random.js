var posts=["fws/HiDNS域名终身免费计划/","fws/Mouse-Without-Borders/","fws/WebSSH一键部署/","fws/神站合集发布版/","fws/Syncthing/","fws/免费节点/","fws/acme-sh/","fws/FileBrowser/","fws/3x-ui面板搭建/","fws/RackNerd-Hysterial2/","fws/yg-workers-keep/","fws/HexoBlogNo2/","fws/HexoBlogNo1/","fws/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };