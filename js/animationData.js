var my_animation = {
    "slider1": {
        "startAnimation":{
            "sliderElm1":{"effect":{"top":"70px"},"duration":300, "startIndex":0},
            "sliderElm2":{"effect":{"left":"278px","rotate":-10},"duration":300, "startIndex":1},
            "sliderElm3":{"effect":{"left": '858px', "opacity":1},"duration":300, "startIndex":2},
            "sliderElm4":{"effect":{"left": '930px',"opacity":1}, "duration":300, "startIndex":3}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"top":"420px"},"duration":300, "startIndex":2},
            "sliderElm2":{"effect":{"left":"-280px"},"duration":300, "startIndex":1},
            "sliderElm3":{"effect":{"top": '-122px', "opacity":0},"duration":300, "startIndex":0},
            "sliderElm4":{"effect":{"top": '-80px',"opacity":0}, "duration":300, "startIndex":0}
        },
        "pauseTime":3000
    }, 
    "slider2":{
        "startAnimation":{
            "sliderElm1":{"effect":{"opacity":1},"duration":300, "startIndex":0},
            "sliderElm2":{"effect":{"opacity":1},"duration":300, "startIndex":0},
            "sliderElm3":{"effect":{"left": '325px'},"easing":'easeOutBounce', "duration":300, "startIndex":1},
            "sliderElm4":{"effect":{"left": '1080px'}, "duration":300, "startIndex":2},
            "sliderElm5":{"effect":{"top": '25px'},"duration":300, "startIndex":3},
            "sliderElm6":{"effect":{"top": '75px'}, "duration":300, "startIndex":4}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"opacity":0},"duration":300, "startIndex":4},
            "sliderElm2":{"effect":{"opacity":0},"duration":300, "startIndex":4},
            "sliderElm3":{"effect":{"left": '-280px'},"duration":300, "startIndex":2},
            "sliderElm4":{"effect":{"top": '470px'}, "duration":300, "startIndex":3},
            "sliderElm5":{"effect":{"width": '113px', "height":'30px',"left":'+=170px',"top":'+=47px',"opacity":0},"duration":300, "startIndex":0},
            "sliderElm6":{"effect":{"width":'153px',"height":'30px',"left":'+=230px',"top":'+=47px',"opacity":0}, "duration":300, "startIndex":1}
        },
        "pauseTime":1500
    },
    "slider3": {
        "startAnimation":{
            "sliderElm1":{"effect":{"top":"-11px"},"duration":300, "startIndex":0},
            "sliderElm2":{"effect":{"left":"307px","top":"270"},"duration":300, "startIndex":3},
            "sliderElm3":{"effect":{"top": '98px'},"duration":300, "startIndex":1},
            "sliderElm4":{"effect":{"top": '153px'}, "duration":300, "startIndex":2}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"top":"420px"},"duration":300, "startIndex":2},
            "sliderElm2":{"effect":{"left":"-242px","top":"316px"},"duration":300, "startIndex":1},
            "sliderElm3":{"effect":{"top": '420px', "opacity":0},"duration":400, "startIndex":0},
            "sliderElm4":{"effect":{"top": '475px',"opacity":0}, "duration":400, "startIndex":0}
        },
        "pauseTime":1500
    },
    "slider4":{
        "startAnimation":{
            "sliderElm1":{"effect":{"opacity":1, "rotate":30},"duration":150, "startIndex":0},
            "sliderElm2":{"effect":{"left":"859px","top":"69px"},"duration":300, "startIndex":1},
            "sliderElm3":{"effect":{"top": '307px', "opacity":1},"duration":300, "startIndex":3},
            "sliderElm4":{"effect":{"left": '804px', "top":'218px', "width":"457px", "height":"60px"}, "duration":300, "startIndex":2},
            "sliderElm5":{"effect":{"left":'700px',"top": '272px', "width":"594px", "height":"60px"},"duration":300, "startIndex":2}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"top":"-450px"},"duration":300, "startIndex":3},
            "sliderElm2":{"effect":{"top":'420px'},"duration":100, "startIndex":0},
            "sliderElm3":{"effect":{"top": '231px', "opacity":0},"duration":300, "startIndex":1},
            "sliderElm4":{"effect":{"opacity":0}, "duration":300, "startIndex":2},
            "sliderElm5":{"effect":{"opacity":0},"duration":300, "startIndex":2}
        },
        "pauseTime":1500
    },
    "slider5":{
        "startAnimation":{
            "sliderElm1":{"effect":{"top":"124px"},"duration":300, "startIndex":0},
            "sliderElm2":{"effect":{"left":"798px","top":"45px"},"duration":300, "startIndex":1},
            "sliderElm3":{"effect":{"top": '166px', "left":'327px'},"duration":300, "startIndex":2},
            "sliderElm4":{"effect":{"left": '1036px', "top":'271px'}, "duration":300, "startIndex":2},
            "sliderElm5":{"effect":{"top": '12px'},"duration":300, "startIndex":4},
            "sliderElm6":{"effect":{"opacity":1},"duration":300, "startIndex":3}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"top":"420px"},"duration":300, "startIndex":2},
            "sliderElm2":{"effect":{"top":'420px'},"duration":300, "startIndex":2},
            "sliderElm3":{"effect":{"opacity":0},"duration":300, "startIndex":0},
            "sliderElm4":{"effect":{"opacity":0}, "duration":300, "startIndex":0},
            "sliderElm5":{"effect":{"top":'-40px',"left":'-=200px', "width":0, 'height':0},"duration":300, "startIndex":1},
            "sliderElm6":{"effect":{"top":'-40px',"left":'-=200px', "width":0, 'height':0},"duration":300, "startIndex":1}
        },
        "pauseTime":1500
    },
    "slider6":{
        "startAnimation":{
            "sliderElm1":{"effect":{"opacity":1,"rotate":15},"duration":300, "startIndex":0},
            "sliderElm2":{"effect":{"left":"500px","top":"235px","opacity":1},"duration":300, "startIndex":1},
            "sliderElm3":{"effect":{"left":'320px'},"duration":300, "startIndex":2},
            "sliderElm4":{"effect":{"left": '364px'}, "duration":300, "startIndex":2}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"opacity":0},"duration":300, "startIndex":2},
            "sliderElm2":{"effect":{"left":'789px',"top":'225px'},"duration":300, "startIndex":0},
            "sliderElm3":{"effect":{"left":"1600px"},"duration":300, "startIndex":1},
            "sliderElm4":{"effect":{"left":"-523px"}, "duration":300, "startIndex":1}
        },
        "pauseTime":1500
    },
    "slider7":{
        "startAnimation":{
            "sliderElm1":{"effect":{"left":'612px'},"duration":300, "startIndex":0},
            "sliderElm2":{"effect":{"top":"190px","opacity":1},"duration":300, "startIndex":3},
            "sliderElm3":{"effect":{"left":'308px','top':'80px',"width":'280px',"height":'62px'},"duration":200, "startIndex":1},
            "sliderElm4":{"effect":{"left":'322px','top':'134px',"width":'348px',"height":'62px'}, "duration":200, "startIndex":2}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"left":'-667px'},"duration":200, "startIndex":2},
            "sliderElm2":{"effect":{"top":'134px',"opacity":0},"duration":300, "startIndex":0},
            "sliderElm3":{"effect":{"left":"-280px"},"duration":300, "startIndex":1},
            "sliderElm4":{"effect":{"left":"-348px"}, "duration":300, "startIndex":1}
        },
        "pauseTime":1500
    },
    "slider8":{
        "startAnimation":{
            "sliderElm1":{"effect":{"left":'324px',"top":'-83px'},"duration":200, "startIndex":0},
            "sliderElm2":{"effect":{"left":"1075px","top":'270px',"opacity":1},"duration":200, "startIndex":1},
            "sliderElm3":{"effect":{"width":'225px','height':'84px'},"duration":300, "startIndex":2},
            "sliderElm4":{"effect":{"left":'317px'}, "duration":200, "startIndex":3},
            "sliderElm5":{"effect":{"top":'311px'}, "duration":200, "startIndex":3}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"opacity":0},"duration":300, "startIndex":2},
            "sliderElm2":{"effect":{"top":"420px"},"duration":200, "startIndex":0},
            "sliderElm3":{"effect":{"left":'1600px',"top":'190px',"width":'383px','height':'126px'},"duration":200, "startIndex":0},
            "sliderElm4":{"effect":{"top":'-62px'}, "duration":300, "startIndex":1},
            "sliderElm5":{"effect":{"top":'420px'}, "duration":300, "startIndex":1}
        },
        "pauseTime":1500
    },
    "slider9":{
        "startAnimation":{
            "sliderElm1":{"effect":{"opacity":1},"duration":300, "startIndex":0},
            "sliderElm2":{"effect":{"left":"321px","top":'62px',"width":'351px',"height":'61px',"opacity":1},"duration":200, "startIndex":1},
            "sliderElm3":{"effect":{"left":"356px","top":'116px',"width":'456px',"height":'61px',"opacity":1},"duration":200, "startIndex":2}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"top":'420px'},"duration":300, "startIndex":1},
            "sliderElm2":{"effect":{"left":"-491px"},"duration":200, "startIndex":0},
            "sliderElm3":{"effect":{"left":'-456px'},"duration":200, "startIndex":0}
        },
        "pauseTime":1500
    },
    "slider10":{
        "startAnimation":{
            "sliderElm1":{"effect":{"left":'607px'},"duration":300, "startIndex":0},
            "sliderElm2":{"effect":{"top":"108px","rotate":90},"duration":200, "startIndex":1},
            "sliderElm3":{"effect":{"top":"162px","rotate":90},"duration":200, "startIndex":1}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"opacity":0},"duration":300, "startIndex":2},
            "sliderElm2":{"effect":{"left":"200px","top":"80px","width":"460px","height":"162px","opacity":0},"duration":200, "startIndex":1},
            "sliderElm3":{"effect":{"left":"210px","top":"120px","width":"496px","height":"243px","opacity":0},"duration":200, "startIndex":0}
        },
        "pauseTime":1500
    },
    "slider11":{
        "startAnimation":{
            "sliderElm1":{"effect":{"top":'-1px'},"duration":300, "startIndex":0},
            "sliderElm2":{"effect":{"top":"180px"},"duration":200, "startIndex":2},
            "sliderElm3":{"effect":{"opacity":1},"duration":150, "startIndex":1}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"top":'420px'},"duration":300, "startIndex":2},
            "sliderElm2":{"effect":{"opacity":0},"duration":200, "startIndex":0},
            "sliderElm3":{"effect":{"top":"420px"},"duration":200, "startIndex":1}
        },
        "pauseTime":1500
    },
    "slider12":{
        "startAnimation":{
            "sliderElm1":{"effect":{"top":'238px'},"duration":200, "startIndex":0},
            "sliderElm2":{"effect":{"top":"-213px"},"duration":200, "startIndex":1},
            "sliderElm3":{"effect":{"top":"256px","left":"910px","opacity":1},"duration":250, "startIndex":2},
            "sliderElm4":{"effect":{"top":"83px"},"duration":200, "startIndex":3},
            "sliderElm5":{"effect":{"left":"323px"},"duration":200, "startIndex":3}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"opacity":0},"duration":300, "startIndex":2},
            "sliderElm2":{"effect":{"opacity":0},"duration":300, "startIndex":2},
            "sliderElm3":{"effect":{"left":"1600px","top":"200px"},"duration":200, "startIndex":1},
            "sliderElm4":{"effect":{"left":"1600px"},"duration":200, "startIndex":0},
            "sliderElm5":{"effect":{"left":"-437px"},"duration":200, "startIndex":0}
        },
        "pauseTime":1500
    },
    "slider13":{
        "startAnimation":{
            "sliderElm1":{"effect":{"opacity":1},"duration":200, "startIndex":0},
            "sliderElm2":{"effect":{"top":"182px","rotate":15},"duration":200, "startIndex":1},
            "sliderElm3":{"effect":{"left":"308px"},"duration":250, "startIndex":2},
            "sliderElm4":{"effect":{"top":"92px","left":"332px","width":"207px","height":"57px","opacity":1},"duration":200, "startIndex":3}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"opacity":0},"duration":300, "startIndex":2},
            "sliderElm2":{"effect":{"left":"800px","top":"200px","opacity":0},"duration":300, "startIndex":0},
            "sliderElm3":{"effect":{"left":"1600px"},"duration":200, "startIndex":1},
            "sliderElm4":{"effect":{"left":"1600px"},"duration":200, "startIndex":1}
        },
        "pauseTime":1500
    },
    "slider14":{
        "startAnimation":{
            "sliderElm1":{"effect":{"opacity":1,"left":"579px"},"duration":200, "startIndex":0},
            "sliderElm2":{"effect":{"height":"59px"},"duration":200, "startIndex":1},
            "sliderElm3":{"effect":{"height":"58px"},"duration":250, "startIndex":2},
            "sliderElm4":{"effect":{"left":"307px"},"duration":200, "startIndex":3}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"opacity":0},"duration":300, "startIndex":3},
            "sliderElm2":{"effect":{"top":"119px","opacity":0},"duration":300, "startIndex":0},
            "sliderElm3":{"effect":{"top":"172px","opacity":0},"duration":200, "startIndex":1},
            "sliderElm4":{"effect":{"left":"1600px"},"duration":200, "startIndex":2}
        },
        "pauseTime":1500
    },
    "slider15":{
        "startAnimation":{
            "sliderElm1":{"effect":{"left":"661px"},"duration":200, "startIndex":0},
            "sliderElm2":{"effect":{"width":"250px"},"duration":200, "startIndex":1},
            "sliderElm3":{"effect":{"width":"339px","left":"320px","opacity":1},"duration":250, "startIndex":2},
            "sliderElm4":{"effect":{"height":"60px","opacity":1},"duration":200, "startIndex":3}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"left":"1600px"},"duration":300, "startIndex":1},
            "sliderElm2":{"effect":{"top":"-169px","opacity":0},"duration":300, "startIndex":0},
            "sliderElm3":{"effect":{"top":"-115px","opacity":0},"duration":200, "startIndex":0},
            "sliderElm4":{"effect":{"top":"-60px","opacity":0},"duration":200, "startIndex":0}
        },
        "pauseTime":1500
    },
    "slider16":{
        "startAnimation":{
            "sliderElm1":{"effect":{"height":"397px","opacity":1},"duration":200, "startIndex":0},
            "sliderElm2":{"effect":{"left":"1019px","rotate":15},"duration":200, "startIndex":1},
            "sliderElm3":{"effect":{"width":"524px","height":"58px","left":"309px","top":"196px","opacity":1},"duration":200, "startIndex":2},
            "sliderElm4":{"effect":{"width":"582px","height":"58px","left":"348px","top":"250px","opacity":1},"duration":200, "startIndex":2}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"opacity":0},"duration":300, "startIndex":2},
            "sliderElm2":{"effect":{"top":"-=15px","left":"-=50px","width":"+=150px","height":"+=40px","opacity":0},"duration":300, "startIndex":1},
            "sliderElm3":{"effect":{"left":"-1px","height":'0',"width":'0',"opacity":0},"duration":200, "startIndex":0},
            "sliderElm4":{"effect":{"left":"1600px","height":'0',"width":'0',"opacity":0},"duration":200, "startIndex":0}
        },
        "pauseTime":1500
    },
    "slider17":{
        "startAnimation":{
            "sliderElm1":{"effect":{"top":"-11px"},"duration":150, "startIndex":0},
            "sliderElm2":{"effect":{"left":"468px","opacity":1},"duration":200, "startIndex":3},
            "sliderElm3":{"effect":{"width":"396px","height":"60px","left":"309px","top":"109px"},"duration":200, "startIndex":1},
            "sliderElm4":{"effect":{"width":"448px","height":"59px","left":"329px","top":"164px","opacity":1},"duration":200, "startIndex":2}
        },
        "endAnimation":{
            "sliderElm1":{"effect":{"top":"420px"},"duration":150, "startIndex":3},
            "sliderElm2":{"effect":{"left":"329px","opacity":0},"duration":300, "startIndex":0},
            "sliderElm3":{"effect":{"top":"-=30px","left":"-=150px","width":"+=350px","height":"+=60px","opacity":0},"duration":200, "startIndex":2},
            "sliderElm4":{"effect":{"opacity":0},"duration":200, "startIndex":1}
        },
        "pauseTime":1500
    }
};