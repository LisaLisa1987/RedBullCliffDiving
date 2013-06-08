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
}, false );

