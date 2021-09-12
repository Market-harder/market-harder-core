function GetCompanyUrl(companyName) {

    return "";
}

function GetCompanyType(companyName) {

    return "";
}

function GetLinkedInUrl(companyName) {
    let linkedinUrl = "https://linkedin/company/";
    let formattedName;
    if (companyName.indexOf(" ") != -1) {
        for (let i = 0; i < companyName.length; ++i) {
            if (companyName[i] == " ") {
                linkedinUrl = linkedinUrl + "-";
            } else {
                linkedinUrl = companyName[i] + linkedinUrl;
            }
        }
    } else {
        formattedName = companyName;
    }
    return linkedinUrl + "/";
}

function GetAllProperties(companyName) {

}

// TODO: Add location
// TODO: Get contact info
function GetCompanyInfo(companyName) {
    let companyInfo = {};

    const SerpApi = require('google-search-results-nodejs');
    const search = new SerpApi.GoogleSearch("b023a0837b45dec258f50263fa0e05f6176746c5b035dcf59108ec48efec011e");

    const params = {
    engine: "google",
    q: companyName
    };

    const callback = function(data) {
        console.log(data['organic_results']);
        let results = data['organic_results'];
        if (!results.hasOwnProperty('knowledge_graph')) {
            GetAllProperties(companyName);
        } else {
            companyInfo['url'] = results['knowledge_graph'].hasOwnProperty('website') ? results['knowledge_graph']['website'] : '';
            if (results['knowledge_graph'].hasOwnProperty('profiles')) {
                companyInfo['linkedin'] = results['knowledge_graph']['profiles'].hasOwnProperty('LinkedIn') ? results['knowledge_graph']['profiles']['LinkedIn'] : GetLinkedInUrl(companyName);
                companyInfo['facebook'] = results['knowledge_graph']['profiles'].hasOwnProperty('Facebook') ? results['knowledge_graph']['profiles']['Facebook'] : '';
                companyInfo['instagram'] = results['knowledge_graph']['profiles'].hasOwnProperty('Instagram') ? results['knowledge_graph']['profiles']['Instagram'] : '';
                companyInfo['twitter'] = results['knowledge_graph']['profiles'].hasOwnProperty('Twitter') ? results['knowledge_graph']['profiles']['Twitter'] : '';
            } else {
                companyInfo['linkedin'] = GetLinkedInUrl(companyName);
                companyInfo['facebook'] = '';
                companyInfo['instagram'] =  '';
                companyInfo['twitter'] =  '';
            }
        }
        companyInfo['type'] = results['knowledge_graph'].hasOwnProperty('type') ? results['knowledge_graph']['type'] : '';
    };

    // Show result as JSON
    search.json(params, callback);

    companyInfo['url'] = GetCompanyUrl(companyName);


    return companyInfo;
}
