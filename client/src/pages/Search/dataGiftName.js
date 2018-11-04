export function giftNameStock() {
    return [
      { abbr: 'Beef', name: 'Beef' },
      { abbr: 'Chicken', name: 'Chicken' },
      { abbr: 'Hamburger', name: 'Hamburger' },
      { abbr: 'Kebab', name: 'Kebab' },
      { abbr: 'Noodle', name: 'Noodle' },
      { abbr: 'Rice', name: 'Rice' },
      { abbr: 'Salad', name: 'Salad' },
      { abbr: 'Spaghetti', name: 'Spaghetti' },
      { abbr: 'Women Shoes', name: 'Women Shoes' },
      { abbr: 'Men Shoes', name: 'Men Shoes' },
      { abbr: 'Baby Shoes', name: 'Baby Shoes' },
      { abbr: 'T-shirt', name: 'T-shirt' },
      { abbr: 'Jeans', name: 'Jeans' },
      { abbr: 'Hat/ Cap', name: 'Hat/ Cap' },
      { abbr: 'Watches', name: 'Watches' },
      { abbr: 'Shawl', name: 'Shawl' },
      { abbr: 'Trousers', name: 'Trousers' },
      { abbr: 'Pants', name: 'Pants' },
      { abbr: 'Sandals', name: 'Sandals' },
      { abbr: 'Boots', name: 'Boots' },
      { abbr: 'Scarf', name: 'Scarf' },
      { abbr: 'Suit', name: 'Suit' },
      { abbr: 'Hoodie', name: 'Hoodie' },
      { abbr: 'Sunglass', name: 'Sunglass' },
      { abbr: 'Mobile phone', name: 'Mobile phone' },
      { abbr: 'Fish', name: 'Fish' },
      { abbr: 'Shrimp', name: 'Shrimp' },
      { abbr: 'Pasta', name: 'Pasta' }      

    ];
  }

  export function matchGiftName(state, value) {
    return (
      state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }