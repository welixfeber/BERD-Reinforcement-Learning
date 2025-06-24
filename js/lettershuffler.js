 jQuery( document ).ready(function() {
  //  var words = ["Challenges", "Attitudes", "Perceptions", "Trends", "Issues"];
    var words = jQuery(".test").data("words").split(",");
    
    if(jQuery(".test").data("shuffle")===true){
        words = shuffle(words);
    }
    
    var activeWord = 0;
    var word = words[0];
    var maxIterationLetter = 4;
    var iteration = [];
    var countIteration = 0;
    var maxWlength=maxWordLength(words);
   
   
    function maxWordLength(a){
        var max=0;
        for (i = 0; i < a.length;  i++){
            max=Math.max(max,a[i].length);
            console.log();
        }      
        return max;
    }


    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }



    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';//0123456789@!"§<>|$%&/()=?{[]}*#+';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
        }
        return result;
    }
    var timer;
    function starttimer() {
        timer = window.setTimeout(changeletters, 200);
        
    }
    function startdelay() {
        timer = window.setTimeout(changeWord, 2000);
    }

    function initWord(){
        var exploded = word.split('');
        
        var output = "";
        for (i = 0; i < maxWlength; i++) {
            if (i>=word.length){
               output += "<span>\xa0</span>"; 
            }else{
            output += "<span>" + exploded[i] + "</span>";
        
            }
        }
       
        jQuery(".test").html(output);
        word = words[1];
        activeWord=1;
        
    }
    function resetWord() {
        var exploded = word.split('');
        var output = "";
        for (i = 0; i < exploded.length; i++) {
           // output += "<span>" + makeid(1) + "</span>";
        }
        //jQuery(".test").html(output);
        createIterationDist();
        activeL = 0;
      //  jQuery(".test span").first().addClass("active");
    }
    function createIterationDist() {
        for (i = 0; i < word.length; i++) {
            iteration[i] = (i + 1) * (maxIterationLetter);
        }
        //iteration=shuffle(iteration);
        //console.log(iteration);
        countIteration = 0;
    }
  //  initContainer();
    initWord();
    resetWord();
    //jQuery(".test span").first().addClass("active");
    var activeL = 0;
    
    function changeletters() {
        var finished = true;
        jQuery(".test span").each(function (i) {
            //if (word.charAt(i) !== jQuery(this).html()) {
            if (jQuery(this).hasClass('active')){
                 jQuery(this).removeClass("active");
                 jQuery(this).next().addClass("active");
                
                
                 if (i>=word.length){
                   //  console.log("hey");
                     out="\xa0";
                 }
                 else{
                    out=word.charAt(i);
                 }
                 jQuery(this).html(out);
                 jQuery(this).addClass("text1-accent");
                 if (i!==jQuery(".test span").length){
                     finished=false;
                 }
                 return false;
            }
            
            
        });
        if (finished) {
            //do what when finish
            window.clearTimeout(timer);
            startdelay();
        } else {
            window.clearTimeout(timer);
            starttimer();
        }
       
    }
    function changeWord() {
        if (activeWord < words.length - 1) {
            activeWord++;
        } else {
            activeWord = 0;
        }
        word = words[activeWord];
        resetWord();
        window.clearTimeout(timer);
        starttimer();
        jQuery(".test span").first().addClass("active");
    }
   //  startTimer();
    startdelay();
    
    
 });