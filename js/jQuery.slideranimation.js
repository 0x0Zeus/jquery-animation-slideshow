/*
    Slider Animation Plugin by Michael
    2012.7.27
*/

(function ($) {
    
    $.fn.setAnimation = function () {
        $.easing.def = "easeOutQuart";
        var animationData = my_animation;
        var current_animationDuration = 0;
        var entire_animationDuration = 0;
        var current_slider_style = new Array();
        function calcStartTime(slider, startEnd, level){
            if (level == 0){
                return 0;//findLongestDuration(slider, startEnd, 0);
            }else{
                return findLongestDuration(slider, startEnd, level - 1) + calcStartTime(slider, startEnd, level - 1);
            }
        }
        function findLongestDuration(slider, startEnd, level){
            startEnd = startEnd + "Animation";
            var longDuration = 0;
            for ( var sliderElms in animationData[slider][startEnd]){
                if (animationData[slider][startEnd][sliderElms]['startIndex'] == level){
                    if (longDuration == 0 || animationData[slider][startEnd][sliderElms]['duration'] > longDuration)
                        longDuration = animationData[slider][startEnd][sliderElms]['duration'];
                }
            }
            return longDuration;
        }
        function findMaxLevel(slider, startEnd){
            startEnd = startEnd + "Animation";
            var maxLevel = 0;
            for (var sliderElms in animationData[slider][startEnd]){
                if (maxLevel == 0 || animationData[slider][startEnd][sliderElms]['startIndex'] > maxLevel)
                    maxLevel = animationData[slider][startEnd][sliderElms]['startIndex'];
            }
            return maxLevel;
        }
        function calcAnimationTime(slider){
            startMaxLevel = findMaxLevel(slider, "start");
            endMaxLevel = findMaxLevel(slider, "end");
            entireStartAnimationTime = calcStartTime(slider, 'start', startMaxLevel) + findLongestDuration(slider, 'start', startMaxLevel);
            entireEndAnimationTime = calcStartTime(slider, 'end', endMaxLevel) + findLongestDuration(slider, 'end', endMaxLevel);
            return entireStartAnimationTime + entireEndAnimationTime + animationData[slider]['pauseTime'] + 500;
        }
        function elementAnimation(slider, sliderElms, startTime, startEnd){
            startEnd = startEnd + "Animation";
            if (startEnd == 'startAnimation')
                current_slider_style[slider][sliderElms] = $('#' + slider + ' .' + sliderElms).attr('style');
            
            
            var topProp = animationData[slider][startEnd][sliderElms]['effect']['top'];
            var leftProp = animationData[slider][startEnd][sliderElms]['effect']['left'];
            var widthProp = animationData[slider][startEnd][sliderElms]['effect']['width'];
            var heightProp = animationData[slider][startEnd][sliderElms]['effect']['height'];
            var fadeProp = animationData[slider][startEnd][sliderElms]['effect']['opacity'];
            var rotateProp = animationData[slider][startEnd][sliderElms]['effect']['rotate'];
            var easingProp = animationData[slider][startEnd][sliderElms]['easing'];
            
            if (topProp == null)
                topProp = $('#' + slider + ' .' + sliderElms).css('top');
            if (leftProp == null)
                leftProp = $('#' + slider + ' .' + sliderElms).css('left');
            if (widthProp == null)
                widthProp = $('#' + slider + ' .' + sliderElms).css('width');
            if (heightProp == null)
                heightProp = $('#' + slider + ' .' + sliderElms).css('height');
            if (fadeProp == null)
                fadeProp = $('#' + slider + ' .' + sliderElms).css('opacity');
            if (easingProp == null)
                easingProp = '';
                
            setTimeout(function(){
                //console.log(slider + "/" + sliderElms + "-" + "top:" + topProp + ', left:' + leftProp + ', height:' + heightProp + ', width:' + widthProp + ', fade:' + fadeProp + ', rotate:' + rotateProp);
                $('#' + slider + ' .' + sliderElms).animate({
                    top:topProp,
                    left:leftProp,
                    width:widthProp,
                    height:heightProp,
                    opacity:fadeProp
                },
                    animationData[slider][startEnd][sliderElms]['duration']
                , function(){
                    if (startEnd == 'endAnimation'){
                        //console.log(slider + sliderElms);
                        console.log(current_slider_style[slider][sliderElms]);
                        $('#' + slider + ' .' + sliderElms).attr('style', current_slider_style[slider][sliderElms]);
                    }
                }
                );
                if (rotateProp != null)
                    $('#' + slider + ' .' + sliderElms).rotate({
                      angle:rotateProp, 
                      animateTo:0
                     // easing: $.easing.easeInOutExpo
                    });
            }, startTime); 
        }
        function endElementAnimation(slider, sliderElms, startTime){
            setTimeout(function(){
                //console.log(slider + '-' + sliderElms + ':end');
            }, startTime);
        }
        function startAnimation(slider){
            for ( var sliderElms in animationData[slider]['startAnimation']){
                //alert($('#' + inx + ' .' + sliderElms).attr('src'));
                startTime = calcStartTime(slider, "start", animationData[slider]['startAnimation'][sliderElms]['startIndex']);
                elementAnimation(slider, sliderElms, startTime, "start");
            }
        }
        function endAnimation(slider){
            for ( var sliderElms in animationData[slider]['endAnimation']){
                endTime = calcStartTime(slider, "end", animationData[slider]['endAnimation'][sliderElms]['startIndex']);
                elementAnimation(slider, sliderElms, endTime, "end");
            }
        }
        function animationSlider(slider){
            startMaxLevel = findMaxLevel(slider, "start");
            entireStartAnimationTime = calcStartTime(slider, 'start', startMaxLevel) + findLongestDuration(slider, 'start', startMaxLevel);
            setInterval(function(){
                startAnimation(slider);
                setTimeout(function(){endAnimation(slider);}, entireStartAnimationTime + animationData[slider]['pauseTime']);
            }, entire_animationDuration);
            startAnimation(slider);
            setTimeout(function(){endAnimation(slider);}, entireStartAnimationTime + animationData[slider]['pauseTime']);
        }
        function startSliderAnimation(slider, startAnimation){
            setTimeout(function(){
                animationSlider(slider);
            }, startAnimation);
        }
        for (var sliders in animationData)
        {
            entire_animationDuration += calcAnimationTime(sliders);
        }

        for (var sliders in animationData)
        {  
            current_slider_style[sliders] = new Array();
            startSliderAnimation(sliders, current_animationDuration);
            current_animationDuration += calcAnimationTime(sliders);
        }
    }
})(jQuery);
