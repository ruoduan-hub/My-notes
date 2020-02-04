echo '啦啦啦～ 哈哈哈'

# 显示转义字符
echo -e '啦啦啦～ \n 哈哈哈'

# 显示变量
# 有点类似于 python 中的 input
read name 
echo "$name It is a test"

# 显示结果定向至文件
echo -e "显示结果定向至文件的内容\n" > myfile.log

# 显示命令执行结果
echo `date`