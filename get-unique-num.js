const nums = [6,1,3,3,3,6,6]

const getUniqueNum = (arr) => {
    const map = new Map();
    const arr1 = [];
    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) {
            map.set(arr[i],map.get(arr[i]) + 1) 
        } else {
            map.set(arr[i],1) 
            arr1.push(arr[i])
        }
    }
    for(let i = 0; i < arr1.length;i++) {
        if(map.get(arr1[i]) == 1) {
            console.log(arr1[i])
        }
    }
}

getUniqueNum(nums)