var indexPage = {};
indexPage.Components = {};

indexPage.Components = function() {
    this.init = function() {
        this.attachEvents();
    };
    this.attachEvents = function() {
        createBox();
        initClickEvents();
        addWindowEvents()
    };
    var initClickEvents = function(){
        document.getElementById("suffleBtn").addEventListener("click", boxShuffle);
        document.getElementById("sortBtn").addEventListener("click", boxSort);
    }
    var addWindowEvents = function() {
        window.addEventListener("resize", createBox);
    }
    var boxShuffle = function() {
        var array= document.getElementsByClassName("myBox");
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i].innerHTML;
            array[i].innerHTML = array[j].innerHTML;
            array[j].innerHTML = temp;
        }
    }
    var boxSort = function() {
        var sortedArray=[];
        var array= document.getElementById("box").children;
        for(var i=0;i<array.length;i++){
            for(var k=0;k<array.length;k++) {
                if(i+1==array[k].innerText) {
                    sortedArray.push(array[k]);
                }
            }
        }
        for(var m=0;m<sortedArray.length;m++) {
            document.getElementById("box").appendChild(sortedArray[m]);
        }
    }      
    var createBox = function() {           
        document.getElementById("box").innerHTML="";
        var bgColor = ["#000000","#333333","#ffffff","#EFEFEF","#72C3DC","#2B8EAD","#6F98A8","#BFBFBF","#2F454E"] 
        for(var i=1; i<10; i++) {
            var newDiv = document.createElement('div');
            var newDiv1 = document.createElement('div');  
            var newDiv2 = document.createElement('div'); 
            newDiv.className = "myBox";
            newDiv.id=i;            
            newDiv1.className = "bgsmall";
            newDiv2.className = "bglarge";
            if(screen.width < 992) {
                newDiv1.style.background=bgColor[i-1];
                newDiv2.style.background=bgColor[7];
                newDiv2.innerHTML=i;
                newDiv.appendChild(newDiv1);
                newDiv.appendChild(newDiv2);   
            } else {
                newDiv1.remove();
                newDiv2.innerHTML=i;
                newDiv.appendChild(newDiv2);
                newDiv2.style.background=bgColor[i-1];                
            }          
            document.getElementById("box").appendChild(newDiv);           
        } 
    }

}
document.addEventListener('DOMContentLoaded', (event) => {
    indexPage = new indexPage.Components();
    indexPage.init();
})