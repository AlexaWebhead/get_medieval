
function toTranslated(line) {

    var newLine = line.toLowerCase();

    for (var key in data.standard)
    {
        newLine = newLine.replace(key, data.standard[key]);
    }

    newLine = newLine.replace(" i ", " I ");
    newLine = newLine.replace("i ", "I ");

    return newLine;
}

function unTranslate(line) {

    var newLine = line.toLowerCase();

    for (var key in data.standard)
    {
        newLine = newLine.replace(data.standard[key], key);
    }

    newLine = newLine.replace(" i ", " I ");
    newLine = newLine.replace("i ", "I ");

    return newLine;
}

/*	

    ==== How to Translate ====

1)  HTML: Include your *.json dialect pack. It should declare a variable called "data", containing everything.
    
2)  Call the toTranslated() function, passing in a string as such:
        toTranslated("You are");
    
    It will return the "translated" string.

3)  To add to the list of words, modify the appropriate *.json file.
    Append something like the following to the "standard" section of the file:
    
        "goodbye": "fare thee well"
    
    WARNING: There must be a comma between entries, but not after the last one.
    
*/
