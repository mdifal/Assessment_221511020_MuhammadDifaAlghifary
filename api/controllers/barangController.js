const {mainModel} = require('../common/models');
const Barang = new mainModel("Barang");

const barangController = {
  // Menampilkan semua data barang
  getAllBarang: async (req, res) => {
    try {
      const allBarang = await Barang.getAll();
      return res.status(200).json(allBarang);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Menampilkan data barang berdasarkan KodeBarang
  getBarangByKode: async (req, res) => {
    const { KodeBarang } = req.params;
    try {
      const barang = await Barang.getAllWhere({
        where: { KodeBarang },
      });

      if (barang) {
        return res.status(200).json(barang);
      } else {
        return res.status(404).json({ error: 'Barang not found' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  addBarang: async (req, res) => {
    const { KodeBarang, NamaBarang, Satuan, HargaSatuan, Stok } = req.body;
    try {
      // Pastikan data yang diperlukan telah disediakan
      if (!KodeBarang || !NamaBarang || !Satuan || !HargaSatuan || !Stok) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Cek apakah KodeBarang sudah digunakan
      const existingBarang = await Barang.getAllWhere({ where: { KodeBarang } });
      if (existingBarang.length > 0) {
        return res.status(400).json({ error: 'KodeBarang already exists' });
      }

      // Tambahkan data barang ke dalam database
      const newBarang = await Barang.post({
        KodeBarang,
        NamaBarang,
        Satuan,
        HargaSatuan,
        Stok,
      });

      return res.status(201).json(newBarang);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  editBarang: async (req, res) => {
    const { KodeBarang } = req.params; // Menggunakan KodeBarang dari parameter rute
    const { NamaBarang, Satuan, HargaSatuan, Stok } = req.body;

    try {
      // Pastikan data yang diperlukan telah disediakan
      if (!NamaBarang || !Satuan || !HargaSatuan || !Stok) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Cek apakah KodeBarang yang diminta ada dalam database
      const existingBarang = await Barang.getAllWhere({ where: { KodeBarang } });

      if (existingBarang.length === 0) {
        return res.status(404).json({ error: 'Barang not found' });
      }

      // Perbarui data barang di dalam database
      const updatedBarang = await Barang.patch(
        {
          NamaBarang,
          Satuan,
          HargaSatuan,
          Stok,
        },
        { KodeBarang } // Menggunakan KodeBarang sebagai kondisi WHERE
      );

      return res.status(200).json(updatedBarang);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  deleteBarang: async (req, res) => {
    const { KodeBarang } = req.params;

    try {
      // Cek apakah KodeBarang yang diminta ada dalam database
      const existingBarang = await Barang.getAllWhere({ where: { KodeBarang } });

      if (existingBarang.length === 0) {
        return res.status(404).json({ error: 'Barang not found' });
      }

      // Hapus data barang dari database
      await Barang.delete({ KodeBarang });

      return res.status(204).end(); // Respon tanpa konten, karena data sudah dihapus
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },


  
};

module.exports = barangController;
