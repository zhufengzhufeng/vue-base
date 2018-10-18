let obj = {
  name:{name:'zfpx'},
  age:9
}
function update() {
  console.log('更新')
}
// Object.defineProperty
function observer(obj) {
  if (typeof obj !== 'object') return obj;
  for(let key in obj){
    defineReactive(obj, key,obj[key]);
  }
}
function defineReactive(obj,key,value) {
  Object.defineProperty(obj,key,{
    get(){
      return value;
    },
    set(val){
      update();
      value = val
    }
  })
}
observer(obj);
obj.name.name = 'jw';
// 增加对象上原本不存在的属性 是无法响应式变化
console.log(obj)