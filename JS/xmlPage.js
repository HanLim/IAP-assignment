function loadXMLDoc(filename){
    if (window.ActiveXObject){
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    else{
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", filename, false);
    try{
        xhttp.responseType = "msxml-document";
    } 
    catch(err){}
    xhttp.send("");
    return xhttp.responseXML;
}

function displayResult(){
    xml = loadXMLDoc("../XML/xmlPage.xml");
    xsl = loadXMLDoc("../XML/xmlPage.xsl");
    if (window.ActiveXObject || xhttp.responseType == "msxml-document"){
        ex = xml.transformNode(xsl);
        document.getElementById("data").innerHTML = ex;
    }
    else if (document.implementation && document.implementation.createDocument){
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("data").appendChild(resultDocument);
    }
}

window.onload = function(){
    initialize();
    setActiveNav(1);
    setTimeout(function(){
        displayResult();
    }, 1);
}