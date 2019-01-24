var app = new Vue({
    el: '#app',
    data: {
        list1: [
                {
                text: 'Дело1.1'
                },
                {
                text: 'Дело1.2'
                },
                {
                text: 'Дело1.3'
                },
                {
                text: 'Дело1.4'
                },
                {
                text: 'Дело1.5'
                },
                {
                text: 'Дело1.6'
                }
                ],

        list2: [
                {
                    text: 'Дело2.1'
                },
                {
                    text: 'Дело2.2'
                },
                {
                    text: 'Дело2.3'
                },
                {
                    text: 'Дело2.4'
                },
                {
                    text: 'Дело2.5'
                },
                {
                    text: 'Дело2.6'
                }
                ]
    },
    methods: {
        transfer1(list){
            return this.list.pop(item);
        },
        transfer2(){}
    }

  })