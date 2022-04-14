# 一、Promise.resolve()

规则

如果传入的参数为非Promise类型的对象，则返回得结果为成功的Promise对象

如果传入的参数为Promise对象，则参数的结果决定了resolve的结果

# 二、Promise.reject()

传的值返回的结果永远是失败的

# 三、Promise.all()

参数是一个Promise数组，如果去全是成功的，就返回一个成功结果的数组，如果有不成功的Promise对象，就返回这个Promise对象的失败结果

# 四、Promise.race()

参数是一个Promise对象数组，谁先完成谁就是最终的结果状态

