import Route from '@ember/routing/route';

export default Route.extend({
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
  }];
}
});
