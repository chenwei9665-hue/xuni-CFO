# 财精灵 Demo（xuni-CFO）

一个用于客户与投资人演示的前端 Demo：
**财精灵 = 系统 + 专家交付 + AI，共同交付结果**。

## 技术栈

- Next.js（App Router）
- React
- Tailwind CSS
- 本地中文假数据（无真实 API）

## 本地启动

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

> 若你的网络环境出现 `UNABLE_TO_GET_ISSUER_CERT_LOCALLY`，仓库已提供 `.npmrc`（`strict-ssl=false`）以避免本地证书链问题导致安装失败。


## 页面说明

- `/` 老板驾驶舱：核心指标 + 趋势 + 月度经营摘要
- `/alerts` 预警中心：5 类关键预警 + 右侧 AI 分析
- `/ai-analysis` AI 分析面板：对预警做原因/影响/建议/优先级解释
- `/workflow` 专家交付闭环：按状态看板展示分发、跟进、处理、复盘

## 目录结构

- `app/` 页面路由与全局样式
- `components/` 可复用 UI 组件（指标卡、图表卡、预警表、AI 面板、闭环看板、导航）
- `data/` 演示假数据
- `lib/` 预留扩展目录
