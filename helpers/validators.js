module.exports = {
    validateObjectKey(object, key) {
        return key in object;
    },

    isEmpty(o) {
        return o === undefined || o.length === 0;
    },

    validateGetSchema(o) {
        const reqAttributes = ['searchBy', 'orderBy', 'pageSize', 'pageNo', 'isAscending'];

        for (let att of reqAttributes){
            if (!(att in o)) {
                return false;
            }
        }

        return true;
    },

    comparator(a, b) {
        if (a > b){
            return 1;
        } else if (a < b){
            return -1;
        } else {
            return 0;
        }
    }
};