class DEFAS {
    constructor(lang = "de") {
        this.baseUrl = "https://mobile.defas-fgi.de/beg/";
        this.lang = lang;
    }

    async stationByName(name) {
        let params = {
            language: this.lang,
            locationServerActive: 1,
            outputFormat: "XML",
            type_sf: "stop",
            coordOutputFormat: "WGS84",
            name_sf: name
        };
        let getParams = "";
        for (let attrname in params) {
            getParams += "&" + attrname + "=" + params[attrname];
        }
        return new Promise((resolve, reject)=>{
            resolve(getParams);
        });
    }
}