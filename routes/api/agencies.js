const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Agency Model
const Agency = require("../../models/Agency");

// @route   GET api/ageincies
// @desc    Fetch All agencies
// @access  Private

router.get("/", (req, res) => {
  Agency.find({})

    .sort({ register_date: -1 })

    .then((agencies) => res.json(agencies))
    .catch((err) => console.log(err));
});

// @route   POST api/agencies
// @desc    Post a new Agency
// @access  Private

router.post("/", auth, (req, res) => {
  const newAgency = new Agency({
    name: req.body.name,
    address: req.body.address,
    wilaya: req.body.wilaya,
    commune: req.body.commune,
    phone: req.body.phone,
  });
  newAgency
    .save()
    .then((agency) => res.status(200).json(agency))
    .catch((err) => console.log(err));
});

// @route   PUT api/agencies
// @desc    Edit an Agency
// @access  PRIVATE

router.put("/update/:id", auth, (req, res) => {
  Agency.findById(req.params.id)
    .then((agency) => {
      agency.name = req.body.name;
      agency.address = req.body.address;
      agency.wilaya = req.body.wilaya;
      agency.commune = req.body.commune;
      agency.phone = req.body.phone;

      agency
        .save()
        .then(() => res.json("Agency updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// @route   DELETE api/agencies/:id
// @desc    Delete an Agency
// @access  Private

router.delete("/:id", auth, (req, res) => {
  Agency.findById(req.params.id)
    .then((agency) => agency.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(400).json({ success: false }));
});

module.exports = router;
