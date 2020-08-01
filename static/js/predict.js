$("img").on("error", function () {
    $(this).attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=');
});

function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
}
$(document).ready(function () {
    $('.materialboxed').materialbox();
});