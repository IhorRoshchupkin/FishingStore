const VariantService = require("../services/variantServices");

exports.getAllVariants = async (req, res) => {
  try {
    const variants = await VariantService.getAllVariants();
    res.json(variants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVariantById = async (req, res) => {
  try {
    const variant = await VariantService.getVariantById(req.params.id);
    if (!variant) {
      return res.status(404).json({ error: "Variant not found" });
    }
    res.json(variant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createVariant = async (req, res) => {
  try {
    const newVariant = await VariantService.createVariant(req.body);
    res.status(201).json(newVariant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateVariant = async (req, res) => {
  try {
    const updatedVariant = await VariantService.updateVariant(
      req.params.id,
      req.body
    );
    res.json(updatedVariant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteVariant = async (req, res) => {
  try {
    await VariantService.deleteVariant(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
