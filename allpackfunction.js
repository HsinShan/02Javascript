//簡短window.onload及document.getElementById;
function $(str){
    if(typeof str==="string"){
        return document.getElementById(str);
    }else if(typeof str==="function"){//傳入函數時，極為window.onload
        window.onload=str;
    }
}