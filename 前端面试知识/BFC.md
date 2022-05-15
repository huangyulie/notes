<<<<<<< HEAD
## BFC（块级格式化上下文）

BFC（block formatting context）

直译为“块级格式化上下文”

BFC是一个独立的渲染区域，只有Block-level box参与，他规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

#### 1.1、元素的显示模式

------

我们前面讲过 元素的显示模式display。

分为块级元素 行内元素和行内块元素等

display：

none/block/inline/compact/marker/inline

#### 1.2、哪些元素会具有BFC的条件

------

不是所有的元素模式都能产生BFC，wc3规范：

display 属性为block、list-item、table的元素，会产生BFC

即块级元素会具有BFC。

他们都是可视化布局，有着具体的布局特性，说实话就是盒子模型。

有宽度和高度，内外边距（margin，padding），边框（border），内容（content）。

#### 1.3、什么情况下可以让元素产生BFC

------

如：

-float属性不为none

-position为absolute或fixed

-display为inline-block、table-cell、table-caption、flex、inline-flex

-overflow不为visible。

#### 1.4、BFC元素所具有的特性

------

BFC布局规则特性：

1.在BFC中，盒子是从顶端开始垂直一个一个的排列

2.在盒子垂直方向的距离有margin决定。属于同一个BFC的两个相邻盒子的margin会发生重叠

3.在BFC中，每一个盒子的左外边缘（margin-left）会触发到容器的左边缘（border-left）（对于从右到左的格式来说，则触碰到右边缘）是挨着边框的。

4.BFC的区域不会与浮动盒子产生交集，而是紧贴着边缘

5.计算BFC的高度时，它会检测浮动盒子的高度。

它是一个独立的渲染区域。

#### 1.5、BFC的主要用途

------

1.清除元素内部浮动

只要把父元素变成一个BFC元素，他就可以检测浮动盒子的高度，常见overfolw：hidden；父盒子高度为0时，检测里面浮动盒子的高度，给父盒子的高度，触发了BFC的特性，这就是为什么清除浮动时用overfolw：hidden时能清除浮动。

2.解决外边距合并

当两个上下排列的盒子分别有margin-bottom，margin-top时，会以大的为准。

但是可以两个不同的BFC元素就可以清除合并边距了。

3.BFC的区域不会与浮动盒子产生交集

这就是为什么float会有文字环绕功能的特性，他是一个BFC元素，不会与浮动区域产生交集。

=======
## BFC（块级格式化上下文）

BFC（block formatting context）

直译为“块级格式化上下文”

BFC是一个独立的渲染区域，只有Block-level box参与，他规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

#### 1.1、元素的显示模式

------

我们前面讲过 元素的显示模式display。

分为块级元素 行内元素和行内块元素等

display：

none/block/inline/compact/marker/inline

#### 1.2、哪些元素会具有BFC的条件

------

不是所有的元素模式都能产生BFC，wc3规范：

display 属性为block、list-item、table的元素，会产生BFC

即块级元素会具有BFC。

他们都是可视化布局，有着具体的布局特性，说实话就是盒子模型。

有宽度和高度，内外边距（margin，padding），边框（border），内容（content）。

#### 1.3、什么情况下可以让元素产生BFC

------

如：

-float属性不为none

-position为absolute或fixed

-display为inline-block、table-cell、table-caption、flex、inline-flex

-overflow不为visible。

#### 1.4、BFC元素所具有的特性

------

BFC布局规则特性：

1.在BFC中，盒子是从顶端开始垂直一个一个的排列

2.在盒子垂直方向的距离有margin决定。属于同一个BFC的两个相邻盒子的margin会发生重叠

3.在BFC中，每一个盒子的左外边缘（margin-left）会触发到容器的左边缘（border-left）（对于从右到左的格式来说，则触碰到右边缘）是挨着边框的。

4.BFC的区域不会与浮动盒子产生交集，而是紧贴着边缘

5.计算BFC的高度时，它会检测浮动盒子的高度。

它是一个独立的渲染区域。

#### 1.5、BFC的主要用途

------

1.清除元素内部浮动

只要把父元素变成一个BFC元素，他就可以检测浮动盒子的高度，常见overfolw：hidden；父盒子高度为0时，检测里面浮动盒子的高度，给父盒子的高度，触发了BFC的特性，这就是为什么清除浮动时用overfolw：hidden时能清除浮动。

2.解决外边距合并

当两个上下排列的盒子分别有margin-bottom，margin-top时，会以大的为准。

但是可以两个不同的BFC元素就可以清除合并边距了。

3.BFC的区域不会与浮动盒子产生交集

这就是为什么float会有文字环绕功能的特性，他是一个BFC元素，不会与浮动区域产生交集。

>>>>>>> 01becda40b25914ba927868f732434b665f300aa
