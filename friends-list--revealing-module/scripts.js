let people = (function () {
    let people = ['Will', 'Laura'];

    // cache DOM
    let $el = $('#peopleModule');
    let $button = $el.find('button');
    let $input = $el.find('input');
    let $ul = $el.find('ul');
    let template = $el.find('#people-template').html();

    // bind events
    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', this.deletePerson);

    _render();

    function _render() {
        $ul.html(Mustache._render(template, {people: people}));
    };

    function addPerson(value) {
        let name = (typeof value === "string") ? value : $input.val();
        people.push(name);
        _render();
        $input.val('');
    }

    function deletePerson(e) {
        let i;
        if (typeof e === 'number') {
            i = e;
        } else {
            let $remove = $(e.target).closest('li');
            i = $ul.find('li').index($remove);
        }

        people.splice(i, 1);
        _render();
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    }
})();