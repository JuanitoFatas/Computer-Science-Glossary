# 计算机科学词汇表

这里蒐集了计算机科学里，常用词汇之译法。

**译者注意！**词汇表所提供之译法需视情况相应修改。

# 为什么需要词汇表？

* 译者翻译需要一个统一的参考

* 菜鸟学习需要知道术语的中文

* 作为读 CS 书的辞典使用亦可

# 如何使用

dict.textile 包含了 A-Z 所有的词汇。

可用字母索引表浏览或浏览器的搜寻功能 (CMD+F, CTRL+F)。

为了使贡献更容易，仅将词汇按 A-Z 分类，各类下不再按字母顺序排序，请用搜寻查找。

频繁查询者可将[此页][dict]加入书签。

[dict]:https://github.com/JuanitoFatas/Computer-Science-Glossary/blob/master/dict.textile

# 如何贡献

欢迎贡献！集思广益！

发送 Pull Request 提交词汇表中尚未出现的词汇，请按照相同格式编排。

提交词汇时请先搜索词汇表，确认该词汇尚未添加，并将词汇加在类似的词组附近。

发现词汇有错误或更好的译法请开 [Issue][issue] 讨论。

靠大家的力量来一起壮大这个词汇表。

## 撰写语法

采用 Textile 语法，参考 [Textile Reference](http://redcloth.org/hobix.com/textile/) 或[试试 Textile](http://textile.thresholdstate.com/)。

## 命令行工具

命令行工具使用 [Node](http://nodejs.org/) 编写，使用前请先安装 [Node](http://nodejs.org/download/)，也可使用 [NVM](https://github.com/creationix/nvm) 来安装 Node。

如果只想在该仓库局部使用：

```bash
$ git clone git@github.com:JuanitoFatas/Computer-Science-Glossary.git
$ cd Computer-Science-Glossary
$ npm install
$ bin/tran
```

全局使用，运行：

```bash
$npm install -g tran
```

该工具当前仅支持翻译查询。查看帮助直接输入 `tran`：

```
$ bin/tran

  Usage: tran <command> [options]

  Commands:

    search <name>          Search for translations

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

查询翻译 `tran search <name>` （模糊搜寻），如查找 `sicp`：

```
$ bin/tran search sicp
Fuzzy match including:
SICP
  《计算机程序的构造与解释》
simple vector
  简单向量
physical
  物理的
```

此工具由 [CatTail](https://github.com/CatTail) 撰写。

# 好书推荐

[![翻译研究](http://img1.douban.com/lpic/s4607692.jpg)](http://book.douban.com/subject/1234604/)

# 其他意见

欢迎发送邮件至 huangz1990 或 katehuang0320 的 gmail 邮箱。

# 授权

[![CC BY-NC 3.0 CN](http://i.creativecommons.org/l/by-nc/3.0/cn/88x31.png)](http://creativecommons.org/licenses/by-nc/3.0/cn/)

[issue]:https://github.com/JuanitoFatas/Computer-Science-Glossary/issues

