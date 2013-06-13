$(function(){

    myVid=document.getElementById("ourvideo");
    myVid.controls=true;

    console.log(myVid.src);



    var popcorn = Popcorn("#ourvideo");

    getDataDescription();
    getDataMusic();
    getDataShotlist();

    function getDataDescription(redirectUrl) {
        Popcorn.xhr({

            url: "http://localhost:8080/LMF/sparql/select?query=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+lmftypes%3A+%3Chttp%3A%2F%2Fwww.newmedialab.at%2Flmf%2Ftypes%2F1.0%2F%3E%0D%0APREFIX+sioc%3A+%3Chttp%3A%2F%2Frdfs.org%2Fsioc%2Fns%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dcat%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0D%0APREFIX+yt%3A+%3Chttp%3A%2F%2Fgdata.youtube.com%2Fschemas%2F2007%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+context%3A+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fcontext%2F%3E%0D%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0D%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+local%3A+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+mao%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fma-ont%23%3E%0D%0APREFIX+ldp%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fldp%23%3E%0D%0ASELECT+*+WHERE+%7B%0D%0A++%3Fs+dc%3Aidentifier+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2FMI201003310017%2Ftranscripts%3E+.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2FtimeIn%3E+%3FTimeIn.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Fwho%3E+%3FWho.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Fspoken_words%3E+%3FSpokenWords.+%0D%0A%7D%0D%0AORDER+BY+%3FTimeIn&output=json",
            dataType: "json",

            success: function(data) {               
                for(var i = 0; i<data.results.bindings.length; i++) {
                    popcorn.footnote({
                        start: data.results.bindings[i].TimeIn.value,
                        //end: data.results.bindings[i].TimeOut.value,
                        target: "mainNote",
                        text: "<b>Speaker: </b>" + data.results.bindings[i].Who.value + "<br><b>Transcription: </b>" + data.results.bindings[i].SpokenWords.value + "<br/>"
                    }); 
                }
            }
        });
    }

    function getDataMusic(redirectUrl) {
        Popcorn.xhr({
            url: "http://localhost:8080/LMF/sparql/select?query=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+lmftypes%3A+%3Chttp%3A%2F%2Fwww.newmedialab.at%2Flmf%2Ftypes%2F1.0%2F%3E%0D%0APREFIX+sioc%3A+%3Chttp%3A%2F%2Frdfs.org%2Fsioc%2Fns%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dcat%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0D%0APREFIX+yt%3A+%3Chttp%3A%2F%2Fgdata.youtube.com%2Fschemas%2F2007%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+context%3A+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fcontext%2F%3E%0D%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0D%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+local%3A+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+mao%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fma-ont%23%3E%0D%0APREFIX+ldp%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fldp%23%3E%0D%0ASELECT+*+WHERE+%7B%0D%0A++%3Fs+dc%3Aidentifier+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2FMI201003310017%2Fmusiclist%3E+.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Fnumber%3E+%3FNo.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Ftrack_id%3E+%3FTrackID.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2FtimeIn%3E+%3FTimeIn.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2FtimeOut%3E+%3FTimeOut.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Fduration%3E+%3FDuration.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Fuse%3E+%3FUse.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Fartist%3E+%3FArtist.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Fcomposer%3E+%3FComposer.%0D%0A++%3Fs+dc%3Apublisher+%3FPublisher.++%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2Frecord_label%3E+%3FRecordLabel.%0D%0A%7D%0D%0A&output=json",
            dataType: "json",

            success: function(data) {
                for(var i = 0; i<data.results.bindings.length; i++) {
                    popcorn.footnote({
                        start: convertTime(data.results.bindings[i].TimeIn.value),
                        end: convertTime(data.results.bindings[i].TimeOut.value),
                        target: "songNote",
                        text: "<b>Artist: </b>" + data.results.bindings[i].Artist.value + "<br><b>Composer: </b>" + data.results.bindings[i].Composer.value + 
                              "<br> <b>Record Label: </b>" + data.results.bindings[i].RecordLabel.value + "<br/><b>Duration: </b>" + data.results.bindings[i].Duration.value + " sec."
                    }); 
                }
            }
        });
    }

    function getDataShotlist(redirectUrl) {
        Popcorn.xhr({
            url: "http://localhost:8080/LMF/sparql/select?query=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+lmftypes%3A+%3Chttp%3A%2F%2Fwww.newmedialab.at%2Flmf%2Ftypes%2F1.0%2F%3E%0D%0APREFIX+sioc%3A+%3Chttp%3A%2F%2Frdfs.org%2Fsioc%2Fns%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dcat%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0D%0APREFIX+yt%3A+%3Chttp%3A%2F%2Fgdata.youtube.com%2Fschemas%2F2007%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+context%3A+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fcontext%2F%3E%0D%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0D%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+local%3A+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+mao%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fma-ont%23%3E%0D%0APREFIX+ldp%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fldp%23%3E%0D%0ASELECT+*+WHERE+%7B%0D%0A++%3Fs+dc%3Aidentifier+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2FMI201003310017%2Fshotlist%3E+.%0D%0A++%3Fs+dc%3Adate+%3FDateOfProduction.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2FtimeIn%3E+%3FTimeIn.%0D%0A++%3Fs+%3Chttp%3A%2F%2Flocalhost%3A8080%2FLMF%2Fresource%2FtimeOut%3E+%3FTimeOut.%0D%0A++%3Fs+dc%3Adescription+%3FDescription.%0D%0A%7D&output=json",
            dataType: "json",

            success: function(data) {
                for(var i = 0; i<data.results.bindings.length; i++) {
                    popcorn.footnote({
                        start: data.results.bindings[i].TimeIn.value,
                        end: data.results.bindings[i].TimeOut.value,
                        target: "shotlistNote",
                        text: "<b>Date of Production: </b>" + data.results.bindings[i].DateOfProduction.value + "<br><b>Description: </b>" + data.results.bindings[i].Description.value  
                    }); 
                }
            }
        });
    }

    function convertTime(time) {
        timeArray = time.split(':');
        return "00:0" + timeArray[0] + ":" + timeArray[1];
    }
});

