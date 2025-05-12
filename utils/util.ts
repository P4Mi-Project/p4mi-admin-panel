/**
 * provides flag image based on the country code.
 * @param country_code 
 * @returns url for country flag
 */
function get_flag_by_country_code(country_code:string):string {
    const base_url = "https://flagcdn.com/256x192"
    return base_url + "/"+ country_code.toLowerCase() + ".png"
}

export {
    get_flag_by_country_code
}