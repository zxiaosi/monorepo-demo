### 项目目录

```bash
|--- packages
    |--- app # 主应用
    |--- demo1 # 子应用1
    |--- sdk # 公共sdk
|--- README.md
```

### 安装依赖

```bash
pnpm install
```

### 运行项目

```bash
pnpm -F sdk run dev
pnpm -F demo1 run dev
pnpm -F app run dev
```
