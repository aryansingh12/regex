function highlight(){

    // var regexInput = document.getElementById("regexinput");
    let str = document.getElementById("bigtext").value;
    let reg = document.getElementById("regexinput").value;

    // let regexp = /[A-Z]/g;
    let regexp = RegExp(reg, 'g');
    // let str = 'The QUICK brown Fox';
    let matches = [...str.matchAll(regexp)];

    var inputText = document.getElementById("resultText");
    var innerHTML = str;
    
    indices = [];
    for(const match of matches){
        indices.push(match.index);
    }

    let a = "";
    let pastIndex = 0;
    for (let i=0;i<indices.length;i++) {
        index = indices[i];
        
        if(i == indices.length-1){
            a += innerHTML.substring(pastIndex,index) + "<span class='highlight'>" + innerHTML.substring(index,index+1) + "</span>" + innerHTML.substring(index + 1);
        }
        else{
            a += innerHTML.substring(pastIndex,index) + "<span class='highlight'>" + innerHTML.substring(index,index+1) + "</span>" + innerHTML.substring(index + 1, indices[i+1]);
        }
        pastIndex = indices[i+1];
    }
    // console.log(a);
    if(a.length==0){
        // console.log("empty");
        inputText.innerHTML = str;
    }else{
        inputText.innerHTML = a;
    }
}