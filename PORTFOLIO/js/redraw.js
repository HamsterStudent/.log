window.addEventListener('load', ()=>{
    codePopup();
    // codePopupMove();
})

function codePopup(){
    // alert('test')
    const markupBtn=document.querySelectorAll('.code_source_img')
    const popup=document.querySelectorAll('.float_window')

    for(let item of markupBtn){
        item.addEventListener('click', popupEvent);
    }

    function popupEvent(){
        // alert('test')
        gsap.set(popup, {display:'block'})
        gsap.to(popup, {opacity:1, duration:0.3, ease:'power1.out'})
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