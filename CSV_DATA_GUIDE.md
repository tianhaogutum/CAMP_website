# CSV数据管理指南

## 概述

本项目使用CSV文件来管理项目数据和团队成员信息，所有数据都存储在 `public/data/` 目录下。

## 文件结构

### 项目数据
- **文件**: `public/data/projects.csv`
- **用途**: 存储所有研究项目的详细信息
- **字段**: Project ID, Title, Description, Short Description, Researchers, Asset Class, Data Used, Advanced Method, Tags, Content Paragraph 1-3, Introduction, Methodology, Key Findings, Policy Implications, Conclusion, References, Appendices, Author Note

### 团队成员数据
- **文件**: `public/data/team.csv`
- **用途**: 存储所有团队成员的信息
- **字段**: Person ID, Name, Title, Category, Description, Photo, Email, LinkedIn, Website

## 如何编辑数据

### 编辑项目数据
1. 打开 `public/data/projects.csv` 文件
2. 找到要编辑的项目行
3. 修改相应的字段值
4. 保存文件
5. 刷新网页即可看到更新

### 编辑团队成员数据
1. 打开 `public/data/team.csv` 文件
2. 找到要编辑的成员行
3. 修改相应的字段值
4. 保存文件
5. 刷新网页即可看到更新

## 数据格式说明

### CSV格式要求
- 使用逗号分隔字段
- 包含逗号的字段需要用双引号包围
- 每行代表一个项目或团队成员
- 第一行是字段标题

### 特殊字段说明

#### 项目数据特殊字段
- **Introduction**: 项目介绍部分，支持多段落
- **Methodology**: 方法论部分，支持列表和段落
- **Key Findings**: 主要发现，支持多段落
- **Policy Implications**: 政策影响，支持段落
- **Conclusion**: 结论部分，支持段落
- **References**: 参考文献，支持多行
- **Appendices**: 附录，支持列表格式
- **Author Note**: 作者说明，支持链接

#### 团队成员数据特殊字段
- **Category**: 必须是 "Research Leads" 或 "Research Assistants"
- **Photo**: 图片文件名，存储在 `public/images/` 目录下

## 注意事项

1. **文件编码**: 确保CSV文件使用UTF-8编码
2. **字段完整性**: 所有必需字段都应该填写
3. **数据一致性**: 确保Project ID和Person ID的唯一性
4. **图片文件**: 确保引用的图片文件存在于 `public/images/` 目录下
5. **特殊字符**: 包含逗号、引号或换行符的字段需要用双引号包围

## 数据读取

系统会自动读取CSV文件并解析数据：
- 项目数据通过 `src/utils/projectData.js` 读取
- 团队成员数据通过 `src/utils/teamData.js` 读取
- 数据是动态加载的，修改文件后刷新页面即可看到更新

## 故障排除

### 常见问题
1. **数据不显示**: 检查CSV文件格式是否正确
2. **字段缺失**: 确保所有必需字段都已填写
3. **图片不显示**: 检查图片文件是否存在且路径正确
4. **特殊字符问题**: 确保包含特殊字符的字段用双引号包围

### 调试方法
1. 打开浏览器开发者工具
2. 查看Console标签页的错误信息
3. 检查Network标签页的文件加载状态
4. 验证CSV文件格式是否正确
