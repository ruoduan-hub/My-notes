: '语法  
    printf  format-string  [arguments...]

    format-string: 为格式控制字符串
    arguments: 为参数列表。
'
echo "Hello, Shell"
printf "Hello, Shell\n"

# 格式化打印
printf "%-10s %-8s %-4s\n" 姓名 性别 体重kg  
printf "%-10s %-8s %-4.2f\n" 小米 男 66.1234 
printf "%-10s %-8s %-4.2f\n" 小红 男 48.6543 
printf "%-10s %-8s %-4.2f\n" 小康 女 47.9876 

: '
%s %c %d %f都是格式替代符

%-10s 指一个宽度为10个字符（-表示左对齐，没有则表示右对齐），任何字符都会被显示在10个字符宽的字符内，如果不足则自动以空格填充，超过也会将内容全部显示出来。

%-4.2f 指格式化为小数，其中.2指保留2位小数。
'
