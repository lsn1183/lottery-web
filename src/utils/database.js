async function createAnimal(animal) {
  const res = await fetch("http://localhost:3001/open/update/lottery", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(animal),
  });

  const data = await res.json();
  return data;
}

const create = () => {
  let newArr = [];
  for (let index = 0; index < 295; index++) {
    const obj = {
      periods: "",
      particular: "",
      ordinary1: "",
      ordinary2: "",
      ordinary3: "",
      ordinary4: "",
      ordinary5: "",
      ordinary6: "",
    };
    obj.periods = index + 1;
    obj.particular = Math.floor(Math.random() * 49) + 1;
    obj.ordinary1 = Math.floor(Math.random() * 49) + 1;
    obj.ordinary2 = Math.floor(Math.random() * 49) + 1;
    obj.ordinary3 = Math.floor(Math.random() * 49) + 1;
    obj.ordinary4 = Math.floor(Math.random() * 49) + 1;
    obj.ordinary5 = Math.floor(Math.random() * 49) + 1;
    obj.ordinary6 = Math.floor(Math.random() * 49) + 1;
    newArr.push(obj);
  }

  console.log(JSON.stringify(newArr), "--arr");
  return newArr;
};

const database = create();

const res = await createAnimal(database);
