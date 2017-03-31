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
            if(object.energy_min){
                base_url += "energy-min=" + object.energy_min + "&";
            }
            if(object.energy_max){
                base_url += "energy-max=" + object.energy_max + "&";
            }
            if(object.impact_e_min){
                base_url += "impact-e-min=" + object.impact_e_min + "&";
            }
            if(object.impact_e_max){
                base_url += "impact-e-max=" + object.impact_e_max + "&";
            }
            if(typeof object.vel_min === 'number'){
                base_url += "vel-min=" + object.vel_min + "&";
            }
            if(typeof object.vel_max === 'number'){
                base_url += "vel-max=" + object.vel_max + "&";
            }
            if(typeof object.alt_min === 'number'){
                base_url += "alt-min=" + object.alt_min + "&";
            }
            if(typeof object.alt_max === 'number'){
                base_url += "alt-max=" + object.alt_max + "&";
            }
            if(typeof object.req_loc === 'boolean'){
                base_url += "req-loc=" + object.req_loc + "&";
            }
            if(typeof object.req_alt === 'boolean'){
                base_url += "req-alt=" + object.req_alt + "&";
            }
            if(typeof object.req_vel === 'boolean'){
                base_url += "req-vel=" + object.req_vel + "&";
            }
            if(typeof object.req_vel_comp === 'boolean'){
                base_url += "req-vel-comp=" + object.req_vel_comp + "&";
            }
            if(typeof object.vel_comp === 'boolean'){
                base_url += "vel-comp=" + object.vel_comp + "&";
            }
            if(typeof object.sort === 'string'){
                base_url += "sort=" + object.sort + "&";
            }
            if(typeof object.limit === 'number'){
                base_url += "limit=" + object.limit + "&";
            }

        }
        req_url = base_url;
        return helpers.dispatch_http_get(req_url.slice(0, -1));
    },
    nhats(object){
        let base_url = "https://ssd-api.jpl.nasa.gov/nhats.api?";
        let req_url = "";
        if(helpers.isEmpty(object)){
            req_url = base_url;
        }else{
            if(object.dv){
                base_url += "dv=" + object.dv + "&";
            }
            if(object.dur){
                base_url += "dur=" + object.dur + "&";
            }
            if(object.stay){
                base_url += "stay=" + object.stay + "&";
            }
            if(object.launch){
                let first = object.launch.substring(0, 4);
                let last =  object.launch.substring(5);
                let middle = object.launch.substring(4,5);
                if(middle === '-'){
                    try{
                        helpers.validate_year(first);

                    }
                    catch(e){
                        throw "Date range must be in the format YYYY-YYYY";
                    }
                    try{
                        helpers.validate_year(last);
                    }
                    catch(e){
                        throw "Date range must be in the format YYYY-YYYY";
                    }
                    base_url += "launch=" + object.launch + "&";
                }
                else{
                    throw "Date range must be in the format YYYY-YYYY";
                }
            }
            if(object.h){
                base_url += "h=" + object.h + "&";
            }
            if(object.occ){
                base_url += "occ=" + object.occ + "&";
            }
            if(object.spk){
                base_url += "spk=" + object.spk + "&";
            }
            if(object.des){
                base_url += "des=" + object.des + "&";
            }
            if(object.plot){
                base_url += "plot=" + object.plot + "&";
            }
        }

        req_url = base_url;
        return helpers.dispatch_http_get(req_url.slice(0, -1));

    },
    sentry(){

    },

};
module.exports = ssd;

