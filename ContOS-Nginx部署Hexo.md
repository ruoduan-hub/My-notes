# 服务器centOS使用Nginx部署 Hexo 博客

## Get ready

- PC * 1台
- Sever * 1台
> 推荐 linux CentOS , 之前使用windows server 2012 坑太多，22端口开起来好麻烦

## Server
> 默认ROOT 权限

- ### 安装 Git and Nginx
  `yum install -y git ngin`

- #### Nginx 配置
- 创建文件目录, 用于博客站点文件存放, 并更改目录读写权限
```shell
mkdir -p /data/www/hexo

chmod -R 755 /data/www/hexo
```
**添加 index.html 用于检测配置 Nginx 是否成功**
`vim /data/www/hexo/index.html`

我们添加了一个index.html页面来验证一下 我们的nginx 是否配置成功了，内容如下：
```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <meta charset="UTF-8">
  </head>
  <body>
    <<h1>hello nginx<h1>
  </body>
</html>
```
#### 配置nginx服务器
```shell
vim /etc/nginx/nginx.conf

# vim 查找: /listen 80
```
**找到如下代码段：**
```shell
server {
      listen       80 default_server;
      listen       [::]:80 default_server;
      server_name  www.xxx.com; # 填写个人域名
      root         /data/www/hexo;
  }
```

到这里我们就可以通过浏览器访问我的服务器了 
> hello nginx

nginx配置成功

### Git 配置
创建文件目录, 用于私人 Git 仓库搭建, 并更改目录读写权限

```shell
mkdir -p /data/blog

chmod -R 755 /data/blog
```
#### Git 初始化裸库
```shell
cd /data/blog
git init --bare hexo.git
```
# 创建 Git 钩子(hook) 重点！！！
##### 创建 Git 钩子(hook)
`vim /data/blog/hexo.git/hooks/post-receive`

用于指定 Git 的源代码 和 Git 配置文件
```shell
#!/bin/bash
git --work-tree=/data/www/hexo --git-dir=/data/blog/hexo.git checkout -f
```
- **这里就是把我们git文件映射到我们的nginx代理文件夹**
##### 保存并退出后, 给该文件添加可执行权限
`chmod +x /data/GitLibrary/hexo.git/hooks/post-receive`

---
### 本地配置
- 安装 Git
  https://git-scm.com/

- 按照提示完成安装, 最后在 Terminal 中输入
  `git -v`

- 如下显示, 表示 Git 安装成功

  `git version 2.11.0 (Apple Git-81)`


### 安装 Node.js 和 Npm
- Node.js 安装在 MacOS 中需要用到 Homebrew 进行安装管理

- Homebrew 在 MacOS 里类似于 CentOS 的 yum

- 在 Terminal 输入:

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- 使用 Homebrew 安装 Node.js

`brew install node`
- 在 Terminal 中键入类似的命令, 如下显示, 表示 Node 和 Npm 安装成功
```
node -v
v7.10.0
npm -v
4.2.0
```

- 安装 Hexo 及相关插件
- 全局安装 hexo-cli 和 hexo-server

`npm install hexo-cli hexo-server hexo-deployer-git -g`
安装完成后, 在本地初始化博客站点搭建
```shell
hexo init ~/myBlog

# ~/myBlog 即本地存放路径
```
完成安装, 便可以在本地路径查看项目

- 本地 Hexo 配置
  进人~/myBlog 目录, 修改 Hexo 博客站点配置文件 _config.yml, 如下修改:

```json
title: 页面标题     //页面标题
subtitle: 小标题     //小标题
description: 描述     //描述
author: 作者       //作者
language: zh-Hans     //语言
timezone:       //时区

# URL
### If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://leyliu.com      //个人域名

......

# Deployment
### Docs: https://hexo.io/docs/deployment.html
deploy:     //发布对应的github账号
type: git
repo: root@leyliu.com:/data/blog/hexo  //用户名@域名或 IP 地址:/data/blog/hexo
branch: master
```

### 部署步骤
- 将本地部署到服务器

- 清除缓存

`hexo clean`
- 生成静态页面:

`hexo generate`
- 将本地静态页面目录部署到云服务器

`hexo deploy`

完成 Hexo 个人博客网站搭建, 通过服务器 IP 或者域名即可访问