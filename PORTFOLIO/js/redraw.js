window.addEventListener('load',()=>{
    popupEvent();
    topBtnSlide();
    ContentsEffect();
})

class Popup{ //팝업 클래스코딩

    constructor(selectedBtn){
        this.popupName=document.querySelector(selectedBtn)
        this.popupCloseBtn=this.popupName.children[1].children[0];
        this.popupBtn=this.popupName.children[0];
        this.popup=this.popupName.children[1];

        this.initEvent();
    }

    initEvent(){

        this.popupBtn.addEventListener('click',()=>{
            this.popupEvent();
        })
        this.popupCloseBtn.addEventListener('click',()=>{
            this.popupClose();
        })
        
    }

    popupEvent(){
        gsap.set(this.popup, {display:'block'})
        gsap.to(this.popup, {opacity:1, duration:0.3, ease:'power1.out'})
    }
    popupClose(){
            gsap.to(this.popup, {opacity:0, duration:0.3, ease:'power1.out', display:'none'})
    }

}

function popupEvent(){
    let floatWindow1=new Popup('#float_window1')
    let floatWindow2=new Popup('#float_window2')
    let floatWindow3=new Popup('#float_window3')
    let floatWindow4=new Popup('#float_window4')
    let floatWindow5=new Popup('#float_window5')
    let floatWindow6=new Popup('#float_window6')
}

function topBtnSlide(){
    const topBtn=document.querySelector('#top_button')

    let topBtnTop=850;

    window.addEventListener('scroll', windowScroll);
    topBtn.addEventListener('click', quickPageTop);

    function quickPageTop(){
        gsap.to('body,html', {scrollTop:0, duration:0.5, ease:'power1.out'})
    }

    function windowScroll(){
        let scrollHeight=window.pageYOffset;

        gsap.to(topBtn, {top:scrollHeight+topBtnTop, duration:.8, ease:'power1.out'})
    }

}

function ContentsEffect(){
    const projectMainImg=document.querySelector('#project_web_img');

    initEvent();

    function initEvent(){
        gsap.to(projectMainImg, {opacity:1, duration:0.8, ease:'power1.out'})
        
    }
}

// function codePopupMove(){
//     // alert("점심머먹어요")
//     const popup=document.querySelector('.float_window');
//     const dragbar=document.querySelector('.float_window dt')

//     let downX;
//     let downY;
    
//     dragbar.addEventListener('mousedown', dragDown);

//     function dragDown(e){
//         downX=e.offsetX;
//         downY=e.offsetY;
//         document.addEventListener('mousemove',dragMove)
//     }

//     function dragMove(e){
//         gsap.set(popup, {left:e.pageX-downX, top:e.pageY-downY})
//     }
// }