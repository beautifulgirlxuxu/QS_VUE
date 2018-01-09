function Observer(data){
    // n个{{title}}  -> push 到一个数组中
    this.data = data;
    this.walk(data);
}
Observer.prototype = {
    walk(data) {
        Object.keys(data).forEach(key => {
            this.defineReactive(data,key,data[key]);
        })
    },
    defineReactive(data,key,val) {
        var dep = new Dep();//发布者
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get: function getter() {
                if(Dep.target){
                    dep.addSub(Dep.target);//添加监听者的一刻
                }
                return val;
            },
            set: function setter(newVal){
                if(newVal === val){
                    return;
                }
                val = newVal;
                dep.notify();
            }
        });
    }
}

function observer(value, vm){
    if(!value || typeof value !== 'object'){
        return;
    }
    return new Observer(value);
}
function Dep(){
    this.sub = [];
}
Dep.prototype = {
    addSub(sub){
        this.sub.push(sub);
    },
    notify(){
        this.sub.forEach(sub=>{
            sub.update();
        });
    },
}
Dep.target = null;
