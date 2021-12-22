let year = prompt("Type a year to find the associated animal in the Chinese calendar.");

function chineseZodiac(year) {
    switch ((year - 4) % 12) {
        case 0:
            return 'Rat';

        case 1:
            return 'Ox';

        case 2:
            return 'Tiger';

        case 3:
            return 'Rabbit';

        case 4:
            return 'Dragon';

        case 5:
            return 'Snake';

        case 6:
            return 'Horse';

        case 7:
            return 'Goat';

        case 8:
            return 'Monkey';

        case 9:
            return 'Rooster';

        case 10:
            return 'Dog';

        case 11:
            return 'Pig';

    }
}

let zodiac = chineseZodiac(year);
document.getElementById('zodiac').textContent= (year +' is the year of the '+ zodiac);



    
    

