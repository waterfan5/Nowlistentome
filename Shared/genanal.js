function GetPatternsInString_old(sInput) {
    sInput = sInput.toUpperCase(); // UCASE compare
    sInput = sInput.replace(/\n/g, "");
    var output = [];
    var nMin = 4;

    for (let j = 0; j < sInput.length-nMin; j++) {
        subPat = sInput.substr(j, nMin);
        foundAt = sInput.indexOf(subPat, j + nMin);
        if (foundAt > 0) {
            i = 0;
            while (sInput.substr(j + nMin + i, 1) == sInput.substr(foundAt + nMin + i, 1) && (j + nMin + i) < foundAt) i++;
            output.push(sInput.substr(j, nMin + i));
            j += nMin + i - 1;
        }
    }


    return (output);
}


function GetPatternsInString(str) {
    let minLength = 4;
    let patterns = {};

    // Find all repeating patterns of length >= 4
    for (let length = minLength; length <= str.length / 2; length++) {
        for (let i = 0; i <= str.length - length; i++) {
            let substr = str.substring(i, i + length);
            let regex = new RegExp(substr, 'g');
            let matches = [...str.matchAll(regex)];

            // Store patterns with more than one occurrence
            if (matches.length > 1) {
                patterns[substr] = matches.length;
            }
        }
    }

    // Remove smaller patterns if part of larger patterns with same or more occurrences
    let finalPatterns = [];
    Object.keys(patterns).forEach(pattern => {
        let isPartOfLarger = false;

        Object.keys(patterns).forEach(largerPattern => {
            if (largerPattern.includes(pattern) && patterns[largerPattern] >= patterns[pattern] && largerPattern !== pattern) {
                isPartOfLarger = true;
            }
        });

        if (!isPartOfLarger) {
            finalPatterns.push(pattern);
        }
    });

    return finalPatterns;
}


function GetKeywordsArrayInString(sInput, aKeywords) {
    var output = [];
    for (let j = 0; j < sInput.length; j++) {
        for (let i = 0; i < aKeywords.length; i++) {
            if (sInput.substr(j, aKeywords[i].length) == aKeywords[i]) {
                //Found the exact word
                output.push(aKeywords[i]);
                j = j + aKeywords[i].length - 1; // skip letters in sentence
                break;
            }
        }
    }
    return (output);
}
function GetKeywordsInString(sInput, sKeywords) {
    var aKeywords = sKeywords.split(",");
    
    sInput = sInput.replace(/\n/g, "");
    sInput = sInput.toUpperCase(); // UCASE compare
    for (let i = 0; i < aKeywords.length; i++) {
        aKeywords[i] = aKeywords[i].trim().toUpperCase(); //Kill spaces and UCASE
    }
    output = GetKeywordsArrayInString(sInput, aKeywords);
    
    return (output);
}

