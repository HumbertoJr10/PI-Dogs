
export function isUrl(s) {   
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
}

export function validationErrors (form) {
    let errors = {}

    if (!form.name) {
        errors.name = 'Must include a name'
    }

    if (form.heightMin*1<1) {
        errors.heightMin = 'Only positive Numbers'
    }

    if (form.heightMax*1<1) {
        errors.heightMax = 'Only positive Numbers'
    }

    if (form.weightMin*1<1) {
        errors.weightMin = 'Only positive Numbers'
    }

    if (form.weightMax*1<1) {
        errors.weightMax = 'Only positive Numbers'
    }

    if (form.heightMin*1>form.heightMax) {
        errors.heightMin = 'The minimum must be less than the maximum'
    }

    if (form.weightMin*1>form.weightMax) {
        errors.weightMin = 'The minimum must be less than the maximum'
    }

    if (!form.weightMin) {
        errors.weightMin = 'Must include a weight Min'
    }

    if (!form.weightMax) {
        errors.weightMin = 'Must include a weight Max'
    }

    if (!form.heightMin) {
        errors.heightMin = 'Must include a height Min'
    }

    if (!form.heightMax) {
        errors.heightMax = 'Must include a height Max'
    }

    if (!form.life_span) {
        errors.life_span = 'Must include a life span'
    }

    if (form.life_span*1<1) {
        errors.life_span = 'Life span must be minimum 1'
    }

    if (!isUrl(form.image)) {
        errors.image = 'image must be a URL'
    }

    if (!form.temperament) {
        errors.temperament = 'Must include a temperament'
    }

    return errors
}