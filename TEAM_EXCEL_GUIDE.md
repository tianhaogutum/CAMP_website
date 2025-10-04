# 团队成员Excel数据管理系统

## 功能概述

现在你的团队成员页面可以从Excel (.xlsx) 文件中动态读取数据，无需手动修改代码。

## 文件结构

```
public/data/
└── team.xlsx         # 团队成员数据文件（Excel格式）

src/utils/
└── teamData.js       # 团队成员数据读取工具

src/components/team/
├── DynamicTeamMember.jsx           # 动态团队成员组件
├── DynamicResearchLeads.jsx        # 动态研究负责人组件
├── DynamicResearchAssistants.jsx   # 动态研究助理组件
└── TeamPage.jsx                    # 团队页面（已更新）
```

## 数据格式

Excel文件包含以下字段：

| 字段名 | 描述 | 示例 |
|--------|------|------|
| Person ID | 人员ID | 1, 2, 3... |
| Name | 姓名 | "Dr. Sara Boni" |
| Title | 职位 | "Research Lead" |
| Role | 角色 | "Research Lead" |
| Description | 描述 | "Leading research in..." |
| Image | 头像路径 | "/images/sara.png" |
| Category | 类别 | "Research Leads", "Research Assistants" |
| Email | 邮箱 | "sara.boni@tum.de" |
| LinkedIn | LinkedIn链接 | "https://linkedin.com/in/sara-boni" |
| Website | 个人网站 | "https://tum.de" |
| Research Areas | 研究领域 | "Entrepreneurial Finance,Private Equity" |
| Education | 教育背景 | "PhD in Finance,TUM School of Management" |
| Experience | 工作经验 | "Professor at TUM since 2015" |

## 使用方法

### 1. 修改团队成员信息

直接编辑 `public/data/team.xlsx` 文件：

1. 用Excel或Google Sheets打开文件
2. 修改相应单元格的内容
3. 保存文件

### 2. 添加新团队成员

在Excel文件中添加新行：

1. 在最后一行下方添加新行
2. 填写所有必要字段
3. 确保Person ID唯一
4. 保存文件

### 3. 修改团队成员类别

通过修改 `Category` 字段来改变团队成员的分组：
- `Research Leads` - 研究负责人
- `Research Assistants` - 研究助理

### 4. 添加联系信息

可以添加邮箱、LinkedIn、个人网站等联系信息，这些会在团队成员卡片中显示。

## 技术实现

### 数据读取功能

- `getAllTeamMembers()` - 获取所有团队成员
- `getResearchLeads()` - 获取研究负责人
- `getResearchAssistants()` - 获取研究助理
- `getTeamMemberById(id)` - 根据ID获取特定成员
- `getTeamByCategory(category)` - 根据类别获取团队成员

### 动态组件

- `DynamicTeamMember` - 单个团队成员组件
- `DynamicResearchLeads` - 研究负责人列表组件
- `DynamicResearchAssistants` - 研究助理列表组件

### 响应式设计

- 研究负责人使用大尺寸显示（2列布局）
- 研究助理使用小尺寸显示（3列布局）
- 支持移动端响应式布局

## 优势

1. **易于维护**: 只需修改Excel文件即可更新团队成员信息
2. **批量操作**: 可以一次性更新多个团队成员
3. **分类管理**: 支持按类别分组显示
4. **联系信息**: 支持添加多种联系方式
5. **扩展性强**: 可以轻松添加新字段和新成员
6. **Excel格式**: 支持Excel的所有功能，如公式、格式等

## 注意事项

1. Excel文件必须是 `.xlsx` 格式
2. Person ID必须唯一
3. Image路径必须是有效的图片路径
4. Category字段决定成员的分组显示
5. 修改数据后需要刷新页面才能看到效果
6. 确保Excel文件的第一行是标题行

## 未来扩展

- 添加团队成员照片上传功能
- 支持多语言团队成员信息
- 添加团队成员搜索功能
- 实现团队成员排序功能
- 添加团队成员详情页面
- 支持Excel公式和格式
