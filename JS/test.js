//动画延迟用JS实现
var ban = document.getElementById("ban");
//问题2：动画部分完成的不是很完善
var change = setInterval(function () {
        ban.style.animationPlayState = 'paused';
},1000);
var change_2 = setInterval(function () {
        ban.style.animationPlayState = 'running';
},5000);

//动画展示内容
var date = document.getElementsByClassName("up");
var down = document.getElementsByClassName("down");
//console.log(date[1]);
//console.log(down[1]);
for(let i=0;i<4;i++){//使用let来定义是因为可以获取到数组下标，如果用var则会=4
        date[i].onclick = function () {
                var list = this.parentElement;
                //用同图片切换的方法来做：
                var number = 0;
                while(number < 4){
                        if(i === number){
                                list.style.height = "100px";
                                list.style.backgroundColor = "#db2f2f";
                                list.style.marginTop = "-70px";
                                this.style.display = "none";
                                this.nextElementSibling.style.display = "block";
                                list.lastElementChild.style.display = "block";
                                number++;
                        }
                        else{
                                number++;
                        }
                }
                //获取下标？？
                this.index = i;
                //console.log(this.index);
                //添加孩子节点(失败）
                //问题3：如何使用添加节点的办法增加详细内容
                /*if(this.index===0){
                        var activity = document.createTextNode("风尚堂样品大赏");
                        var time = document.createTextNode("2013.03.04");
                        list.appendChild(activity);
                        list.appendChild(time);
                }*/

        }
        down[i].onclick = function () {
                var list = this.parentElement;
                list.style.height = "34px";
                list.style.backgroundColor = "#323332";
                this.style.display = "none";
                list.style.marginTop = "0px";
                this.previousElementSibling.style.display = "block";
                list.lastElementChild.style.display = "none";
                //删除孩子节点(失败）
                /*
                list.removeChild(this.nextElementSibling);
                list.removeChild(list.lastElementChild);*/
        }
}
//图片按钮变色
var change_img = document.getElementsByClassName("change_img");
var pic_num = document.getElementById("pic_num");
console.log(change_img[1]);
for(let j=0;j<6;j++){
        //实现最终只有一个按钮按下时有颜色
        change_img.index = j;
        change_img[j].onclick = function () {
                /*问题5：这个方法不会用
                for(let left=j-1;left>=0;left--){
                        change_img[left].style.backgroundColor = "black";
                        console.log("click:"+j+" left");
                }
                for (let right=j+1;j<=4;j++){
                        change_img[right].style.backgroundColor = "black";
                        console.log("click:"+j+" right");
                }
                this.style.backgroundColor = "#b88839";*/
                //换一种方法写
                var num=0;
                while(num <= 5){
                    if(num !== j){
                         change_img[num].style.backgroundColor = "black";
                         num++;
                    }
                    else{
                         change_img[num].style.backgroundColor = "#b88839";
                         num++;
                    }
                }
                //实现切换图片
                pic_num.src = "images/photo_"+ (j+1) +".jpg";
                //console.log(pic_num);
        }
}
//想明白CSS无效的原因:在获取元素时一定要按照层级获取
//日期显示
function PrefixZero(num, n) {
        return (Array(n).join(0) + num).slice(-n);
}//补全数字0的函数
var show_today = document.getElementById("show_today");
//新建日期对象
var today = new Date();
var year = today.getFullYear().toString();
var month = PrefixZero((today.getMonth()+1),2).toString();
var day = today.getDate().toString();
//插入其中
var text = document.createTextNode(year+"."+month+"."+day);
show_today.insertBefore(text,show_today.firstElementChild);
//实现6张照片切换照片

