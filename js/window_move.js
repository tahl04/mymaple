function handleMouseDown(event){
    event.preventDefault();
    
    const windMs = document.querySelectorAll(".move-window");
    const el = event.target;
    const classList = el.classList;
    
    if( !classList.contains("hold") ){
      // window상단을 클릭했을 때, 마우스 커서의 XY좌표
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    // 선택한 윈도우창의 XY좌표 (왼쪽 상단 모서리 기준)
    const windMPos = el.getBoundingClientRect();
    const windMX = windMPos.x;
    const windMY = windMPos.y;
    
    // 선택한 윈도우창 안에 있는 마우스 커서의 XY좌표
    const gapX = mouseX - windMX;
    const gapY = mouseY - windMY;
    
    el.closest('.window-box').setAttribute("gap-x", gapX);
    el.closest('.window-box').setAttribute("gap-y", gapY);
    
    // 선택한 윈도우창을 맨 앞으로 가지고 오기
    const maxPriority = (
    windMs.length > 0 
        ? Math.max.apply(null, Array.from(windMs).map(windM=>windM.getAttribute("priority"))) 
        : 9999
    ) + 1;
    el.setAttribute("priority", maxPriority);
    el.closest('.window-box').style["z-index"] = maxPriority;
    
    // 선택한 윈도우창에 'hold' class를 추가
    classList.add("hold");
}
}

// 윈도우창 움직임 이벤트 핸들러
function handleMouseMove(event){
    event.preventDefault();
    
    const els = document.querySelector(".move-window.hold");
    if( els ){
        
    const el = document.querySelector(".move-window.hold").closest('.window-box');
      // 움직이는 마우스 커서의 XY좌표
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    // 선택한 윈도우창 안에 있는 마우스 커서의 XY좌표
    const gapX = el.getAttribute("gap-x");
    const gapY = el.getAttribute("gap-y");
    
    // 마우스 커서의 위치에 따른 윈도우창의 XY좌표
    const windMX = mouseX - gapX;
    const windMY = mouseY - gapY;
    
    // 선택한 상단바 부모영역인 윈도우창의 위치를 변경
    el.style.left = windMX+"px";
    el.style.top = windMY+"px";
}
}

  // 윈도우창 놓기 이벤트 핸들러
function handleMouseUp(event){
event.preventDefault();
    
const el = document.querySelector(".move-window.hold");
if( el ){
    // 움직이면 적용된 속성 및 class를 삭제
    el.removeAttribute("gap-x")
    el.removeAttribute("gap-y")
    
    el.classList.remove("hold");
}
}