function binarySearch(list: Array<number>, target: number) {
  let higherIndex = list.length - 1
  let lowerIndex = 0
  let midIndex = 0
  let midValue = 0

  while (lowerIndex <= higherIndex) {
    midIndex = Math.floor((higherIndex + lowerIndex) / 2) 
    midValue = list[midIndex] 

    if (midValue === target) return midIndex
    else if (midValue > target) higherIndex = midIndex - 1
    else if (midValue < target) lowerIndex = midIndex + 1
  }

  return -1 
}

function comparison() {
  const list: number[] = []
  for (let index = 0; index < 10000; index++) {
    list.push(Math.random())
  }

  const sortedList = list.slice().sort() 
  const target = sortedList[Math.floor(Math.random() * sortedList.length - 1)]

  console.time("Execution Time - Simple Binary Search")
  const binaryResult = binarySearch(sortedList, target)
  console.timeEnd("Execution Time - Simple Binary Search")

  console.time("Execution Time - Linear Search")
  let linearResult = -1
  for (let index = 0; index < sortedList.length; index++) {
    if (target === sortedList[index]) {
      linearResult = index
      break;
    }
  }
  console.timeEnd("Execution Time - Linear Search")

  console.log("Binary Result:", binaryResult)
  console.log("Linear Result:", linearResult)
}

comparison()