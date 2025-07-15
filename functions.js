function test(){
    console.log("hii")
}

function addDynamicContent(){
    let data = {
        title: "הוסף תוכן דינמי",
        description: "סניפט זה מוסיף תוכן דינמי לדף."
    }
    document.body.innerHTML += '<p>תוכן נוסף דינמית</p>';
}

function changeBackgroundColor(){
    let data = {
        title: "שנה צבע רקע",
        description: "סניפט זה משנה את צבע הרקע של הדף."
    }
    document.body.style.backgroundColor = 'lightblue';
}
