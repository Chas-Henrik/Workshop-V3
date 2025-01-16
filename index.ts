const btn = document.querySelector("button");
const paragraph = document.querySelector("p");
const resultSpan = document.querySelector("span");
const inputField = document.querySelector("input");

const add20 = (age: number): number => {
    return age + 20;
};

if(btn !== null && inputField !== null && resultSpan !== null && paragraph !== null) {
    btn.onclick = () => {
        const userAge:string = inputField.value;
        const resultingAge:number = add20(parseInt(userAge));
        resultSpan.innerText = resultingAge.toString();
        paragraph.removeAttribute("hidden");
    };
}
