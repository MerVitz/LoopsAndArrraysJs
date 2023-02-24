// Generate a sentance of two parameters, a desc, array
 function generateSentance(desc,arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i =0; i<arr.length; i++) {
       if (i === lastIndex) {baseString += arr[i] 
    } else {
        baseString += arr[i] + " ,"
    }
    return baseString
 }}
 const sentance = generateSentance("highest mountains",["Mount Everest", "K2"])
 console.log(sentance)
