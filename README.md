# maizuowang

## Project setup

```
npm install
```

### 编译并缩小以用于生产

```
npm run serve
```

### 上线运行测试

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints 和 补丁文件

```
npm run lint
```

# 开始———

### 路由定义

#### 页面跳转

1、特惠界面

<!-- 2、地址 -->

#### 一级路由:

| 路径          | 组件名  | 名字           |
| ------------- | ------- | -------------- |
| /             | Home    | 主界面         |
| /film/:filmId | Film    | 电影详情页     |
| /city         | City    | 城市定位选择页 |
| /login        | Login   | 登录页         |
| /money        | Money   | 钱包           |
| <!--          | cinemas | cinemas        | /film/:filmId | 选座购票 | --> |

#### 二级路由:

| 路径     | 组件名  | 它的父级 | 名字   |
| -------- | ------- | -------- | ------ |
| /cinemas | Cinemas | /        | 影院页 |
| /films   | Films   | /        | 电影页 |
| /center  | Center  | /        | 我的   |

#### 三级路由:

| 路径       | 组件名     | 它的父级 | 名字     |
| ---------- | ---------- | -------- | -------- |
| nowPlaying | NowPlaying | /films   | 正在热映 |
| comingSoon | ComingSoon | /films   | 即将上映 |
