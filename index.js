<script>

    var tempObj = {
        "928-445-9233":"928-123-4567",
        "(928)-123-4567":"(928)-198-7654",
        "132-456-7890":"098-765-4321"
    }


    function changeNumberOnDom(replaceNumberObj){
        for(let key in replaceNumberObj){
            document.body.innerHTML = document.body.innerHTML.split(key).join(replaceNumberObj[key]);
        }
    }

    changeNumberOnDom(tempObj); 

    


    
    // allNumberPatterns();


    function loadDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            console.log("this.responseText::",this.responseText);
            changeNumberOnDom(tempObj); 
            // document.getElementById("replaceme").innerHTML = this.responseText;
        }
      };
      
      xhttp.open("GET", "http://localhost:1337/auth/sampleScrapApi?url="+window.location.href, true);
      
      xhttp.send();
    }
</script>

</body>
</html>
