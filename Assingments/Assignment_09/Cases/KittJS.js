let Current_light = -1;
const light_count = 6;
let direction = "Right";
let ItervalId = null;

UpdateLight = () => {
    if (direction === "Right") {

        Current_light++;
        $(".light").css("background","gray");
        $(".light").eq(Current_light).css("background","red");
        $(".light").eq(Current_light-1).css("background","Hotpink");

        if (Current_light == light_count-1) {
            direction = "Left";
        }
    } else if (direction === "Left") {

        Current_light--;
        $(".light").css("background","gray");
        $(".light").eq(Current_light).css("background","red");
        $(".light").eq(Current_light+1).css("background","Hotpink");

        if (Current_light == 0) {
            direction = "Right";
        }
    }
}



$('#Start').on('click', function (){
    ItervalId = setInterval(UpdateLight,100);
});

$('#Stop').on('click', function (){
    clearInterval(ItervalId);
});