# 以后怎样改自己的信息

每次只改一处，提交后等待 Actions 变绿，再刷新网站。刚开始可以直接把新内容发给我，我帮你整理成可粘贴的版本。

| 想改什么                     | 文件                                                               |
| ---------------------------- | ------------------------------------------------------------------ |
| 首页简介                     | `_pages/about.md`                                                  |
| 照片                         | `assets/img/ziqing-wang.png`，保持同名替换                         |
| Scholar 数字与更新时间       | `_data/metrics.yml`                                                |
| 论文                         | `_data/publications.json`                                          |
| 论文主题名称                 | `_data/topics.yml`                                                 |
| 首页精选奖项、News 列表      | `_data/awards.yml`                                                 |
| Batteries 详情               | `_projects/batteries.md`                                           |
| Electrocatalysis 详情        | `_projects/electrocatalysis.md`                                    |
| Electroseparation 详情       | `_projects/electroseparation.md`                                   |
| 教学和指导学生               | `_pages/teaching.md`                                               |
| CV 网页摘要                  | `_pages/cv.md`                                                     |
| CV 下载文件                  | `assets/pdf/Ziqing_Wang_CV.pdf`                                    |
| 邮箱、Scholar 链接           | `_data/socials.yml`、`_data/metrics.yml`；同时检查页面中的文字链接 |
| 网站地址、姓名、分析服务开关 | `_config.yml`                                                      |

## Markdown 页面怎么改

打开对应文件 → 右上角铅笔图标 → 编辑 → Commit changes。最上面两条 `---` 之间是设置区，初期先不要修改；其后的正文可以像普通文字一样编辑。`##` 表示标题，`**文字**` 表示加粗。

## 首页精选论文

`_data/publications.json` 中，每篇论文的 `selected: true` 表示在首页显示；`false` 表示只在完整列表显示。建议首页保留 5–6 篇，优先代表独立贡献、研究主线与下一步方向。

每条论文的 `tags` 对应 `_data/topics.yml` 中的 `id`。多主题论文可以有多个标签。没有任何 electroseparation 论文时，不添加虚假的论文条目或筛选按钮。

JSON 对引号、逗号较严格。先让我帮你添加第一篇新论文，再逐步自己操作。

## 奖项和 News

`_data/awards.yml` 的 `selected: true` 表示也在首页显示。News 页面显示全部记录。年份来自 CV；没有把不知道的获奖月份、日期编出来。

## Scholar 数字

不是实时抓取。更新 `_data/metrics.yml` 的三个数字时，同时更新 `updated`。网站保留“查看当前 Scholar”链接。

## 内容核对建议

- 所有 25 条论文的题名、作者、期刊、年份、卷页与 DOI 来自提供的 CV；尚未逐篇与出版社元数据复核。online year 与 issue year 可能不同，尤其应复查跨年条目。
- Electrocatalysis 和 Electroseparation 的进行中方向没有写成已经完成的成果。
- Teaching interests 是根据已有研究/教学经历提出的可编辑措辞，请本人确认。
- 网页不声称已取得未确认的教职、独立 PI 经费或已发表的分离方向成果。
- 学生指导数量及引用数字按提供的 CV，未来应定期更新。
- 公开版 CV 已移除电话；若以后替换 PDF，记得重新检查隐私。

## 技术维护说明

这是原版 al-folio 的真实主题依赖，而非自制仿站。保留其 Gemfile 与锁定版本；不要单独更新某个主题 gem。

本站使用新增的 `_includes/wang-*.liquid` 组件、`wang.css` 和 `publications.js` 来实现个人化内容与论文筛选，没有覆盖原主题布局。`_bibliography/papers.bib` 留空是有意的：本站论文统一从 JSON 读取，不需要维护两份。

当前只保留一个 GitHub Pages 部署工作流。源模板针对其演示内容的大量测试、自动更新、博客和发布工作流未加入个人网站。

安装 Ruby 后可运行 `bundle exec al-folio upgrade audit --no-fail` 与 `bundle exec al-folio upgrade overrides audit`。升级主题前务必先备份并检查实际构建。
