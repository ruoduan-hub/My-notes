# author:ytouch
# date:2019/07/27
# this py is used for brushing pageview for csdn

# 导入相关爬虫库和解析xml库即可
import time
from pyquery import PyQuery as pq
import requests
from bs4 import BeautifulSoup

# 爬取csdn类
class ScrapyMyCSDN:
    ''' class for csdn'''
    def __init__(self,blogname):
        '''init 类似于构造函数 param[in]:blogname:博客名'''
        csdn_url = 'https://blog.csdn.net/' #常规csdnurl
        self.blogurl = csdn_url+blogname #拼接字符串成需要爬取的主页url

    ''' Func:获取写了多少篇原创文章 '''
    ''' return:写了多少篇原创文章'''
    def getOriginalArticalNums(self):
        main_response = requests.get(self.blogurl)
        # 判断是否成功获取 (根据状态码来判断)
        if main_response.status_code == 200:
            print('获取成功')
            self.main_html = main_response.text
            main_doc = pq(self.main_html)
            mainpage_str = main_doc.text() #页面信息去除标签信息
            origin_position = mainpage_str.index('原创') #找到原创的位置
            end_position = mainpage_str.index('原创',origin_position+1) #最终的位置,即原创底下是数字多少篇博文
            self.blog_nums = ''
            # 获取写的博客数目
            for num in range(3,10):
                #判断为空格 则跳出循环
                if mainpage_str[end_position + num].isspace() == True:
                    break
                self.blog_nums += mainpage_str[end_position + num]
            cur_blog_nums = int(self.blog_nums) #获得当前博客文章数量
            return cur_blog_nums #返回博文数量
        else:
            print('爬取失败')
            return 0 #返回0 说明博文数为0或者爬取失败

    ''' Func：分页'''
    ''' param[in]:nums:博文数 '''
    ''' return: 需要爬取的页数'''
    def getScrapyPageNums(self,nums):
        self.blog_original_nums = nums
        if nums == 0:
            print('它没写文章，0页啊！')
            return 0
        else:
            print('现在开始计算')
            cur_blog = nums/20 # 获得精确的页码
            cur_read_page = int(nums/20) #保留整数
            # 进行比对
            if cur_blog > cur_read_page:
                self.blog_original_nums = cur_read_page + 1
                print('你需要爬取 %d'%self.blog_original_nums + '页')
                return self.blog_original_nums #返回的数字
            else:
                self.blog_original_nums = cur_read_page
                print('你需要爬取 %d'%self.blog_original_nums + '页')
            return self.blog_original_nums

    '''Func:开始爬取，实际就是刷浏览量hhh'''
    '''param[in]:page_num:需要爬取的页数'''
    '''return:0:浏览量刷失败'''
    def beginToScrapy(self,page_num):
        if page_num == 0:
            print('连原创博客都不写 爬个鬼!')
            return 0
        else:
            for nums in range(1,page_num+1):
                self.cur_article_url = self.blogurl + '/article/list/%d'%nums+'?t=1&'  #拼接字符串
                article_doc = requests.get(self.cur_article_url) #访问该网站
                # 先判断是否成功访问
                if article_doc.status_code == 200:
                    print('成功访问网站%s'%self.cur_article_url)
                    #进行解析
                    cur_page_html = article_doc.text
                    soup = BeautifulSoup(cur_page_html,'html.parser')
                    for link in soup.find_all('p',class_="content"):
                        requests.get(link.find('a')['href']) #进行访问
                else:
                    print('访问失败')
        print('访问结束')


#如何调用该类
mycsdn = ScrapyMyCSDN('Chad97') #初始化类 参数为博客名
cur_write_nums = mycsdn.getOriginalArticalNums() #得到写了多少篇文章
cur_blog_page = mycsdn.getScrapyPageNums(cur_write_nums) #cur_blog_page:返回需要爬取的页数

for i in range(1,60):
    mycsdn.beginToScrapy(cur_blog_page)
    time.sleep(10) # 给它休息时间 还是怕被封号的

