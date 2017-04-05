let stats = (function(){
    let people = 0;

    // cache DOM
    let $stats = $('#statsModule');
    let template = $('#stats-template').html();

    pubsub.subscribe('peopleChanged', setPeople)

    _render();

    function _render() {
        $stats.html(Mustache.render(template, {people: people}));
    }

    function setPeople(newPeople) {
        people = newPeople;
        _render();
    }

    function destroy() {
        $stats.remove();
        events.off('peopleChanged', setPeople);
    }

    return {
        setPeople: setPeople
    }
})();