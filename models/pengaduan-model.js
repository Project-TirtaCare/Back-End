const mongoose = require('mongoose');

const pengaduanSchema = new mongoose.Schema({
    npa: {
      type: String,
      required: true
    },
    nama: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    noRumah: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true
    },
    noHP: {
      type: String,
      required: true,
    },
    cabang: {
        type: String,
        required: true
    },
    jenisAduan: {
        type: String,
        required: true
    },
    detailAduan: {
        type: String,
        required: true
    },
    status: {
      type: String,
      default: 'Diajukan',
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = mongoose.model('Pengaduan', pengaduanSchema)