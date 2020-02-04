#!/bin/bash
my_var='new.ruoduan.cn'

echo $my_var

# 语句给变量赋值
# for file in `ls /etc`
# 以上语句将 /etc 下目录的文件名循环出来


# 只读变量
redVar="abc"
readonly redVar
redVar="213"

# 删除变量
del_var='待会要删除'
unset del_var
echo $del_var

# 拼接字符串
# 双引号里可以有变量，双引号里可以出现转义字符
name='ruoduan'
echo "my name is ${name} !"
echo 'my name is $name !'

# 获取字符串长度
echo ${#name}

# 截取字符串 和python类似
echo ${name:3:1}

# 查找字符串
echo `expr index "$name" r` # 输出1

