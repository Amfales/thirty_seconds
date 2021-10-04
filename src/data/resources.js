class Resource {
  constructor(name, amount=0) {
    this.name = name;
    this.amount = amount;
    this.id = id_gen();
  }
}

function id_gen() {
  if (typeof id_gen.id == 'undefined') {
    id_gen.id = 0;
  }

  return id_gen.id++;
}


export default Resource;