if(Items.find().count() === 0) {
    Items.insert({
      name: "Foo Bar",
      age: 21
    });
}