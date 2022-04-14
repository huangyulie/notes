# 一、Promise的状态改变

(1) pending 变为 resolved

(2)pending变为 rejected

说明:只有这2种，且一个Promise对象只能改变一次

无论变为成功还是失败，都会有一个结果数据

成功的结果数据一般称为value，失败的结果数据一般称为reason

# 二、Promise中的回调函数

这是立即执行的，同步的

