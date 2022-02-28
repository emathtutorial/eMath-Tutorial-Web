var list = document.querySelector(".row");
var ref = firebase.database().ref("Gallery_data");

ref.on("value", function(snapshot) {
    var childData = snapshot.val();
    
    if(snapshot.exists()){
     
        snapshot.forEach(function(childSnapshot) {
        var childUrl= childSnapshot.val();
        console.log(childUrl);
        list.innerHTML +='<div class="col-12 col-md-6 col-lg-4"><div class="course__thumb" style="padding-bottom: 40px;"><img src="'+childUrl+'" alt="image" style="width:400px; height:340px;"></div></div>';
      });
             
    }
      
});