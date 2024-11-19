var qoutes=[
    {
    qoute : `“So many books, so little time.”`,
    auther : `― Frank Zappa`
},
    {
    qoute : `“You only live once, but if you do it right, once is enough.”`,
    auther : `― Mae West`
},
    {
    qoute : `“Be the change that you wish to see in the world.”`,
    auther : `― Mahatma Gandhi`
},
    {
    qoute : `"Life is like a box of chocolates. You never know what you're gonna get."`,
    auther : `— Forrest Gump`
},
    {
    qoute : "Sometimes maybe good sometimes maybe shit",
    auther : "— Gattuso"
},
{
    qoute : `“A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.”`,
    auther : `― George R.R. Martin`
}
];

var qouteElement = document.getElementById("qoute");
var autherElement = document.getElementById("auther");
function getQoute(){
    var random = Math.floor(Math.random()*(qoutes.length))
    if(qouteElement.innerHTML == qoutes[random].qoute)
    {
        getQoute();
    }
    else{
        
        qouteElement.innerHTML = qoutes[random].qoute;
        autherElement.innerHTML = qoutes[random].auther;
    }
    
};