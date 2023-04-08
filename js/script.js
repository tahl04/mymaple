$(document).ready(function() {
    

    // 1. 아바타 셀렉 메뉴 윈도우창 위치 이동


    const windMs = document.querySelectorAll(".move-window");
    windMs.forEach(function(windM, idx){      
      // 1-1. 윈도우 창의 우선순위 설정
        let priority = windM.getAttribute("priority");
        if( !priority ){
            priority = idx+1;
            windM.setAttribute("priority", priority);
        }
        windM.style["z-index"] = priority;
        
        // 1-2. 선택 이벤트 바인딩
        windM.addEventListener('mousedown', handleMouseDown);
    });

    // 1-3. 마우스 이벤트 바인딩
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    //  --- 메인 제어는 window_move.js 에서... ---



    // 2. 탭 메뉴

    $('.abat .top-menu li').click(function() {
        let ww = $('.abat .top-menu li').index(this);
        $('.abat .content-box nav section').addClass('hide');
        $('.abat .content-box section').eq(ww).removeClass('hide');
    });


    // 3. 윈도우 창 변경 , alert 출력

    $('.grim .m-btn').on("click",function(){
        $('.grim').toggleClass("active");
        $('.grim nav').toggleClass("active");
        $('.grim .m-btn div').toggleClass("active");
    });
    $('.abat .m-btn').on("click",function(){
        $('.abat').toggleClass("active");
        $('.abat nav').toggleClass("active");
        $('.abat .m-btn div').toggleClass("active");
    });
    $('.grim .i-btn').on("click",function(){
        $('.ch_under_box').toggleClass("active");
        $('.grim').toggleClass("edongs");
        $('.downs').toggleClass("edongs");
    });
    $('.ch_under_box').on("click",function(){
        $('.ch_under_box').toggleClass("active");
        $('.grim').toggleClass("edongs");
        $('.downs').toggleClass("edongs");
    });
    $('.abat .i-btn').on("click",function(){
        $('.set_under_box').toggleClass("active");
        $('.abat').toggleClass("edongs");
    });
    $('.set_under_box').on("click",function(){
        $('.set_under_box').toggleClass("active");
        $('.abat').toggleClass("edongs");
    });
    $('.grim .x-btn div').on("click",function(){
        $('.ch_under_box').toggleClass("del");
        $('.grim').toggleClass("edongs");
        $('.downs').toggleClass("edongs");
    });
    $('.abat .x-btn div').on("click",function(){
        $('.set_under_box').toggleClass("del");
        $('.abat').toggleClass("edongs");
    });
    $('.icon-b').on("click",function(){
        $('.ch_under_box').removeClass("del");
        $('.ch_under_box').removeClass("active");
        $('.grim').removeClass("edongs");
        $('.downs').removeClass("edongs");
    });
    $('.icon-t').on("click",function(){
        $('.set_under_box').removeClass("del");
        $('.set_under_box').removeClass("active");
        $('.abat').removeClass("edongs");
    });
    $('.chhwa').on("click",function(){
        $('.ch_under_box').removeClass("del");
        $('.grim').removeClass("edongs");
        $('.downs').removeClass("edongs");
    });
    $('.abhwa').on("click",function(){
        $('.set_under_box').removeClass("del");
        $('.abat').removeClass("edongs");
    });

    $('.start').on("click",function(){
        $('.set_under_box').removeClass("del");
        $('.abat').removeClass("edongs");
        $('.ch_under_box').removeClass("del");
        $('.grim').removeClass("edongs");
        $('.downs').removeClass("edongs");
        $('.set_under_box').removeClass("active");
        $('.ch_under_box').removeClass("active");
        addCh();
        addBg();
        location.reload();
        
        // $(".downs").css({"top":400,"left":50});
        // $(".grim").css({"top":50,"left":300});
        // $(".abat").css({"top":150,"left":700});
    });


    // $('.start_pne').on("click",function(){
    //     $('.set_under_box').removeClass("del");
    //     $('.abat').removeClass("edongs");
    //     $('.ch_under_box').removeClass("del");
    //     $('.grim').removeClass("edongs");
    //     $('.downs').removeClass("edongs");
    //     $('.set_under_box').removeClass("active");
    //     $('.ch_under_box').removeClass("active");
    //     addCh();
    //     addBg();
        
    //     // $(".downs").css({"top":0,"left":0});
    //     // $(".grim").css({"top":0,"left":0});
    //     // $(".abat").css({"top":0,"left":0});
    // });
    

    // 4. 아바타 파츠 갯수에 맞게 div 넣기

    const $box = `
        <li>
            <div class="abat-icon">
                <img class="high" src="./img/icon/po.png">
            </div>
        </li>
    `;


    //4-1. skin = 갯수 s에 입력
    for(s=0;s<3;s++){
        $(".skin .select-wrap").append($box);
        $(".skin .abat-icon").eq(s).append("<img style='width:80px; top:15px' class='row' src='./img/abat/skin/skin"+(s+1)+".png'>");
        $(".skin .select-wrap li").eq(s).append("<h4>Skin "+(s+1)+"</h4>");
    }
    //4-2. eyes = 갯수 s에 입력
    for(s=0;s<6;s++){
        $(".eyes .select-wrap").append($box);
        $(".eyes .select-wrap .abat-icon").eq(s).append("<img style='width:150px; top:-8px;  left:70px;' class='row' src='./img/abat/eyes/eyes"+(s+1)+".png'>");
        $(".eyes .select-wrap li").eq(s).append("<h4>Eyes "+(s+1)+"</h4>");
    }
    //4-3. noon = 갯수 s에 입력
    for(s=0;s<3;s++){
        $(".eyebrow .select-wrap").append($box);
        $(".eyebrow .select-wrap .abat-icon").eq(s).append("<img style='width:180px; top:-8px;  left:70px;' class='row' src='./img/abat/noon/noon"+(s+1)+".png'>");
        $(".eyebrow .select-wrap li").eq(s).append("<h4>Eyebrow "+(s+1)+"</h4>");
    }
    //4-4. hair = 갯수 s에 입력
    for(s=0;s<6;s++){
        $(".hair .select-wrap").append($box);
        $(".hair .select-wrap .abat-icon").eq(s).append("<img style='width:105px; top:15px;' class='row' src='./img/abat/hair/hair"+(s+1)+".png'>");
        $(".hair .select-wrap li").eq(s).append("<h4>Hair "+(s+1)+"</h4>");
    }
    //4-5. dress = 갯수 s에 입력
    for(s=0;s<4;s++){
        $(".dress .select-wrap").append($box);
        $(".dress .select-wrap .abat-icon").eq(s).append("<img style='width:80px; top:14px' class='row' src='./img/abat/skin/skin1.png'><img style='width:80px; top:14px;' class='row' src='./img/abat/dress/dress"+(s+1)+".png'>");
        $(".dress .select-wrap li").eq(s).append("<h4>Dress"+(s+1)+"</h4>");
    }
    //acc = 갯수 s에 입력
    for(s=0;s<4;s++){
        $(".acc .select-wrap").append($box);
        $(".acc .select-wrap .abat-icon").eq(s).append("<img style='width:130px; top:0px;' class='row' src='./img/abat/acc/acc"+(s+1)+".png'>");
        $(".acc .select-wrap li").eq(s).append("<h4>Acc"+(s+1)+"</h4>");
    }


    //5. 파츠 누르면 그림판 이미지 변경

    
    $("nav .skin li").click(function(){
        let $index = $(this).index()+1;
        $(".CHbox .skin-w").attr("src", "./img/abat/skin/skin"+$index+".png");
    });
    $("nav .eyes li").click(function(){
        let $index = $(this).index()+1;
        $(".CHbox .eyes-w").attr("src", "./img/abat/eyes/eyes"+$index+".png");
    });
    $("nav .eyebrow li").click(function(){
        let $index = $(this).index()+1;
        $(".CHbox .noon-w").attr("src", "./img/abat/noon/noon"+$index+".png");
    });
    $("nav .hair li").click(function(){
        let $index = $(this).index()+1;
        $(".CHbox .hair-w").attr("src", "./img/abat/hair/hair"+$index+".png");
    });
    $("nav .dress li").click(function(){
        let $index = $(this).index()+1;
        $(".CHbox .dress-w").attr("src", "./img/abat/dress/dress"+$index+".png");
    });
    $("nav .acc li").click(function(){
        let $index = $(this).index()+1;
        $(".CHbox .acc-w").attr("src", "./img/abat/acc/acc"+$index+".png");
    });

    
    //6. 배경 색 변경

    const $color = ["#111", "#033569", "#156FBD", "#9345E5", "#BF5EDF", "#0189CF", "#9A6C89", "#51996F", "#08A397", "#3185D3", "#B3748C", "#E26AB5", "#9248C2", "#148F90", "#FAD7E0", "#9CA2C1", "#6BC052", "#BE30BD", "#7EB59A", "#DCD8F0", "#79727D", "#fff"];

    $(".p-icon").click(function(){
        let $num = $(this).index();
            $(".grimpan-wrap").css("background-color", $color[$num]);
            $(".grimpan-wrap").css("background-image", "");

    });


    //7. 그림판 리셋 버튼(초기화)
    function addCh(){
        $(".CHbox .skin-w").attr("src", "./img/abat/skin/skin1.png");
        $(".CHbox .eyes-w").attr("src", "./img/abat/eyes/eyes6.png");
        $(".CHbox .noon-w").attr("src", "./img/abat/noon/noon1.png");
        $(".CHbox .hair-w").attr("src", "./img/abat/hair/hair2.png");
        $(".CHbox .dress-w").attr("src", "./img/abat/dress/dress1.png");
        $(".CHbox .acc-w").attr("src", "./img/abat/acc/acc1.png");
    }
    function addBg(){
        $(".grimpan-wrap").css("background-color", "#fff");
        $(".grimpan-wrap").css("background-image", "");
    }


    $('.grim .top-menu li').click(function(){
        let $idx =  $(this).index();

        //7-1. 캐릭터만 초기화
        if($idx == 0){
            addCh();
        }
        //7-2.배경만 초기화
        if($idx == 1){
            addBg();
        }
        //7-3.전체 초기화
        if($idx == 2){
            addCh();
            addBg();
        }
    });


    //8. 그림판 캐릭터 및 배경 초기화


    $(".zhong-wrap .s-icon").click(function(){
        let $nums = $(this).index();
        if($nums == 0){
            $(".grimpan-wrap").css("background-image", "");
            $(".grimpan-wrap").css("background-color", "#fff");
        }else{
            $(".grimpan-wrap").css("background-image", "url(./img/map/map"+$nums+".png)");
            $(".grimpan-wrap").css("background-color", "");
        }
    });



    //9. 그림판 캐릭터 이미지파일로 다운로드


    
    function PrintDiv(div){
        div = div[0]
        html2canvas(div).then(function(canvas){
            let myImage = canvas.toDataURL();
            downloadURI(myImage, "myMaple.png") 
        });
    }
    function downloadURI(uri, name){
        let link = document.createElement("a")
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
    }


    $(".downgo").on("click",function(){
        PrintDiv($('.grimpan-wrap'));
    })

});



