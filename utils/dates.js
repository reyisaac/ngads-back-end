function modifyDate(date) {
    const month = monthFromName(date.split(" ")[1]);
    const day = date.split(" ")[2];
    const year = date.split(" ")[3];

    const newDate = month + '/' + OneDigitBellowTen(day) + '/' + year;
    
    return newDate;
}

function monthFromName(month){
    switch (month) {
        case 'Jan':
            return 1;
        case 'Feb':
            return 2;
        case 'Mar':
            return 3;
        case 'Apr':
            return 4;
        case 'May':
            return 5;
        case 'Jun':
            return 6;
        case 'Jul':
            return 7;
        case 'Aug':
            return 8;
        case 'Sep':
            return 9;
        case 'Oct':
            return 10;
        case 'Nov':
            return 11;
        case 'Dec':
            return 12;
        default:
            break;
    }
}

function OneDigitBellowTen(n) {
    if (n < 10) {
        return n.split('')[1];
    }
    else
        return n;
}

module.exports = modifyDate;