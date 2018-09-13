var nickname;
function newUser(){
    var data = new FormData();
    data.append("data" , '{"user": "' + nickname +'","boolean": [false,false,false,false,true,true,false,true,false,false,true]}');
    data.append("user" , nickname);
    var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
    xhr.open( 'post', 'upload.php', true );
    xhr.send(data);
}

function showQuestions(){
    
}

function fileExists(){
    var control = true;
    nickname = document.getElementById('input').value;
    var http = new XMLHttpRequest();
    http.open('HEAD', 'users/' + nickname + '.json', false);
    http.send();
    console.log(http.status!=404);
    return http.status!=404;
}

function checkUsername(){
    $("#content").text('Comprobando...');
    setTimeout(console.log(), 3000);
    var control = fileExists();
    if(control == true){
        $("#content").text('Nick de usuario no disponible');
    } else {
        $("#content").text('Nick de usuario disponible');
        setTimeout(console.log(), 3000);
        showQuestions();
    }
}