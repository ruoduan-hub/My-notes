
# pip3 of Mac 换源

终端：`cd ~/`


- 查看是否有 .pip 文件夹：`ls -a`

- 没有就新建一个文件夹：`mkdir .pip`

- 然后在.pip 文件夹内新建一个文件 touch pip.conf，

- 编辑 pip.conf 文件，写入阿里云
```
[global]

index-url = http://mirrors.aliyun.com/pypi/simple/

[install]

trusted-host=mirrors.aliyun.com
```

> 或者其他也可以
