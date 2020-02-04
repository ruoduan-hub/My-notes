a=10
b=20
if [ $a == $b ]
then
   echo "a 等于 b"
elif [ $a -gt $b ]
then
   echo "a 大于 b"
elif [ $a -lt $b ]
then
   echo "a 小于 b"
else
   echo "没有符合的条件"
fi

# if else语句经常与test命令结合
num1=$[2*3]
num2=$[1+5]
if test $[num1] -eq $[num2]
then
    echo '两个数字相等!'
else
    echo '两个数字不相等!'
fi

# for 循环
for loop in 1 2 3 4 5
do
    echo "The value is: $loop"
done

# while 语句
int=1
while(( $int<=6 ))
do
    echo $int
    let "int++"
done

# 无限循环
while true
do
    command
done

# or
for (( ; ; ))

# until 循环
a=0

until [ ! $a -lt 10 ]
do
   echo $a
   a=`expr $a + 1`
done

# case
echo '输入 1 到 4 之间的数字:'
echo '你输入的数字为:'
read aNum
case $aNum in
    1)  echo '你选择了 1'
    ;;
    2)  echo '你选择了 2'
    ;;
    3)  echo '你选择了 3'
    ;;
    4)  echo '你选择了 4'
    ;;
    *)  echo '你没有输入 1 到 4 之间的数字'
    ;;
esac

# break continue
echo 'break 和 continue 和其他语言大致相同'
# continue命令与break命令类似，只有一点差别，它不会跳出所有循环，仅仅跳出当前循环。

# case ... esac

site="a"
case "$site" in
   "a") echo "is a"
   ;;
   "b") echo "is b"
   ;;
   "c") echo "is c"
   ;;
esa