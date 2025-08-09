# React + Tailwind CSS 环境

这是一个使用 Vite 创建的 React + Tailwind CSS 开发环境，专门为使用 Relume AI 组件而配置。

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

服务器将在 `http://localhost:5173` 启动

### 构建生产版本
```bash
npm run build
```

## 📦 已安装的包

- **React 19** - 最新版本的 React
- **Tailwind CSS v4** - 最新版本的 Tailwind CSS
- **Vite** - 快速的构建工具
- **PostCSS & Autoprefixer** - CSS 处理工具

## 🎨 Tailwind CSS 配置

项目使用 Tailwind CSS v4，配置已经简化。CSS 文件 (`src/index.css`) 包含：

```css
@import "tailwindcss";
```

## 📝 使用 Relume 组件

现在你可以：

1. 从 Relume AI 网站复制 React 组件代码
2. 将组件粘贴到 `src/components/` 目录（需要创建）
3. 在 `src/App.jsx` 中导入和使用组件

### 创建组件目录
```bash
mkdir src/components
```

### 示例组件使用
```jsx
import RelumeComponent from './components/RelumeComponent'

function App() {
  return (
    <div>
      <RelumeComponent />
    </div>
  )
}
```

## 🛠️ 项目结构

```
react-tailwind-app/
├── src/
│   ├── components/     # 放置 Relume 组件的目录
│   ├── App.jsx        # 主应用组件
│   ├── main.jsx       # 应用入口
│   └── index.css      # Tailwind CSS 配置
├── public/            # 静态资源
└── package.json       # 项目依赖
```

## ✨ 特性

- ✅ React 19 支持
- ✅ Tailwind CSS v4 完整配置
- ✅ 热重载开发服务器
- ✅ ESLint 代码检查
- ✅ 现代化构建工具 Vite
- ✅ 准备好接入 Relume 组件

## 🎯 下一步

1. 访问 [Relume AI](https://relume.io/) 获取组件代码
2. 创建 `src/components` 目录
3. 将 Relume 组件代码粘贴到新文件中
4. 在 App.jsx 中导入并使用组件

开始构建你的网站吧！🚀