const pengaduanModel = require('../models/pengaduan-model')

exports.addDataAduan = async(req, res) => {
    try {
        const data = {
            npa: req.body.npa,
            nama: req.body.nama,
            alamat: req.body.alamat,
            noRumah: req.body.noRumah,
            email: req.body.email,
            noHP: req.body.noHP,
            cabang: req.body.cabang,
            jenisAduan: req.body.jenisAduan,
            detailAduan: req.body.detailAduan
        }

        const newAduan = await pengaduanModel(data)
        await newAduan.save()

        res.status(201).json({ status: 'Success', message: 'Pengaduan Berhasil Ditambahkan.'})
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}