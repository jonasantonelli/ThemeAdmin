angular.module('filters').filter('moment', function () {
    return function (value, formato) {
        if (value)
        {
            return moment(value).format(formato || 'DD/MM/YYYY');
        }
        else
        {
            return '';
        }
    };
});

angular.module('filters').filter('fromNow', function () {
    return function (value) {
        if (value)
        {
            return moment(value).fromNow();
        }
        else
        {
            return '';
        }
    };
});