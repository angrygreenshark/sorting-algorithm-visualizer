const slider=document.getElementById("speed-slider");
let sorting_speed=slider.value
slider.oninput = function() {
  sorting_speed= this.value;
  console.log("sorting speed:"+sorting_speed)
}
function setup() {

  // with,height of canvas
  createCanvas(400, 400);
  // number of elements of sort : devide the width by a number
  let num_elements=width/10
  // get an array of elements of height of the number of elements to sort
  values=new Array(num_elements)
  // fill the array with random values between 0 and height
  for (let i = 0; i < values.length; i++) {
    values[i]=floor(random(height))
  }
  check()
  frameRate(6)
}
  async function quickSort(arr,first_element,last_element){
  if (first_element<last_element){
    let pivot=await partition(arr,first_element,last_element)
   await quickSort(arr,first_element,pivot-1)
    await quickSort(arr,pivot+1,last_element)
  }
  }
 async function partition(ar,first,last){
    let pivot=ar[last]
    let i=(first-1)
    for (let j = first; j <= last -1; j++) {
      if (ar[j]<pivot) {
        i++
        await swap(ar,i,j)
      }
      
    }
    await swap(ar,i+1,last)
    return (i+1)
  }
 async function swap(array,i,j){
    await sleep(sorting_speed)
    temp=array[i]
    array[i]=array[j]
    array[j]=temp
  }
  function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
  }
 function draw() {
  background(255);
  for (let i = 0; i < values.length; i++) {
    let c=color(61, 169, 252)
    fill(c)
    stroke(0)
    rect(i*10,height-values[i],10,values[i])
  }
}


 async function SelectionSort(arr){
var i, j, min_idx;
  let n=arr.length
// One by one move boundary of unsorted subarray
for (i = 0; i < n-1; i++)
{
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < n; j++)
    if (arr[j] < arr[min_idx])
        min_idx = j;
    // Swap the found minimum element with the first element
 await   swap(arr,min_idx, i);
}
}
async function check(){
    switch (document.getElementById("sorting-algo").selectedIndex) {
      case 0:
      await  SelectionSort(values)
        console.log("selectionsort")
        break;
      case 1:
       await quickSort(values,0,values.length-1)
        console.log("quicksort")
        break
      case 2:
        console.log("insertion sort")
       await insertionSort(values)
        break;
      case 3:
        console.log("bubble sort")
        await bubbleSort(values);
            }
  }
  async function bubbleSort(arr){
    let size=arr.length
      for (let i = 0; i < size-1; i++) {
        for(let j=0;j<size-i-1;j++){
          if(arr[j]>arr[j+1]){
         await swap(arr,j,j+1)
          }
      }
    }
    }
  async function insertionSort(arr){
    let j;
    let key;
    for (let i = 0; i < arr.length; i++) { 
       key=arr[i];
      j=i-1;
      while (j>=0&&arr[j]>key) {
        await sleep(sorting_speed)
        arr[j+1]=arr[j];
        j=j-1;
      }
    }
    arr[j+1]=key;
  }
  
  //reset button 
const resetlistener=document.querySelector("#reset");
resetlistener.addEventListener("click",()=>{
setup();
draw();
  
})