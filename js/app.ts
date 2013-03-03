interface Dictionary {
    oWords: any;
    nWords: any;
}

class midievalDictionary implements Dictionary {
    oWords: any;
    nWords: any;
    constructor() {
        this.oWords     = new Array();
        this.nWords     = new Array();
        
        this.oWords[0]  = "do "; this.nWords[0] = "dost ";
        this.oWords[1]  = "you are"; this.nWords[1] = "thou art";
        this.oWords[2]  = "you"; this.nWords[2] = "ye";
        this.oWords[3]  = "where"; this.nWords[3] = "whither";
        this.oWords[4]  = "there"; this.nWords[4] = "thither";
        this.oWords[5]  = "here"; this.nWords[5] = "hither";
        this.oWords[6]  = "will"; this.nWords[6] = "wilt";
        this.oWords[7]  = "later"; this.nWords[7] = "anon";
        this.oWords[8]  = "perhaps"; this.nWords[8] = "perchance";
        this.oWords[9]  = "maybe"; this.nWords[9] = "mayhap";
        this.oWords[10] = "you say"; this.nWords[10] = "say you";
        this.oWords[11] = "alright"; this.nWords[11] = "splendid";
        this.oWords[12] = "has"; this.nWords[12] = "hath";
        this.oWords[13] = "morning"; this.nWords[13] = "morrow";
        this.oWords[14] = " day"; this.nWords[14] = " den";
        this.oWords[15] = "evening"; this.nWords[15] = "e'en";
        this.oWords[16] = "gentlemen"; this.nWords[16] = "good gentles";
        this.oWords[17] = "beautiful"; this.nWords[17] = "beauteous";
        this.oWords[18] = "yes"; this.nWords[18] = "yea";
        this.oWords[19] = "no"; this.nWords[19] = "nay";
        this.oWords[20] = "why"; this.nWords[20] = "wherefore";
        this.oWords[21] = "ask you"; this.nWords[21] = "bid you";
        this.oWords[22] = "please"; this.nWords[22] = "prithee";
        this.oWords[23] = "thank you"; this.nWords[23] = "grammarcy";
        this.oWords[24] = "i think"; this.nWords[24] = "methinks";
        this.oWords[25] = "swear"; this.nWords[25] = "troth";
        this.oWords[26] = "truly"; this.nWords[26] = "verily";
        this.oWords[27] = "long"; this.nWords[27] = "goodly length";
        this.oWords[28] = "dont know"; this.nWords[28] = "know not";
        this.oWords[29] = "don't know"; this.nWords[29] = "know not";
        this.oWords[30] = "nothing"; this.nWords[30] = "naught";
        this.oWords[31] = "goodbye"; this.nWords[31] = "fare thee well";
    }
}

function toTranslated(line: string, dic: Dictionary) {
    var newLine = line.toLowerCase();
    for (var i = 0; i < dic.oWords.length; i++) {
        var newLine = newLine.replace(dic.oWords[i].toLowerCase(), dic.nWords[i].toLowerCase());
    }
    return newLine;
}

var midDic = new midievalDictionary();
console.log(midDic.oWords.length);
console.log(toTranslated("How are you doing today?",midDic));