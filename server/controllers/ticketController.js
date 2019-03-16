const sampleData = require("../../models/sampleData");
const validators = require("../../helpers/validators");

module.exports = {
  getData(req, res) {
    if (!validators.validateGetSchema(req.body)){
        return res.status(404).send({
            success: false,
            message: 'Invalid request',
        });
    }

    if (validators.isEmpty(sampleData)){
        return res.status(404).send({
            success: false,
            message: 'Can not read data',
        });
    }

    let result = sampleData;

    if (req.body.searchBy !== undefined && req.body.searchBy.length > 0){
        result = result.filter(o => {
            for (let p in o) {
                if (o[p].toString().toLowerCase().indexOf(req.body.searchBy.toLowerCase()) !== -1){
                    return true;
                }
            }

            return false;
        });
    }

    if (validators.isEmpty(result)){
        return res.status(200).send({
            success: true,
            data: result,
            totalCount: 0,
        });
    }

    if (req.body.orderBy !== undefined && req.body.orderBy.length > 0) {
        let isNumeric = true;

        if (!(typeof(result[0][req.body.orderBy]) === "number")){
            isNumeric = false;
        }

        result.sort((a, b) => {
            if (isNumeric){
                return req.body.isAscending ? a[req.body.orderBy] - b[req.body.orderBy] : b[req.body.orderBy] - a[req.body.orderBy];
            }

            let result = 0;
            if (a[req.body.orderBy].toLowerCase() > b[req.body.orderBy].toLowerCase()){
                result = 1;
            } else if (a[req.body.orderBy].toLowerCase() < b[req.body.orderBy].toLowerCase()) {
                result = -1;
            } else {
                result = 0;
            }

            return req.body.isAscending ? result : -1 * result;
        });
    }

    // page no starts at 0
    const startIndex = req.body.pageSize * req.body.pageNo;
    const endIndex = startIndex + req.body.pageSize;

    return res.status(200).send({
        success: true,
        data: result.slice(startIndex, endIndex),
        totalCount: result.length, 
    });
  }
};