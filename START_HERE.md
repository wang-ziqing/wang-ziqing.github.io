# 从这里开始：一步一步上线

你不需要在电脑上安装 Ruby、Jekyll 或编程软件。GitHub 会负责构建。

## 当前这一步：只下载、解压

1. 下载 `Ziqing_Wang_al-folio.zip`。
2. Windows：右键 → “全部解压”；Mac：双击压缩包。
3. 打开解压后的 `ziqing-al-folio` 文件夹。你应该看到 `_pages`、`_data`、`_projects`、`assets`、`_config.yml`、`Gemfile` 等。
4. 先不要上传、删除或替换现有网站。把文件夹截图发给我，我们确认后再操作。

这不是双击 `index.html` 就能查看的单页网站；它需要先经过 GitHub 的构建。

## 后续路线（现在不必全部操作）

### 1. 备份已有仓库

打开 https://github.com/wang-ziqing/wang-ziqing.github.io ，点击绿色 Code → Download ZIP，保存原网站备份。不要删除仓库，不必重新注册账号。

### 2. 确认原文件，避免两个首页冲突

我们会先看仓库截图。原来的测试 `index.html` 与新模板首页可能冲突，需要在备份后处理；其他已有文件不应盲目删除。若旧网站已有 `.github/workflows`，也要确认没有两个部署流程同时运行。

### 3. 上传新网站内容

在仓库 Code 页面使用 Add file → Upload files。上传的是 `ziqing-al-folio` **里面的文件和子文件夹**，不是 ZIP，也不是把外层 `ziqing-al-folio` 文件夹整个套进去。

上传后，仓库首页应直接看到 `_config.yml`、`Gemfile`、`_pages`、`_data`、`assets`。

`.github` 是点开头的文件夹，有些电脑会隐藏它。如果没有成功上传，之后可以在 GitHub 用 Add file → Create new file，文件名填 `.github/workflows/deploy.yml`，把 `DEPLOY_WORKFLOW.txt` 的完整内容粘贴进去。**先确认路径，再提交。**

### 4. 设置发布方式

仓库 Settings → Pages → Build and deployment → Source → **GitHub Actions**。

本项目使用自定义构建，不使用 GitHub 默认的受限 Jekyll 构建，也不选择 “Deploy from a branch”。

### 5. 构建并查看

仓库 Actions → Build and deploy al-folio。如果首次执行因 Pages 尚未设置而失败，完成上一步后使用 Re-run all jobs；也可用 Run workflow 手动开始。

第一次构建需要安装主题依赖，通常要等待几分钟。成功后访问 https://wang-ziqing.github.io/ 。若红色失败，不要反复重传文件：打开失败的步骤，把报错截图发给我。

### 6. 上线后的检查

- 首页姓名、简介、照片、Scholar 数字和日期是否正确。
- 6 个导航是否可用。
- 论文关键词搜索、彩色主题筛选、清空按钮是否正常。
- 3 个课题卡片是否打开正确详情。
- CV 是否可以下载，且不包含手机号码。
- 手机菜单和深浅色切换是否正常。

## 访问统计：暂未启用

当前没有埋点，也没有收集访客数据。模板保留了分析服务的配置位置，但需要你先选择并注册服务，才能填入网站标识。

我们之后可以配置只有你登录才能看的访问量和大致地区统计，不在网页展示计数器。请注意：

- “不显示统计面板”不等于“技术上无法发现统计脚本”。
- 地理位置是估算，不能识别某位 committee 成员；VPN、代理和校园网络会影响判断。
- 是否记录原始 IP 取决于服务及设置，不能承诺所有服务都提供。
- 后台密码、私密访问链接、API 密钥不能放在公开 GitHub 仓库中。
- 统计只能从启用后开始，不能补回之前未记录的访问。

参考：[al-folio](https://github.com/alshedivat/al-folio) · [GitHub Pages 自定义工作流说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
