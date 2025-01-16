var answeredAge = prompt("Svara din ålder och jag skall berätta hur gammal du är om 20 år");
var addTwenty = function (age) {
    return age + 20;
};
if (answeredAge !== null) {
    var resultingAge = addTwenty(parseInt(answeredAge));
    alert("Du kommer vara: " + resultingAge + " år :)");
}
