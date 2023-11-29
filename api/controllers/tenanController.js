const { mainModel } = require('../common/models');

const Tenan = new mainModel("Tenan");

const tenanController = {
  // Menampilkan semua data tenan
  getAllTenan: async (req, res) => {
    try {
      const allTenan = await Tenan.getAll();
      return res.status(200).json(allTenan);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Menampilkan data tenan berdasarkan KodeTenan
  getTenanByKode: async (req, res) => {
    const { KodeTenan } = req.params;
    try {
      const tenan = await Tenan.getAllWhere({
        where: { KodeTenan },
      });

      if (tenan) {
        return res.status(200).json(tenan);
      } else {
        return res.status(404).json({ error: 'Tenan not found' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = tenanController;
