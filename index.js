var btn = document.querySelector("button");
var paragraph = document.querySelector("p");
var resultSpan = document.querySelector("span");
var inputField = document.querySelector("input");
var add20 = function (age) {
    return age + 20;
};
if (btn !== null && inputField !== null && resultSpan !== null && paragraph !== null) {
    btn.onclick = function () {
        var userAge = inputField.value;
        var resultingAge = add20(parseInt(userAge));
        resultSpan.innerText = resultingAge.toString();
        paragraph.removeAttribute("hidden");
    };
}
