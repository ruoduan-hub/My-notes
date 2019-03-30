# Nginx 入门

## 一、nodejs

- Chrome v 8 引擎 运行时

nodejs is a JavaScript runtime built on Chrome's v8

- 事件驱动非阻塞 io

nodejs is uses an event-driven, non-blocking I/O model 

 + 事件驱动

    - I/O等异步操作结束后通知主程序
    - 观察者模式


使用JavaScript操作服务端，nodejs领域有限，但是擅长web端。





### CPU密集 VS I/O密集

- CPU密集：压缩、解压、加密。解密、等cpu动作 - 图像 GPU
- I/O密集：文件操作、网络操作、数据库 等



### WEB常见场景

- 静态资源读取
- 数据库操作
- 渲染页面



### 高并发应对之道

- 增加机器数量 -——实现负载均衡
- 增加每台机器CPU——多核

---

#### 进程

> 是计算机中的程序关于某数据集合上的一次运行活动，是进程进行资源分配和调度的基本单位

- 例如

  - 听音乐、上网、qq、游戏。。。。。 各占一个进程

- 那一个单核心是怎么执行多个进程的呢？

  多进程：启动多进程，多个进程可以在一段时间内执行多个任务——分阶段执行，从而进行快速的切换，这样子在我们肉眼看来就是同时进行的了。



#### nodejs 工作模型

![nodejs工作模型](/Users/apple/Desktop/note/Nginx入门/nodejs工作模型.png)

##### 例子

点菜——服务员(cpu)——厨师(I/O)  :后期补充



### 线程

> 线程：进程内一个相对独立的、可调度执行单元、与同属一个进程的线程共享进程资源

- 多线程：启动一个进程，在一个进程里启动多个线程，这样，多个线程也可以一块执行任务



## 二、环境&调试

### commonJS

> 直接从nodejs,官网进行下载，安装过程比较简单，安装后npm自动被包含在内了， 我们可以使用 `npm - v` 就可看到 noejs的版本号被我们打印了

```powershell
 apple@xxx ~ npm -v
6.8.0
```



### 环境

#### 1.commonjs [模块化]

`node test.js`  —— 例如我们 执行一个 console.log() ；nodejs 会帮我们封装如下代码：

```js
(function (export, require, nodule, __filename, __dirname) {
  
  console.log(“你执行的代码”)
  
}
);
```



- Commonjs 规范
  - 每个文件都是一个模块，有自己的作用域——如上所示 自动给 我们包裹了函数
  - 在模块内部`module` 变量代表模块本身
  - module.exports 属性代表模块对外的接口

- require 规则

  - `/ `标识 绝对路径, `./`标识相对的
  - 支持 js、json、node 拓展名，不写依次尝试这三个拓展名
  - 不写路径，则认为是 build-in 模块 或者各级 node_modules 内的第三方模块

  

- require 特性

  - module 被加载的时候执行 加载后缓存
  - 一旦出现某个模块被循环加载，就只输出已经执行的部分，还未执行的部分不会输出

#### 

##### - 系统内置模块&第三方模块

- 内置模块：如fs、dns、http、等

- 第三方模块：例如这个 chalk 模块

  首先要npm i chalk —sava  //安装第三方的模块

  ```js
  const chalk = require('chalk')
  
  console.log(chalk.red('这里的字体输出是红色的'));
  ```

  命令行中 `node "filename" 就可以看到了`

- node_modules 第三方包 都是在这个文件夹下面 



#####  module.exports 与 exports 的区别

`const exports = module.exports`

其实只是一个快捷的变量

**注意点：**

我们在执行以下操作：

```js
exports.nub = 10; //ok
//这里是会出错的，因为我们改变了他的指向
exports = {
  a:1,
  b:2,
  c:3
}

module.exports = {//ok
  a:1,
  b:2,
  c:3
}
```



#### 2.global  [全局对象]

- commonjs 
- buffer 、process、console
- timer

##### Global

```js
Global.testval = 1
//把 testval 暴露到全局作用域中。我们就可以不用require 就可以访问到

console.log(testval)
```



#### 3.Process [当前执行的进程] ——是挂载在global 下面的
- 参数相关

> argv、argv0、execArgv、execPath

```js
/*
    argv
    argv0
    execArgv
    execPath
*/

const { argv, argv0, execArgv, execPath } = process

argv.forEach(item => {
    console.log(item);
    // /usr/local/Cellar/node/11.5.0/bin/node
    // /Users/apple/dev/My-notes/Nginx入门/demos/10_argv.js
})

console.log(argv0);

console.log(execArgv);

console.log(execPath);
```



- env

```js
const {env} = process;

console.log(env);//打印执行环境,当前系统，路径，语言 什么的
```



- cwd

`console.log(process.cwd())//当前执行的路径`



- timer

```js
setImmediate(()=>{
    console.log('setImmediate');
    
});


setTimeout(()=>{
console.log('setTimeout');

},0)

process.nextTick(()=>{
    console.log('tnextTick');
    
})

/*
tnextTick
setTimeout
setImmediate

tnextTick 是最快的  setImmediate 要等 其他的先执行
*/
```

`setImmediate,nextTick` 是一个异步的队列的执行，在当前不执行，放在下一个队列里面执行

推荐使用 `setImmediate `这是后来出的一个优化的

`nextTick`不推荐，因为他是放在队尾



### 调试

#### 1、inspector

```shell
chrome://inspect/#devices

node --inspect-brk  14_debug.js
```

利用浏览器 来调试 Chrome 原生



#### 2、VS  Code

直接在ide 中 配置 调试

- 条件调试 具体 看ide  的介绍教程，这里不多做赘述了

