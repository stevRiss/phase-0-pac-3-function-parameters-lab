function introduction(name){
    const whatsName = `Hi, my name is ${name}.`
    
    return whatsName;
}
introduction("Josh")

function introductionWithLanguage(name, language){
    const whoWhat = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return whoWhat;
}
introductionWithLanguage("Josh", "Ember.js")

function introductionWithLanguageOptional(name, language="JavaScript"){
    const whoWhat = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return whoWhat;
}
