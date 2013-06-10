$(function(){

    myVid=document.getElementById("ourvideo");
    myVid.controls=true;


    var popcorn = Popcorn( "#ourvideo" );
    console.log("Popcorn: " + popcorn);
    popcorn.footnote({
        start: 1,
        end: 3,
        target: "footnote",
        text: "Pop!"
    }); 

    Popcorn.xhr({
 
        url: "http://localhost:8080/LMF/sparql/select?query=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+lmftypes%3A+%3Chttp%3A%2F%2Fwww.newmedialab.at%2Flmf%2Ftypes%2F1.0%2F%3E%0D%0APREFIX+sioc%3A+%3Chttp%3A%2F%2Frdfs.org%2Fsioc%2Fns%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dcat%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0D%0APREFIX+yt%3A+%3Chttp%3A%2F%2Fgdata.youtube.com%2Fschemas%2F2007%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+context%3A+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fcontext%2F%3E%0D%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0D%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+local%3A+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+mao%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fma-ont%23%3E%0D%0APREFIX+ldp%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fldp%23%3E%0D%0ASELECT+*+WHERE+%7B%0D%0A++%3Fs+dc%3Aidentifier+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2FMI201003310017%2Fmusiclist%3E+.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Fnumber%3E+%3FNo.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Ftrack_id%3E+%3FTrackID.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2FtimeIn%3E+%3FTimeIn.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2FtimeOut%3E+%3FTimeOut.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Fduration%3E+%3FDuration.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Fuse%3E+%3FUse.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Fartist%3E+%3FArtist.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Fcomposer%3E+%3FComposer.%0D%0A++%3Fs+dc%3Apublisher+%3FPublisher.++%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Frecord_label%3E+%3FRecordLabel.%0D%0A%7D%0D%0A&output=json",
        dataType: "json",
        success: function(data) {
            console.log("Data: " + data);
       }
    });

     /*Popcorn.getJSONP(
 
    "http://api.geonames.org/postalCodeLookupJSON?postalcode=6600&country=AT&username=demo?callback=jsonp",

       function( data ) {
            console.log("Data: " + data);
        }
     );*/
});

