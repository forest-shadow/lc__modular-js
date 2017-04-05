let stats = (function(){
    let people = 0;

    // cache DOM
    let $stats = $('#statsModule');
    let template = $('#stats-template').html();

    // bind events
    events.on('peopleChanged', setPeople);

    render();

    function render() {
        $stats.html(Mustache.render(template, {people: people}));
    }

    function setPeople(newPeople) {
        people = newPeople;
        render();
    }

    function destroy() {
        $stats.remove();
        events.off('peopleChanged', setPeople);
    }

    return {
        destroy: destroy
    }
})();