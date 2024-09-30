// **DOM**

// **FUNCTIONS**
function Append(){

}
function Clear(){
    txt1.value = '';
    for (let i = 1; i <= 7; i++) {
        document.getElementById(`txt${i}`).value = '';
    }
}