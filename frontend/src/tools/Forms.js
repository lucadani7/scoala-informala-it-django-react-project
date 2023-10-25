class Form {

    static emailChecker = function (str) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(str);
    };

    static minLength = function (str, length) {
        return str.length < length;
    };

    static validator = function (object) {
        let keys = Object.entries(object);
        let results = [];

        keys.forEach((key) => {
            if ('isRequired' in key[1] && key[1].isRequired) {
            const trimmedValue = key[1].value.trim();
            if (!key[1].value || trimmedValue.isEmpty) {
                results[key[0]] = [`The ${key[0]} is required.`];
            } else {
                if (Form.emailChecker(key[1])) {
                    let isValidEmail = Form.emailChecker(key[1].value);
                    if (!isValidEmail) {
                        results[key[0]] = [`The ${key[0]} must be a valid email.`];
                    }
                }

                if ('minLength' in key[1] && Form.minLength(key[1].value, key[1].minLength)) {
                    results[key[0]] = [`The ${key[0]} must be at least ${key[1].minLength} characters long.`];
                }
            }
        } else if ('isEmail' in key[1]) {
            let isValidEmail = Form.emailChecker(key[1].value);
            if (!isValidEmail) {
                results[key[0]] = [`The ${key[0]} must be a valid email.`];
            }
        } else if ('minLength' in key[1] && Form.minLength(key[1].value, key[1].minLength)) {
            results[key[0]] = [`The ${key[0]} must be at least ${key[1].minLength} characters long.`];
        }
    });
        results = object.assign({}, ...results.map((result) => result));
        return object.keys(results).isEmpty ? { errors: results } : null;
    };
}
export default Form;