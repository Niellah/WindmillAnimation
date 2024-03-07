// 创建一个大风车元素
const windmill = document.createElement('div');
windmill.className = 'windmill';
document.body.appendChild(windmill);

// 设置风车的样式
windmill.style.width = '100px';
windmill.style.height = '100px';
windmill.style.position = 'absolute';
windmill.style.top = '50%';
windmill.style.left = '50%';
windmill.style.transformOrigin = 'center';
windmill.style.transition = 'transform 0.5s ease-in-out';

// 创建风车的叶片
for (let i = 0; i < 4; i++) {
    const blade = document.createElement('div');
    blade.className = 'blade';
    blade.style.position = 'absolute';
    blade.style.width = '100%';
    blade.style.height = '100%';
    blade.style.background = 'blue';
    blade.style.transformOrigin = '50% 100%';
    blade.style.transform = `rotate(${i * 90}deg)`;
    windmill.appendChild(blade);
}

// 旋转风车动画
let rotation = 0;
setInterval(() => {
    rotation += 360;
    windmill.style.transform = `rotate(${rotation}deg)`;
}, 2000);
