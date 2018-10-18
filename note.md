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

## form表单
- 所有的表单元素都要增加v-model,如果有默认值需要加value
- checked selected无效的 (数据驱动)主要是给对象的所有属性采用Object.defineProperty来定义,当数据变化时可以调用更新方法
(如何实现对象的拦截功能)

## 指令
- 我们指令可以操作dom,封装了公用的逻辑,默认调用bind方法,只会执行一次 bind inserted update unbind
```
Vue.directive('drag',function(el,bindings,vnode){})
```
- 局部的
```
new Vue({
  directives:{
    drag:{
      update(){},
      bind(el,bindings,vnode){}
    }
  }
})
```

## 计算属性
自己的值是通过别的属性推断出来的,这个属性也会放在当前实例上,method,data,computed能不能重名,两种写法 默认调用get方法
```
new Vue({
  data:{a:1}
  computed:{
    aa(){
      return this.a+1
    }
  }
});
new Vue({
  data:{a:1}
  computed:{ // 不支持异步
    aa:{
      get(){ // 在接口中获取值后赋予给aa
        return this.a+1
      },
      set(val){

      }
    }
  }
});
````
