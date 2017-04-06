(function () {
    let people = {
        people: ['Will', 'Laura'],
        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function () {
            this.$el = $('#peopleModule');
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
            this.template = this.$el.find('#people-template').html();
        },
        bindEvents: function () {
          this.$button.on('click', this.addPerson.bind(this));
          this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
        },
        render: function() {
            let data = {
                people: this.people
            };
            this.$ul.html( Mustache.render( this.template, data ) );
        },
        addPerson: function() {
            this.people.push( this.$input.val() );
            this.render();
            this.$input.val('');
        },
        deletePerson: function (e) {
            let $remove = $(e.target).closest('li');
            let i = this.$ul.find('li').index($remove);

            this.people.splice(i,1);
            this.render();
        }
    };

    people.init();

})();