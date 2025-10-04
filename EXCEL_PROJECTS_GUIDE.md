# Excel项目数据管理系统

## 功能概述

现在你的项目页面可以从Excel (.xlsx) 文件中动态读取数据，无需手动修改代码。

## 文件结构

```
public/data/
└── projects.xlsx         # 项目数据文件（Excel格式）

src/utils/
└── projectData.js        # 数据读取工具

src/components/project/
├── ProjectTemplate.jsx   # 通用项目模板
├── DynamicPortfolioHeader.jsx  # 动态项目头部
├── DynamicContent.jsx    # 动态项目内容
└── Project1.jsx - Project12.jsx  # 各项目页面
```

## 数据格式

Excel文件包含以下字段：

| 字段名 | 描述 | 示例 |
|--------|------|------|
| Project ID | 项目ID | 1, 2, 3... |
| Title | 项目标题 | "Agent-Based Modelling for Liquidity Forecasting" |
| Description | 项目描述 | "This research focuses on..." |
| Short Description | 简短描述 | "This research focuses on..." |
| Researchers | 研究人员 | "Dr. Sara Boni, Dr. Max Knicker" |
| Asset Class | 资产类别 | "Financial Markets" |
| Data Used | 使用的数据 | "Market microstructure data" |
| Advanced Method | 高级方法 | "Agent-Based Modelling" |
| Tags | 标签（逗号分隔） | "Liquidity Forecasting,Agent-Based Modelling" |
| Content Paragraph 1 | 内容段落1 | "Our research focuses on..." |
| Content Paragraph 2 | 内容段落2 | "The study employs..." |
| Content Paragraph 3 | 内容段落3 | "This research contributes..." |

## 使用方法

### 1. 修改项目数据

直接编辑 `public/data/projects.xlsx` 文件：

1. 用Excel或Google Sheets打开文件
2. 修改相应单元格的内容
3. 保存文件

### 2. 添加新项目

在Excel文件中添加新行：

1. 在最后一行下方添加新行
2. 填写所有必要字段
3. 确保Project ID唯一
4. 保存文件

### 3. 创建新的项目页面

如果需要新的项目页面，创建新的组件文件：

```javascript
// src/components/project/Project13.jsx
import ProjectTemplate from "./ProjectTemplate";

export default function Project13() {
  return <ProjectTemplate projectId={13} />;
}
```

## 技术实现

### 数据读取

- 使用 `xlsx` 库读取Excel文件
- 支持 `.xlsx` 格式
- 自动解析数据为JavaScript对象

### 动态渲染

- `DynamicPortfolioHeader`: 动态渲染项目头部信息
- `DynamicContent`: 动态渲染项目内容
- `ProjectTemplate`: 通用项目模板

### 错误处理

- 加载状态显示
- 错误日志记录
- 优雅降级处理

## 优势

1. **易于维护**: 只需修改Excel文件即可更新项目内容
2. **批量操作**: 可以一次性更新多个项目
3. **版本控制**: Excel文件可以轻松进行版本控制
4. **非技术友好**: 非技术人员也可以修改项目数据
5. **扩展性强**: 可以轻松添加新字段和新项目
6. **Excel格式**: 支持Excel的所有功能，如公式、格式等

## 注意事项

1. Excel文件必须是 `.xlsx` 格式
2. 项目ID必须唯一
3. 修改数据后需要刷新页面才能看到效果
4. 建议定期备份Excel文件
5. 确保Excel文件的第一行是标题行

## 未来扩展

- 添加图片字段支持
- 支持多语言
- 添加项目分类功能
- 实现数据验证
- 添加搜索和过滤功能
- 支持Excel公式和格式
