// 自动播放
// var interval=3000;
// var timer=setInterval(function(){
//     moveTo
// },3000)

// var s = setInterval(function(){
    //     i++
    //     if(i>4){
    //         i=0
    //         ul.className="box"
    //     }else if(i>=0){
    //         ul.className="box transition"
    //     }
    //     ul.style.marginLeft = liwidth*-i+"px"
    // },3000)
    // prev.onclick = function(){
    //     i--
    //         if(i>4 || i<0){
    //             ul.className="box"
    //         }else{
    //             ul.className="box transition"
    //         }
    //     if(i<0){i=4}
    //     clearInterval(s)
    //     s = setInterval(function(){
    //         i++
    //         if(i>4){
    //             i=0
    //             ul.className="box"
    //         }else if(i>=0){
    //             ul.className="box transition"
    //         }
    //         ul.style.marginLeft = liwidth*-i+"px"
    //     },3000)
    //     ul.style.marginLeft = liwidth*-i+"px"
    // }
    // next.onclick = function(){
    //     i++
    //         if(i>4 || i<0){
    //             ul.className="box"
    //         }else{
    //             ul.className="box transition"
    //         }
    //     if(i>4){i=0}
    //     clearInterval(s)
    //     s = setInterval(function(){
    //         i++
    //         if(i>4){
    //         i=0
    //         ul.className="box"
    //     }else if(i>=0){
    //         ul.className="box transition"
    //     }
    //         ul.style.marginLeft = liwidth*-i+"px"
    //     },3000)
    //     ul.style.marginLeft = liwidth*-i+"px"
    // }
     var body = document.body
    window.onresize=function(){
        var s
        clearTimeout(s)
        s=setTimeout(function(){
            if(window.offsetWidth>="991px" ){
            window.location.reload()
            }else{
            window.location.reload()
            }
        },500)
    }
var i=0;
var duration=500;
var licount=4;
var ul=document.getElementsByClassName("box")[0]
var list = document.getElementById("list")
var lis=list.children
console.log(lis)
var prev=document.getElementsByClassName("prev")[0]
var next=document.getElementsByClassName("next")[0]
var liwidth=ul.children[0].offsetWidth;

var s=setInterval(function(){
    i++;
    if(i>4){
        i=0;
        ul.className="box"
        ul.style.marginLeft=0;
        setTimeout(
            ()=>{
                ul.className="box transition"
                i+=1
                ul.style.marginLeft=-1*liwidth*i+"px";
            },10)
    }else{
        ul.className="box transition"
        ul.className="box transition"
        ul.style.marginLeft=-1*liwidth*i+"px";
        console.log(i)
    }
    if(i==0){
        console.log("i=0")
        lis[1].className="li active2"
        lis[0].className="li";
    }else if(i==4){
        console.log("i=4")
        lis[0].className="li active1"
        lis[lis.length-1].className="li";
    }else if(i<4 && i>0){
        console.log("i<4,i>0")
        lis[i].className=`li active${i+1}`;
        lis[i-1].className="li"
    }
    ul.style.marginLeft=-1*liwidth*i+"px";
},3000)
next.onclick=function(){
    // 清除定时器
    clearInterval(s);
    i++;
    if(i>4){
        i=0;
        ul.className="box"
        ul.style.marginLeft=0;
        setTimeout(
            ()=>{
                ul.className="box transition"
                i+=1
                ul.style.marginLeft=-1*liwidth*i+"px";
            },0
        )
    }
    else{
        ul.className="box transition"
        ul.className="box transition"
        ul.style.marginLeft=-1*liwidth*i+"px";
        console.log(i)
    }
    if(i==0){
        console.log("i=0")
        lis[1].className="li active2"
        lis[0].className="li";
    }else if(i==4){
        console.log("i=4")
        lis[0].className="li active1"
        lis[lis.length-1].className="li";
    }else if(i<4 && i>0){
        console.log("i<4,i>0")
        lis[i].className=`li active${i+1}`;
        lis[i-1].className="li"
    }
    
    // 运行定时器
    s=setInterval(function(){
        i++;
        ul.className="box transition"
        if(i>3){
            i=0;
            ul.className="box";
        }
        if(i==0){
            console.log("i=0")
            lis[1].className="li active2"
            lis[0].className="li";
        }else if(i==4){
            console.log("i=4")
            lis[0].className="li active1"
            lis[lis.length-1].className="li";
        }else if(i<4 && i>0){
            console.log("i<4,i>0")
            lis[i].className=`li active${i+1}`;
            lis[i-1].className="li"
        }
        ul.style.marginLeft=-1*liwidth*i+"px";
    },3000)
}
prev.onclick=function(){
    // 清除定时器
    i--;
    clearInterval(s);
    if(i<0){
        i=4;
        ul.className="box"
        ul.style.marginLeft=-1*liwidth*i+"px";
        setTimeout(
            ()=>{
                ul.className="box transition"
                i-=1
                ul.style.marginLeft=-1*liwidth*i+"px";
            },10
        )
    }
    else{
        ul.className="box transition"
        ul.className="box transition"
        ul.style.marginLeft=-1*liwidth*i+"px";
        console.log(i)
    }
    if(i==0){
        console.log("i=0")
        lis[1].className="li"
        lis[0].className="li active1";
    }else if(i==4){
        console.log("i=4")
        lis[0].className="li"
        lis[lis.length-1].className="li active4";
    }else if(i<4 && i>0){
        console.log("i<4,i>0")
        lis[i].className=`li active${i+1}`;
        lis[i+1].className="li"
    }
    // 运行定时器
    s=setInterval(function(){
        i++;
        ul.className="box transition"
        if(i>3){
            i=0;
            ul.className="box";
        }
        if(i==0){
            console.log("i=0")
            lis[1].className="li active2"
            lis[0].className="li";
        }else if(i==4){
            console.log("i=4")
            lis[0].className="li active1"
            lis[lis.length-1].className="li";
        }else if(i<4 && i>0){
            console.log("i<4,i>0")
            lis[i].className=`li active${i+1}`;
            lis[i-1].className="li"
        }
        ul.style.marginLeft=-1*liwidth*i+"px";
    },3000)
}

