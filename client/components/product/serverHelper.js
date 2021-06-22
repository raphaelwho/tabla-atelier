var axios = require('axios');

const getActiveProductInfo = function() {
    return new Promise((res, rej) => {
        axios.get('http://localhost:3000/active-product')
            .then((data) => {
                res(data.data);
            })
            .catch(() => {
                rej("Failed to get Product Data");
            });
    });
}

const getActiveProductStyles = function () {
    return new Promise((res, rej) => {
        axios.get('http://localhost:3000/active-product-styles')
            .then((data) => {
                res(data.data);
            })
            .catch(() => {
                rej("Failed to get Product Styles");
            });
    });
}
module.exports = {
    getActiveProductInfo: getActiveProductInfo,
    getActiveProductStyles: getActiveProductStyles,
}