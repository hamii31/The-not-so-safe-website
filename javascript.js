function loading(){
    var count = 0;
    var p = document.getElementById("percentage");
    var bar = document.getElementById("bar");
    var innerBar = document.createElement("div");
    bar.style.border = "1px solid black";
    bar.appendChild(innerBar);

    var time = 100;

    var d = document.getElementById("res");

    for(let i = 0; i <= 100; i++){
        setTimeout(() => {
            p.innerHTML = i + "%";
            innerBar.innerHTML += "|";

            switch(i){
                case 25:
                    d.innerHTML = "Stealing your data, please wait!";
                    break;
                case 55:
                    d.innerHTML = "Nice personal information you have there!";
                    break;
                case 75:
                    d.innerHTML = "Almooost doneeeeeeee";
                    break;
                case 100:
                    p.innerHTML = "Loading Complete!";
                    setTimeout(() => {
                    loadData();
                     }, 200);
                break;
            }
        }, time);
        time += 100;
    }

    function loadData(){
        var d = document.getElementById("res");
        d.innerHTML = "Glad you waited!";

        let items = document.getElementById("items");

        let info = document.createElement("p");
        info.append("Now try to crack my cipher!");
        items.appendChild(info);

        let secret = document.createElement("p");
        // My Cipher
        secret.append(".-.-. ..-.. .. .-_. --- .. .-_. --- .-. --- .-_. ._._. ._. ._-. ._._. .-.-. --- ..-.-.. ._._. .-_. .-_. .-. .-_ ._._. - --- .. ._._ --- .-_._-_. . .___. --- ._. .-. ..-_.. --- _-_ ._._. ._. .. ._.- ..-.. ._._. ._-. --- .. .-.-. _. --- .-_._-_. . .___. --- .-_. ..-.. . .___. .__. _-_ --- .-.-. .-_._-_. ._.- ._._. --- .-_. ._._. ._. ._-. ._._. .-.-. ..---.. ._._. .-_._-_. --- .. ..-_.. --- .-.-. ..-.. ._._. --- ._._. ..-.-.. ._.- .-.-. .-_._-_. --- ._._ .. ._._. .__. _-_");
        items.appendChild(secret);

        let input = document.createElement("input");
        let button = document.createElement("button");
        button.append("Check");
        button.addEventListener("click", check);

        items.appendChild(input);
        items.appendChild(button);

    }

    function check(){
        var n = document.getElementsByTagName("input")[0].value;
        let res = document.createElement("p");
        let items = document.getElementById("items");
        count++;

        if(n === "secretKey"){
           
            res.append("Congratulations! You totally cracked my cipher! ;)");
            items.appendChild(res);
            loadNewPage();
        }
        else{
            if(count == 4){
                res.append("Pssst, the answer is secretKey");
                items.appendChild(res);
            }
            else if(count == 5){
                res.append("C'mon, it's secretKey");
                items.appendChild(res);
            }
            else{
    
                if(count == 1){
                    res.append("Nuh-uh!");
                    items.appendChild(res);
                }
                else if(count == 2){
                    res.append("Please try again!");
                    items.appendChild(res);
                }
                else if(count == 3){
                    res.append("You almost got it!");
                    items.appendChild(res);
                }
            }
            
        }
       
    }
    function loadNewPage(){
        let items = document.getElementById("items");
        while (items.hasChildNodes()) {
            items.removeChild(items.firstChild);
          }
        let res = document.createElement("p");
        res.append("Here is your surprise!");
        items.appendChild(res);

        setTimeout(() =>{
            let button = document.createElement("button");
            button.innerHTML = '<a href="hidden.html" class="button">Click Me?</a>';
            items.appendChild(button);
        }, 1000);
    }
}
