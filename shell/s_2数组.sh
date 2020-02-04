my_array=(A B "C" D)

array_name[0]=value0
array_name[1]=value1
array_name[2]=value2

echo $array_name[1]

# 获取数组中的所有元素
# 使用@ 或 * 可以获取数组中的所有元素

echo "数组中的所有元素为${array_name[*]} "

# 获取数组的长度å
echo "数组中的长度${#array_name[*]} "
