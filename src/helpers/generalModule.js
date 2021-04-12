String.prototype.replaceAt=function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
}

export const changeStrVal = (strToChange, newStrValue, strToChangeValue) => {
    let oldString = strToChange;    //copy the original string first
    let stringIndex = oldString.indexOf(strToChangeValue);  // Grab the strToChangeValue index
    let modifiedString = oldString.replaceAt(stringIndex+5, newStrValue)
    return modifiedString;
}