async function handler(_, res) {
  return res.status(200).json([
    {
      id: '01',
      name: 'Planta',
      price: 400,
      stock: 2,
      image: 'media/planta.jpeg',
    },

    {
      id: '02',
      name: 'Maceta',
      price: 600,
      stock: 2,
      image: 'media/maceta.jpeg',
    },

    {
      id: '03',
      name: 'Kokedama tradescantia',
      price: 1000,
      stock: 2,
      image: 'media/Tradescantia.jpeg',
    },

    {
      id: '04',
      name: 'Kokedama Nolina',
      price: 2000,
      stock: 2,
      image: 'media/Nolina.jpeg',
    },

    {
      id: '05',
      name: 'Kokedama Rubra',
      price: 1550,
      stock: 2,
      image: 'media/Rubra.jpeg',
    },

    {
      id: '06',
      name: 'Kokedama Lazo de amor',
      price: 700,
      stock: 2,
      image: 'media/Lazodeamor.jpeg',
    },

    {
      id: '07',
      name: 'Kokedama Ficus',
      price: 1700,
      stock: 2,
      image: 'media/Ficus.jpeg',
    },

    {
      id: '08',
      name: 'Kokedama combo',
      price: 3550,
      stock: 2,
      image: 'media/Combo.jpeg',
    },

    {
      id: '09',
      name: 'Kokedama Singonio rosado',
      price: 1550,
      stock: 2,
      image: 'media/Singoniorosado.jpeg',
    },

    {
      id: '10',
      name: 'Kokedama Peperomia',
      price: 1100,
      stock: 2,
      image: 'media/Peperomia.jpeg',
    },

    {
      id: '11',
      name: 'Plato de arcilla',
      price: 950,
      stock: 2,
      image: 'media/Platodearcilla.jpeg',
    },
  ]);
}
