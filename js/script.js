var generate = document.querySelector('.generate');
var technique = document.querySelector('.technique');
var run = document.querySelector('.run');
var visualizer = document.querySelector('.visualizer');
var visualizerContainer = document.querySelector('.visualizer-container');
visualizerContainer.innerHTML = "";
var arr = [100];
var counter = 0;
var swap;
//Generate Once at Program Start
visualizer.innerHTML = "";
for(let i=0;i<100;i++){
    arr[i] = Math.floor((Math.random() * 100) + 1);

    const obj = document.createElement('div');
    obj.classList.add('obj');
    obj.value = {val:arr[i],index:i};
    obj.style.height = obj.value.val+"%";
    visualizer.appendChild(obj);
}
visualizerContainer.appendChild(visualizer);
const len = arr.length;
generate.addEventListener('click', function(){
    console.clear();
    visualizer.innerHTML = "";
    for(let i=0;i<100;i++){
        arr[i] = Math.floor((Math.random() * 100) + 1);

        const obj = document.createElement('div');
        obj.classList.add('obj');
        obj.value = {val:arr[i],index:i};
        obj.style.height = obj.value.val+"%";
        visualizer.appendChild(obj);
    }
    visualizerContainer.appendChild(visualizer);
});


run.addEventListener('click', function(e){
    e.preventDefault();
    const sorter = technique.value;
    console.log(sorter);
    let v = 0;
    switch (sorter){

        case "bubble":
            generate.classList.add('run-running');
            run.classList.add('run-running');
            for (let i = 0; i < len; i++) {
                counter++;
                for (let j = 0; j < len; j++) {
                    setTimeout(function(){
                        if (arr[j] > arr[j+1]) {
                            let tmp1 = arr[j];
                            arr[j] = arr[j+1];
                            arr[j+1] = tmp1;
                            visualizer.innerHTML = "";
                            for(let i=0;i<len;i++){
                                const obj = document.createElement('div');
                                obj.classList.add('obj');
                                obj.value = {val:arr[i],index:i};
                                obj.style.height = obj.value.val+"%";
                                obj.classList.add('running');
                                visualizer.appendChild(obj);
                            }
                            visualizerContainer.appendChild(visualizer);                
                        }
                        pauseComp(0); 
                    });
                    
                }
            }

            var m = setInterval(function(){
                if(counter>=len-1){
                    visualizer.childNodes.forEach(function(node){
                        generate.classList.remove('run-running');
                        node.classList.remove('running');
                        node.classList.add("success");
                        run.classList.remove('run-running');
                    });
                    counter=0;
                    clearInterval(m);
                }
            },500);

            break;  


        case "selection":
            generate.classList.add('run-running');
            run.classList.add('run-running');
            for(let i = 0; i < len; i++) {
                counter++;
                // Finding the smallest number in the subarray
                setTimeout(function(){
                let min = i;
                for(let j = i+1; j < len; j++){
                    if(arr[j] < arr[min]) {
                        min=j; 
                    }
                 }
                 if (min != i) {
                     // Swapping the elements
                     let tmp = arr[i]; 
                     arr[i] = arr[min];
                     arr[min] = tmp;
                     
                     visualizer.innerHTML = "";
                        for(let i=0;i<len;i++){
                            const obj = document.createElement('div');
                            obj.classList.add('obj');
                            obj.value = {val:arr[i],index:i};
                            obj.style.height = obj.value.val+"%";
                            obj.classList.add('running');
                            visualizer.appendChild(obj);
                        }
                    visualizerContainer.appendChild(visualizer);  

                }
                pauseComp(60); 
            },0);
            }

            var m = setInterval(function(){
                if(counter>=len-1){
                    visualizer.childNodes.forEach(function(node){
                        generate.classList.remove('run-running');
                        node.classList.remove('running');
                        node.classList.add("success");
                        run.classList.remove('run-running');
                    });
                    counter=0;
                    clearInterval(m);
                }
            },500);

            break;
        
        case "insertion":
            generate.classList.add('run-running');
            run.classList.add('run-running');
            let n = arr.length;
            for (let i = 1; i < n; i++) {
                counter++;
                setTimeout(function(){
                let current = arr[i];
                let j = i-1; 
                while ((j > -1) && (current < arr[j])) {
                    arr[j+1] = arr[j];
                    j--;
                }
                arr[j+1] = current;

                visualizer.innerHTML = "";
                    for(let i=0;i<len;i++){
                        const obj = document.createElement('div');
                        obj.classList.add('obj');
                        obj.value = {val:arr[i],index:i};
                        obj.style.height = obj.value.val+"%";
                        obj.classList.add('running');
                        visualizer.appendChild(obj);
                    }
                    visualizerContainer.appendChild(visualizer);
          
                pauseComp(60); 
            },0);
            }

            var m = setInterval(function(){
                if(counter>=len-1){
                    visualizer.childNodes.forEach(function(node){
                        generate.classList.remove('run-running');
                        node.classList.remove('running');
                        node.classList.add("success");
                        run.classList.remove('run-running');
                    });
                    counter=0;
                    clearInterval(m);
                }
            },500);

            break;
    }
});

visualizer.childNodes.forEach(function(node){
    node.addEventListener('click', function(){
        alert(node.value.val);
    });
});

function pauseComp(ms) 
 {
     var curr = new Date().getTime();
     ms += curr;
     while (curr < ms) {
         curr = new Date().getTime();
     }
 } 


