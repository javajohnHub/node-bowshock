let bowshock = require('./index');
const {of } = require('rxjs');
//with specific date and tags - For apod all args are optional
bowshock.apod("2017-03-11").subscribe((data) => {
    data.then((dta) => {
        return dta
    })
});