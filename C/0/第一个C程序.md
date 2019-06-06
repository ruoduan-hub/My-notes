## 安装 MinGW

[MinGW](http://www.mingw.org/)

>  [http://www.mingw.org](http://www.mingw.org/)

![1558410807407](https://img-blog.csdnimg.cn/20190521115849906.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0NoYWQ5Nw==,size_16,color_FFFFFF,t_70)

`点击 installatino - applychanges ` 安装

### 添加环境变量

`在系统变量中找到 Path 变量，在后面加入 min-gw的安装目录，如 D:\MinGw\bin`

### 测试

- 命令行

  ```
  g++ -v
  gcc -v
  g++
  ```

  成功如下：

  > g++: fatal error: no input files
  > compilation terminated.

### program C

- 在桌面创建一个`hello.c`

  ```c
  #include <stdio.h>
  int main ()
  {
  	printf("hello, C \n");
  	return 0;
  }
  ```

- 在 cmd 中输入命令` gcc C:\Users\12057\Desktop\c语言\helloworld\hello.c`

- 在**当前目录下**(记住是命令的当前目录)会生成 a.exe 的可执行文件，在 cmd 中输入 a.exe 就可以执行程序了

`可以看到控制台打印了内容`

