const { mainModel } = require('../common/models');

const Kasir = new mainModel("Kasir");

const kasirController = {
  // Menampilkan semua data kasir
  getAllKasir: async (req, res) => {
    try {
      const allKasir = await Kasir.getAll();
      return res.status(200).json(allKasir);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Menampilkan data kasir berdasarkan KodeKasir
  getKasirByKode: async (req, res) => {
    const { KodeKasir } = req.params;
    try {
      const kasir = await Kasir.getAllWhere({
        where: { KodeKasir },
      });

      if (kasir) {
        return res.status(200).json(kasir);
      } else {
        return res.status  (404).json({ error: 'Kasir not found' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = kasirController;
