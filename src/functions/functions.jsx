export let getOrientation = () => {
    // Прослушка события смены ориентации
    let a
    window.addEventListener("orientationchange", function () {
        a = window.orientation
    }, false);
    console.log(a)
}