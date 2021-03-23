export function isYes(someString) {
    // does this string start with a y?
    // look at the first letter
    const firstLetter = someString[0];

    // if the first letter is y, return true
    // return will STOP the function
    if (firstLetter.toLowerCase() === 'y') return true;
        
    // because return stops the function, we never need an else. 
    return false;
}