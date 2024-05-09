// 版本一：原始版本，实现最基础的功能
// 问题：滚动条高度固定，对于短页面，鼠标长距离滑动对应页面缓慢滚动

// // 创建一个加宽的滚动条
// const scrollbar = document.createElement('div');
// scrollbar.style.position = 'fixed';
// scrollbar.style.top = '25%'; // 修改滚动条位置
// scrollbar.style.right = '0';
// scrollbar.style.width = '100px'; // 修改滚动条宽度
// scrollbar.style.height = '50%'; // 修改滚动条高度
// scrollbar.style.backgroundColor = '#aaa'; // 修改滚动条颜色
// scrollbar.style.opacity = '0.5'; // 修改滚动条透明度
// scrollbar.style.zIndex = '2147483647'; // 设置一个非常大的z-index值
// scrollbar.style.cursor = 'pointer'; // 设置鼠标指针的样式为小手指的形状
// document.body.appendChild(scrollbar);

// // 创建一个滑块，用来显示鼠标拖动的位置
// const slider = document.createElement('div');
// slider.style.position = 'absolute'; // 绝对定位
// slider.style.top = '0';
// slider.style.left = '0';
// slider.style.width = '100%'; // 滑块宽度与滚动条一致
// slider.style.height = '10px'; // 滑块高度
// slider.style.backgroundColor = 'red'; // 滑块颜色
// slider.style.zIndex = '2147483647'; // 设置一个非常大的z-index值
// scrollbar.appendChild(slider);

// // 拖动滚动条时触发的函数
// function dragScrollbar(event) {
//     event.preventDefault();
//     const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const mouseY = Math.min(Math.max(event.clientY, window.innerHeight * 0.25), window.innerHeight * 0.75); // 限制鼠标位置在滚动条范围内
//     const newScroll = (mouseY - window.innerHeight * 0.25) / (window.innerHeight * 0.5) * scrollableHeight; // 计算滚动位置
//     window.scrollTo({
//         top: newScroll,
//         behavior: 'auto'
//     });
//     updateSliderPosition(mouseY); // 更新滑块位置
// }

// // 更新滑块位置的函数
// function updateSliderPosition(mouseY) {
//     slider.style.top = mouseY - window.innerHeight * 0.25 - 5 + 'px'; // 使滑块位于鼠标位置的中心，注意减去25%的偏移量
// }

// // 监听鼠标按下事件，开始拖动滚动条
// scrollbar.addEventListener('mousedown', function(event) {
//     // 添加mousemove和mouseup事件监听
//     document.addEventListener('mousemove', dragScrollbar);
//     document.addEventListener('mouseup', function() {
//         // 当鼠标松开时移除事件监听
//         document.removeEventListener('mousemove', dragScrollbar);
//     });
// });




// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 版本二：滚动条可滑动区域可增长，兼容瀑布流（短页面滚动相对短，对应减少鼠标滑动范围）
// 问题：滚动条可滑动区域未完全映射到浏览器默认滚动条

// const scrollbar = document.createElement('div');
// scrollbar.style.position = 'fixed';
// scrollbar.style.top = '25%';
// scrollbar.style.right = '0';
// scrollbar.style.width = '100px';
// scrollbar.style.backgroundColor = '#aaa';
// scrollbar.style.opacity = '0.5';
// scrollbar.style.zIndex = '2147483647';
// scrollbar.style.cursor = 'pointer';
// document.body.appendChild(scrollbar);

// const slider = document.createElement('div');
// slider.style.position = 'absolute';
// slider.style.top = '0';
// slider.style.left = '0';
// slider.style.width = '100%';
// slider.style.height = '10px';
// slider.style.backgroundColor = 'red';
// slider.style.zIndex = '2147483647';
// scrollbar.appendChild(slider);

// const windowHeight = window.innerHeight;

// let scrollableHeight, scrollbarHeight;
// updateScrollbarHeight();

// function updateScrollbarHeight() {
//   scrollableHeight = document.documentElement.scrollHeight;

//   if (scrollableHeight <= 2 * windowHeight) {
//     scrollbarHeight = windowHeight * 0.25;
//   } else if (scrollableHeight <= 4 * windowHeight) {
//     const ratio = (scrollableHeight - 2 * windowHeight) / (2 * windowHeight);
//     scrollbarHeight = windowHeight * (0.25 + ratio * 0.25);
//   } else {
//     scrollbarHeight = windowHeight * 0.5; // 修改为0.5
//   }

//   scrollbar.style.height = scrollbarHeight + 'px';
// }

// function dragScrollbar(event) {
//   event.preventDefault();
//   const mouseY = Math.min(Math.max(event.clientY, windowHeight * 0.25), windowHeight * 0.25 + scrollbarHeight);
//   const newScroll = (mouseY - windowHeight * 0.25) / scrollbarHeight * scrollableHeight;
//   window.scrollTo({
//     top: newScroll,
//     behavior: 'auto'
//   });
//   updateSliderPosition(mouseY);
// }

// function updateSliderPosition(mouseY) {
//   slider.style.top = mouseY - windowHeight * 0.25 - 5 + 'px';
// }

// scrollbar.addEventListener('mousedown', function (event) {
//   document.addEventListener('mousemove', dragScrollbar);
//   document.addEventListener('mouseup', function () {
//     document.removeEventListener('mousemove', dragScrollbar);
//   });
// });

// window.addEventListener('scroll', updateScrollbarHeight);




// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 版本三：使用版本一修改，限制加大的滑动滑动范围在滚动内；刷新网页后，滑块位置与浏览器默认滚动条位置同步
// 问题：滚动条高度固定，与版本一问题一致

// const scrollbar = document.createElement('div');
// scrollbar.style.position = 'fixed';
// scrollbar.style.top = '25%'; // 修改滚动条位置
// scrollbar.style.right = '0';
// scrollbar.style.width = '100px'; // 修改滚动条宽度
// scrollbar.style.height = '50%'; // 修改滚动条高度
// scrollbar.style.backgroundColor = '#aaa'; // 修改滚动条颜色
// scrollbar.style.opacity = '0.5'; // 修改滚动条透明度
// scrollbar.style.zIndex = '2147483647'; // 设置一个非常大的z-index值
// scrollbar.style.cursor = 'pointer'; // 设置鼠标指针的样式为小手指的形状
// document.body.appendChild(scrollbar);

// // 创建一个滑块，用来显示鼠标拖动的位置
// const slider = document.createElement('div');
// slider.style.position = 'absolute'; // 绝对定位
// slider.style.left = '0';
// slider.style.width = '100%'; // 滑块宽度与滚动条一致
// slider.style.height = '100px'; // 滑块高度
// slider.style.backgroundColor = 'red'; // 滑块颜色
// slider.style.zIndex = '2147483647'; // 设置一个非常大的z-index值
// scrollbar.appendChild(slider);


// // 初始化时同步滑块位置
// const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
// const initialScrollTop = window.scrollY;
// const initialSliderTop = (initialScrollTop / scrollableHeight) * (window.innerHeight * 0.5 - slider.offsetHeight);
// slider.style.top = initialSliderTop + 'px';

// function dragScrollbar(event) {
//   event.preventDefault();
//   const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
//   const mouseY = Math.min(Math.max(event.clientY, window.innerHeight * 0.25), window.innerHeight * 0.75 - slider.offsetHeight);
//   const newScroll = (mouseY - window.innerHeight * 0.25) / (window.innerHeight * 0.5 - slider.offsetHeight) * scrollableHeight;
//   window.scrollTo({ top: newScroll, behavior: 'auto' });
//   updateSliderPosition(mouseY);
// }

// function updateSliderPosition(mouseY) {
//   const sliderTop = Math.max(0, Math.min(mouseY - window.innerHeight * 0.25, window.innerHeight * 0.5 - slider.offsetHeight));
//   slider.style.top = sliderTop + 'px';
// }

// scrollbar.addEventListener('mousedown', function (event) {
//   document.addEventListener('mousemove', dragScrollbar);
//   document.addEventListener('mouseup', function () {
//     document.removeEventListener('mousemove', dragScrollbar);
//   });
// });




// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 版本四：使用版本三修改，实现了滑块高度动态变化（网页高，滑块短；网页矮，滑块长）
// 问题：滑块高度无法自动变化，比如瀑布流网页，初始滑块很长，网页不断变高后，滑块仍然很长，造成滑动区域很小，滑动速度很快；当滑块大的情况下，由于鼠标点击后自动定位在滑动顶部，会造成打开网页后，首次使用时，不容易点击到滚动条项部，点击后会把网页突然滚动到下方某个区域，而不是从顶部过渡滚动到某区域。（无法像浏览器默认滚动条一样，点击时可以记得点击的位置，滑动时以当前位置向下滚动，而不是点击滑块时，就马上滚动页面了）

// const scrollbar = document.createElement('div');
// scrollbar.style.position = 'fixed';
// scrollbar.style.top = '25%';
// scrollbar.style.right = '0';
// scrollbar.style.width = '100px';
// scrollbar.style.height = '50%';
// scrollbar.style.backgroundColor = '#aaa';
// scrollbar.style.opacity = '0.5';
// scrollbar.style.zIndex = '2147483647';
// scrollbar.style.cursor = 'pointer';
// document.body.appendChild(scrollbar);

// const slider = document.createElement('div');
// slider.style.position = 'absolute';
// slider.style.left = '0';
// slider.style.width = '100%';
// slider.style.backgroundColor = 'red';
// slider.style.zIndex = '2147483647';
// scrollbar.appendChild(slider);

// const updateSliderHeight = () => {
//   const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
//   const maxSliderHeight = window.innerHeight * 0.5;
//   const sliderHeight = Math.max(20, maxSliderHeight - (scrollableHeight / window.innerHeight * maxSliderHeight));
//   slider.style.height = `${sliderHeight - 50}px`;
// };

// updateSliderHeight();

// const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
// const initialScrollTop = window.scrollY;
// const initialSliderTop = (initialScrollTop / scrollableHeight) * (window.innerHeight * 0.5 - slider.offsetHeight);
// slider.style.top = initialSliderTop + 'px';

// function dragScrollbar(event) {
//   event.preventDefault();
//   const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
//   const mouseY = Math.min(Math.max(event.clientY, window.innerHeight * 0.25), window.innerHeight * 0.75 - slider.offsetHeight);
//   const newScroll = (mouseY - window.innerHeight * 0.25) / (window.innerHeight * 0.5 - slider.offsetHeight) * scrollableHeight;
//   window.scrollTo({ top: newScroll, behavior: 'auto' });
//   updateSliderPosition(mouseY);
// }

// function updateSliderPosition(mouseY) {
//   const sliderTop = Math.max(0, Math.min(mouseY - window.innerHeight * 0.25, window.innerHeight * 0.5 - slider.offsetHeight));
//   slider.style.top = sliderTop + 'px';
// }

// scrollbar.addEventListener('mousedown', function (event) {
//   document.addEventListener('mousemove', dragScrollbar);
//   document.addEventListener('mouseup', function () {
//     document.removeEventListener('mousemove', dragScrollbar);
//   });
// });

// window.addEventListener('resize', updateSliderHeight);




// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 版本五：判断页面高度，动态改变滑块高度
// 问题：不兼容瀑布流网页

// const scrollbar = document.createElement('div');
// scrollbar.style.position = 'fixed';
// scrollbar.style.top = '25%';
// scrollbar.style.right = '0';
// scrollbar.style.width = '100px';
// scrollbar.style.height = '50%';
// scrollbar.style.backgroundColor = '#aaa';
// scrollbar.style.opacity = '0.5';
// scrollbar.style.zIndex = '2147483647';
// scrollbar.style.cursor = 'pointer';
// document.body.appendChild(scrollbar);

// const slider = document.createElement('div');
// slider.style.position = 'absolute';
// slider.style.left = '0';
// slider.style.width = '100%';
// slider.style.backgroundColor = 'red';
// slider.style.zIndex = '2147483647';
// scrollbar.appendChild(slider);

// const updateSliderHeight = () => {
//   const scrollableHeight = document.documentElement.scrollHeight;
//   const windowHeight = window.innerHeight;

//   let sliderHeight;
//   if (scrollableHeight <= 2 * windowHeight) {
//     sliderHeight = (windowHeight * 0.5) * 0.5; // 50% of scrollbar height
//   } else if (scrollableHeight <= 3 * windowHeight) {
//     sliderHeight = (windowHeight * 0.5) * 0.25; // 25% of scrollbar height
//   } else {
//     sliderHeight = (windowHeight * 0.5) * 0.1; // 10% of scrollbar height
//   }

//   slider.style.height = `${sliderHeight}px`;
// };

// updateSliderHeight();

// const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
// const initialScrollTop = window.scrollY;
// const initialSliderTop = (initialScrollTop / scrollableHeight) * (window.innerHeight * 0.5 - slider.offsetHeight);
// slider.style.top = initialSliderTop + 'px';

// function dragScrollbar(event) {
//   event.preventDefault();
//   const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
//   const mouseY = Math.min(Math.max(event.clientY, window.innerHeight * 0.25), window.innerHeight * 0.75 - slider.offsetHeight);
//   const newScroll = (mouseY - window.innerHeight * 0.25) / (window.innerHeight * 0.5 - slider.offsetHeight) * scrollableHeight;
//   window.scrollTo({ top: newScroll, behavior: 'auto' });
//   updateSliderPosition(mouseY);
// }

// function updateSliderPosition(mouseY) {
//   const sliderTop = Math.max(0, Math.min(mouseY - window.innerHeight * 0.25, window.innerHeight * 0.5 - slider.offsetHeight));
//   slider.style.top = sliderTop + 'px';
// }

// scrollbar.addEventListener('mousedown', function (event) {
//   document.addEventListener('mousemove', dragScrollbar);
//   document.addEventListener('mouseup', function () {
//     document.removeEventListener('mousemove', dragScrollbar);
//   });
// });

// window.addEventListener('resize', updateSliderHeight);




// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 版本六：较版本五，兼容瀑布流网页

const scrollbar = document.createElement('div');
scrollbar.style.position = 'fixed';
scrollbar.style.top = '25%';
scrollbar.style.right = '0';
scrollbar.style.width = '100px';
scrollbar.style.height = '50%';
scrollbar.style.backgroundColor = '#aaa';
scrollbar.style.opacity = '0.5';
scrollbar.style.zIndex = '2147483647';
scrollbar.style.cursor = 'pointer';
document.body.appendChild(scrollbar);

const slider = document.createElement('div');
slider.style.position = 'absolute';
slider.style.left = '0';
slider.style.width = '100%';
slider.style.backgroundColor = 'red';
slider.style.zIndex = '2147483647';
scrollbar.appendChild(slider);

let lastScrollHeight = document.documentElement.scrollHeight;
let shouldCheckHeight = true;

const updateSliderHeight = () => {
  const scrollableHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollbarHeight = windowHeight * 0.5;

  let sliderHeight;
  if (scrollableHeight <= 2 * windowHeight) {
    sliderHeight = scrollbarHeight * 0.5; // 50% of scrollbar height
  } else if (scrollableHeight <= 3 * windowHeight) {
    sliderHeight = scrollbarHeight * 0.25; // 25% of scrollbar height
  } else {
    sliderHeight = scrollbarHeight * 0.1; // 10% of scrollbar height
    shouldCheckHeight = false; // Stop checking when slider reaches minimum height
  }

  slider.style.height = `${sliderHeight}px`;
};

const handlePageHeightChange = () => {
  const currentScrollHeight = document.documentElement.scrollHeight;
  if (currentScrollHeight !== lastScrollHeight) {
    lastScrollHeight = currentScrollHeight;
    updateSliderHeight();
  }
};

updateSliderHeight();

const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
const initialScrollTop = window.scrollY;
const initialSliderTop = (initialScrollTop / scrollableHeight) * (window.innerHeight * 0.5 - slider.offsetHeight);
slider.style.top = initialSliderTop + 'px';

function dragScrollbar(event) {
  event.preventDefault();
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const mouseY = Math.min(Math.max(event.clientY, window.innerHeight * 0.25), window.innerHeight * 0.75 - slider.offsetHeight);
  const newScroll = (mouseY - window.innerHeight * 0.25) / (window.innerHeight * 0.5 - slider.offsetHeight) * scrollableHeight;
  window.scrollTo({ top: newScroll, behavior: 'auto' });
  updateSliderPosition(mouseY);
  handlePageHeightChange(); // Check page height change on scroll
}

function updateSliderPosition(mouseY) {
  const sliderTop = Math.max(0, Math.min(mouseY - window.innerHeight * 0.25, window.innerHeight * 0.5 - slider.offsetHeight));
  slider.style.top = sliderTop + 'px';
}

scrollbar.addEventListener('mousedown', function (event) {
  document.addEventListener('mousemove', dragScrollbar);
  document.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', dragScrollbar);
  });
});
