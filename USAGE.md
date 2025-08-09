# 如何使用 Relume 组件

## 🎯 快速开始

1. **访问 Relume AI 网站**
   - 前往 [https://relume.io/](https://relume.io/)
   - 浏览组件库并选择你需要的组件

2. **复制组件代码**
   - 点击组件的 "Copy React" 按钮
   - 复制完整的 JSX 代码

3. **创建组件文件**
   ```bash
   # 在 src/components/ 目录下创建新文件
   touch src/components/YourComponentName.jsx
   ```

4. **粘贴并调整代码**
   - 将复制的代码粘贴到新文件中
   - 确保导出组件（通常已经包含）

5. **在 App.jsx 中使用**
   ```jsx
   import YourComponent from './components/YourComponentName'

   function App() {
     return (
       <div>
         <YourComponent />
       </div>
     )
   }
   ```

## 📁 项目结构

```
src/
├── components/
│   ├── ExampleComponent.jsx    # 示例组件（可删除）
│   └── [你的 Relume 组件]      # 在此添加 Relume 组件
├── App.jsx                     # 主应用文件
├── main.jsx                    # 入口文件
└── index.css                   # Tailwind CSS 配置
```

## 💡 使用技巧

### 组件命名
- 使用 PascalCase 命名（如：`HeroSection.jsx`）
- 文件名与组件名保持一致

### 组件结构示例
```jsx
// src/components/HeroSection.jsx
import React from 'react'

const HeroSection = () => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      {/* Relume 组件内容 */}
    </section>
  )
}

export default HeroSection
```

### 在 App.jsx 中组合多个组件
```jsx
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
```

## 🎨 Tailwind CSS 类说明

Relume 组件通常使用以下 Tailwind 模式：

- **响应式设计**: `md:`, `lg:` 前缀
- **间距**: `px-[5%]`, `py-16`, `mb-12` 等
- **排版**: `text-5xl`, `font-bold`, `leading-tight` 等
- **布局**: `flex`, `grid`, `items-center`, `justify-center` 等

## 🔧 自定义和修改

### 修改颜色
```jsx
// 原始
<button className="bg-black text-white">

// 修改为蓝色
<button className="bg-blue-500 text-white">
```

### 修改尺寸
```jsx
// 原始
<h1 className="text-5xl">

// 修改为更大
<h1 className="text-6xl lg:text-7xl">
```

### 添加动画
```jsx
// 添加悬停效果
<button className="bg-blue-500 hover:bg-blue-600 transition-colors">

// 添加缩放效果
<div className="transform hover:scale-105 transition-transform">
```

## 🚀 部署

### 构建生产版本
```bash
npm run build
```

### 预览构建版本
```bash
npm run preview
```

## 📱 响应式测试

在开发时，确保在不同屏幕尺寸下测试：
- 手机：320px - 768px
- 平板：768px - 1024px  
- 桌面：1024px+

使用浏览器开发者工具的响应式模式进行测试。

## 🎉 开始构建

现在你已经拥有了一个完整的 React + Tailwind CSS 环境，可以：

1. ✅ 使用任何 Relume 组件
2. ✅ 享受热重载开发体验
3. ✅ 使用现代化的 Tailwind CSS v4
4. ✅ 快速构建响应式网站

开始创建你的网站吧！🚀