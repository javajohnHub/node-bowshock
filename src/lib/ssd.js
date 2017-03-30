const helpers = require('./helpers');

let ssd = {
    cad(object){
        let base_url = "https://ssd-api.jpl.nasa.gov/cad.api?";
        let req_url = "";
        if(helpers.isEmpty(object)){
            req_url = base_url;
        }else{
            if(object.date_min){
                try{
                    helpers.vali_date(object.date_min);
                    base_url += "date-min=" + object.date_min + "&";
                }
                catch(e){
                    throw "Date must be a string in the format of YYYY-MM-DD";
                }
            }
            if(object.date_max){
                try{
                    helpers.vali_date(object.date_max);
                    base_url += "date-max=" + object.date_max + "&";
                }
                catch(e){
                    throw "Date must be a string in the format of YYYY-MM-DD";
                }
            }
            if(object.dist_min){
                base_url += "dist-min=" + object.dist_min+ "&";
            }
            if(object.dist_max){
                base_url += "dist-max=" + object.dist_max + "&";
            }
            if(typeof object.h_min === 'number'){
                base_url += "h-min=" + object.h_min + "&";
            }
            if(typeof object.h_max === 'number'){
                base_url += "h-max=" + object.h_max + "&";
            }
            if(typeof object.v_inf_min === 'number'){
                base_url += "v-inf-min=" + object.v_inf_min + "&";
            }
            if(typeof object.v_inf_max === 'number'){
                base_url += "v-inf-max=" + object.v_inf_max + "&";
            }
            if(typeof object.v_rel_min === 'number'){
                base_url += "v-rel-min=" + object.v_rel_min + "&";
            }
            if(typeof object.v_rel_max === 'number'){
                base_url += "v-rel-max=" + object.v_rel_max + "&";
            }
            if(typeof object.class === 'string'){
                base_url += "class=" + object.class + "&";
            }
            if(typeof object.pha === 'boolean'){
                base_url += "pha=" + object.pha + "&";
            }
            if(typeof object.nea === 'boolean'){
                base_url += "nea=" + object.nea + "&";
            }
            if(typeof object.comet === 'boolean'){
                base_url += "comet=" + object.comet + "&";
            }
            if(typeof object.neo === 'boolean'){
                base_url += "neo=" + object.neo + "&";
            }
            if(typeof object.kind === 'string'){
                base_url += "kind=" + object.kind + "&";
            }
            if(typeof object.spk === 'number'){
                base_url += "spk=" + object.spk + "&";
            }
            if(object.des){
                base_url += "des=" + object.des + "&";
            }
            if(typeof object.body === 'string'){
                base_url += "body=" + object.body + "&";
            }
            if(typeof object.sort === 'string'){
                base_url += "sort=" + object.sort + "&";
            }
            if(typeof object.limit === 'number'){
                base_url += "limit=" + object.limit + "&";
            }
            if(typeof object.fullname === 'boolean'){
                base_url += "fullname=" + object.fullname + "&";
            }
            }
            req_url = base_url;
        return helpers.dispatch_http_get(req_url.slice(0,-1));
    },
    fireballs(object){
        let base_url = "https://ssd-api.jpl.nasa.gov/fireball.api?";
        let req_url = "";
        if(helpers.isEmpty(object)){
            req_url = base_url;
        }else {
            if (object.date_min) {
                try {
                    helpers.vali_date(object.date_min);
                    base_url += "date-min=" + object.date_min + "&";
                }
                catch (e) {
                    throw "Date must be a string in the format of YYYY-MM-DD";
                }
            }
            if (object.date_max) {
                try {
                    helpers.vali_date(object.date_max);
                    base_url += "date-max=" + object.date_max + "&";
                }
                catch (e) {
                    throw "Date must be a string in the format of YYYY-MM-DD";
                }
            }

        }
        req_url = base_url;
        return helpers.dispatch_http_get(req_url.slice(0, -1));
    },
    nhats(){

    },
    sentry(){

    },

};
module.exports = ssd;
