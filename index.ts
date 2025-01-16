let answeredAge:(string | null) = prompt(
    "Svara din ålder och jag skall berätta hur gammal du är om 20 år"
);
const addTwenty = (age:number): number => {
    return age + 20;
};

if(answeredAge!== null) {
    let resultingAge = addTwenty(parseInt(answeredAge));
    alert("Du kommer vara: " + resultingAge + " år :)");
}

