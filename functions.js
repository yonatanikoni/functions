// ייצוא פונקציה רגילה
export function test(d) {
    console.log(d+5);
}

// ייצוא פונקציה להוספת תוכן
export function addDynamicContent() {
    let data = {
        title: "הוסף תוכן דינמי",
        description: "סניפט זה מוסיף תוכן דינמי לדף."
    };
    // וודא שקוד זה רץ רק בדפדפן
    if (typeof document !== 'undefined') {
        document.body.innerHTML += '<p>תוכן נוסף דינמית</p>';
    }
}

// ייצוא פונקציה לשינוי צבע
export function changeBackgroundColor() {
    let data = {
        title: "שנה צבע רקע",
        description: "סניפט זה משנה את צבע הרקע של הדף."
    };
    if (typeof document !== 'undefined') {
        document.body.style.backgroundColor = 'lightblue';
    }
}
