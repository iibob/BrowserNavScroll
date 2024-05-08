// 创建一个 canvas 元素并设置属性
var canvas = document.createElement('canvas');
canvas.id = 'map';
canvas.style.position = 'fixed';
canvas.style.top = '20%';
canvas.style.right = '10px';
canvas.style.width = '200px';
canvas.style.height = '78%';
canvas.style.zIndex = '2147483647';

// 将 canvas 添加到页面中
document.body.appendChild(canvas);

// 根据提供的样式初始化 mini map
pagemap(canvas);


