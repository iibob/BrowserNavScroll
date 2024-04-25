// 创建一个 canvas 元素并设置属性
var canvas = document.createElement('canvas');
canvas.id = 'map';

// 将 canvas 添加到页面中
document.body.appendChild(canvas);

// 根据提供的样式初始化 mini map
pagemap(canvas, {
    viewport: null,
    styles: {
        'header,footer,section,article': 'rgba(0,0,0,0.08)',
        'h1,a': 'rgba(0,0,0,0.10)',
        'h2,h3,h4': 'rgba(0,0,0,0.08)'
    },
    back: 'rgba(0,0,0,0.02)',
    view: 'rgba(0,0,0,0.05)',
    drag: 'rgba(0,0,0,0.10)',
    interval: null
});
