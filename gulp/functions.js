function onError(err) {
    $.gp.notify.onError({
        title:    "Gulp",
        subtitle: "Failure!",
        message:  "Error: <%= error.message %>",
        sound:    "Beep"
    })(err);

    this.emit('end');
}

function endMes() {
    console.log('end');
    this.emit('end');
}

module.exports = { onError, endMes };