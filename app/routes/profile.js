import Route from '@ember/routing/route';

var indexNum = 0;

export default Route.extend({
  actions: {

    insertIntoStore: function(list) {
      list.listItems.forEach((listItem) => {
        var store = this.get('store');
        store.createRecord('list-item', {
          itemAmt: listItem.itemAmt,
          itemName: listItem.itemName,
          id: indexNum
        });
        indexNum++;
      })
      this.transitionTo('grocery');
    }
  },

  model() {
    return [{
        "userName": "Me",
        "id": '1',
        "listItems": [{
            "itemAmt": 1,
            "itemName": "Milk",
            "itemDesc": "Comes from a cow"
          },
          {
            "itemAmt": 2,
            "itemName": "Eggs",
            "itemDesc": "Comes from a chicken"
          }
        ]
      },
      {
        "userName": "Me",
        "id": '1',
        "listItems": [{
            "itemAmt": 3,
            "itemName": "Milk",
            "itemDesc": "Comes from a cow"
          },
          {
            "itemAmt": 4,
            "itemName": "Eggs",
            "itemDesc": "Comes from a chicken"
          }
        ]
      },
      {
        "userName": "Me",
        "id": '1',
        "listItems": [{
            "itemAmt": 5,
            "itemName": "Milk",
            "itemDesc": "Comes from a cow"
          },
          {
            "itemAmt": 6,
            "itemName": "Eggs",
            "itemDesc": "Comes from a chicken"
          }
        ]
      },
      {
        "userName": "Me",
        "id": '1',
        "listItems": [{
            "itemAmt": 7,
            "itemName": "Milk",
            "itemDesc": "Comes from a cow"
          },
          {
            "itemAmt": 8,
            "itemName": "Eggs",
            "itemDesc": "Comes from a chicken"
          }
        ]
      },
      {
        "userName": "Me",
        "id": '1',
        "listItems": [{
            "itemAmt": 9,
            "itemName": "Milk",
            "itemDesc": "Comes from a cow"
          },
          {
            "itemAmt": 10,
            "itemName": "Eggs",
            "itemDesc": "Comes from a chicken"
          }
        ]
      }
    ];
  }
});
