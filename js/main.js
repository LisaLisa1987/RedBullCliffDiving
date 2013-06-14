$(function(){

    //getting the video and make an instance of popcorn
    myVid=document.getElementById("ourvideo");
    myVid.controls=true;
    var popcorn = Popcorn("#ourvideo");
        
    //getting actual played video from acutal site
    var actualVideoSource = $('source').attr('src');

    //Getting Json Data from file (for requests)
    function parseVideoData() {
            var videoData = new Array();
            $.ajaxSetup({
                async: false
            });

            $.getJSON("data.json", function(data) {
                $.each(data.videoData, function(i, vidData) {
                    
                    videoData.push(vidData);
                });
            });
            return videoData;
        };

    videoData = parseVideoData();

    //searching for actual video id
    var currentVideoIndex = 0;
    for(var i = 0; i < videoData.length; i++) {
        if(videoData[i].id == actualVideoSource) {
            currentVideoIndex = i;
        }
    }

    getDataDescription(videoData[currentVideoIndex].descriptionUrl);
    getDataMusic(videoData[currentVideoIndex].musicUrl);
    getDataShotlist(videoData[currentVideoIndex].shotlistUrl);
    

    function getDataDescription(descriptionUrl) {
        Popcorn.xhr({
            url: descriptionUrl,
            dataType: "json",

            success: function(data) {               
                for(var i = 0; i<data.results.bindings.length; i++) {
                    if( i != data.results.bindings.length-1 )
                        timeOut = data.results.bindings[i+1].TimeIn.value;
                    else
                        timeOut = null
                    popcorn.footnote({
                        start: data.results.bindings[i].TimeIn.value,
                        end: timeOut,
                        target: "mainNote",
                        text: "<p><b>Speaker: </b>" + data.results.bindings[i].Who.value + "<br><b>Transcription: </b>" + data.results.bindings[i].SpokenWords.value + "</p>"
                    }); 
                }
            }
        });
    }

    function getDataMusic(musicUrl) {
        Popcorn.xhr({
            url: musicUrl,
            dataType: "json",

            success: function(data) {
                for(var i = 0; i<data.results.bindings.length; i++) {
                    popcorn.footnote({
                        start: convertTime(data.results.bindings[i].TimeIn.value),
                        end: convertTime(data.results.bindings[i].TimeOut.value),
                        target: "songNote",
                        text: "<br><b>Artist: </b>" + data.results.bindings[i].Artist.value + "<br><b>Composer: </b>" + data.results.bindings[i].Composer.value + 
                              "<br> <b>Record Label: </b>" + data.results.bindings[i].RecordLabel.value + "<br/><b>Duration: </b>" + data.results.bindings[i].Duration.value + " sec."
                    }); 
                }
            }
        });
    }

    function getDataShotlist(shotlistUrl) {
        Popcorn.xhr({
            url: shotlistUrl,
            dataType: "json",

            success: function(data) {
                for(var i = 0; i<data.results.bindings.length; i++) {
                    popcorn.footnote({
                        start: data.results.bindings[i].TimeIn.value,
                        end: data.results.bindings[i].TimeOut.value,
                        target: "shotlistNote",
                        text: "<p><b>Date of Production: </b>" + data.results.bindings[i].DateOfProduction.value + "<br><b>Description: </b>" + data.results.bindings[i].Description.value + "</p>" 
                    }); 
                }
            }
        });
    }

    //Converting time because "RedBullPopcornMusiclist.rdf" has wrong formatation
    function convertTime(time) {
        timeArray = time.split(':');
        return "00:0" + timeArray[0] + ":" + timeArray[1];
    }
});

