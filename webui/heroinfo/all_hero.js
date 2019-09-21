Vue.directive('drag',//自定义指令                   

    {bind:function (el, binding) {
        let oDiv = el;  //当前元素
        let self = this; //上下文
        oDiv.onmousedown = function (e) {
         //鼠标按下，计算当前元素距离可视区的距离
          let disX = e.clientX - oDiv.offsetLeft;
          let disY = e.clientY - oDiv.offsetTop;

          document.onmousemove = function (e) {
           //通过事件委托，计算移动的距离 
            let l = e.clientX - disX;
            let t = e.clientY - disY;
           //移动当前元素 
            oDiv.style.left = l + 'px';
            oDiv.style.top = t + 'px';
             //将此时的位置传出去
            binding.value({x:e.pageX,y:e.pageY})
          };
          document.onmouseup = function (e) {
          
            document.onmousemove = null;
            document.onmouseup = null;
           };
        };
      }
    }
  );
  window.onload = function () {
    let vm = new Vue({
      el: '#box',
      data: {
        val: '123',
        style: {
          width: '100px',
          height: '100px',
          background: 'aqua',
          position: 'absolute',
          right: '30px',
          top: 0
        }
      },
      methods:{
      //接受传来的位置数据，并将数据绑定给data下的val
        greet(val){
          vm.val = val;
        }
      } ,
   });
  }
