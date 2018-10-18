## 姜文
- 1035465284

## vue的特点
- 轻量 渐进式框架 数据驱动 避免大量的操作dom 虚拟dom
- 指令 常见的指令
- v-for  循环 循环对象 循环数组 数字 字符串 (key你可以不用加 vue会自动给你去优化) key (必须指定 key的问题，尽量不要使用数组的索引)
- v-bind 绑定属性的 动态绑定 :value
- v-on  @符号
- v-once 之渲染一次
- v-model 双向数据绑定
- v-show / v-if/v-else-if dom是否显示
- v-text 可以防止闪烁 {{}}
- v-cloak [v-cloak] {}
- v-html 慎重使用 (文本尽量是安全的)
- v-pre 可以不去渲染某一块视频  <v-prev>{{你好}} </v-pre>

## 数据绑定的问题 (响应式变化)
- 对象 不支持新增属性的 Object.defineProperty vm.$set()\
- 数组的问题 数组中没有使用defineProperty 不能操作长度来修改数据
- 方法 methods

## vscode
- vscode 更适合node调试
- vscode 运行比较流畅 （免费）

## key
- 默认情况下vue会采用自动优化的模式,防止出问题尽量增加key，保证更新不会出现问题

## ref
- 想在vue中获取dom元素 如果一个元素的话 取到的是对象
- 带有v-for 取到的是数组
- 不能给两个元素设置同一个ref