---
学习目标:
  - 掌握编程jQuery的基本使用
  - 掌握jQuery插件的使用
  - 能够开发jQuery插件
  - 选择器、属性操作、样式操作、节点操作、动画、事件、插件
typora-copy-images-to: media
---

# jQuery

## jQuery简介

### JavaScript库的概念

JavaScript开发的过程中，处理浏览器的兼容很复杂而且很耗时，于是一些封装了这些操作的库应运而生。这些库还会把一些常用的代码进行封装。

把一些常用到的方法写到一个单独的js文件，使用的时候直接去引用这js文件就可以了。（animate.js、common.js）

常见的JavaScript 库 - jQuery、Prototype、MooTools。其中jQuery是最常用的一个

jQuery其实就是一个js文件，里面封装了一大堆的方法方便我们的开发，其实就是一个加强版的common.js，因此我们学习jQuery，其实就是学习jQuery这个js文件中封装的一大堆方法。

### jQuery的优点好处

```
jQuery设计的宗旨是'Write Less，Do More'，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的操作，优化HTML文档操作、事件处理、动画设计和Ajax交互。
jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器。
极大地简化了 JavaScript 编程。
```

### jQuery的版本

```
jQuery版本有很多，分为1.x 2.x 3.x

1.x版本：能够兼容IE678浏览器
2.x版本：不兼容IE678浏览器
1.x和2.x版本jquery都不再更新版本了，现在只更新3.x版本。
3.x版本：不兼容IE678，更加的精简（在国内不流行，因为国内使用jQuery的主要目的就是兼容IE678）

国内多数网站还在使用1.x的版本
```
[jQuery官网](http:// jquery.com)


### 体验jQuery

案例：让div显示与设置内容

使用JavaScript开发过程中，有许多不便之处

```javascript
-查找元素的方法太少，麻烦。
-遍历伪数组很麻烦，通常要嵌套一大堆的for循环。
-有兼容性问题。
-想要实现简单的动画效果，也很麻烦
-代码冗余。
```

```javascript
$(document).ready(function () {
    $('#btn1').click(function () {
      	// 隐式迭代：偷偷的遍历，在jQuery中，不需要手动写for循环了，会自动进行遍历。
        $('div').show(200);
    });

    $('#btn2').click(function () {
        $('div').text('我是内容');
    });
});
```

优点总结：

```javascript
-查找元素的方法多种多样，非常灵活
-拥有隐式迭代特性，因此不再需要手写for循环了。
-完全没有兼容性问题。
-实现动画非常简单，而且功能更加的强大。
-代码简单、粗暴。
```

### jQuery中顶级对象

jQuery中的顶级对象是$或jQuery

```javascript
获取jQuery对象
入口函数
高级功能
```

注意：jQuery中的$和JQuery关键字本身为同一对象；

### jQuery中页面加载事件

使用jQuery的三个步骤：

```javascript
引入jQuery文件
入口函数
功能实现
```

关于jQuery的入口函数：

```javascript
// 第一种写法
$(document).ready(function() {
	
});
// 第二种写法
$(function() {
	
});
```

jQuery入口函数与window.onload的对比

```javascript
JavaScript的入口函数要等到页面中所有资源（包括图片、文件）加载完成才开始执行。
jQuery的入口函数只会等待文档树加载完成就开始执行，并不会等待图片、文件的加载。
```

## jQuery对象和DOM对象

### jQuery对象和DOM对象的区别

#### DOM对象

```
用原生JavaScript获取的DOM对象
	通过document.getElementById()  反馈的是元素(DOM对象)
通过document.getElementsByTagName()获取到的是什么？
	伪数组(集合)，集合中的每一个对象是DOM对象
```

#### jQuery对象

```
jQuery对象用$()的方式获取的对象
jQuery对象又可以叫做包装集(包装的DOM对象的集合)
```

#### 区别

jQuery对象不能使用DOM对象的成员，DOM对象不能使用jQuery对象的成员

```javascript
// DOM对象
var box = document.getElementById('box');
// 错误
box.text('hello');
// 正确
box.innerText = 'hello';

// jQuery对象，jQuery对象加前缀$，用以区分DOM对象
var $box = $('#box');
// 错误
$box.innerText = 'hello';
// 正确
$box.text('hello');
```

### jQuery对象和DOM对象的相互转换

```javascript
jQuery对象转换成DOM对象：   
	jQuery对象.get(索引值); 
	jQuery对象[索引值] 
    	jQuery对象是包装集(集合)，从集合中取数据可以使用索引的方式
DOM对象转换成jQuery对象：   
	$(DOM对象) 只有这一种方法;
```

### 案例

- 开关灯 [01-开关灯.html]

```javascript
// 仅仅演示对象之间的转换，代码不推荐这么写
jQuery(document).ready(function () {
  // 获取元素；
  var inpArr = document.getElementsByTagName('input');
  // 获取第一个按钮，然后绑定事件；
  $(inpArr[0]).click(function () {
    // 设置body的背景色
    $('body')[0].style.background = '#fff';
  });
  // 获取第二个按钮，然后绑定事件；
  $(inpArr[1]).click(function () {
    // 设置body的背景色
    $('body').get(0).style.background = '#000';
  });
});
```

## 选择器

jQuery选择器是jQuery为我们提供的一组方法，让我们更加方便的获取到页面中的元素。注意：jQuery选择器返回的是jQuery对象。

jQuery选择器有很多，基本兼容了CSS1到CSS3所有的选择器，并且jQuery还添加了很多更加复杂的选择器。（查看jQuery文档）

jQuery选择器虽然很多，但是选择器之间可以相互替代，就是说获取一个元素，你会有很多种方法获取到。所以我们平时真正能用到的只是少数的最常用的选择器。



### jQuery基本选择器

| 名称    | 用法                 | 描述                     |
| ----- | ------------------ | :--------------------- |
| ID选择器 | $('#id');          | 获取指定ID的元素              |
| 类选择器  | $('.class');       | 获取同一类class的元素          |
| 标签选择器 | $('div');          | 获取同一类标签的所有元素           |
| 并集选择器 | $('div,p,li');     | 使用逗号分隔，只要符合条件之一就可。     |
| 交集选择器 | $('div.redClass'); | 获取class为redClass的div元素 |

- 总结：跟css的选择器用法一模一样。



### jQuery层级选择器

| 名称    | 用法            | 描述                              |
| ----- | ------------- | :------------------------------ |
| 子代选择器 | $('ul > li'); | 使用-号，获取儿子层级的元素，注意，并不会获取孙子层级的元素  |
| 后代选择器 | $('ul li');   | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等 |

- 跟CSS的选择器一模一样。



### jQuery过滤选择器

- 这类选择器都带冒号:

| 名称         | 用法                                 | 描述                                 |
| ---------- | ---------------------------------- | :--------------------------------- |
| :eq（index） | $('li:eq(2)').css('color', 'red'); | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始。 |
| :odd       | $('li:odd').css('color', 'red');   | 获取到的li元素中，选择索引号为奇数的元素              |
| :even      | $('li:even').css('color', 'red');  | 获取到的li元素中，选择索引号为偶数的元素              |



### jQuery筛选选择器(方法)

- 筛选选择器的功能与过滤选择器有点类似，但是用法不一样，筛选选择器主要是方法。

| 名称                 | 用法                          | 描述                         |
| ------------------ | --------------------------- | :------------------------- |
| children(selector) | $('ul').children('li')      | 相当于$('ul-li')，子类选择器        |
| find(selector)     | $('ul').find('li');         | 相当于$('ul li'),后代选择器        |
| siblings(selector) | $('#first').siblings('li'); | 查找兄弟节点，不包括自己本身。            |
| parent()           | $('#first').parent();       | 查找父亲                       |
| eq(index)          | $('li').eq(2);              | 相当于$('li:eq(2)'),index从0开始 |
| next()             | $('li').next()              | 找下一个兄弟                     |
| prev()             | $('li').prev()              | 找上一次兄弟                     |

### 案例

- 鼠标放上突出展示  [02-突出展示.html]
- 鼠标进入高亮显示 [03-鼠标进入高亮显示.html]
- 下拉菜单 [04-下拉菜单.html]
- 手风琴 [05-手风琴.html]
- 淘宝服饰精品 [06-淘宝服饰精品.html]

## jQuery操作样式

### CSS操作

- 功能：设置或者修改样式，操作的是style属性。

- 操作单个样式

```javascript
// name：需要设置的样式名称
// value：对应的样式值
$obj.css(name, value);
// 使用案例
$('#one').css('background','gray');// 将背景色修改为灰色
```

- 设置多个样式

```javascript
// 参数是一个对象，对象中包含了需要设置的样式名和样式值
$obj.css(obj);
// 使用案例
$('#one').css({
    'background':'gray',
    'width':'400px',
    'height':'200px'
});
```

- 获取样式

```javascript
// name:需要获取的样式名称
$obj.css(name);
// 案例
$('div').css('background-color');
```

注意：获取样式操作只会返回第一个元素对应的样式值。

隐式迭代：

1. 设置操作的时候，如果是多个元素，那么给所有的元素设置相同的值
2. 获取操作的时候，如果是多个元素，那么只会返回第一个元素的值。

### class操作

- 添加样式类

```javascript
// name：需要添加的样式类名，注意参数不要带点.
$obj.addClass(name);
// 例子,给所有的div添加one的样式。
$('div').addClass('one');
```

- 移除样式类

```javascript
// name:需要移除的样式类名
$obj.removeClass('name');
// 例子，移除div中one的样式类名
$('div').removeClass('one');
```

- 判断是否有某个样式类

```javascript
// name:用于判断的样式类名，返回值为true false
$obj.hasClass(name)
// 例子，判断第一个div是否有one的样式类
$('div').hasClass('one');
```

- 切换样式类

```javascript
// name:需要切换的样式类名，如果有，移除该样式，如果没有，添加该样式。
$obj.toggleClass(name);
// 例子
$('div').toggleClass('one');
```

### 案例

- tab栏切换案例 [07-tab栏切换.html]

## jQuery动画

- jQuery提供了三组基本动画，这些动画都是标准的、有规律的效果，jQuery还提供了自定义动画的功能。
- 演示动画效果  [08-演示jQuery动画（animate）.html]

### 三组基本动画

- 显示(show)与隐藏(hide)是一组动画：
- 滑入(slideUp)与滑出(slideDown)与切换(slideToggle)，效果与卷帘门类似
- 淡入(fadeIn)与淡出(fadeOut)与切换(fadeToggle)

```javascript
$obj.show([speed], [callback]);
// speed(可选)：动画的执行时间
	 // 1.如果不传，就没有动画效果。如果是slide和fade系列，会默认为normal
	 // 2.毫秒值(比如1000),动画在1000毫秒执行完成(推荐)
     // 3.固定字符串，slow(200)、normal(400)、fast(600)，如果传其他字符串，则默认为normal。
// callback(可选):执行完动画后执行的回调函数

slideDown()/slideUp()/slideToggle();同理
fadeIn()/fadeOut();fadeToggle();同理
```

### 自定义动画

- animate: 自定义动画

```javascript
$(selector).animate({params},[speed],[easing],[callback]);
// {params}：要执行动画的CSS属性，带数字（必选）
// speed：执行动画时长（可选）
// easing:执行效果，默认为swing（缓动）  可以是linear（匀速）
// callback：动画执行完后立即执行的回调函数（可选）
```

### 动画队列与停止动画

- 在同一个元素上执行多个动画，那么对于这个动画来说，后面的动画会被放到动画队列中，等前面的动画执行完成了才会执行（联想：火车进站）。

```javascript
// stop方法：停止动画效果
stop(clearQueue, jumpToEnd);
// 第一个参数：是否清除队列
// 第二个参数：是否跳转到最终效果
```

### 案例

- 开机动画案例 [09-开关机动画.html]
- 下拉菜单-动画 [10-下拉菜单-动画.html]

## jQuery节点操作

### 创建节点

```javascript
// $(htmlStr)
// htmlStr：html格式的字符串
$('<span-这是一个span元素</span-');
```

### 添加节点

```javascript
append  appendTo	在被选元素的结尾插入内容
prepend prependTo	在被选元素的开头插入内容
before				在被选元素之后插入内容
after				在被选元素之前插入内容
```

### 清空节点与删除节点

- empty：清空指定节点的所有元素，自身保留(清理门户)

```javascript
$('div').empty(); // 清空div的所有内容（推荐使用，会清除子元素上绑定的内容，源码）
$('div').html('');// 使用html方法来清空元素，不推荐使用，会造成内存泄漏，绑定的事件不会被清除。
```

- remove：相比于empty，自身也删除（自杀）

```javascript
$('div').remove();
```



### 克隆节点

- 作用：复制匹配的元素

```javascript
// 复制$(selector)所匹配到的元素（深度复制）
// cloneNode(true)
// 返回值为复制的新元素，和原来的元素没有任何关系了。即修改新元素，不会影响到原来的元素。
$(selector).clone();
```

### 案例

- 城市选择 [11-城市选择案例.html]
- 删除表格 [12 表格删除案例.html]
- 根据数据生成表格 [13-表格生成案例.html]
- 添加和删除表格数据 [14-动态数据添加和删除.html]

## jQuery操作属性

### attr操作

- 设置单个属性

```javascript
// 第一个参数：需要设置的属性名
// 第二个参数：对应的属性值
$obj.attr(name, value);
// 用法举例
$('img').attr('title','哎哟，不错哦');
$('img').attr('alt','哎哟，不错哦');
```

- 设置多个属性

```javascript
// 参数是一个对象，包含了需要设置的属性名和属性值
$obj.attr(obj)
// 用法举例
$('img').attr({
    title:'哎哟，不错哦',
    alt:'哎哟，不错哦',
    style:'opacity:.5'
});
```

- 获取属性

```javascript
// 传需要获取的属性名称，返回对应的属性值
$obj.attr(name)
// 用法举例
var oTitle = $('img').attr('title');
alert(oTitle);
```

- 移除属性

```javascript
// 参数：需要移除的属性名，
$obj.removeAttr(name);
// 用法举例
$('img').removeAttr('title');
```

### prop操作

- 在jQuery1.6之后，对于checked、selected、disabled这类boolean类型的属性来说，不能用attr方法，只能用prop方法。

```javascript
// 设置属性
$(':checked').prop('checked',true);
// 获取属性
$(':checked').prop('checked');// 返回true或者false
```

### val()/text/()html()

```javascript
$obj.val()		获取或者设置表单元素的value属性的值
$obj.html() 	对应innerHTML
$obj.text()		对应innerText/textContent，处理了浏览器的兼容性
```

### 案例

- 表格全选反选 [15-表格全选反选.html]
- 打字效果 [16-打字效果.html]

## jQuery尺寸和位置操作

### width方法与height方法

- 设置或者获取高度，不包括内边距、边框和外边距

```javascript
// 带参数表示设置高度
$('img').height(200);
// 不带参数获取高度
$('img').height();
```

获取网页的可视区宽高

```javascript
// 获取可视区宽度
$(window).width();
// 获取可视区高度
$(window).height();
```

### innerWidth/innerHeight/outerWidth/outerHeight

```javascript
innerWidth()/innerHeight()	方法返回元素的宽度/高度（包括内边距）。
outerWidth()/outerHeight()  方法返回元素的宽度/高度（包括内边距和边框）。
outerWidth(true)/outerHeight(true)  方法返回元素的宽度/高度（包括内边距、边框和外边距）。
```

### scrollTop与scrollLeft

- 设置或者获取垂直滚动条的位置

```javascript
// 获取页面被卷曲的高度
$(window).scrollTop();
// 获取页面被卷曲的宽度
$(window).scrollLeft();
```

### offset方法与position方法

- offset方法获取元素距离document的位置，position方法获取的是元素距离有定位的父元素(offsetParent)的位置。

```javascript
// 获取元素距离document的位置,返回值为对象：{left:100, top:100}
$(selector).offset();
// 获取相对于其最近的有定位的父元素的位置。
$(selector).position();
```

案例：固定导航栏   [17-固定导航栏.html]
案例：电梯导航 	[18-电梯导航.html]

## jQuery事件机制

- JavaScript中已经学习过了事件，jQuery对JavaScript事件进行了封装，增加并扩展了事件处理机制。jQuery不仅提供了更加优雅的事件处理语法，而且极大的增强了事件的处理能力。

### jQuery事件发展历程(了解)

简单事件绑定--bind事件绑定--delegate事件绑定--on事件绑定(推荐)

- 简单事件注册

```javascript
click(handler)			单击事件
mouseenter(handler)		鼠标进入事件
mouseleave(handler)		鼠标离开事件
```

缺点：不能同时注册多个事件

- bind方式注册事件

```javascript
// 第一个参数：事件类型
// 第二个参数：事件处理程序
$('p').bind('click mouseenter', function(){
    // 事件响应方法
});
```

缺点：不支持动态事件绑定

- delegate注册委托事件

```javascript
// 第一个参数：selector，要绑定事件的元素
// 第二个参数：事件类型
// 第三个参数：事件处理函数
$('.parentBox').delegate('p', 'click', function(){
    // 为 .parentBox下面的所有的p标签绑定事件
});
```

缺点：只能注册委托事件，因此注册时间需要记得方法太多了

- on注册事件

### on注册事件(重点)

- jQuery1.7之后，jQuery用on统一了所有事件的处理方法。
- 最现代的方式，兼容zepto(移动端类似jQuery的一个库)，强烈建议使用。

on注册简单事件

```javascript
// 表示给$(selector)绑定事件，并且由自己触发，不支持动态绑定。
$(selector).on( 'click', function() {});
```

on注册事件委托

```javascript
// 表示给$(selector)绑定代理事件，当必须是它的内部元素span才能触发这个事件，支持动态绑定
$(selector).on( 'click','span', function() {});
```

事件委托原理

```javascript
// 事件委托的原理
var ul = document.querySelector('#ul');
ul.onclick = function (e) {
  // console.log(e.target.tagName);
  if (e.target.tagName.toLowerCase() === 'li') {
    console.log(e.target);
  }
}
```



on注册事件的语法：

```javascript
// 第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或者自定义事件）
// 第二个参数：selector, 执行事件的后代元素（可选），如果没有后代元素，那么事件将有自己执行。
// 第三个参数：data，传递给处理函数的数据，事件触发的时候通过event.data来使用（不常使用）
// 第四个参数：handler，事件处理函数
$(selector).on(events[,selector][,data],handler);
```

- 通过源码查看 bind click delegate on 注册事件的区别

### 事件解绑

- unbind方式（不用）

```javascript
$(selector).unbind(); // 解绑所有的事件
$(selector).unbind('click'); // 解绑指定的事件
```

- undelegate方式（不用）

```javascript
$( selector ).undelegate(); // 解绑所有的delegate事件
$( selector).undelegate( 'click' ); // 解绑所有的click事件
```

- off方式（推荐）

```javascript
// 解绑匹配元素的所有事件
$(selector).off();
// 解绑匹配元素的所有click事件
$(selector).off('click');
```

### 触发事件

```javascript
$(selector).click(); // 触发 click事件
$(selector).trigger('click');
```

### jQuery事件对象

jQuery事件对象其实就是js事件对象的一个封装，处理了兼容性。

```javascript
// screenX和screenY	对应屏幕最左上角的值
// clientX和clientY	距离页面左上角的位置（忽视滚动条）
// pageX和pageY	距离页面最顶部的左上角的位置（会计算滚动条的距离）

// event.keyCode	按下的键盘代码
// event.data	存储绑定事件时传递的附加数据

// event.stopPropagation()	阻止事件冒泡行为
// event.preventDefault()	阻止浏览器默认行为
// return false:既能阻止事件冒泡，又能阻止浏览器默认行为。
```

### 案例

- 按键变色 [19-按键变色.html]

## jQuery补充知识点

### 链式编程

- 通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 jQuery对象。

```javascript
end(); // 筛选选择器会改变jQuery对象的DOM对象，想要回复到上一次的状态，并且返回匹配元素之前的状态。
```

### each方法

- jQuery的隐式迭代会对所有的DOM对象设置相同的值，但是如果我们需要给每一个对象设置不同的值的时候，就需要自己进行迭代了。

作用：遍历jQuery对象集合，为每个匹配的元素执行一个函数

```javascript
// 参数一表示当前元素在所有匹配元素中的索引号
// 参数二表示当前元素（DOM对象）
$(selector).each(function(index,element){});
```

### 多库共存

- jQuery使用$作为标示符，但是如果与其他框架中的$冲突时，jQuery可以释放$符的控制权.

```javascript
var c = $.noConflict();// 释放$的控制权,并且把$的能力给了c
```

### 案例

- 五角星评分案例 [20-五角星评分案例.html]

## 插件

### 常用插件

- 弹出层插件 layer
  - [layer插件](https://github.com/sentsin/layer)
- 放大镜插件
  - [jQuery.zoom](http://www.jacklmoore.com/zoom/)
- 轮播图插件
  - [http://sorgalla.com/jcarousel/](http://sorgalla.com/jcarousel/)
  - [https://github.com/OwlCarousel2/OwlCarousel2](https://github.com/OwlCarousel2/OwlCarousel2)
- 图片懒加载插件
  - [jQuery.lazyload](https://github.com/tuupola/jquery_lazyload)
- jQueryUI
  - 常用的2-3个功能演示
- 查看jQuery插件的源码

### 自己探索插件

- [artDialog](https://github.com/aui/artDialog)
- [图片放大](https://github.com/fat/zoom.js)
- [github上搜索](http://www.github.com)


## jQuery插件开发

- 给jQuery增加方法的两种方式

```javascript
$.method = fn		静态方法
$.fn.method = fn	实例方法
```

- 增加一个静态方法，实现两个数的和，插件

```javascript
(function ($) {
  $.add = function (a, b) {
    return a + b;
  }
}(jQuery))

$.add(5, 6);
```

- tab栏插件 [21-tab栏插件.html]

```javascript
(function ($) {
  // {tabMenu: '#aa'}
  $.tab = function (options) {
    // 默认参数
    var defaults = {
      tabMenu: '#tab',
      activeClass: 'active',
      tabMain: '#tab-main',
      tabMainSub: '.main',
      selectedClass: 'selected'
    }
    // 把options中的属性，把对应属性的值赋给defaults对应的属性
    // defaults.tabMenu = options.tabMenu || defaults.tabMenu;
    // for(var key in options) {
    //   defaults[key] = options[key];
    // }
    $.extend(defaults, options);

    $(defaults.tabMenu).on('click', 'li', function () {
      $(this)
        .addClass(defaults.activeClass)
        .siblings()
        .removeClass(defaults.activeClass);

      //
      var index = $(this).index();
      //
      $(defaults.tabMain + ' ' + defaults.tabMainSub)
        .eq(index)
        .addClass(defaults.selectedClass)
        .siblings()
        .removeClass(defaults.selectedClass);
    })
  }
}(window.jQuery))
```

- 表格插件  [22-表格插件.html]

```javascript
(function($) {
  // 内部的变量，外部无法访问，防止变量名冲突
  var a = 0;
  // 给$增加了一个实例方法
  $.fn.table = function (header, data) {
    var array = [];
    array.push('<table>');
    array.push('<tr>');

    // 生成表头
    $.each(header, function () {
      array.push('<th>' + this + '</th>');
    })
    array.push('</tr>');


    // 生成数据行
    $.each(data, function (index) {
      // this是当前遍历到的数组中的每一个对象
      // 拼数据行
      array.push('<tr>');
      array.push('<td>' + (index + 1) + '</td>');

      // 遍历对象，拼表格
      for (var key in this) {
        array.push('<td>' + this[key] + '</td>');
      }

      array.push('</tr>');
    })
    array.push('</table>');

    this.append(array.join(''));
  }

}(window.jQuery))
```

- 插件开发的原理