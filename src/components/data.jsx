  // const topDesserts = data.map((dessert) => {
  //   return {
  //     content: `${dessert.title} - ${dessert.description}`,
  //     price: dessert.price,
  //     id: dessert.id,
  //     image: dessert.image,
  //     alt: dessert.alt,
  //   }
  // })

  // const rend = data.map((dessert) => {
  //   return (
  //     <ListItem
  //       key={dessert.id}
  //       title={dessert.title}
  //       description={dessert.description}
  //       alt={dessert.alt}
  //       image={dessert.image}
  //     />
  //   )
  // })
  // console.log(rend)

  // const desserts = [
  //   {
  //     name: 'Chocolate Cake',
  //     calories: 400,
  //     createdAt: '2022-09-01',
  //   },
  //   {
  //     name: 'Ice Cream',
  //     calories: 200,
  //     createdAt: '2022-01-02',
  //   },
  //   {
  //     name: 'Tiramisu',
  //     calories: 300,
  //     createdAt: '2021-10-03',
  //   },
  //   {
  //     name: 'Cheesecake',
  //     calories: 600,
  //     createdAt: '2022-01-04',
  //   },
  // ]

//   const desserts = [
//     {
//       title: 'Chocolate Cake',
//       description: 'Chocolate cake is a cake flavored with melted chocolate',
//       calories: 500,
//     }
//   ];
  
//   const newDesserts = desserts.map((dessert) => {
//     return {
//       title: dessert.title.toUpperCase(),
//       // dessert overrides the title property in this order
//       ...dessert,
//       kCal: dessert.calories / 1000,
//     };
//   });

//   console.log(newDesserts)
  // const sorted = (a, b) => a.calories - b.calories

  // const newDesserts = desserts.filter((dessert) => dessert.calories <= 500)
  // newDesserts.sort(sorted)
  // const dessertItem = newDesserts.map((element) => {
  //   return (
  //     <ListItem
  //       key={element.createdAt}
  //       title={element.name}
  //       calories={element.calories}
  //     />
  //   )
  // })
  // console.log(newDesserts)

  // const data2 = ["perro", "gato", "pepito"]
  // const compareNumbers = (a, b) => a.pos - b.pos;

  // const data3 = [...data2]
  // const data4 = [{
  //   cosito: "Pepito",
  //   pos: 111,
  // },{
  //   cosito: "Marquitos",
  //   pos: 20,
  // },{
  //   cosito: "Pepito",
  //   pos: 35,
  // }]

  // data4.sort(compareNumbers)

  // const data5 = data4.filter(element => element.pos <= 200)
  // console.log(data5)

  // console.log(data4)

  // data3.splice(1,2,"manzana","perritoooo")
  // const result = data2.slice(1,3)
  // console.log(result);
  // console.log(result);
  // console.log(data3);
  // console.log(data2);

//   const data = [
    //   {
    //     id: '1',
    //     title: 'Tiramisu',
    //     description: 'The best tiramisu in town',
    //     image: 'https://picsum.photos/200/300/?random',
    //     price: '$4.50',
    //     alt: 'Tiramisu',
    //   },
    //   {
    //     id: '2',
    //     title: 'Popcorn',
    //     description: 'The best popcorn in town',
    //     image: 'https://picsum.photos/200/300/?random',
    //     price: '$2.60',
    //     alt: 'Popcorn',
    //   },
    //   {
    //     id: '3',
    //     title: 'Ceviche',
    //     description: 'The best ceviche in town',
    //     image: 'https://picsum.photos/200/300/?random',
    //     price: '$8.00',
    //     alt: 'Ceviche',
    //   },
    // ]