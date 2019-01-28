var app = new Vue({
    el: '#app',
    data: {
        lists: [
                    [
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

                    [
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
                ]
    },
    methods: {
        transfer(listA,listB){
            if(listA.length==0||listB.length==0){ console.log(listA); return}
            if(listA==this.lists[0]){
                listB = this.lists[1];
                console.log(listB);
                let lastTask=listA[listA.length-1];
                return listB.unshift(lastTask),listA.pop();
            }
            if(listA==this.lists[1]){
                listB = this.lists[0];
                console.log(listB);
                let lastTask=listA[listA.length-1];
                return listB.unshift(lastTask),listA.pop();
            }
        }
        
    }

  })