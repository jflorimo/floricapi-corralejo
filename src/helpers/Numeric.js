
/*
https://stackoverflow.com/questions/10599933/convert-long-number-into-abbreviated-string-in-javascript-with-a-special-shortn
Convert long number into abbreviated string
example:
123                  "123"
1234                "1.2k"
12345                "12k"
123456              "0.1m"
1234567             "1.2m"
12345678             "12m"
123456789           "0.1b"
1234567899          "1.2b"
12345678999          "12b"
 */
export const abbreviateNumber = (value) => {
    let newValue = value;
    if (value >= 1000) {
        const suffixes = ["", "k", "m", "b", "t"];
        const suffixNum = Math.floor(("" + value).length / 3);
        let shortValue = '';
        for (let precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}
/*
Number with commas
https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
example:
0                           "0"
100                       "100"
1000                    "1,000"
10000                  "10,000"
100000                "100,000"
1000000             "1,000,000"
10000000           "10,000,000"
100000.123456  "100,000.123456"
 */
export const numberWithCommas = (value) => {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
